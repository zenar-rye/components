#### hash-params-parser

获取哈希url参数

```typescript
import getLocationParams,{IParamsResult} from "hash-params-parser";

testv1='https://baidu.test.com/admin#home?code=tbcy9saq&language=zhCN'
testv2='https://baidu.test.com/admin?code=tbcy9saq&language=zhCN#home?code=24&id=12'
location.href=testv2

const res0:IParamsResult=getLocationParams(testv1) // {code:tbcy9saq,language:zhCN}
const res1:IParamsResult=getLocationParams(location.href) // {code:24,language:zhCN,id=12}
const res2:IParamsResult=getLocationParams() // {code:24,language:zhCN,id=12}
```



