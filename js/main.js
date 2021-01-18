    simpleCart({
      cartColumns: [
        {attr: "name", label: "Name"},
        {attr: "price", label: "Preis", view: 'currency'},
        {attr: "quantity", label: "Menge"},
        {attr: "total", label: "Summe", view: 'currency'},
        {view: "remove", text: "Remove", label: false}
      ],
      checkout: {
        type: "SendForm",
        url: "https://secure.fundraisingbox.com/app/simpleCartJs",
        extra_data: {
          hash: "PUT_YOUR_FORM_HASH_HERE" // <-- TODO
        }
      }
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
