webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {﻿(function () {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[2]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9TY3JpcHRzL3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29udGVudC9zaXRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isd0NBQXdDO0FBQ3hDLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix3Q0FBd0M7QUFDeEMsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsQ0FBQyxJOzs7Ozs7O0FDckVELHlDIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyLvu78oZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHZhciBpbml0TWF0ZXJpYWxDb250cm9scyA9ICgpID0+IHtcclxuICAgICAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XHJcbiAgICAgICAgJCgnc2VsZWN0JykubWF0ZXJpYWxfc2VsZWN0KCk7XHJcbiAgICAgICAgJCgnLm1vZGFsJykubW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW5pdE1hdGVyaWFsQ29udHJvbHMoKTtcclxuICAgICAgICB2YXIgU2VsbGluZ1NjcmlwdHMgPSB7fTtcclxuICAgIH0pXHJcblxyXG59KSgpO1xyXG5cclxuU2VsbGluZ1NjcmlwdHMgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciAkZnJtQWRkUHJvZHVjdCA9ICQoJyNmcm1BZGRQcm9kdWN0Jyk7XHJcbiAgICB2YXIgJGJ0bkFkZFByb2R1Y3RUb1NhbGUgPSAkKCcjYnRuQWRkUHJvZHVjdCcpO1xyXG4gICAgdmFyICR0eHRQcm9kdWN0TmFtZSA9ICQoJyN0eHRQcm9kdWN0TmFtZScpO1xyXG5cclxuICAgIGFkZFByb2R1Y3RUb0ZpbmFsU2FsZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvSG9tZS9BZGRQcm9kdWN0VG9TYWxlJyxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6ICRmcm1BZGRQcm9kdWN0LnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdCcpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAkZnJtQWRkUHJvZHVjdFswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgJHR4dFByb2R1Y3ROYW1lLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHsgY29uc29sZS5sb2cocmVzcG9uc2UpIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW1Gcm9tU2FsZSA9IGZ1bmN0aW9uIChwcm9kdWN0SWQpIHtcclxuICAgICAgICBcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvSG9tZS9SZW1vdmVQcm9kdWN0RnJvbVNhbGUnLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHByb2R1Y3RJZDogcHJvZHVjdElkIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0JykuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICR0eHRQcm9kdWN0TmFtZS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7IGNvbnNvbGUubG9nKHJlc3BvbnNlKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuQ29uZmlybVNhbGVNb2RhbCA9IGZ1bmN0aW9uICh0b3RhbCkge1xyXG4gICAgICAgICR0eHRUb3RhbFByaWNlID0gJCgnI3R4dFRvdGFsUHJpY2UnKTtcclxuXHJcbiAgICAgICAgJCgnLm1vZGFsJykubW9kYWwoe1xyXG4gICAgICAgICAgICBkaXNtaXNzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlYWR5OiBmdW5jdGlvbiAobW9kYWwsIHRyaWdnZXIpIHtcclxuICAgICAgICAgICAgICAgICR0eHRUb3RhbFByaWNlLnZhbCgnJCAnICsgdG90YWwpO1xyXG4gICAgICAgICAgICAgICAgJHR4dFRvdGFsUHJpY2UuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TY3JpcHRzL3NpdGUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbnRlbnQvc2l0ZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=