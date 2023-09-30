<!--
 * @Author: Dark Angel
 * @Date: 2023-09-29 20:43:04
 * @LastEditTime: 2023-10-01 04:14:16
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \blog\docs\typescript\page.md
-->
# typescript
## 使用 
1. 安装
```shell
npm install -g typescript
```
2. 用 `tsc --init` 初始化配置
3. 编辑 `tsconfig.json` 配置 TypeScript 选项
```json
{
  "compilerOptions": {
    "target": "es5",                            // 指定 ECMAScript 目标版本: 'ES5'
    "module": "commonjs",                       // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "moduleResolution": "node",                 // 选择模块解析策略
    "experimentalDecorators": true,             // 启用实验性的ES装饰器
    "allowSyntheticDefaultImports": true,       // 允许从没有设置默认导出的模块中默认导入。
    "sourceMap": true,                          // 把 ts 文件编译成 js 文件的时候，同时生成对应的 map 文件
    "strict": true,                             // 启用所有严格类型检查选项
    "noImplicitAny": true,                      // 在表达式和声明上有隐含的 any类型时报错
    "alwaysStrict": true,                       // 以严格模式检查模块，并在每个文件里加入 'use strict'
    "declaration": true,                        // 生成相应的.d.ts文件
    "removeComments": true,                     // 删除编译后的所有的注释
    "noImplicitReturns": true,                  // 不是函数的所有返回路径都有返回值时报错
    "importHelpers": true,                      // 从 tslib 导入辅助工具函数
    "lib": ["es6", "dom"],                      // 指定要包含在编译中的库文件
    "typeRoots": ["node_modules/@types"],
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": [                                  // 需要编译的ts文件一个*表示文件匹配**表示忽略文件的深度问题
    "./src/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "**/*.test.ts",
  ]
}
```
4. 执行 tsc 或者 tsc --watch
## Typescript 的原始类型
- boolean
- number
- string
- null 和 undefined
- void
- undefined
- null
- symbol
- bigint
- const 
- unkown
- any
- never
- object
- Array<元素类型> 或者 元素类型[]
- [类型1,类型2] (元组) 

## 枚举

```ts
// 数字类型 1
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
// 数字类型 2
enum Direction2 {
    Up = 10,
    Down,
    Left,
    Right
}

console.log(Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right); // 10 11 12 13
console.log(Direction2[10], Direction2[11], Direction2[12], Direction2[13]); // Up Down Left Right
// 字符串类型
enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction3['Right'], Direction3.Up); // Right Up
```

## interface 外带 只读,可选,函数类型
```ts 

interface Jiekouming{
     name: string
    age?: number // 可选类型
   readonly isMale: boolean // 只读类型
   say: (words: string) => string // 方法类型
   [key in string]:any // 躲过类型校验 (键为 字符串类型,值为任意类型)
}
```
## 接口继承

```ts
interface Oneprops{}

type TypeName=Oneprops;

interface TwoProps extends Oneprops{

}
// 或者
interface TwoProps extends TypeName{

}

// 两个 同名 interface 会合并
interface Animal {
  name: string
}

interface Animal {
  tail: boolean
}
```
## 泛型 \<T\> 

泛型相当于 函数里的参数, 其中 T 为 泛型参数
泛型参数传入类型中
可以写在接口,类,函数的参数里,可以被扩展

需要接受多个类型的函数最好使用泛型
举个例子:
1. 泛型接口
```ts
interface Person<T> {
  name: string;
  age: number;
  documents: T;
}

// We have to pass in the type of `documents` - an array of strings in this case
const person1: Person<string[]> = {
  name: 'ConardLi',
  age: 17,
  documents: ['passport', 'bank statement', 'visa'],
};
```
2. 函数里
```ts
interface hasLength {
  length: number;
}

function logLengths<T extends hasLength>(a: T[]) {
  a.forEach((element) => {
    console.log(element.length);
  });
}
```
1. 类里
```ts
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class MyComponent extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>MyComponent</div>
    )
  }
}
```
## 索引类型查询操作符 keyof
```ts
class Images {
    public src: string = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    public alt: string = '谷歌'
    public width: number = 500
}

type propsNames = keyof Images // 'src'|'alt'|'width'
```
## 高级类型之条件类型
```ts
T extends U ? X : Y
```

[K in keyof Part] 相当于是遍历 Part 类型

