
<template>
  <Modal v-model="FEHPVBmodal" title="系统提示" footer-hide>
    <div class="fehelp-modal3">
      <Alert type="success" show-icon>
        title
        <span slot="desc">Content</span>
      </Alert>
      <div slot="footer" class="fehelp-modal3-btn">
        <div class="fehelp-modal3-btn-right">
          <Button @click="FEHPVBodalOk" type="primary">确认</Button>
          <Button @click="FEHPVBmodalCancel">取消</Button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import '@feHelper/modal3/style.css'
export default {
  data() {
    return {
      FEHPVBmodal: true
    };
  },
  methods:{
      FEHPVBodalOk(){
        this.FEHPVBmodal = false
      },
      FEHPVBmodalCancel(){
          this.FEHPVBmodal = false
      }
  }
};
</script>
