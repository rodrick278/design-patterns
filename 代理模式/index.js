/**
 * 代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。
 */
class PreLoadImg {
  constructor(imgNode) {
    // 设置目标图片DOM
    this.imgNode = imgNode;
  }
  setUrl(url) {
    this.imgNode.src = url;
  }
}

class ProxyImage {
  constructor(loadingImg, preLoadImg) {
    // 占位用图片
    this.loadingImg = loadingImg;
    // PreLoadImg实例
    this.preLoadImg = preLoadImg;
  }
  setImgUrl(readImgUrl) {
    // 给真实节点一个占位图
    this.preLoadImg.setUrl(this.loadingImg);
    // 创建一个Image对象
    const virtualImage = new Image();
    // 真实路径给image对象
    virtualImage.url = readImgUrl;
    virtualImage.onload = () => {
      // image加载完成后 再塞给真实DOM
      this.preLoadImg.setUrl(readImgUrl);
    };
  }
}

const imgDom = new preLoadImg(document.querySelector("xxxx"));
const proxy = new ProxyImage("xxx图片", imgDom);
proxy.setImgUrl("http://xxxxx.jpg");
