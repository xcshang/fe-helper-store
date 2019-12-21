<template>
    <Modal
        v-model="FEHPVBmodal"
        title="title"
        @on-ok=""
        @on-cancel=""
        :mask-closable="false"
      >
        <div>content</div>
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
