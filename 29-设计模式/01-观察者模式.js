/**
 * 观察者模式: 观察者(Observer)直接订阅(Subscribe)主题(Subject), 当主题被激活时(即状态改变时), 会触发观察者中的事件
 * 主题: 需要提供添加观察者, 删除观察者, 已经通知观察者的方法
 * 观察者: 需要提供接收观察者通知的方法
 */
class Subject {
  #name;
  #score;
  #observers;
  constructor(name, score) {
    this.#name = name;
    this.#score = score;
    this.#observers = new Set();
  }

  /**
   * 添加观察者
   * @param {*} observer 
   */
  add(observer) {
    this.#observers.add(observer);
  }

  /**
   * 删除观察者
   * @param {*} observer 
   */
  remove(observer) {
    this.#observers.delete(observer);
  }

  /**
   * 修改分数
   * @param {*} score 
   */
  updateScore(score) {
    this.#score = score;
    // 通知观察者信息
    for (const item of this.#observers) {
      item.look(this);
    }
  }

  getName() {
    return this.#name;
  }

  getScore() {
    return this.#score;
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  /**
   * 观察分数的方法
   */
  look(subject) {
    console.log(`${this.name}: 您孩子(${subject.getName()})的成绩是${subject.getScore()}`);
  }
}

// 创建观察者和被观察者
const baby = new Subject('朱棣', 80);
const father = new Observer('朱元璋');
const mather = new Observer('马皇后');

// 往主题中添加对应的观察者, 并更改主题属性
baby.add(father);
baby.add(mather);
baby.updateScore(100);

// 删除主题中的观察者
baby.remove(mather);
baby.updateScore(30);
