
<template>
    <Modal
        v-model="FEHPVBmodal"
        title="表单提交"
        footer-hide
    >
        <div>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <FormItem label="Name" prop="name">
                  <Input v-model="formValidate.name" placeholder="name"></Input>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button @click="" style="margin-left: 8px">取消</Button>
              </FormItem>
          </Form>
        </div>
    </Modal>
</template>

<script>
export default {
  data(){
    return {
        FEHPVBmodal: true,
        formValidate: {
            name: '',
        },
        ruleValidate: {
            name: [
                { required: true, message: 'error', trigger: 'blur' }
            ]
        }
    }
  },
  methods: {
      handleSubmit (name) {
          this.$refs[name].validate((valid) => {
              if (valid) {
                  this.$Message.success('Success!');
              } else {
                  this.$Message.error('Fail!');
              }
          })
      }
  }
}
</script>
