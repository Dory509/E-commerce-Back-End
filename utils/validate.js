/**
 * Validate if a value is a positive integer.
 * @param {number} value
 * @returns {boolean}
 */
const isPositiveInteger = (value) => {
    return Number.isInteger(value) && value > 0;
  };
  
  /**
   * Validate if a value is a positive decimal.
   * @param {number} value
   * @returns {boolean}
   */
  const isPositiveDecimal = (value) => {
    return !isNaN(value) && parseFloat(value) > 0;
  };
  
  /**
   * Validate if a string is not empty.
   * @param {string} value
   * @returns {boolean}
   */
  const isNonEmptyString = (value) => {
    return typeof value === 'string' && value.trim().length > 0;
  };
  
  /**
   * Validate input data for creating or updating a Product.
   * @param {object} data
   * @returns {boolean}
   */
  const validateProductData = (data) => {
    const { product_name, price, stock, category_id } = data;
  
    if (!isNonEmptyString(product_name)) {
      console.error('Product name is invalid.');
      return false;
    }
  
    if (!isPositiveDecimal(price)) {
      console.error('Price must be a positive number.');
      return false;
    }
  
    if (!isPositiveInteger(stock)) {
      console.error('Stock must be a positive integer.');
      return false;
    }
  
    if (!isPositiveInteger(category_id)) {
      console.error('Category ID must be a positive integer.');
      return false;
    }
  
    return true;
  };
  
  module.exports = {
    isPositiveInteger,
    isPositiveDecimal,
    isNonEmptyString,
    validateProductData,
  };