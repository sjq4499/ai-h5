// 获取本地文件路径
// name  文件名
export const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
