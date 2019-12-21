<template>
  <div class="FEtagGroup" v-if="FEHPVBtagGroup.length">
    <Tag
      v-for="(item, index) in FEHPVBtagGroup"
      closable
      @on-close="FEHPVBdelTag(index)"
    >{{item.label}}</Tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FEHPVBtagGroup: [
        {
          label: "tag1",
          value: 1
        },
        {
          label: "tag2",
          value: 2
        }
      ]
    };
  },
  methods: {
    FEHPVBdelTag(index) {
      this.FEHPVBtagGroup.splice(index, 1);
    }
  }
};
</script>

