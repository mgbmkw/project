declare namespace abc100 {
  interface myLib {
    name: string;
    length: number;
    extras ? : string[];
  }
}


declare namespace myLib {
  // 这样，我们就可以在外面写： myLib.timeout = 50;
  let timeout: number;

  // 这样，我们就可以在外面这样访问： myLib.version，当然，const的，是不可以修改这个【string】类型的！
  const version: string;
  interface CatSettings {
    weight: number;
    name: string;
    tailLength ? : number;
  }
  type VetID = string | number;
}


declare namespace MyFunction {
  export interface NamedReturnType {
    firstName: string;
    lastName: string;
  }
  export interface LengthReturnType {
    width: number;
    height: number;
  }

  // If the module also has properties, declare them here. For example, this declaration says that this code is legal:
  // 如果模块也有属性，请在这里声明。例如，这个声明说这段代码是合法的:
  // import f = require('myFuncLibrary');
  // console.log(f.defaultName);
  export const defaultName: string;
  export let defaultLength: number;
}

// export const defaultName: string;