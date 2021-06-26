// 使用字面量进行类型声明
let a: 10; // 给a赋值为10，后面不可以再修改
let b: 'male' | "female"; // 竖线链接多个类型
let c: boolean | string = 'as';
b = 'male';
c = false;
let d: any; // 实际开发中不建议使用, any类型的变量赋值给其他变量时会改变其他变量的类型
d = 233;
d = '123213';

let e: unknown; // 表示未知类型，类型安全的any 赋值给其他变量的时候会报错
e = '233';
e = 123;
e = false;

let s: string = '2333';
// s = e 报错
// 解决unknown赋值给具体变量报错方法
if (typeof e === 'string') {
  s = e;
}
// 也可以使用断言来解决
s = e as string;
// 或者
s = <string>e;

// 无返回值的函数
function fn(): void {

};

// 永远不会返回结果 包括undefined和null
function fn1(): never {
  throw new Error('2333')
}

// 对象
let o1: object;
// 属性后面添加？表示属性是可选值
let o2: { name: string, age?: number, [propName: string]: any };
let o3: { name: string, [propName: string]: any };
let o4: { [propName: string]: unknown };
o2 = { name: '233', age: 33, ds: '232', dasd: '23' }
o4 = { a: 2 }


// 定义函数的形参类型和返回值类型
let fn3: (a: number, b: number) => number
