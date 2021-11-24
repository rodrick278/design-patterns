/**
 * 计算奖金
 * 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
 */
const strategies = {
  S: (salary) => {
    return salary * 4;
  },
  A: (salary) => {
    return salary * 2;
  },
  B: (salary) => {
    return salary * 1;
  },
};

class Bonus {
  constructor() {
    this.salary = 0;
    this.level = null;
  }
  setSalary(salary) {
    this.salary = salary;
  }
  setLevel(level) {
    this.level = level;
  }
  getBonus(){
    return strategies[this.level](this.salary)
  }
}

const bonus = new Bonus()
bonus.setSalary(10000)
bonus.setLevel('B')
console.log(bonus.getBonus())
