const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;

const client = require('twilio')(accountSid, authToken);

const url =
    `https://www.amazon.com.br/Notebook-Legion-R7-5800H-RTX3050-82QJ0000BR/dp/B09PZGR4MR/ref=sr_1_51?` +
    `__mk_pt_BR=ÅMÅŽÕÑ&crid=6F3TPYLDRV93&keywords=notebook&qid=1658101968&sprefix=notebook%2Caps%2C233&sr=8-51&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147`;


const handle = setInterval(scrape, 100000);

const product = { name: "", price: "", link: "" };

async function scrape() {
    const encoded = encodeURI(url)
    const { data } = await axios.get(encoded).catch(err => console.log(err));

    const cheer = cheerio.load(data);
    const item = cheer("div#dp-container");

    product.name = cheer(item).find("h1 span#productTitle").text();
    product.link = url;

    const price = cheer(item).find("span .a-price-whole")
        .first().text().replace(/[,.]/g, "");

    const priceNum = parseFloat(price);
    product.price = priceNum;

    if (priceNum < 8000) {
        client.messages.create({
            body: `Price of ${product.name} just went to ${price}. Get it on ${product.link}`,
            from: twilioPhoneNumber,
            to: myPhoneNumber
        })
            .then((message) => {
                console.log(message);
                clearInterval(handle);
            })
    }
}

scrape()