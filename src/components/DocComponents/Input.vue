<template>
  <div class="doc-div">
    <h2>Input</h2>
    <hr>
    <div style="height: 20px;clear:both"></div>
    <k-input value="Basic input"></k-input>
    <div style="height: 20px;clear:both"></div>
    <k-input iconBefore="fa fa-chrome" placeholder="Chrome"></k-input>
    <div style="height: 20px;clear:both"></div>
    <k-input textAfter="@"></k-input>
    <div style="height: 20px;clear:both"></div>
    <k-input textBefore="账号"></k-input>
    <div style="height: 20px;clear:both"></div>
    <k-input textBefore="密码" type="password"></k-input>
    <div style="height: 20px;clear:both"></div>
    <k-input textBefore="Http://" :onchange="inputValueChange"></k-input>
    <div style="height: 20px;clear:both"></div>
    <k-input :selectBefore="[
      {key: 'Http://', text: 'Http://'},
      {key: 'Https://', text: 'Https://'}
      ]" :selectAfter="[
      {key: '.cn', text: '.cn'}
      ]" :onchange="inputValueChange"></k-input>
    <div style="height: 20px;clear:both"></div>
    <k-input :onchange="inputValueChange" iconAfter="fa fa-search" placeholder="Search..." :btnCallBack="{
      after: clickCallBack
      }"></k-input>
  </div>
</template>
<script>
  export default{
    methods: {
      inputValueChange(value) {
        console.log('inputValueChange', value);
      },
      clickCallBack() {
        console.log('this is callback');
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
