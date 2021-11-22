/**
 * 发布者直接触及到订阅者的操作，叫观察者模式
 * 发布者不直接触及到订阅者、而是由统一的第三方来完成实际的通信的操作，叫做发布-订阅模式
 * eventbus 这种就属于发布订阅
 */

class Publish {
  private observers: Observer[];
  private prd: string | null;
  constructor() {
    this.prd = null;
    this.observers = [];
  }
  add(observer: Observer) {
    this.observers.push(observer);
  }
  remove(observer: Observer) {
    this.observers.forEach((it, idx) => {
      if (it === observer) {
        console.log("observer remove");

        this.observers.splice(idx, 1);
      }
    });
  }
  getPrd() {
    return this.prd;
  }
  setPrd(prd: string) {
    this.prd = prd;
    this.notify();
  }
  notify() {
    this.observers.forEach((it: Observer) => {
      it.update(this);
    });
  }
}

class Observer {
  prd: string | null;
  constructor() {
    this.prd = null;
  }
  update(pub: Publish) {
    console.log("update");
    this.prd = pub.getPrd();
    this.work()
  }
  work() {
    console.log(`start work with prd:${this.prd}`);
  }
}

const obs = new Observer();
const pub = new Publish();
pub.add(obs);
pub.remove(obs);
pub.add(obs);
pub.setPrd("a new prd")