## 类 及类的四种属性
```ts

class Person {
  readonly name: string; // 不可以变的
  private isCool: boolean; // 类的私有属性、外部访问不到
  protected email: string; // 只能从这个类和子类中进行访问和修改
  public age: number; // 任何地方都可以访问和修改
#history:string;// 私有字段
  constructor(n: string, c: boolean, a: number) {
    this.name = n;
    this.isCool = c;
    this.age = a;
  }

  sayHello() {
    return `Hi，我是 ${this.name} ，我今年 ${this.age} 岁了`;
  }
}

const person1 = new Person('ConardLi', true, 17);

// 防止雷和类的方法被实例化
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earth...');
  }
}
```
## implements 定义类构造函数的类型 和 两个访问器 getter setter
- implements 实现一个接口来告诉一个类它必须包含某些属性和方法
```ts
interface MyInterface {
  name: string;
}
class Test implements MyInterface {// implements 定义构造函数的类型
  name: string;
// 访问器 get
  get a():string {
      return this._fullName;
  }
      // 访问器 set
set b(c:string){

}

  constructor(name: string) {
    this.name = name;
  }
}
```
## 类型别名 type

一个 type 只能定义一次
type 可以 & ,但是不能 extends
```ts
type Animal = {
  name: string
}
type Animal2 = {
  name: string
}

type Animal = {
  tail: boolean
}
// ERROR: Duplicate identifier 'Animal'.

interface MergedType =Animal&Animal2;
```
## 关于 typeof
- 判断类型是否相等
- 获取对象类型

### 工具类型

