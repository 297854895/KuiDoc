<template>
  <div class="doc-div">
    <h2>DropDown</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>下拉按钮(k-drop-down)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">k-drop-down将创建一个下拉按钮，接受参数以设置按钮的样式以及回调方法。</p>
      <h5>参数</h5>
      <k-table
          :head="[
            {text: '属性', dataIndex: 'attr'},
            {text: '类型', dataIndex: 'type'},
            {text: '默认', dataIndex: 'def'},
            {text: '说明', dataIndex: 'des'}
          ]"
          :data="[
            {attr: 'type', type: 'String', des: '设置类型，可选值：primary，info，danger，success，warning，default', def: 'default'},
            {attr: 'menu', type: 'Array', des: `设置下拉菜单选项，接受数组数据，[{text: 'name', key: 'thiskey', icon: 'fa fa-xxx', callBack: 'function()'},]`, def: ''},
            {attr: 'icon', type: 'String', des: '设置按钮左边的icon，基于font-awesome字体图标，格式如：fa fa-xxx', def: ''}
          ]"
          :options="{
              headColor: '#888',
              headBgColor: '#e0e0e0'
            }"
          ></k-table>
      <h5>默认示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <h5>默认演示</h5>
      <k-drop-down :menu="[
        {text: 'Menu one', key: 'one'},
        {text: 'Menu two', key: 'two'},
        {text: 'Menu three', key: 'three'}
      ]">Dropdown</k-drop-down>
      <h5>类型示例</h5>
      <k-code :code="this.code_1" type="html"></k-code>
      <h5>类型演示</h5>
      <k-drop-down type="info" :menu="[
          {text: 'Menu one', key: 'one'},
          {text: 'Menu two', key: 'two'},
          {text: 'Menu three', key: 'three'}
        ]">Dropdown</k-drop-down>
      <k-drop-down type="primary" :menu="[
          {text: 'Menu one', key: 'one'},
          {text: 'Menu two', key: 'two'},
          {text: 'Menu three', key: 'three'}
        ]">Dropdown</k-drop-down>
      <k-drop-down type="success" :menu="[
          {text: 'Menu one', key: 'one'},
          {text: 'Menu two', key: 'two'},
          {text: 'Menu three', key: 'three'}
        ]">Dropdown</k-drop-down>
      <k-drop-down type="warning" :menu="[
          {text: 'Menu one', key: 'one'},
          {text: 'Menu two', key: 'two'},
          {text: 'Menu three', key: 'three'}
        ]">Dropdown</k-drop-down>
      <k-drop-down type="danger" :menu="[
          {text: 'Menu one', key: 'one'},
          {text: 'Menu two', key: 'two'},
          {text: 'Menuthreexxxxxxxxxxxxxxxxxxxxxxxxxx', key: 'three'}
        ]">Dropdown</k-drop-down>
      <h5>Icon示例</h5>
      <k-code :code="this.code_2" type="html"></k-code>
      <h5>Icon演示</h5>
      <k-drop-down icon="fa fa-chrome" :menu="[
          {text: 'Menuoneoneoooooo oooooooooooooooooooo', icon: 'fa fa-heart', key: 'one'},
          {text: 'Menu two', key: 'two'},
          {text: 'Menu three', key: 'three'}
        ]">Dropdown</k-drop-down>
      <h5>回调示例</h5>
      <k-code :code="this.code_3" type="html"></k-code>
      <k-code :code="this.code_4" type="javascript"></k-code>
      <h5>回调演示</h5>
      <p class="doc-p">你点击了DropDown中的：{{this.$data.callBackKey}}</p>
      <k-drop-down
        :menu="[
          {text: 'Menu one', callBack: this.DropdownCallBack, key: 'Menu one'},
          {text: 'Menu two', callBack: this.DropdownCallBack, key: 'Menu two'},
          {text: 'Menu three', callBack: this.DropdownCallBack, key: 'Menu three'}
        ]">Dropdown</k-drop-down>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        callBackKey: '',
        code_0:
`<k-drop-down
  :menu="[
    {text: 'Menu one', key: 'one'},
    {text: 'Menu two', key: 'two'},
    {text: 'Menu three', key: 'three'}
  ]">Dropdown</k-drop-down>`,
        code_1:
`<k-drop-down type="info"
  :menu="[
    {text: 'Menu one', key: 'one'},
    {text: 'Menu two', key: 'two'},
    {text: 'Menu three', key: 'three'}
  ]">Dropdown</k-drop-down>

<k-drop-down type="primary"
  :menu="[
    {text: 'Menu one', key: 'one'},
    {text: 'Menu two', key: 'two'},
    {text: 'Menu three', key: 'three'}
  ]">Dropdown</k-drop-down>

<k-drop-down type="success"
  :menu="[
    {text: 'Menu one'},
    {text: 'Menu two'},
    {text: 'Menu three'}
  ]">Dropdown</k-drop-down>

<k-drop-down type="warning"
  :menu="[
    {text: 'Menu one', key: 'one'},
    {text: 'Menu two', key: 'two'},
    {text: 'Menu three', key: 'three'}
  ]">Dropdown</k-drop-down>

<k-drop-down type="danger"
  :menu="[
    {text: 'Menu one', key: 'one'},
    {text: 'Menu two', key: 'two'},
    {text: 'Menuthreexxxxxxxxxxxxxxxxxxxxxxxxxx', key: 'three'}
  ]">Dropdown</k-drop-down>`,
        code_2:
`<k-drop-down icon="fa fa-chrome"
  :menu="[
    {text: 'Menuoneoneoooooo oooooooooooooooooooo', icon: 'fa fa-heart', key: 'one'},
    {text: 'Menu two', key: 'two'},
    {text: 'Menu three', key: 'three'}
  ]">Dropdown</k-drop-down>`,
        code_3:
`<span>你点击了DropDown中的：{{this.$data.callBackKey}}</span>
<k-drop-down
  :menu="[
    {text: 'Menu one', callBack: this.DropdownCallBack, key: 'Menu one'},
    {text: 'Menu two', callBack: this.DropdownCallBack, key: 'Menu two'},
    {text: 'Menu three', callBack: this.DropdownCallBack, key: 'Menu three'}
  ]">Dropdown</k-drop-down>`,
        code_4:
`methods: {
  DropdownCallBack(key) {
    this.$data.callBackKey = key;
  }
}`
      }
    },
    methods: {
      DropdownCallBack(key) {
        this.$data.callBackKey = key;
      }
    }
  }
</script>
