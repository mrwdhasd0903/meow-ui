<template>
  <div class="meexample-icon">
    <me-icon v-for="(item, index) in iconArr" :key="index" :name="item"></me-icon>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      iconArr: [
        "i-yanjing-off",
        "i-yanjing-on",
        "i-artboard-fill",
        "i-blur-off-fill",
        "i-anticlockwise-fill",
        "i-brush-3-line",
        "i-artboard-2-line",
        "i-artboard-line",
        "i-clockwise-fill",
        "i-brush-fill",
        "i-blur-off-line",
        "i-anticlockwise-2-line",
        "i-clockwise-line",
        "i-anticlockwise-line",
        "i-clockwise-2-line",
        "i-brush-4-line",
        "i-contrast-drop-2-fill",
        "i-brush-2-line",
        "i-contrast-fill",
        "i-contrast-line",
        "i-crop-line",
        "i-crop-2-line",
        "i-anticlockwise-2-fill",
        "i-edit-box-line",
        "i-brush-2-fill",
        "i-hammer-line",
        "i-clockwise-2-fill",
        "i-layout-column-line",
        "i-layout-line",
        "i-paint-brush-fill",
        "i-palette-fill",
        "i-palette-line",
        "i-magic-line",
        "i-quill-pen-line",
        "i-scissors-2-line",
        "i-magic-fill",
        "i-screenshot-line",
        "i-t-box-line",
        "i-contrast-drop-fill",
        "i-chuangkou-quanping-1",
        "i-chuangkou-suoxiao-2",
        "i-chuangkou-suoxiao-1",
        "i-chuangkou-1",
        "asd",
        "i-xingbie-a",
        "i-xingbie-nv-a",
        "i-xingbie-nan-a",
        "i-xingbie-b",
        "i-xingbie-nv-b",
        "i-xingbie-nan-b",
        "i-xingbie-c",
        "asd",
        "i-chunv",
        "i-juxie",
        "i-baiyang",
        "i-mojie",
        "i-sheshou",
        "i-shizi",
        "i-shuangyu",
        "i-shuangzi",
        "i-shuiping",
        "i-tiancheng",
        "i-tianxie",
        "i-jinniu",
        "asd",
        "i-user",
        "i-add-user",
        "i-remove-user",
        "i-edit-user",
        "i-setting-user",
        "i-user-approval",
        "i-user-list",
        "i-user-group",
        "i-user-filled",
        "i-user-identification-a",
        "i-user-online",
        "i-user-follow",
        "i-user-simulation",
        "i-user-avatar-filled-alt",
        "i-user-credentials",
        "i-user-activity",
        "i-user-avatar-filled",
        "i-user-profile",
        "i-user-avatar",
        "i-user-certification",
        "i-user-identification",
        "i-user-role",
        "i-user-favorite-alt",
        "i-user-data",
        "i-user1",
        "i-user-admin",
        "asd",
        "i-wenjian-a",
        "i-wenjian-b",
        "i-wenjian-c",
        "i-wenjian-d",
        "i-wenjian-e",
        "i-wenjian-qubiezhen",
        "i-wenjian-xiazai",
        "i-wenjian-f",
        "i-wenjian-shangchuan-b",
        "i-wenjian-g",
        "i-wenjian-h",
        "i-wenjian-i",
        "i-wenjian-shangchuan-a",
        "i-wenjian-j",
        "i-wenjian-k",
        "i-wenjian-o",
        "i-wenjian-p",
        "i-wenjian-q",
        "i-wenjian-r",
        "i-wenjian-s",
        "i-wenjian-t",
        "i-wenjian-u",
        "i-wenjian-v",
        "i-wenjian-w",
        "i-wenjian-x",
        "i-wenjian-y",
        "i-wenjian-z",
        "i-wenjian-star",
        "i-wenjian-pdf",
        "asd",
        "i-shezhi-f",
        "i-shezhi-e",
        "i-anquan-a",
        "i-shezhi-d",
        "i-shezhi-b",
        "i-wangluo-a",
        "i-guanli-a",
        "i-shezhi",
        "i-shezhi-a",
        "i-anquan",
        "i-bangzhu-a",
        "asd",
        "i-caidan-a",
        "i-erweima-a",
        "i-erweima-b",
        "i-erweima-c",
        "i-fanhui-a",
        "i-home-a",
        "i-lanya-a",
        "i-lanya-b",
        "i-lingsheng-a",
        "i-lingsheng-b",
        "i-maikefeng-a",
        "i-soayisao-a",
        "i-suo-a",
        "i-suo-b",
        "i-suo-c",
        "i-tiaoxingma-a",
        "i-tiaoxingma-b",
        "i-tiaoxingma-c",
        "i-tingtong-a",
        "i-tingtong-b",
        "i-wifi-a",
        "i-wifi-b",
        "i-xiangji-a",
        "i-xiangji-b",
        "i-xinhao-a",
        "i-xinhao-b",
        "i-xinhao-c",
        "i-xinhao-d",
        "i-yaoyiyao-a",
        "i-yaoyiyao-b",
        "i-yinliang-a",
        "asd",
        "i-shubiao-a",
        "i-shubiao-b",
        "i-guanbiao-a",
        "i-guangbiao-b",
        "i-guangbiao-c",
        "i-guangbiao-d",
        "i-guangbiao-e",
        "i-guangbiao-f",
        "i-guangbiao-g",
        "i-guangbiao-h",
        "i-guangbiao-i",
        "i-guangbiao-j",
        "i-guangbiao-k",
        "i-shoushi-a-cai",
        "i-shoushi-a-zan",
        "i-shoushi-b-cai",
        "i-shoushi-b-zan",
        "i-shoushi-c-b",
        "i-shoushi-c-cai",
        "i-shoushi-c-l",
        "i-shoushi-c-r",
        "i-shoushi-c-t",
        "i-shoushi-c-zan",
        "i-shoushi-dianji-a",
        "i-shoushi-dianji-b",
        "i-shoushi-fanda-a",
        "i-shoushi-huadong-a",
        "i-shoushi-huadong-b",
        "asd",
        "i-jiantou-a-b",
        "i-jiantou-a-l",
        "i-jiantou-a-r",
        "i-jiantou-a-t",
        "i-jiantou-b-b",
        "i-jiantou-b-l",
        "i-jiantou-b-r",
        "i-jiantou-b-t",
        "i-jiantou-c-b",
        "i-jiantou-c-l",
        "i-jiantou-c-r",
        "i-jiantou-c-t",
        "i-jiantou-d-b",
        "i-jiantou-d-l",
        "i-jiantou-d-r",
        "i-jiantou-d-t",
        "i-jiantou-e-b",
        "i-jiantou-e-l",
        "i-jiantou-e-r",
        "i-jiantou-e-t",
        "i-jiantou-f-b",
        "i-jiantou-f-l",
        "i-jiantou-f-r",
        "i-jiantou-f-t",
        "i-jiantou-g-b",
        "i-jiantou-g-l",
        "i-jiantou-g-r",
        "i-jiantou-g-t",
        "i-jiantou-h-b",
        "i-jiantou-h-l",
        "i-jiantou-h-r",
        "i-jiantou-h-t",
        "i-jiantou-i-b",
        "i-jiantou-i-l",
        "i-jiantou-i-r",
        "i-jiantou-i-t",
        "i-jiantou-j-b",
        "i-jiantou-j-l",
        "i-jiantou-j-r",
        "i-jiantou-j-t",
        "i-loading",
        "i-loading-doc",
        "i-shezhi"
      ]
    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.meexample-icon {
  font-size: 50px;
}
</style>