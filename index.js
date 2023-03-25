import React, { useEffect, useState } from "react";

const YotpoWidget = ({
  productId,
  productName,
  productUrl,
  productImageUrl,
  productPrice,
  productCurrency,
  apiKey,
}) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setError("Missing productId");
      return;
    }
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `//staticw2.yotpo.com/${apiKey}/widget.js`;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, [productId]);
  if (typeof window['yotpo'] !== 'undefined') {
    window['yotpo'].initWidgets();
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      className="yotpo yotpo-main-widget"
      data-product-id={productId}
      data-id={productId}
      data-sku={productId}
      data-product-sku={productId}
      data-name={productName}
      data-url={productUrl}
      data-image-url={productImageUrl}
      data-price={productPrice}
      data-currency={productCurrency}
    ></div>
  );
};

export const YotpoProductReviewStates = ({ productId, apiKey }) => {
  const [reviewsCount, setReviewsCount] = useState({
    average_score: 0,
    organic_average_score: 0,
    total_organic_reviews: 0,
    total_review: 0,
  });

  useEffect(() => {
    fetch(
      `https://api.yotpo.com/v1/widget/${apiKey}/products/${productId}/bottomline`
    )
      .then((response) => response.json())
      .then((data) => {
        setReviewsCount(data.response.bottomline);
      })
      .catch((error) => console.error(error));
  }, [productId, apiKey]);

  return reviewsCount;
};

export default YotpoWidget;
