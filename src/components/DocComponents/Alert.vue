<template>
  <div class="doc-div">
    <h2>Alert</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <div style="height:20px;clear:both"></div>
    <k-alert size="small">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="info" size="large">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="warning">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="danger">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="success" close="true">This is Alert</k-alert>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
  h2{
    font-size: 26px;
    font-weight: normal;
    text-align: left;
  }
  hr{
    height: 1px;
    border: none;
    background-color: #ddd;
  }
</style>
