
<template>
    <Modal
        v-model="FEHPVBmodal"
        title="title"
        :mask-closable="false"
        footer-hide 
    >
        <div>
            <div>content</div>
            <div slot="footer" class="FEmodalBtnBox">
                <div class="FEmodalBtn">
                    <Button @click="" type="primary">确认</Button>
                    <Button @click="">取消</Button>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
export default {
  data(){
    return {
        FEHPVBmodal: true
    }
  }
}
</script>
