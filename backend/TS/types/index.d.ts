export as namespace myLib1009;

// If this module has methods, declare them as functions like so.
// 如果这个模块有方法，那么将它们声明为这样的函数。
export function myMethod(a: string): string;
export function myOtherMethod(a: number): number;

// You can declare types that are available via importing the module
// 您可以通过导入模块来声明可用的类型。
export interface someType {
  name: string;
  length: number;
  extras ? : string[];
}


export namespace subProp {
  export interface someType {
    name100: string;
  }
}