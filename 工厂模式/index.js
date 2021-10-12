var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbsFactory = /** @class */ (function () {
    function AbsFactory() {
    }
    return AbsFactory;
}());
var PhoneAFactory = /** @class */ (function (_super) {
    __extends(PhoneAFactory, _super);
    function PhoneAFactory(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    PhoneAFactory.prototype.createOS = function () {
        console.log("createOS-" + this.name);
        return new AppleOS(this.name);
    };
    PhoneAFactory.prototype.createOther = function () {
        console.log("createOther-Phone");
    };
    return PhoneAFactory;
}(AbsFactory));
// OS
var OSFactory = /** @class */ (function () {
    function OSFactory() {
    }
    return OSFactory;
}());
var AppleOS = /** @class */ (function (_super) {
    __extends(AppleOS, _super);
    function AppleOS(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    AppleOS.prototype.startOS = function () {
        console.log("AppleOS has start on " + this.name);
    };
    return AppleOS;
}(OSFactory));
var myPhone = new PhoneAFactory("myPhone");
var myOs = myPhone.createOS();
myPhone.createOther();
myOs.startOS();
