webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SharedModule = function () {
    function SharedModule() {
        _classCallCheck(this, SharedModule);

        this.init();
    }

    _createClass(SharedModule, [{
        key: 'init',
        value: function init() {
            $('select').material_select();
        }
    }]);

    return SharedModule;
}();

exports.default = SharedModule;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(6);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _SharedModule = __webpack_require__(1);

var _SharedModule2 = _interopRequireDefault(_SharedModule);

var _SellingModule = __webpack_require__(5);

var _SellingModule2 = _interopRequireDefault(_SellingModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var sharedModule = new _SharedModule2.default();
    var sellingModule = new _SellingModule2.default();

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
            success: function success(data) {
                console.log(data);
                $frmFinalSale.html(data);
            },
            error: function error(response) {
                console.log(response);
            }
        });
    });

    window.removeItemFromSale = function (productId) {
        sellingModule.removeItemFromSale(productId, function (response) {
            $frmFinalSale.html(response);
            sharedModule.init();
            $txtProductName.focus();
        });

        return false;
    };

    window.openConfirmSaleModal = function (total) {
        var $txtTotalPrice = $('#txtTotalPrice');

        $('.modal').modal({
            dismissible: false,
            ready: function ready(modal, trigger) {
                $txtTotalPrice.val(total);
                $txtTotalPrice.focus();
            },
            complete: function complete() {
                $txtProductName.focus();
            }
        });
    };

    return this;
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SharedModule = __webpack_require__(1);

