import SharedModule from 'SharedModule';

export default class SellingModule {

    constructor() {}

    addProductToFinalSale(addProductForm, callbackFunc) {

        $.ajax({
            url: '/Home/AddProductToSale',
            type: "POST",
            data: addProductForm.serialize(),
            success: function (data) {
                callbackFunc(data);
            },
            error: function (response) { console.log(response) }
        });
    }

    removeItemFromSale(productId, callbackFunc) {

        $.ajax({
            url: '/Home/RemoveProductFromSale',
            type: "DELETE",
            data: { productId: productId },
            success: function (data) {
                callbackFunc(data);
            },
            error: function (response) { console.log(response) }
        });
    }
};