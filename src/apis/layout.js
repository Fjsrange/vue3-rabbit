import httpInstance from "@/utils/http.js";

// 获取顶部导航栏数据
export function getCategoryAPI() {
  return httpInstance({
    url: "/home/category/head",
  });
}
