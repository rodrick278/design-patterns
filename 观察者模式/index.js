"use strict";
var Publish = /** @class */ (function () {
    function Publish() {
        this.prd = null;
        this.observers = [];
    }
    Publish.prototype.add = function (observer) {
        this.observers.push(observer);
    };
    Publish.prototype.remove = function (observer) {
        var _this = this;
        this.observers.forEach(function (it, idx) {
            if (it === observer) {
                console.log("observer remove");
                _this.observers.splice(idx, 1);
            }
        });
    };
    Publish.prototype.getPrd = function () {
        return this.prd;
    };
    Publish.prototype.setPrd = function (prd) {
        this.prd = prd;
        this.notify();
    };
    Publish.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (it) {
            it.update(_this);
        });
    };
    return Publish;
}());
var Observer = /** @class */ (function () {
    function Observer() {
        this.prd = null;
    }
    Observer.prototype.update = function (pub) {
        console.log("update");
        this.prd = pub.getPrd();
        this.work();
    };
    Observer.prototype.work = function () {
        console.log("start work with prd:" + this.prd);
    };
    return Observer;
}());
var obs = new Observer();
var pub = new Publish();
pub.add(obs);
pub.remove(obs);
pub.add(obs);
pub.setPrd("a new prd");
