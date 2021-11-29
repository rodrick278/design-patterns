/**
 * 组合模式就是用小的子对象来构建更大的对象，而这些小的子对象本身也许是由更小的“孙对象”构成的。树的概念
 */
class MacroCommand {
  constructor() {
    this.commandsList = [];
  }
  add(command) {
    this.commandsList.push(command);
  }
  execute() {
    for (const command of this.commandsList) {
      command.execute();
    }
  }
}
const openAcCommand = {
  execute: function () {
    console.log("打开空调");
  },
};
/**********家里的电视和音响是连接在一起的，所以可以用一个宏命令来组合打开电视和打开音响的命令
 *********/
const openTvCommand = {
  execute: function () {
    console.log("打开电视");
  },
};
const openSoundCommand = {
  execute: function () {
    console.log("打开音响");
  },
};
const macroCommand1 = new MacroCommand();
macroCommand1.add(openTvCommand);
macroCommand1.add(openSoundCommand);
/*********关门、打开电脑和打登录 QQ 的命令****************/
const closeDoorCommand = {
  execute: function () {
    console.log("关门");
  },
};
const openPcCommand = {
  execute: function () {
    console.log("开电脑");
  },
};
const openQQCommand = {
  execute: function () {
    console.log("登录 QQ");
  },
};
const macroCommand2 = new MacroCommand();
macroCommand2.add(closeDoorCommand);
macroCommand2.add(openPcCommand);
macroCommand2.add(openQQCommand);
/*********现在把所有的命令组合成一个“超级命令”**********/
const macroCommand = new MacroCommand();
macroCommand.add(openAcCommand);
macroCommand.add(macroCommand1);
macroCommand.add(macroCommand2);
/*********执行“超级命令”**********/
macroCommand.execute();
