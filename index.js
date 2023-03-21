import React, { useEffect } from "react";

const YotpoWidget = ({
  productId,
  productName,
  productUrl,
  productImageUrl,
  productPrice,
  productCurrency,
  apiKey
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      `//staticw2.yotpo.com/${apiKey}/widget.js`;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []);

  return (
    <div
      className="yotpo yotpo-main-widget"
      data-id={productId}
      data-sku={productId}
      data-name={productName}
      data-url={productUrl}
      data-image-url={productImageUrl}
      data-price={productPrice}
      data-currency={productCurrency}
    ></div>
  );
};

export default YotpoWidget;
