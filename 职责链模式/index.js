/**
 * 使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止
 */
const order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log("500 元定金预购，得到 100 优惠券");
  } else {
    return "nextSuccessor"; // 我不知道下一个节点是谁，反正把请求往后面传递
  }
};
const order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log("200 元定金预购，得到 50 优惠券");
  } else {
    return "nextSuccessor"; // 我不知道下一个节点是谁，反正把请求往后面传递
  }
};
const orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log("普通购买，无优惠券");
  } else {
    console.log("手机库存不足");
  }
};

class Chain {
  constructor(fn) {
    this.fn = fn;
    this.successor = null;
  }

  // 设置当前包装的fn的下一步职责
  setNextSuccessor(successor) {
    this.successor = successor;
  }

  passRequest(...args) {
    // 执行函数
    const ret = this.fn.apply(this, args);
    // 如果函数返回了nextSuccessor说明需要继续执行
    if (ret === "nextSuccessor") {
      return (
        this.successor && this.successor.passRequest.apply(this.successor, args)
      );
    }
    return ret;
  }
}

const chainOrder500 = new Chain(order500);
const chainOrder200 = new Chain(order200);
const chainOrderNormal = new Chain(orderNormal);

chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

chainOrder500.passRequest(1, true, 500); // 输出：500 元定金预购，得到 100 优惠券
chainOrder500.passRequest(2, true, 500); // 输出：200 元定金预购，得到 50 优惠券
chainOrder500.passRequest(3, true, 500); // 输出：普通购买，无优惠券
chainOrder500.passRequest(1, false, 0); // 输出：手机库存不足

/** 支持扩展 */
// const order300 = function () {
//   // 具体实现略
// };
// chainOrder300 = new Chain(order300);
// chainOrder500.setNextSuccessor(chainOrder300);
// chainOrder300.setNextSuccessor(chainOrder200);
