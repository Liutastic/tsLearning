let a: number = 10;
let b: string = '23233'
let c: boolean = false
let d: any = 2333
d = '2333'

function sum(a: number, b: number = 23): number {
  return a + b
}
let result = sum(1, 2)