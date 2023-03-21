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
