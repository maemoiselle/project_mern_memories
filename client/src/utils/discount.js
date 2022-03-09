
export const calculateDiscountPrice = (price, discount) => {
    const parsedPrice = parseFloat(price);
    const parsedDiscount = parseFloat(discount);
    const newPrice = parsedPrice - parsedDiscount;
    const discountPrice = newPrice.toFixed(2);

    return discountPrice;
  };

  export const calculateAmountSaved = (price, discountPrice) => {
    const parsedPrice = parseFloat(price);
    const amount = parsedPrice - discountPrice;
    const amountSaved = amount.toFixed(2);
    return amountSaved;
  }