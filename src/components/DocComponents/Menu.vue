<template>
  <div class="doc-div">
    <h2>Menu</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>菜单(k-menu)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">
        k-menu将创建一个菜单组件，接受设置参数设置菜单排列方向，菜单选项，回调方法等，菜单默认为取菜单容器宽度的100%。
      </p>
      <h5>参数</h5>
      <k-table
          :head="[
            {text: '属性', dataIndex: 'attr'},
            {text: '类型', dataIndex: 'type'},
            {text: '默认', dataIndex: 'def'},
            {text: '说明', dataIndex: 'des'}
          ]"
          :data="[
            {attr: 'direction', type: 'String', des: '设置菜单的排列方向，可选值：x，y', def: 'x'},
            {attr: 'menu', type: 'Array', des: '设置菜单数据，格式如：[{label: xxx, key: xxx, icon: fa fa-xxx, callBack: function, menu: [{...}]}, {...}]', def: ''},
            {attr: 'current', type: 'String', des: '设置菜单当前active项，值为欲设项的key值，不设置则默认取menu属性中的第一项', def: ''},
            {attr: 'border', type: 'String', des: '设置菜单是否显示border，可选值：true，false', def: 'true'}
          ]"
          :options="{
              headColor: '#888',
              headBgColor: '#e0e0e0'
            }"
          ></k-table>
      <k-alert type="warning">注：menu属性中的label与key为必须的属性</k-alert>
      <k-alert type="warning">注：menu属性中的icon采用font-awesome字体图标，将会显示在该行文字左边，详情移步font-awesome文档</k-alert>
      <k-alert type="warning">注：menu属性的各项数据中可再次包含menu属性，该属性格式与k-menu上的menu属性一致，若有该属性，则该菜单项显示下拉菜单</k-alert>
      <h5>横向菜单示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <h5>横向菜单演示</h5>
      <k-menu
        current="Menu-0"
        :menu="[
          {label: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
          {label: 'menu-0', icon: 'fa fa-chrome', key: 'menu-0', callBack: clickCallBack},
          {label: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
          {label: 'menu-2', key: 'menu-2'},
          {label: 'menu-3', key: 'menu-3'}
          ]},
          {label: 'Menu-1', key: 'Menu-1', callBack: clickCallBack, menu: [
          {label: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
          {label: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
          {label: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
          {label: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
          ]},
          {label: 'Menu-2', key: 'Menu-2'},
          {label: 'Menu-3', key: 'Menu-3'},
          {label: 'Menu-4', key: 'Menu-4'}
        ]"></k-menu>
      <h5>纵向菜单示例</h5>
      <k-code :code="this.code_1" type="html"></k-code>
      <h5>纵向菜单演示</h5>
      <div style="width: 250px">
        <k-menu
          direction="y"
          current="Menu-0"
          :menu="[
            {label: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
            {label: 'menu-0', key: 'menu-0', callBack: clickCallBack},
            {label: 'menu-1', key: 'menu-1'},
            {label: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
            {label: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
            ]},
            {label: 'Menu-1', key: 'Menu-1', menu: [
            {label: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
            {label: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
            {label: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
            {label: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
            ]},
            {label: 'Menu-2', key: 'Menu-2'},
            {label: 'Menu-3', key: 'Menu-3'},
            {label: 'Menu-4', key: 'Menu-4'}
          ]"></k-menu>
      </div>
      <h5>纵向无border菜单示例</h5>
      <k-code :code="this.code_2" type="html"></k-code>
      <h5>纵向无border菜单演示</h5>
      <div style="width: 250px">
        <k-menu
          direction="y"
          current="Menu-0"
          border="false"
          :menu="[
            {label: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
            {label: 'menu-0', key: 'menu-0', callBack: clickCallBack},
            {label: 'menu-1', key: 'menu-1'},
            {label: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
            {label: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
            ]},
            {label: 'Menu-1', key: 'Menu-1', menu: [
            {label: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
            {label: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
            {label: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
            {label: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
            ]},
            {label: 'Menu-2', key: 'Menu-2'},
            {label: 'Menu-3', key: 'Menu-3'},
            {label: 'Menu-4', key: 'Menu-4'}
        ]"></k-menu>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        code_0:
`<k-menu
  current="Menu-0"
  :menu="[
    {label: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
    {label: 'menu-0', icon: 'fa fa-chrome', key: 'menu-0', callBack: clickCallBack},
    {label: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
    {label: 'menu-2', key: 'menu-2'},
    {label: 'menu-3', key: 'menu-3'}
    ]},
    {label: 'Menu-1', key: 'Menu-1', callBack: clickCallBack, menu: [
    {label: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
    {label: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
    {label: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
    {label: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
    ]},
    {label: 'Menu-2', key: 'Menu-2'},
    {label: 'Menu-3', key: 'Menu-3'},
    {label: 'Menu-4', key: 'Menu-4'}
  ]"></k-menu>`,
        code_1:
`<k-menu
  direction="y"
  current="Menu-0"
  :menu="[
    {label: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
    {label: 'menu-0', key: 'menu-0', callBack: clickCallBack},
    {label: 'menu-1', key: 'menu-1'},
    {label: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
    {label: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
    ]},
    {label: 'Menu-1', key: 'Menu-1', menu: [
    {label: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
    {label: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
    {label: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
    {label: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
    ]},
    {label: 'Menu-2', key: 'Menu-2'},
    {label: 'Menu-3', key: 'Menu-3'},
    {label: 'Menu-4', key: 'Menu-4'}
  ]"></k-menu>`,
        code_2:
`<div style="width: 250px">
  <k-menu
    direction="y"
    current="Menu-0"
    border="false"
    :menu="[
      {label: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
      {label: 'menu-0', key: 'menu-0', callBack: clickCallBack},
      {label: 'menu-1', key: 'menu-1'},
      {label: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
      {label: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
      ]},
      {label: 'Menu-1', key: 'Menu-1', menu: [
      {label: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
      {label: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
      {label: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
      {label: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
      ]},
      {label: 'Menu-2', key: 'Menu-2'},
      {label: 'Menu-3', key: 'Menu-3'},
      {label: 'Menu-4', key: 'Menu-4'}
  ]"></k-menu>
</div>`
      }
    },
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

</style>
