simpleCart({
    // array representing the format and columns of the cart,
    // see the cart columns documentation
    cartColumns: [
        { attr: "name", label: "Name"},
        { view: "currency", attr: "price", label: "Price"},
        { view: "decrement", label: false},
        { attr: "quantity", label: "Qty"},
        { view: "increment", label: false},
        { view: "currency", attr: "total", label: "SubTotal" },
        { view: "remove", text: "Remove", label: false}
    ],
    // "div" or "table" - builds the cart as a 
    // table or collection of divs
    cartStyle: "div", 
    // how simpleCart should checkout, see the 
    // checkout reference for more info 
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

    // Configure EURO as currency
    simpleCart.currency({
      code: "EUR",
      name: "Euro",
      symbol: " &euro; ",
      delimiter: ".",
      decimal: ",",
      after: false,
      accuracy: 2
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
