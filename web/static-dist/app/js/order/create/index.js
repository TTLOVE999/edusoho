webpackJsonp(["app/js/order/create/index"],{0:function(e,o){e.exports=jQuery},"0ba2fc4e5c14c7d6c761":function(e,o,t){"use strict";function r(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(o,t,r){return t&&e(o.prototype,t),r&&e(o,r),o}}(),a=t("b334fd7e4c5a19234db2"),c=(function(e){e&&e.__esModule}(a),{divition:function(e,o){return Math.round(Math.round(1e3*e)/Math.round(1e3*o)*1e3)/1e3},multiple:function(e,o){return Math.round(Math.round(100*e)*Math.round(100*o))/1e4},subtract:function(e,o){return Math.round(Math.round(1e3*e)-Math.round(1e3*o))/1e3},moneyFormatFloor:function(e){var o=e+"";return o=parseInt(Math.round(1e3*o)),o=10*parseInt(o/10)/1e3,o.toFixed(2)},moneyFormatCeil:function(e){var o=e+"";o=parseFloat(o).toFixed(3);var t=o.length;return"0"===o.substr(t-1,1)?this.moneyFormatFloor(o):this.moneyFormatFloor(parseFloat(o)+.01)}});new(function(){function e(o){r(this,e),this.element=$(o.element),this.submitBtn="#order-create-btn",this.validator=null,this.coinSetting=JSON.parse(this.element.find(".js-coin-setting ").text()),this.init()}return n(e,[{key:"init",value:function(){this.initEvent(),this.validator=this.element.validate({currentDom:this.submitBtn});var e=$("#coupon-select").val();if(""!=e){$('[role="coupon-code-input"]').val(e),$('button[role="coupon-use"]').trigger("click")}var o=parseFloat($('[role="total-price"]').text()),t=this;if($('[role="coinNum"]').length>0){var r=$('[role="coinNum"]').val();if(isNaN(r)||r<=0?($(this).val("0.00"),t.coinPriceZero()):t.showPayPassword(),"RMB"==t.coinSetting.price_type){var n=c.divition(r,t.coinSetting.cash_rate);o<n&&(n=o),$('[role="cash-discount"]').text(c.moneyFormatFloor(n)),o=c.subtract(o,n)}else $('[role="cash-discount"]').text(c.moneyFormatFloor(r)),o=c.subtract(o,r)}else $('[role="cash-discount"]').text("0.00");if(this.shouldPay(o),$("#js-order-create-sms-btn").length>0){var a=this;$("#js-order-create-sms-btn").click(function(e){var o=$("#coinPayAmount").val();if(o&&o.length>0&&!isNaN(o)&&o>0&&$("#js-order-create-sms-btn").length>0){if($("#payPassword").trigger("change"),$('[role="password-input"]').find('span[class="text-danger"]').length>0&&e.stopPropagation(),a.validator&&a.validator.form()){var t=$(this),r=t.data("url"),n=$(t.attr("data-target"));n.modal().load(r)}}else e.stopPropagation(),$("#order-create-form").submit()})}}},{key:"initEvent",value:function(){var e=this,o=this.element;o.on("blur",'[role="coinNum"]',function(o){return e.coinNumEvent(o)}),o.on("click","#coupon-code-btn",function(o){return e.couponCodeEvent(o)}),o.on("click",'[role="cancel-coupon"]',function(o){return e.couponCancelEvent(o)}),o.on("click",'button[role="coupon-use"]',function(o){return e.couponUseEvent(o)}),o.on("change","#coupon-select",function(o){return e.couponSelectEvent(o)}),o.on("click",this.submitBtn,function(o){return e.formSubmitEvent(o)})}},{key:"formSubmitEvent",value:function(e){this.validator&&this.validator.form()&&this.element.submit()}},{key:"couponSelectEvent",value:function(e){var o=$(e.currentTarget),t=o.children("option:selected");if(""==t.data("code"))return $("[role=no-use-coupon-code]").show(),void $('[role="cancel-coupon"]').trigger("click");$("[role=no-use-coupon-code]").hide(),$('[role="coupon-code-input"]').val(t.data("code")),$('button[role="coupon-use"]').trigger("click"),$('[role="code-notify"]').removeClass("alert-success")}},{key:"couponUseEvent",value:function(e){var o={},t=$('[role="coupon-code-input"]');if(o.code=t.val(),""==o.code)return void $('[role="coupon-price-input"]').find("[role='price']").text("0.00");o.targetType=t.data("targetType"),o.targetId=t.data("targetId");var r=parseFloat($('[role="total-price"]').text());o.amount=r;var n=this;$.post("/"+o.targetType+"/"+o.targetId+"/coupon/check",o,function(e){$('[role="code-notify"]').css("display","inline-block"),"no"==e.useable?($("[role=no-use-coupon-code]").show(),$('[role="code-notify"]').removeClass("alert-success").addClass("alert-danger").html(Translator.trans("order.create.useless_hint"))):"yes"==e.useable&&($("[role=no-use-coupon-code]").hide(),"discount"==e.type?$('[role="code-notify"]').removeClass("alert-danger").addClass("alert-success").text(Translator.trans("order.create.use_discount_coupon_hint",{rate:e.rate})):$('[role="code-notify"]').removeClass("alert-danger").addClass("alert-success").text(Translator.trans("order.create.use_price_coupon_hint",{rate:e.rate})),$('[role="coupon-price"]').find("[role='price']").text(c.moneyFormatFloor(e.decreaseAmount)),$('[role="coupon-code-verified"]').val(t.val())),n.conculatePrice()})}},{key:"couponCancelEvent",value:function(e){if(""!=$("#coupon-select").val()){var o=$("#coupon-select").val();$('[role="coupon-code-input"]').val(o),$('button[role="coupon-use"]').trigger("click")}$('[role="coupon-code"]').hide(),$("#coupon-code-btn").show(),$('[role="null-coupon-code"]').show(),$('[role="code-notify"]').hide(),$('[role="coupon-price"]').find("[role='price']").text("0.00"),$('[role="code-notify"]').text(""),$('[role="coupon-code"]').val(""),$(this).hide(),$('[role="coupon-code-verified"]').val(""),$('[role="coupon-code-input"]').val(""),this.conculatePrice()}},{key:"coinNumEvent",value:function(e){var o=$(e.currentTarget),t=o.val();t=Math.round(100*t)/100,o.val(t),isNaN(t)||t<=0?(o.val("0.00"),this.coinPriceZero()):this.showPayPassword(),this.conculatePrice()}},{key:"couponCodeEvent",value:function(e){var o=$(e.currentTarget);$('[role="coupon-price"]').find("[role='price']").text("0.00"),$('[role="code-notify"]').text("").removeClass("alert-success"),$('[role="coupon-code"]').val(""),$('[role="cancel-coupon"]').hide(),$('[role="coupon-code-verified"]').val(""),$('[role="coupon-code-input"]').val(""),this.conculatePrice(),$('[role="coupon-code"]').show(),$('[role="coupon-code-input"]').focus(),$('[role="cancel-coupon"]').show(),$('[role="null-coupon-code"]').hide(),o.hide()}},{key:"afterCouponPay",value:function(e){var o=$('[role="coupon-price"]').find("[role='price']").text();return(""==$.trim(o)||isNaN(o))&&(o=0),e<o&&(o=e),e=c.subtract(e,o)}},{key:"afterCoinPay",value:function(e){var o=$('[role="accountCash"]').text();if(""==o||isNaN(o)||0==parseFloat(o))return this.coinPriceZero(),0;var t=Math.round(1e3*o)>Math.round(1e3*e)?e:o;if("RMB"==this.coinSetting.price_type){var r=parseFloat($('[role="total-price"]').text()),n=Math.round(100*c.moneyFormatFloor(c.divition(t,this.coinSetting.cash_rate)))/100;r<n&&(n=r),$('[role="cash-discount"]').text(c.moneyFormatFloor(n))}else $('[role="cash-discount"]').text(c.moneyFormatFloor(t));return t}},{key:"getMaxCoinCanPay",value:function(e){var o=parseFloat($('[role="maxCoin"]').text()),t=e<o?e:o,r=$('[role="accountCash"]');if(r.length>0){var n=parseFloat(100*r.text())/100;t=t<n?t:n}return t}},{key:"shouldPay",value:function(e){if(e=Math.round(1e3*e)/1e3,"RMB"==this.coinSetting.price_type)e=c.moneyFormatCeil(e),$('[role="pay-rmb"]').text(e),$('input[name="shouldPayMoney"]').val(e);else{var o=c.moneyFormatCeil(c.divition(e,this.coinSetting.cash_rate)),t=Math.round(100*o)/100;$('[role="pay-coin"]').text(e),$('[role="pay-rmb"]').text(t),$('input[name="shouldPayMoney"]').val(t)}}},{key:"conculatePrice",value:function(){var e=parseFloat($('[role="total-price"]').text()),o=0,t=$('[role="cash-discount"]').text(),r=$('[role="coinNum"]').val();switch(e=this.afterCouponPay(e),this.coinSetting.cash_model){case"none":e=e>=0?e:0,this.shouldPay(e);break;case"deduction":o=c.multiple(e,this.coinSetting.cash_rate),o=c.moneyFormatCeil(o);var n=this.getMaxCoinCanPay(o);n<=parseFloat(r)&&(r=n),$('[role="coinNum"]').val(r),0==r&&this.coinPriceZero(),r&&$('[name="payPassword"]').length>0?(r=this.afterCoinPay(r),e=c.subtract(e,t)):($('[role="coinNum"]').val(0),$('[role="cash-discount"]').text("0.00")),e=e>=0?e:0,this.shouldPay(e);break;case"currency":o=e,o<=parseFloat(r)&&(r=o),$('[role="coinNum"]').val(r),0==r&&this.coinPriceZero(),r&&$('[name="payPassword"]').length>0?(r=this.afterCoinPay(r),e=c.subtract(e,t)):($('[role="coinNum"]').val(0),$('[role="cash-discount"]').text("0.00")),e=e>=0?e:0,this.shouldPay(e)}}},{key:"coinPriceZero",value:function(){$('[role="coinNum"]').val(0),$('[role="cash-discount"]').data("defaultValue"),$("[role='password-input']").hide(),$('[name="payPassword"]').rules("remove","required es_remote")}},{key:"showPayPassword",value:function(){$("[role='password-input']").show(),$('[name="payPassword"]').rules("add",{required:!0,es_remote:!0})}}]),e}())({element:"#order-create-form"})}},["0ba2fc4e5c14c7d6c761"]);