<template>
  <div class="doc-div">
    <h2>Switch</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-switch :callBack="switchCallBack"></k-switch>
  </div>
</template>
<script>
  export default{
    methods: {
      switchCallBack(status, fn) {
        console.log(status);
        // fn(false);
      },
    }
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
