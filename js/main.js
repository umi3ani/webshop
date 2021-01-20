simpleCart({
    checkout: {
        type: "SendForm" ,
        url: "https://studiogroenrijk.github.io/webshop/verzenden/" ,
        method: "GET" ,
        success: "success.html" ,
        cancel: "cancel.html" ,
        extra_data: {
        customInfo1: "some custom information",
        customInfo2: "12321321"
        }
    },
    // set the currency, see the currency 
    // reference for more info
    currency: "EUR",
    // collection of arbitrary data you may want to store 
    // with the cart, such as customer info
    data: {},
    // set the cart langauge 
    // (may be used for checkout)
    language: "english-us",
    // array of item fields that will not be 
    // sent to checkout
    excludeFromCheckout: [],
    // custom function to add shipping cost
    shippingCustom: null,
    // flat rate shipping option
    shippingFlatRate: 0,
    // added shipping based on this value 
    // multiplied by the cart quantity
    shippingQuantityRate: 0,
    // added shipping based on this value 
    // multiplied by the cart subtotal
    shippingTotalRate: 0,
    // tax rate applied to cart subtotal
    taxRate: 0,
    // true if tax should be applied to shipping
    taxShipping: false,
    // event callbacks 
    beforeAdd            : null,
    afterAdd            : null,
    load                : null,
    beforeSave        : null,
    afterSave            : null,
    update            : null,
    ready            : null,
    checkoutSuccess    : null,
    checkoutFail        : null,
    beforeCheckout        : null,
    beforeRemove           : null
});

simpleCart({
  shippingCustom: function () { 
    if (simpleCart.quantity() > 50) {
      return 0;
    } else if (simpleCart.quantity() > 20) {
      return 10;
    } else {
      return 20;
    }
  }
});

//* Add shopping cart dropdown in header
jQuery(document).ready(function () {
  $('.showCart').on('click', function () {
    $('#cartPopover').slideToggle('fast');
    $('.showCart span.dropdown').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
  })
});

//* Define spreadsheet URL (make sure you add the #gid=0 for the sheet you want to use)
var googleSheetURI = 'https://docs.google.com/spreadsheets/d/1SNlpqTZ4HG3AsVSIliZevohJaFDGAIak9qaiuUggfDQ/edit#gid=0';

//* Compile the Handlebars template for HR leaders
var HRTemplate = Handlebars.compile($('#hr-template').html());

//* Load products from spreadsheet
$('#products').sheetrock({
  url: googleSheetURI,
  query: "select A,B,C,D,E",
  rowTemplate: HRTemplate
});
