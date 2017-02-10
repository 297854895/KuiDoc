<template>
  <div class="doc-div">
    <h2>DropDown</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-drop-down :menu="[
        {text: 'Menu one'},
        {text: 'Menu two'},
        {text: 'Menu three'}
      ]">Dropdown</k-drop-down>
    <k-drop-down icon="fa fa-chrome" type="info" :menu="[
        {text: 'Menu one', icon: 'fa fa-heart'},
        {text: 'Menu two'},
        {text: 'Menu three'}
      ]">Dropdown</k-drop-down>
    <k-drop-down type="primary" :menu="[
        {text: 'Menu one'},
        {text: 'Menu two'},
        {text: 'Menu three'}
      ]">Dropdown</k-drop-down>
    <k-drop-down type="success" :menu="[
        {text: 'Menu one'},
        {text: 'Menu two'},
        {text: 'Menu three'}
      ]">Dropdown</k-drop-down>
    <k-drop-down type="warning" :menu="[
      {text: 'Menu one'},
      {text: 'Menu two'},
      {text: 'Menu three'}
      ]">Dropdown</k-drop-down>
    <k-drop-down type="danger" :menu="[
        {text: 'Menu one'},
        {text: 'Menu two'},
        {text: 'Menu threexxxxxxxxxxxxxxxxxxx'}
      ]">Dropdown</k-drop-down>
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
