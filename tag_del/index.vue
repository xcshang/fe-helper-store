<template>
  <div class="m-del-tag">
    <Poptip v-model="FEHPVBpopVisible">
      <div solt="title"></div>
      <div slot="content" class="m-del-pop-content">
        <p>{{delContent}}</p>
        <div class="m-button">
          <Button size="small" type="error" @click="ok">删除</Button>
          <Button style="margin-left: 12px;" size="small" @click="cancel">取消</Button>
        </div>
      </div>
      <Tag v-if="FEHPVBshow" closable @on-close="handleClose">{{tagName}}</Tag>
    </Poptip>
  </div>
</template>

<script> 
  import '@feHelper/tag_del/style.less'
  
  export default {
    name: 'tag-del',
    props: {
      value: {
        type: [String, Number]
      },
      delContent: {
        type: String,
        default: "确认要删除吗?"
      },
      tagName: {
        type: String,
        default: '标签一'
      }
    },
    data() {
      return {
        FEHPVBshow: true,
        FEHPVBpopVisible: false
      }
    },
    methods: {
      handleClose() {
        this.FEHPVBpopVisible = true;
      },
      ok() {
        this.FEHPVBshow = false;
        this.$emit('on-del', this.value || '')
        this.cancel()
      },
      cancel() {
        this.FEHPVBpopVisible = false;
      }
    }
  }
</script>