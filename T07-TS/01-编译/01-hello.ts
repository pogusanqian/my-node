/**
 * ts编译需要全局安装typescript, 然后执行tsc命令编译
 *    npx tsc tsc会查找到tsconfig.json文件, 然后进行编译
 *    npx tsc ./hello.ts 不能直接编译相对路径(因为此时的相对路径指的是npx所在的目录)
 * @types/node安装包, 提供了语法提示与检查
 * CodeRun插件如果想要直接运行ts文件, 需要全局安装ts-node使用, ts-node ./hello.ts可以直接出运行结果
 */
console.log('Hello World');
