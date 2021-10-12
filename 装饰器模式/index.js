"use strict";
/** tsconfig.json 开启experimentalDecorators */
/**
 * 更多的参数装饰器 属性装饰器 元数据等等 参见
 * https://www.tslang.cn/docs/handbook/decorators.html
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器 参数是构造函数
function classDecorator(constructor) {
    constructor.prototype.sayName = function () {
        console.log("name is " + this.name);
    };
}
// 方法装饰器 装饰器工厂方式
function fnDecorator(canWrite) {
    /**
     * target: 方法
     * propertyKey: 方法名
     * descriptor: 属性描述符
     */
    return function (target, propertyKey, descriptor) {
        descriptor.writable = canWrite;
    };
}
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    A.prototype.hello = function () {
        console.log("Original Hello");
    };
    __decorate([
        fnDecorator(false)
    ], A.prototype, "hello", null);
    A = __decorate([
        classDecorator
    ], A);
    return A;
}());
// 验证装饰器是否生效
var nameA = new A("btn");
nameA.sayName();
// 尝试修改hello方法
A.prototype.hello = function () {
    console.log("Change Hello");
};
nameA.hello(); // Cannot assign to read only property 'hello' of object 
