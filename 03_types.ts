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

let s: string = '2333'
// s = e 报错