/**
 * 发布订阅模式: 订阅者(Subscriber)把自己想订阅的事件注册到调度中心(Topic), 当发布者(Publisher)发布事件到调度中心时, 由调度中心统一调度订阅者注册到调度中心的回调函数
 * 发布订阅模式型对于观察者模式引入了调度中心概念, 将观察者和订阅者进行了解耦
 */

class Topic {
  #callbacks;

  constructor() {
    this.#callbacks = new Set();
  }

  /**
   * 订阅者添加订阅
   * @param {*} callback 
   */
  on(callback) {
    this.#callbacks.add(callback);
  };

  /**
   * 订阅者取消订阅
   * @param {*} callback 
   */
  remove(callback) {
    this.#callbacks.remove(callback);
  };

  /**
   * 发布者发布消息
   * @param {*} value 
   */
  emit(value) {
    for (const item of this.#callbacks) {
      item(value);
    }
  }
}

const e = new Topic();
e.on((value) => console.log(`张三订阅: ${value}`));
e.on((value) => console.log(`李四订阅: ${value}`));
e.on((value) => console.log(`王五订阅: ${value}`));
e.on((value) => console.log(`赵六订阅: ${value}`));

e.emit('人民日报-2022-08-08日内容...');
e.emit('人民日报-2022-08-09日内容...');