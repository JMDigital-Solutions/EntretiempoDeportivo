import SharedModule from 'SharedModule';
import SellingModule from 'SellingModule';

(function () {
    var sharedModule = new SharedModule();
    var sellingModule = new SellingModule();

    var $frmAddProduct = $('#frmAddProduct');
    var $btnAddProduct = $('#btnAddProduct');
    var $txtProductName = $('#txtProductName');
    var $frmFinalSale = $('#frmFinalSale');
    var $deleteLinks = $('.delete-link');
    var $btnConfirmSaleModal = $('#btnConfirmSaleModal');

    $frmAddProduct.on('submit', function (e) {
        e.preventDefault();

        sellingModule.addProductToFinalSale($frmAddProduct, function (response) {
            $frmFinalSale.html(response);
            sharedModule.init();
            $frmAddProduct[0].reset();
            $txtProductName.focus();
        });

        return false;
    });

    window.removeItemFromSale = (productId) => {
        sellingModule.removeItemFromSale(productId, function (response) {
            $frmFinalSale.html(response);
            sharedModule.init();
            $txtProductName.focus();
        })

        return false;
    }

    window.openConfirmSaleModal = (total) => {
        var $txtTotalPrice = $('#txtTotalPrice');

        $('.modal').modal({
            dismissible: false,
            ready: function (modal, trigger) {
                $txtTotalPrice.val(total);
                $txtTotalPrice.focus();
            },
            complete: function () {
                $txtProductName.focus();
            }
        })
    }

    return this;
})();