|工具类型|作用|
|:---:|:---:|
|[Partial\<Type\>](#partialtype)|将 Type 里的类型全部变成可选属性|
|[Required\<Type\>](#requiretype)|将 Type 里的类型全部变成必选属性|
|[Readonly\<Type\>](#requiretype)|将 Type 里的类型全部变成只读属性|
|[Record\<Keys, Type\>](#recordkeystype---两个泛型的含义---属性键属性值)|将 Type 类型映射到keys 中的所有key 上生成新的类型|
|[Exclude\<UnionType, ExcludedMembers\>](#excludeuniontype-excludedmembers)|从 UnionType 中去掉 ExcludedMembers 的所有联合成员来构造类型|
|[Extract\<Type, Union\>](#excludeuniontype-excludedmembers)|从 Type 中导出 union 的所有联合成员|   
|[Pick\<Type, Keys\>](#picktype-keys---与extract差不多)| Type 中选择一组属性 Keys（字符串文字或字符串文字的联合）|   
|[Omit\<Type, Keys\>](#omittype-keys---与extract差不多)| Type 中删除一组属性 Keys（字符串文字或字符串文字的联合）|   
|[NonNullable\<Type\>](#nonnullable)| Type 去掉 null 和 undefined 类型|   
|[Parameters\<Type\>](#parameters)| 返回函数类型中参数的类型构成的元祖|   
|[ReturnType\<Type\>](#parameters)| 返回函数类型中返回值的类型|   
|[Uppercase\<StringType\>](#uppercase)| 字符串类型转大写|   
|[Lowercase\<StringType\>](#lowercase)| 字符串类型转小写|   
|[Capitalize\<StringType\>](#capitalize)| 字符串类型首字母转大写|   
|[Uncapitalize\<StringType\>](#uncapitalize)| 字符串类型首字母转大写|   
|[UnionToIntersection\<U\>\<StringType\>](#uncapitalize)| 联合类型转为交叉类型|   

初次以外,还有:
ConstructorParameters\<Type\>：根据构造函数类型的类型构造元组或数组类型。它产生一个包含所有参数类型的元组类型（如果 Type 不是函数，则类型 never ）。
InstanceType\<Type\>：构造一个由Type中构造函数的实例类型组成的类型。
ThisParameterType\<Type\>：为函数类型提取此参数的类型，如果函数类型没有此参数，则为未知。

[utils.ts](./util_type.ts)


# Partial\<Type\>
```typescript

type Partial<T> = {
    [P in keyof T]?: T[P];
};

interface user {
    name:string,
    age: number,
}

type partialUser=Partial<user>;
/** 相当于:
 * interface PartialUser{
 * name?:string,
 * age?: number,
 * }
 */
```
### Require\<type>
```ts

type Required<T> = {
    [P in keyof T]-?: T[P];
};


interface PartialUser{
    name?:string,
    age?: number,
}
type RequireUser = Require<partialUser>
/** 相当于:
 * interface RequireUser{
 * name:string,
 * age: number,
 * }
 */
```

### Readonly\<type>
```ts

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};


interface User{
    name:string,
    age: number,
}
type Usersid=123|234|345|456;
type ReadonlyUser = Readonly\<User>
/** 相当于:
 * interface Readonlyuser{
 * readonly name:string,
 * readonly age: number,
 * }
 */
```
### Record\<keys,type>---两个泛型的含义---(属性键,属性值)
```ts

type Record<K extends keyof any, T> = {
    [P in K]: T;
};



interface User{
    name:string,
    age: number,
}
type Usersid=123|234|345|456;
type RecordUser = Record<Usersid,User>
/** 相当于:
 * interface RequireUser{
 * name:string,
 * age: number,
 * }
 */
```
### Exclude\<UnionType, ExcludedMembers>
\* \* \* 两个泛型参数都得是联合类型
```ts

type Exclude<T, U> = T extends U ? never : T;

interface User{
    name:string,
    age: number,
    sex:boolean
}
type Usersid='name'|'age';
type ExcludeUser = Exclude\<User,Usersid>
/** 相当于:
 * interface ExcludeUser{
 * sex:boolean
 * }
 */
```
### Extract\<Type, Union>
\* \* \* 两个泛型参数都得是联合类型
```ts

type Extract<T, U> = T extends U ? T : never;

interface User{
    name:string,
    age: number,
    sex:boolean
}
type Usersid='name'|'age';
type ExtractUser = Exclude\<User,Usersid>
/** 相当于:
 * interface ExcludeUser{
 *  name:string,
 *  age: number,
 * }
 */
```
### Pick\<Type, Keys>---与extract差不多
pick 只有 keys 是联合类型
```ts

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

interface User{
    name:string,
    age: number,
    sex:boolean
}
type Usersid='name'|'age';
type PickUser = Pick<User,Usersid>
/** 相当于:
 * interface PickUser {
 *  name:string,
 *  age: number,
 * }
 */
```
### Omit\<Type, Keys>---与extract差不多
Omit 只有 keys 是联合类型
```ts

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

interface User{
    name:string,
    age: number,
    sex:boolean
}
type Usersid='name'|'age';
type OmitUser = Omit<User,Usersid>
/** 相当于:
 * interface OmitUser {
 *  sex:boolean
 * }
 */
```
### NonNullable\<Type>

```ts

type NonNullable<T> = T extends null | undefined ? never : T;


type Usersid=string|boolean|number|undefined|null|number[];
type OmitUser = NonNullable<Usersid>
/** 相当于:
 * type Usersid=string|boolean|number|number[];
 */
```
### Parameters\<functionType>
要传入函数的类型
```ts
type Parameters<T extends (...args: any) => any> = T extends 
  (...args: infer P) => any ? P : never;

function getUserInfo(id:string,age:number){

}

type paramsType=Parameters<typeof getUserInfo> // [id:string,age:number]
/** 相当于:
 * type Usersid=string|boolean|number|number[];
 */
```
### ReturnType\<functionType>
要传入函数的类型
```ts
type Parameters<T extends (...args: any) => any> = T extends 
  (...args: infer P) => any ? P : never;

function getUserInfo(id:string,age:number){

}

type ReturnType=Parameters<typeof getUserInfo> // void
/** 相当于:
 * type Usersid=string|boolean|number|number[];
 */
```
### Uppercase\<StringType>

```ts
type Method='get'|'post'|'put'|'delete'

type UppercaseMehtod=Uppercase<Method> // 'GET'|'POST'|'PUT'|'DELETE'
/** 相当于:
 * type UppercaseMehtod='GET'|'POST'|'PUT'|'DELETE'  
 */
```
### Lowercase\<StringType>

```ts
type Method='GET'|'POST'|'PUT'|'DELETE'

type LowercaseMethod=Lowercase<Method>; 
// 'get'|'post'|'put'|'delete'


```
### Capitalize\<StringType>

```ts
type Method='get'|'post'|'put'|'delete'

type LowercaseMethod=Lowercase<Method>; 
// 'Get'|'Post'|'Put'|'Delete'

```
### Uncapitalize\<StringType>

```ts
type Method='Get'|'Post'|'Put'|'Delete'   

type LowercaseMethod=Lowercase<Method>; 
// 'get'|'post'|'put'|'delete'

```
### UnionToIntersection\<U> 

1. 泛型参数 T 直接是类型,而不是像这种 : { name:string }

```ts
//  类型定义源码
type UnionToIntersection<T> = 
  (T extends any ? (x: T) => any : never) extends 
  (x: infer R) => any ? R : never

// 栗子: 

type U0= UnionToIntersection<string | number | boolean>
// string & number & boolean => never
type U1= UnionToIntersection<{x:number}|{y:number }>
//{ x:number; }&{ y:number; };
```