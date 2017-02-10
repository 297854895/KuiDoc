<template>
  <div class="doc-div">
    <h2>Select</h2>
    <hr>
    <div style="height: 20px;clear:both"></div>
    <k-select :select="[
      {text: 'Andy', key: 'Andy'},
      {text: 'Kid', key: 'Kid'},
      {text: 'Fzx', key: 'Fzx'},
      {text: 'Pawn', key: 'Pawn'},
      {text: 'Xiao', key: 'Xiao'},
      {text: 'Bengi', key: 'Bengi'},
      {text: 'WeiXiao', key: 'WeiXiao'}
    ]" :selectChange="selectValueChange"></k-select>
    <div style="height: 20px;clear:both"></div>
    <k-select :select="[
      {text: 'Andy', key: 'Andy'},
      {text: 'Kid', key: 'Kid'},
      {text: 'Fzx', key: 'Fzx'},
      {text: 'Pawn', key: 'Pawn'}
    ]" width="160px"></k-select>
    <div style="height: 20px;clear:both"></div>
    <k-select input="true" :select="[
      {text: 'Andy', key: 'Andy'},
      {text: 'Kid', key: 'Kid'},
      {text: 'Fzx', key: 'Fzx'},
      {text: 'Pawn', key: 'Pawn'},
      {text: 'Xiao', key: 'Xiao'},
      {text: 'Bengi', key: 'Bengi'},
      {text: 'WeiXiaoxxxxxxxxxxxxxxxxxxx', key: 'WeiXiao'}
    ]" :selectChange="selectValueChange" placeholder="Please input"></k-select>
  </div>
</template>
<script>
  export default{
    methods: {
      selectValueChange(data) {
        console.log('select Key:', data.key);
        console.log('select Text:', data.text);
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
