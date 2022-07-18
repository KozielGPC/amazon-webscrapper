## Description

WebScraper to check if the price of the chosen product is below the desired price

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
