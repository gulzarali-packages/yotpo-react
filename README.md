# Yotpo React
Wrapper for the Yotpo widget to collect the product reviews in reactjs based website.

## Installation
```
npm install yotpo-react
```

## Usage
import the yotpo react widget as:
```
import YotpoWidget from 'yotpo-react';

//Load the widget anywhere in your components
<YotpoWidget
    productId='PRODUCT_ID'
    productName='PRODUCT_TITLE'
    productUrl='PRODUCT_URL'
    productImageUrl='PRODUCT_IMAGE_SRC'
    productPrice='PRODUCT_PRICE'
    apiKey='YOUR_YOTPO_API_KEY'
/>
```
## Getting the product reviews states
Product specific states can be fetched through YotpoProductReviewStates as:
```
import {YotpoProductReviewStates} from 'yotpo-react';

const productReviewStates = YotpoProductReviewStates({'PRODUCT_ID','YOUR_YOTPO_API_KEY'});
```
| Attribute       | Description     |
| --------------- | --------------- |
| productReviewStates.total_reviews | Total product reviews count |
| productReviewStates.average_score | Everage review score|
| productReviewStates.total_organic_reviews| Total organic reviews count |
| productReviewStates.organic_average_score | Everage organic review score |
