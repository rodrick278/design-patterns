abstract class AbsFactory {
  public abstract createOS(): void;
  public abstract createOther(): void;
}

class PhoneAFactory extends AbsFactory {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  createOS() {
    console.log(`createOS-${this.name}`);
    return new AppleOS(this.name);
  }
  createOther() {
    console.log("createOther-Phone");
  }
}
// OS
abstract class OSFactory {
  public abstract startOS(): void;
}

class AppleOS extends OSFactory {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  startOS() {
    console.log(`AppleOS has start on ${this.name}`);
  }
}

const myPhone = new PhoneAFactory("myPhone");
const myOs = myPhone.createOS();
myPhone.createOther();
myOs.startOS()
