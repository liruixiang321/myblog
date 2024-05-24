// useJsonp.js
import { ref } from "vue";
export default function useJsonp(url) {
  const error = ref(null);
  // 发起JSONP请求
  function fetchData(callback: Function) {
    // 创建全局回调函数名
    const callbackName = `callbackGlog`;
    // 创建一个<script>标签
    const script = document.createElement("script");
    // 定义全局回调函数，用于处理服务器端返回的数据
    window[callbackName] = function (data) {
      // 清除全局回调函数
      delete window[callbackName];
      // 更新响应数据
      //   responseData.value = data;
      //   isLoading.value = false;
      callback(data);
    };
    // 设置<script>标签的src属性，包括URL和回调函数名
    script.src = `${url}&output=jsonp&callback=${callbackName}`;
    // 设置加载状态

    // 处理加载失败的情况
    script.onerror = function () {
      error.value = new Error("Failed to load data.");
    };
    // 将<script>标签添加到文档中
    document.body.appendChild(script);
  }
  return {
    error,
    fetchData,
  };
}
