import SharedModule from 'SharedModule';
import SellingModule from 'SellingModule';

(function () {
    var sharedModule = new SharedModule();
    var sellingModule = new SellingModule();

    var $frmAddProduct = $('#frmAddProduct');
    var $btnAddProductToSale = $('#btnAddProduct');
    var $txtProductName = $('#txtProductName');
    var $frmFinalSale = $('#frmFinalSale');
    var $deleteLinks = $('.delete-link');
    var $btnConfirmSaleModal = $('#btnConfirmSaleModal');

    $btnAddProductToSale.on('click', function (e) {
        e.preventDefault();
        sellingModule.addProductToFinalSale($frmAddProduct, function (response) {
            $frmFinalSale.html(response);
            sharedModule.init();
            $frmAddProduct[0].reset();
            $txtProductName.focus();
        });

        return false;
    });

    $btnConfirmSaleModal.on('click', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/Home/ConfirmSale',
            type: "POST",
            data: $frmFinalSale.serialize(),
            success: function (data) {
                console.log(data);
                $frmFinalSale.html(data);
            },
            error: function (response) { console.log(response) }
        });

    })

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