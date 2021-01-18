//* Add PayPal Email
simpleCart({
        currency: "EUR"
        checkout: { 
        type: "SendForm" , 
        url: "http://example.com/your/custom/checkout/url" ,
        // http method for form, "POST" or "GET", default is "POST"
        method: "GET" , 
        // url to return to on successful checkout, default is null
        success: "success.html" , 
        // url to return to on cancelled checkout, default is null
        cancel: "cancel.html" ,
        // an option list of extra name/value pairs that can
        // be sent along with the checkout data
        extra_data: {
        storename: "Bob's cool plumbing store",
        cartid: "12321321"
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
