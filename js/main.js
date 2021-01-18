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
    }
});

simpleCart.currency( "EUR" ); // set the currency to Euros

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
