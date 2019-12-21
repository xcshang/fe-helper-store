<template>
  <div>
    <!--table start-->
    <h3>普通表格</h3>
    <table class="FEtable">
      <tr>
        <th>标题1</th>
        <th>标题2</th>
      </tr>
      <tr>
        <td>内容1</td>
        <td>内容2</td>
      </tr>
    </table>
    <br />
    <h3>有下边框</h3>
    <table class="FEtable FEtable-border-bottom">
      <tr>
        <th>标题1</th>
        <th>标题2</th>
      </tr>
      <tr>
        <td>内容1</td>
        <td>内容2</td>
      </tr>
    </table>
    <br />
    <h3>无边框</h3>
    <table class="FEtable FEtable-noborder">
      <tr>
        <th>标题1</th>
        <th>标题2</th>
      </tr>
      <tr>
        <td>内容1</td>
        <td>内容2</td>
      </tr>
    </table>
    <br />
    <h3>左侧标题</h3>
    <table class="FEtable">
      <tr>
        <td class="FEtable-title">标题1</td>
        <td>内容1</td>
        <td class="FEtable-title">标题2</td>
        <td>内容2</td>
      </tr>
      <tr>
        <td class="FEtable-title">标题3</td>
        <td>内容3</td>
        <td class="FEtable-title">标题4</td>
        <td>内容4</td>
      </tr>
    </table>

    <!--table end-->
  </div>
</template>
<script>
export default {};
</script>