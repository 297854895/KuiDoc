<template>
  <div class="doc-div">
    <h2>Menu</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-menu
      current="Menu-0"
      :menu="[
        {title: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
          {title: 'menu-0', icon: 'fa fa-chrome', key: 'menu-0', callBack: clickCallBack},
          {title: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
          {title: 'menu-2', key: 'menu-2'},
          {title: 'menu-3', key: 'menu-3'}
        ]},
        {title: 'Menu-1', key: 'Menu-1', callBack: clickCallBack, menu: [
          {title: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
          {title: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
          {title: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
          {title: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
        ]},
        {title: 'Menu-2', key: 'Menu-2'},
        {title: 'Menu-3', key: 'Menu-3'},
        {title: 'Menu-4', key: 'Menu-4'}
      ]"></k-menu>
      <div style="height:20px;clear:both"></div>
      <div style="width: 250px">
        <k-menu
          direction="y"
          current="Menu-0"
          :menu="[
            {title: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
              {title: 'menu-0', key: 'menu-0', callBack: clickCallBack},
              {title: 'menu-1', key: 'menu-1'},
              {title: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
              {title: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
            ]},
            {title: 'Menu-1', key: 'Menu-1', menu: [
              {title: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
              {title: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
              {title: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
              {title: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
            ]},
            {title: 'Menu-2', key: 'Menu-2'},
            {title: 'Menu-3', key: 'Menu-3'},
            {title: 'Menu-4', key: 'Menu-4'}
          ]"></k-menu>
        </div>
    <div style="height:20px;clear:both"></div>
    <div style="width: 250px">
      <k-menu
        direction="y"
        current="Menu-0"
        border="none"
        :menu="[
          {title: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
            {title: 'menu-0', key: 'menu-0', callBack: clickCallBack},
            {title: 'menu-1', key: 'menu-1'},
            {title: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
            {title: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
          ]},
          {title: 'Menu-1', key: 'Menu-1', menu: [
            {title: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
            {title: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
            {title: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
            {title: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
          ]},
          {title: 'Menu-2', key: 'Menu-2'},
          {title: 'Menu-3', key: 'Menu-3'},
          {title: 'Menu-4', key: 'Menu-4'}
        ]"></k-menu>
      </div>
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
