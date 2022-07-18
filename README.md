## Description

WebScraper to check if the price of the chosen product is below the desired price.
When the price is below the desired price, a SMS will be sent to your phone with the product information, then the application will be stopped.

Main Technologies: [NodeJS](https://nodejs.dev) and [Cheerio](https://cheerio.js.org) to get website data, and [Twilio](https://www.twilio.com/pt-br/) as SMS service

## Installation

```bash
$ npm install
```
## Set Enviroment

```bash
$ cp .env.example .env
```
Set your [Twilio](https://www.twilio.com/pt-br/) information in `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` and `TWILIO_PHONE_NUMBER`
Set your phone number at `MY_PHONE_NUMBER`


## Set Product and price information

Change the product and price information in the variables `desiredPrice` and `url`

## Running the app

```bash

$ node scraper.js

```
