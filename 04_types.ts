// 声明数组
let str: string[]
str = ['2']
let a: Array<number>
a = [2, 5]

// 元组 固定长度的数组
let b: [string, string] // 有两个值的元组
b = ['', '']

// 枚举

enum Gender {
  Male,
  Famale
}

let i: { name: string, gender: 0 | 1 }
i = {
  name: '孙悟空',
  gender: 0
}

let j: string | number
j = 2
j = 's'
// j = false

// let j: string & number //无意义

// 给变量类型起别名
type myT = 1 | 2 | 3 | 4 | 5
let k: myT
k = 5