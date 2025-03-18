import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const categoryList = ref([]);

  // action 获取导航列表数据
  const getCategory = async () => {
    let res = await getCategoryAPI();
    console.log("res", res);
    if (res.code == "1") {
      categoryList.value = res.result;
    } else {
      this.$message.error("获取导航列表失败");
    }
  };

  return { categoryList, getCategory };
});
