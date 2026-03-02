import getLocationParams,{IParamsResult} from "./index";

const testCases = [
  'https://qj.test.com/admin#homePage?code=tbcy9saq&language=zhCN',
  'https://qj.test.com/admin?code=tbcy9saq&language=zhCN#homePage?code=24&id=12',
  '',
  null,
  undefined,
  123 as any, 
  {}
];
console.log('=== 测试 getLocationParams ===');
testCases.forEach(test => {
  try {
    const result:IParamsResult = getLocationParams(test);
    console.log(`输入: ${JSON.stringify(test)}`);
    console.log(`> 输出: ${JSON.stringify(result)}`);
  } catch (error) {
    console.log(`输入: ${JSON.stringify(test)}`);
    console.log(`> 错误: ${JSON.stringify(error)}`);
  }
});