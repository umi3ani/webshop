$(function() {
	simpleCart({

	    // array representing the format and columns of the cart, see
	    // the cart columns documentation
	    cartColumns: [
	        { attr: "name" , label: "Naam" },
	        { attr: "price" , label: "Prijs", view: 'valuta' },
	        { view: "decrement" , label: false },
	        { attr: "quantity" , label: "Aantal" },
	        { view: "increment" , label: false },
	        { attr: "total" , label: "SubTotaal", view: 'valuta' },
	        { view: "remove" , text: "Verwijder" , label: false }
	    ],

	    // "div" or "table" - builds the cart as a table or collection of divs
	    cartStyle: "div",

	    // how simpleCart should checkout, see the checkout reference for more info
	    checkout: {
        type: "SendForm" ,
        url: "https://studiogroenrijk.github.io/webshop/test.htm" ,
        method: "GET" ,
        success: "success.html" ,
        cancel: "cancel.html" ,
        extra_data: {
        customInfo1: "some custom information",
        customInfo2: "12321321"
        }
    },

	    // set the currency, see the currency reference for more info
	    currency: "EUR",

	    // collection of arbitrary data you may want to store with the cart,
	    // such as customer info
	    data: {},

	    // set the cart langauge (may be used for checkout)
	    language: "dutch-nl",

	    // array of item fields that will not be sent to checkout
	    excludeFromCheckout: [
	    	'qty',
	    	'thumb'
	    ],

	    // custom function to add shipping cost
	    shippingCustom: 0,

	    // flat rate shipping option
	    shippingFlatRate: 0,

	    // added shipping based on this value multiplied by the cart quantity
	    shippingQuantityRate: 0,

	    // added shipping based on this value multiplied by the cart subtotal
	    shippingTotalRate: 0,

	    // tax rate applied to cart subtotal
	    taxRate: 0,

	    // true if tax should be applied to shipping
	    taxShipping: false,

	    // event callbacks
	    beforeAdd               	: null,
	    afterAdd                	: null,
	    load                    	: null,
	    beforeSave              	: null,
	    afterSave               	: null,
	    update                  	: null,
	    ready                   	: null,
	    checkoutSuccess             : null,
	    checkoutFail                : null,
	    beforeCheckout              : null

	});

simpleCart.shipping(function(){
    if( simpleCart.total() < 10 ){
         return 4;
    }
    else if( simpleCart.total() > 10 ){
         return 0;
    }
    else {
         return 30; // amount for > 500
    }
});
	simpleStore.init({

		// brand can be text or image URL
		brand : "Webshop",

		// numder of products per row (accepts 1, 2 or 3)
		numColumns : 3,

		// Google Spreadsheet ID
		spreadsheetID : "1QUFpIvkuZKq4gTJFLAnX47v7j0QmKZREbKRj2tpj5cs"

	});

});
