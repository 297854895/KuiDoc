<template>
  <div class="doc-div">
    <h2>CheckBox</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-check-box :checkChange="checkBoxChange" :checkData="[
      {name: '苹果', checked: true, key: 'apple'},
      {name: '西瓜', key: 'xg'},
      {name: '橘子', key: 'orange'},
      {name: '南瓜', key: 'ng'}
    ]"></k-check-box>
    <div style="height:20px;clear:both"></div>
    <k-check-box all="true" :checkChange="checkBoxChange" checkType="mut" :checkData="[
      {name: '苹果', checked: true, key: 'apple'},
      {name: '西瓜', key: 'xg'},
      {name: '橘子', key: 'orange'},
      {name: '南瓜', key: 'ng'}
    ]"></k-check-box>
    <div style="height:20px;clear:both"></div>
    <k-check-box type="primary" :checkData="[
      {name: '苹果', checked: true, key: 'apple'},
      {name: '西瓜', key: 'xg'},
      {name: '橘子', key: 'orange'},
      {name: '南瓜', key: 'ng'}
    ]"></k-check-box>
    <div style="height:20px;clear:both"></div>
    <k-check-box type="primary" checkType="mut" :checkData="[
      {name: '苹果', checked: true, key: 'apple'},
      {name: '西瓜', key: 'xg'},
      {name: '橘子', key: 'orange'},
      {name: '南瓜', key: 'ng'}
    ]"></k-check-box>
  </div>
</template>
<script>
  export default{
    methods: {
      checkBoxChange(data) {
        console.log('checkBoxChange', data);
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
