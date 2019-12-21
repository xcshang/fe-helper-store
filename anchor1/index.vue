<template>
  <div style="padding: 50px">
    <!--设置 :affix="false" 可不浮动-->
    <Anchor show-ink>
      <AnchorLink href="#base1" title="锚点1" />
      <AnchorLink href="#base2" title="锚点2" />
    </Anchor>
    <div id="base1" style="height:500px">111111111</div>
    <div id="base2" style="height:500px">222222222</div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>