var _SharedModule2 = _interopRequireDefault(_SharedModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SellingModule = function () {
    function SellingModule() {
        _classCallCheck(this, SellingModule);
    }

    _createClass(SellingModule, [{
        key: 'addProductToFinalSale',
        value: function addProductToFinalSale(addProductForm, callbackFunc) {

            $.ajax({
                url: '/Home/AddProductToSale',
                type: "POST",
                data: addProductForm.serialize(),
                success: function success(data) {
                    callbackFunc(data);
                },
                error: function error(response) {
                    console.log(response);
                }
            });
        }
    }, {
        key: 'removeItemFromSale',
        value: function removeItemFromSale(productId, callbackFunc) {

            $.ajax({
                url: '/Home/RemoveProductFromSale',
                type: "DELETE",
                data: { productId: productId },
                success: function success(data) {
                    callbackFunc(data);
                },
                error: function error(response) {
                    console.log(response);
                }
            });
        }
    }]);

    return SellingModule;
}();

exports.default = SellingModule;
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[3]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9TY3JpcHRzL21vZHVsZXMvU2hhcmVkTW9kdWxlLmpzIiwid2VicGFjazovLy8uL1NjcmlwdHMvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9TY3JpcHRzL21vZHVsZXMvU2VsbGluZ01vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9Db250ZW50L3NpdGUuc2NzcyJdLCJuYW1lcyI6WyJTaGFyZWRNb2R1bGUiLCJpbml0IiwiJCIsIm1hdGVyaWFsX3NlbGVjdCIsInNoYXJlZE1vZHVsZSIsInNlbGxpbmdNb2R1bGUiLCIkZnJtQWRkUHJvZHVjdCIsIiRidG5BZGRQcm9kdWN0VG9TYWxlIiwiJHR4dFByb2R1Y3ROYW1lIiwiJGZybUZpbmFsU2FsZSIsIiRkZWxldGVMaW5rcyIsIiRidG5Db25maXJtU2FsZU1vZGFsIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRQcm9kdWN0VG9GaW5hbFNhbGUiLCJyZXNwb25zZSIsImh0bWwiLCJyZXNldCIsImZvY3VzIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwic2VyaWFsaXplIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIndpbmRvdyIsInJlbW92ZUl0ZW1Gcm9tU2FsZSIsInByb2R1Y3RJZCIsIm9wZW5Db25maXJtU2FsZU1vZGFsIiwidG90YWwiLCIkdHh0VG90YWxQcmljZSIsIm1vZGFsIiwiZGlzbWlzc2libGUiLCJyZWFkeSIsInRyaWdnZXIiLCJ2YWwiLCJjb21wbGV0ZSIsIlNlbGxpbmdNb2R1bGUiLCJhZGRQcm9kdWN0Rm9ybSIsImNhbGxiYWNrRnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsWTtBQUNqQiw0QkFBYztBQUFBOztBQUNWLGFBQUtDLElBQUw7QUFDSDs7OzsrQkFFTTtBQUNIQyxjQUFFLFFBQUYsRUFBWUMsZUFBWjtBQUNIOzs7Ozs7a0JBUGdCSCxZO0FBUXBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRDs7OztB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O0FBQ0hDLHFCQUFLLDZCQURGO0FBRUhDLHNCQUFNLFFBRkg7QUFHSEMsc0JBQU0sRUFBRVEsV0FBV0EsU0FBYixFQUhIO0FBSUhOLHlCQUFTLGlCQUFVRixJQUFWLEVBQWdCO0FBQ3JCb0IsaUNBQWFwQixJQUFiO0FBQ0gsaUJBTkU7QUFPSEssdUJBQU8sZUFBVVosUUFBVixFQUFvQjtBQUFFVSw0QkFBUUMsR0FBUixDQUFZWCxRQUFaO0FBQXVCO0FBUGpELGFBQVA7QUFTSDs7Ozs7O2tCQTVCZ0J5QixhO0FBNkJwQixDOzs7Ozs7O0FDL0JELHlDIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZWRNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAkKCdzZWxlY3QnKS5tYXRlcmlhbF9zZWxlY3QoKTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9TY3JpcHRzL21vZHVsZXMvU2hhcmVkTW9kdWxlLmpzIiwiaW1wb3J0IFNoYXJlZE1vZHVsZSBmcm9tICdTaGFyZWRNb2R1bGUnO1xyXG5pbXBvcnQgU2VsbGluZ01vZHVsZSBmcm9tICdTZWxsaW5nTW9kdWxlJztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2hhcmVkTW9kdWxlID0gbmV3IFNoYXJlZE1vZHVsZSgpO1xyXG4gICAgdmFyIHNlbGxpbmdNb2R1bGUgPSBuZXcgU2VsbGluZ01vZHVsZSgpO1xyXG5cclxuICAgIHZhciAkZnJtQWRkUHJvZHVjdCA9ICQoJyNmcm1BZGRQcm9kdWN0Jyk7XHJcbiAgICB2YXIgJGJ0bkFkZFByb2R1Y3RUb1NhbGUgPSAkKCcjYnRuQWRkUHJvZHVjdCcpO1xyXG4gICAgdmFyICR0eHRQcm9kdWN0TmFtZSA9ICQoJyN0eHRQcm9kdWN0TmFtZScpO1xyXG4gICAgdmFyICRmcm1GaW5hbFNhbGUgPSAkKCcjZnJtRmluYWxTYWxlJyk7XHJcbiAgICB2YXIgJGRlbGV0ZUxpbmtzID0gJCgnLmRlbGV0ZS1saW5rJyk7XHJcbiAgICB2YXIgJGJ0bkNvbmZpcm1TYWxlTW9kYWwgPSAkKCcjYnRuQ29uZmlybVNhbGVNb2RhbCcpO1xyXG5cclxuICAgICRidG5BZGRQcm9kdWN0VG9TYWxlLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNlbGxpbmdNb2R1bGUuYWRkUHJvZHVjdFRvRmluYWxTYWxlKCRmcm1BZGRQcm9kdWN0LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJGZybUZpbmFsU2FsZS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgc2hhcmVkTW9kdWxlLmluaXQoKTtcclxuICAgICAgICAgICAgJGZybUFkZFByb2R1Y3RbMF0ucmVzZXQoKTtcclxuICAgICAgICAgICAgJHR4dFByb2R1Y3ROYW1lLmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICRidG5Db25maXJtU2FsZU1vZGFsLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvSG9tZS9Db25maXJtU2FsZScsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiAkZnJtRmluYWxTYWxlLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAkZnJtRmluYWxTYWxlLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHsgY29uc29sZS5sb2cocmVzcG9uc2UpIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIHdpbmRvdy5yZW1vdmVJdGVtRnJvbVNhbGUgPSAocHJvZHVjdElkKSA9PiB7XHJcbiAgICAgICAgc2VsbGluZ01vZHVsZS5yZW1vdmVJdGVtRnJvbVNhbGUocHJvZHVjdElkLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJGZybUZpbmFsU2FsZS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgc2hhcmVkTW9kdWxlLmluaXQoKTtcclxuICAgICAgICAgICAgJHR4dFByb2R1Y3ROYW1lLmZvY3VzKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vcGVuQ29uZmlybVNhbGVNb2RhbCA9ICh0b3RhbCkgPT4ge1xyXG4gICAgICAgIHZhciAkdHh0VG90YWxQcmljZSA9ICQoJyN0eHRUb3RhbFByaWNlJyk7XHJcblxyXG4gICAgICAgICQoJy5tb2RhbCcpLm1vZGFsKHtcclxuICAgICAgICAgICAgZGlzbWlzc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWFkeTogZnVuY3Rpb24gKG1vZGFsLCB0cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAkdHh0VG90YWxQcmljZS52YWwodG90YWwpO1xyXG4gICAgICAgICAgICAgICAgJHR4dFRvdGFsUHJpY2UuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICR0eHRQcm9kdWN0TmFtZS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9TY3JpcHRzL3NpdGUuanMiLCJpbXBvcnQgU2hhcmVkTW9kdWxlIGZyb20gJ1NoYXJlZE1vZHVsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxsaW5nTW9kdWxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgYWRkUHJvZHVjdFRvRmluYWxTYWxlKGFkZFByb2R1Y3RGb3JtLCBjYWxsYmFja0Z1bmMpIHtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL0hvbWUvQWRkUHJvZHVjdFRvU2FsZScsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBhZGRQcm9kdWN0Rm9ybS5zZXJpYWxpemUoKSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuYyhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSkgeyBjb25zb2xlLmxvZyhyZXNwb25zZSkgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW1Gcm9tU2FsZShwcm9kdWN0SWQsIGNhbGxiYWNrRnVuYykge1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvSG9tZS9SZW1vdmVQcm9kdWN0RnJvbVNhbGUnLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHByb2R1Y3RJZDogcHJvZHVjdElkIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmMoZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHsgY29uc29sZS5sb2cocmVzcG9uc2UpIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9TY3JpcHRzL21vZHVsZXMvU2VsbGluZ01vZHVsZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db250ZW50L3NpdGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9