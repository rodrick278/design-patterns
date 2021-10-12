/** tsconfig.json 开启experimentalDecorators */
/**
 * 更多的参数装饰器 属性装饰器 元数据等等 参见
 * https://www.tslang.cn/docs/handbook/decorators.html
 */

// 类装饰器 参数是构造函数
function classDecorator(constructor: Function) {
  constructor.prototype.sayName = function () {
    console.log(`name is ${this.name}`);
  };
}
// 方法装饰器 装饰器工厂方式
function fnDecorator(canWrite: boolean) {
  /**
   * target: 方法
   * propertyKey: 方法名
   * descriptor: 属性描述符
   */
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = canWrite;
  };
}

@classDecorator
class A {
  name: string;
  sayName!: Function;

  constructor(name: string) {
    this.name = name;
  }

  @fnDecorator(false)
  hello() {
    console.log("Original Hello");
  }
}

// 验证装饰器是否生效
const nameA = new A("btn");
nameA.sayName();

// 尝试修改hello方法
A.prototype.hello=function(){
  console.log("Change Hello");
}
nameA.hello() // Cannot assign to read only property 'hello' of object 
