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
    }, {
        key: 'confirmSale',
        value: function confirmSale(invoice, callbackFunc) {

            $.ajax({
                url: '/Home/ConfirmSale',
                type: "POST",
                data: invoice.serialize(),
                success: function success(data) {
                    console.log(data);
                    callbackFunc(data);
                },
                error: function error(response) {
                    console.log(response.responseText);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9TY3JpcHRzL21vZHVsZXMvU2hhcmVkTW9kdWxlLmpzIiwid2VicGFjazovLy8uL1NjcmlwdHMvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9TY3JpcHRzL21vZHVsZXMvU2VsbGluZ01vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9Db250ZW50L3NpdGUuc2NzcyJdLCJuYW1lcyI6WyJTaGFyZWRNb2R1bGUiLCJpbml0IiwiJCIsIm1hdGVyaWFsX3NlbGVjdCIsInNoYXJlZE1vZHVsZSIsInNlbGxpbmdNb2R1bGUiLCIkZnJtQWRkUHJvZHVjdCIsIiRidG5BZGRQcm9kdWN0IiwiJHR4dFByb2R1Y3ROYW1lIiwiJGZybUZpbmFsU2FsZSIsIiRkZWxldGVMaW5rcyIsIiRidG5Db25maXJtU2FsZU1vZGFsIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRQcm9kdWN0VG9GaW5hbFNhbGUiLCJyZXNwb25zZSIsImh0bWwiLCJyZXNldCIsImZvY3VzIiwid2luZG93IiwicmVtb3ZlSXRlbUZyb21TYWxlIiwicHJvZHVjdElkIiwib3BlbkNvbmZpcm1TYWxlTW9kYWwiLCJ0b3RhbCIsIiR0eHRUb3RhbFByaWNlIiwibW9kYWwiLCJkaXNtaXNzaWJsZSIsInJlYWR5IiwidHJpZ2dlciIsInZhbCIsImNvbXBsZXRlIiwiU2VsbGluZ01vZHVsZSIsImFkZFByb2R1Y3RGb3JtIiwiY2FsbGJhY2tGdW5jIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwic2VyaWFsaXplIiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImludm9pY2UiLCJyZXNwb25zZVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLFk7QUFDakIsNEJBQWM7QUFBQTs7QUFDVixhQUFLQyxJQUFMO0FBQ0g7Ozs7K0JBRU07QUFDSEMsY0FBRSxRQUFGLEVBQVlDLGVBQVo7QUFDSDs7Ozs7O2tCQVBnQkgsWTtBQVFwQixDOzs7Ozs7Ozs7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LHlCQUFTLGlCQUFVRixJQUFWLEVBQWdCO0FBQ3JCSSw0QkFBUUMsR0FBUixDQUFZTCxJQUFaO0FBQ0FKLGlDQUFhSSxJQUFiO0FBQ0gsaUJBUEU7QUFRSEcsdUJBQU8sZUFBVXpCLFFBQVYsRUFBb0I7QUFDdkIwQiw0QkFBUUMsR0FBUixDQUFZM0IsU0FBUzZCLFlBQXJCO0FBQ0g7QUFWRSxhQUFQO0FBWUg7Ozs7OztrQkFoRGdCYixhO0FBaURwQixDOzs7Ozs7O0FDbkRELHlDIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZWRNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAkKCdzZWxlY3QnKS5tYXRlcmlhbF9zZWxlY3QoKTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9TY3JpcHRzL21vZHVsZXMvU2hhcmVkTW9kdWxlLmpzIiwiaW1wb3J0IFNoYXJlZE1vZHVsZSBmcm9tICdTaGFyZWRNb2R1bGUnO1xyXG5pbXBvcnQgU2VsbGluZ01vZHVsZSBmcm9tICdTZWxsaW5nTW9kdWxlJztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2hhcmVkTW9kdWxlID0gbmV3IFNoYXJlZE1vZHVsZSgpO1xyXG4gICAgdmFyIHNlbGxpbmdNb2R1bGUgPSBuZXcgU2VsbGluZ01vZHVsZSgpO1xyXG5cclxuICAgIHZhciAkZnJtQWRkUHJvZHVjdCA9ICQoJyNmcm1BZGRQcm9kdWN0Jyk7XHJcbiAgICB2YXIgJGJ0bkFkZFByb2R1Y3QgPSAkKCcjYnRuQWRkUHJvZHVjdCcpO1xyXG4gICAgdmFyICR0eHRQcm9kdWN0TmFtZSA9ICQoJyN0eHRQcm9kdWN0TmFtZScpO1xyXG4gICAgdmFyICRmcm1GaW5hbFNhbGUgPSAkKCcjZnJtRmluYWxTYWxlJyk7XHJcbiAgICB2YXIgJGRlbGV0ZUxpbmtzID0gJCgnLmRlbGV0ZS1saW5rJyk7XHJcbiAgICB2YXIgJGJ0bkNvbmZpcm1TYWxlTW9kYWwgPSAkKCcjYnRuQ29uZmlybVNhbGVNb2RhbCcpO1xyXG5cclxuICAgICRmcm1BZGRQcm9kdWN0Lm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc2VsbGluZ01vZHVsZS5hZGRQcm9kdWN0VG9GaW5hbFNhbGUoJGZybUFkZFByb2R1Y3QsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkZnJtRmluYWxTYWxlLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBzaGFyZWRNb2R1bGUuaW5pdCgpO1xyXG4gICAgICAgICAgICAkZnJtQWRkUHJvZHVjdFswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAkdHh0UHJvZHVjdE5hbWUuZm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUl0ZW1Gcm9tU2FsZSA9IChwcm9kdWN0SWQpID0+IHtcclxuICAgICAgICBzZWxsaW5nTW9kdWxlLnJlbW92ZUl0ZW1Gcm9tU2FsZShwcm9kdWN0SWQsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkZnJtRmluYWxTYWxlLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBzaGFyZWRNb2R1bGUuaW5pdCgpO1xyXG4gICAgICAgICAgICAkdHh0UHJvZHVjdE5hbWUuZm9jdXMoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9wZW5Db25maXJtU2FsZU1vZGFsID0gKHRvdGFsKSA9PiB7XHJcbiAgICAgICAgdmFyICR0eHRUb3RhbFByaWNlID0gJCgnI3R4dFRvdGFsUHJpY2UnKTtcclxuXHJcbiAgICAgICAgJCgnLm1vZGFsJykubW9kYWwoe1xyXG4gICAgICAgICAgICBkaXNtaXNzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlYWR5OiBmdW5jdGlvbiAobW9kYWwsIHRyaWdnZXIpIHtcclxuICAgICAgICAgICAgICAgICR0eHRUb3RhbFByaWNlLnZhbCh0b3RhbCk7XHJcbiAgICAgICAgICAgICAgICAkdHh0VG90YWxQcmljZS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJHR4dFByb2R1Y3ROYW1lLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1NjcmlwdHMvc2l0ZS5qcyIsImltcG9ydCBTaGFyZWRNb2R1bGUgZnJvbSAnU2hhcmVkTW9kdWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGxpbmdNb2R1bGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBhZGRQcm9kdWN0VG9GaW5hbFNhbGUoYWRkUHJvZHVjdEZvcm0sIGNhbGxiYWNrRnVuYykge1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvSG9tZS9BZGRQcm9kdWN0VG9TYWxlJyxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGFkZFByb2R1Y3RGb3JtLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW1Gcm9tU2FsZShwcm9kdWN0SWQsIGNhbGxiYWNrRnVuYykge1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvSG9tZS9SZW1vdmVQcm9kdWN0RnJvbVNhbGUnLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHByb2R1Y3RJZDogcHJvZHVjdElkIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmMoZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybVNhbGUoaW52b2ljZSwgY2FsbGJhY2tGdW5jKSB7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9Ib21lL0NvbmZpcm1TYWxlJyxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGludm9pY2Uuc2VyaWFsaXplKCksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuYyhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vU2NyaXB0cy9tb2R1bGVzL1NlbGxpbmdNb2R1bGUuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29udGVudC9zaXRlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==