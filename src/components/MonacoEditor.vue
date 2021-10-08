<template>
  <div class="flex flex-direction">
    <p>语言：{{ option.language }}</p>
    <p>主题：{{ option.theme }}</p>
    <van-button @click="onSaveCode">保存</van-button>
    <div>
      是否修改<view :class="isChange ? 'text-yellow' : 'text-green'">{{
        isChange ? "true" : "false"
      }}</view>
    </div>
    <div
      ref="container"
      style="height: 100vh; width: 100%; text-align: left"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import {
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from "vue";
import * as monaco from "monaco-editor";
import { Toast } from "vant";

let monacoEditor = reactive({} as monaco.editor.IStandaloneCodeEditor);
let container = ref();
const languages = reactive([
  {
    text: "java",
  },
  {
    text: "python",
  },
  {
    text: "typpescript",
  },
  {
    text: "javascript",
  },
]);

const isChange = ref(false);
const option = reactive({
  language: "python",
  theme: "vs-dark",
  readOnly: false,
  value: "内容",
});

onMounted(() => {
  monacoEditor = monaco.editor.create(container.value, {
    value: option.value,
    readOnly: false,
    language: "java",
    theme: "vs-dark",
  });
  monacoEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
    option.value = monacoEditor.getValue();
    isChange.value = false;
    Toast.success("ctrl+s 保存成功");
  });
  monacoEditor.onKeyUp((e) => {
    const value = monacoEditor.getValue();
    console.log("value", value);
    console.log("data.value", option.value);
    if (value !== option.value) {
      isChange.value = true;
    } else {
      isChange.value = false;
    }
  });
});

watch([isChange], (newIsChange, oldIsChange) => {
  console.log(option.value);
  console.log("newIsChange", newIsChange);
  console.log("oldIsChange", oldIsChange);
});

watch([option.value], (newData, oldData) => {
  console.log("newDat", newData);
  console.log("oldData", oldData);
});

onUnmounted(() => {
  monacoEditor.dispose();
});

const onSaveCode = () => {
  isChange.value = false;
  option.value = monacoEditor.getValue();
  console.log("+++++", monacoEditor.getValue());
  Toast.success("保存成功");
};

</script>
