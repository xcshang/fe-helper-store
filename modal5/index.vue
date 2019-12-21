
<template>
  <Modal v-model="FEHPVBModal" title="删除" footer-hide :mask-closable="false">
        <div>
        确认删除吗？
        <div slot="footer" class="FEmodalBtnBox">
          <div class="FEmodalBtn">
          <Button @click="FEHPVBdelOK" type="error">确认</Button>
          <Button @click="FEHPVBModal=false">取消</Button>
          </div>
        </div>
        </div>
      </Modal>
</template>

<script>
export default {
  data(){
    return {
      FEHPVBModal: true
    }
  },
  methods:{
    FEHPVBdelOK(){

    }
  }
};
</script>
