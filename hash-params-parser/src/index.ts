export type IParamsResult = Record<string, string>
// export type IParamsResult =  {
//     pathname: string;
//     params: Record<string, string>
// }


/**
 * 获取哈希地址栏参数
 * @param href - location.href
 * @returns 地址栏参数对象
 * 
 * @example
 * getLocationParams(location.href) // {"**":"**"}
 * getLocationParams() // {"**":"**"}
 */
export function getLocationParams(href?: string): IParamsResult {
  const url = href || location.href;
  // 处理没有参数的情况
  if (!url || typeof url !== "string") {
    // return { pathname: "", params: {} };
    return {};
  }

  const params: IParamsResult = {};

  // 分离哈希片段
  const [urlWithoutHash, hashFragment] = url.split("#");

  // 分离路径和查询字符串
  const [path, queryString] = urlWithoutHash.split("?");

  // 处理主查询字符串
  if (queryString) {
    const searchParams = new URLSearchParams(queryString);
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
  }

  // 处理哈希片段中的查询参数
  if (hashFragment) {
    // 检查哈希片段是否包含查询参数
    const [hashPath, hashQuery] = hashFragment.split("?");

    if (hashQuery) {
      const hashParams = new URLSearchParams(hashQuery);
      hashParams.forEach((value, key) => {
        params[key] = value;
      });
    }
  }

  // return {
  //   pathname: path || "",
  //   params
  // };
  return params;
}
export default getLocationParams