
<template>
  <Button @click="showModal('info')">信息提示</Button>
  <Button @click="confirm">标准</Button>
  <Button @click="custom">自定义按钮文字</Button>
  <Button @click="async">异步关闭</Button>
</template>

<script>
export default {
  methods: {
    showModal() {
      //类型有info、success、warning、error
      this.$Modal.info({
        title: "title",
        content: "<p>Content</p>"
      });
    },
    confirm() {
      this.$Modal.confirm({
        title: "Title",
        content: "<p>Content</p>",
        onOk: () => {
          this.$Message.info("Clicked ok");
        },
        onCancel: () => {
          this.$Message.info("Clicked cancel");
        }
      });
    },
    custom() {
      this.$Modal.confirm({
        title: "Title",
        content: "<p>Content</p>",
        okText: "OK",
        cancelText: "Cancel"
      });
    },
    async() {
      this.$Modal.confirm({
        title: "Title",
        content: "<p>Content</p>",
        loading: true,
        onOk: () => {
          setTimeout(() => {
            this.$Modal.remove();
            this.$Message.info("Asynchronously");
          }, 2000);
        }
      });
    }
  }
};
</script>
