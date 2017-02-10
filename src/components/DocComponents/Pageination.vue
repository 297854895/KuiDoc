<template>
  <div class="doc-div">
    <h2>Pageination</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-page :pageSet="{
        current: 1,
        total: 20,
        callBack: pageCallBack
      }"></k-page>
    <div style="height:20px;clear:both"></div>
    <k-page :pageSet="{
        current: 1,
        total: 20,
        size: 'small',
        callBack: pageCallBack
      }"></k-page>
  </div>
</template>
<script>
  export default{
    methods: {
      pageCallBack(page) {
        console.log(page);
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
