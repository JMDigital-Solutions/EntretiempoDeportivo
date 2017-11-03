(function () {
    'use strict';

    var initMaterialControls = () => {
        $(".button-collapse").sideNav();
        $('select').material_select();
        $('.modal').modal();
    }

    $(document).ready(function () {
        initMaterialControls();
        var SellingScripts = {};
    })

})();

SellingScripts = (function () {

    var $frmAddProduct = $('#frmAddProduct');
    var $btnAddProductToSale = $('#btnAddProduct');
    var $txtProductName = $('#txtProductName');

    addProductToFinalSale = function (e) {
        e.preventDefault();

        $.ajax({
            url: '/Home/AddProductToSale',
            type: "POST",
            data: $frmAddProduct.serialize(),
            success: function (data) {
                $('#product-list').html(data);
                $frmAddProduct[0].reset();
                $txtProductName.focus();
            },
            error: function (response) { console.log(response) }
        });

        return false;
    }

    removeItemFromSale = function (productId) {
        
        $.ajax({
            url: '/Home/RemoveProductFromSale',
            type: "DELETE",
            data: { productId: productId },
            success: function (data) {
                $('#product-list').html(data);
                $txtProductName.focus();
            },
            error: function (response) { console.log(response) }
        });

        return false;
    }

    openConfirmSaleModal = function (total) {
        $txtTotalPrice = $('#txtTotalPrice');

        $('.modal').modal({
            dismissible: false,
            ready: function (modal, trigger) {
                $txtTotalPrice.val('$ ' + total);
                $txtTotalPrice.focus();
            }
        })
    }

    return this;
})();