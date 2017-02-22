<template>
  <div class="doc-div">
    <h2>Input</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>输入框(k-input)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">k-input将创建一个输入框，接受参数以设置其样式、按钮、回调方法。</p>
      <h5>参数</h5>
      <k-table
          :head="[
            {text: '属性', dataIndex: 'attr'},
            {text: '类型', dataIndex: 'type'},
            {text: '默认', dataIndex: 'def'},
            {text: '说明', dataIndex: 'des'}
          ]"
          :data="[
            {attr: 'id', type: 'String', des: '设置input的id值', def: ''},
            {attr: 'type', type: 'String', des: '设置input的type，可选值：text，password，number等', def: 'text'},
            {attr: 'value', type: 'String', des: '设置input的value', def: ''},
            {attr: 'placeholder', type: 'String', des: '设置input的placeholder属性', def: ''},
            {attr: 'width', type: 'String', des: '设置input的宽度', def: '120px'},
            {attr: 'iconBefore', type: 'String', des: '设置input左边的icon，采用font-awesome字体图标，格式如：fa fa-xxx', def: ''},
            {attr: 'iconAfter', type: 'String', des: '设置input右边的icon，采用font-awesome字体图标，格式如：fa fa-xxx', def: ''},
            {attr: 'textBefore', type: 'String', des: '设置input左边的text', def: ''},
            {attr: 'textAfter', type: 'String', des: '设置input右边的text', def: ''},
            {attr: 'btnCallBack', type: 'Object', des: '设置input左右icon或text的点击回调方法，格式如：{after: function， before: function}', def: ''},
            {attr: 'selectBefore', type: 'Obejct', des: `设置input左边下拉选择框的数据，格式如：[{text: 'xxx', key: 'xxx'},{...}]`, def: ''},
            {attr: 'selectAfter', type: 'Obejct', des: `设置input右边下拉选择框的数据，格式如：[{text: 'xxx', key: 'xxx'},{...}]`, def: ''},
            {attr: 'onChange', type: 'Function', des: '设置输入框value发生改变时候的回调方法，该方法接受value参数', def: ''},
            {attr: 'style', type: 'String', des: '设置input的style', def: ''},
          ]"
          :options="{
            headColor: '#888',
            headBgColor: '#e0e0e0',
            size: 14
          }"
          ></k-table>
      <h5>基本示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <h5>基本演示</h5>
      <k-input value="Basic input"></k-input>
      <h5>Icon示例</h5>
      <k-code :code="this.code_1" type="html"></k-code>
      <h5>Icon演示</h5>
      <k-input iconBefore="fa fa-chrome" placeholder="Chrome"></k-input>
      <div style="height: 20px;clear:both"></div>
      <k-input iconAfter="fa fa-chrome" placeholder="Chrome"></k-input>
      <h5>Text示例</h5>
      <k-code :code="this.code_2" type="html"></k-code>
      <h5>Text演示</h5>
      <k-input textBefore="账号"></k-input>
      <div style="height: 20px;clear:both"></div>
      <k-input textAfter="账号"></k-input>
      <h5>Select示例</h5>
      <k-code :code="this.code_3" type="html"></k-code>
      <h5>Select演示</h5>
      <k-input
        :selectBefore="[
          {key: 'Http://', text: 'Http://'},
          {key: 'Https://', text: 'Https://'}
        ]"
        :selectAfter="[
          {key: '.cn', text: '.cn'},
          {key: '.com', text: '.com'}
        ]"></k-input>
      <h5>回调示例</h5>
      <k-code :code="this.code_4" type="html"></k-code>
      <k-code :code="this.code_5" type="js"></k-code>
      <h5>回调演示</h5>
      <k-input
        :onChange="inputValueChange"
        iconAfter="fa fa-search"
        placeholder="Search..."
        :btnCallBack="{
          after: clickCallBack
        }"></k-input>
      <p class="doc-p">你输入了：{{this.$data.inputValue}}</p>
      <p class="doc-p">你点击了搜索按钮：{{this.$data.searchBtClick}} 次</p>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        inputValue: '',
        searchBtClick: 0,
        code_0:
`<k-input value="Basic input"></k-input>`,
        code_1:
`<k-input iconBefore="fa fa-chrome" placeholder="Chrome"></k-input>
<k-input iconAfter="fa fa-chrome" placeholder="Chrome"></k-input>`,
        code_2:
`<k-input textBefore="账号"></k-input>
<k-input textAfter="账号"></k-input>`,
        code_3:
`<k-input
  :selectBefore="[
    {key: 'Http://', text: 'Http://'},
    {key: 'Https://', text: 'Https://'}
  ]"
  :selectAfter="[
    {key: '.cn', text: '.cn'},
    {key: '.com', text: '.com'}
  ]"></k-input>`,
        code_4:
`<k-input
  :onChange="inputValueChange"
  iconAfter="fa fa-search"
  placeholder="Search..."
  :btnCallBack="{
    after: clickCallBack
  }"></k-input>
<p class="doc-p">你输入了：{{this.$data.inputValue}}</p>
<p class="doc-p">你点击了搜索按钮：{{this.$data.searchBtClick}} 次</p>`,
        code_5:
`export default{
  data() {
    return {
      inputValue: '',
      searchBtClick: 0
    }
  }
  methods: {
    inputValueChange(value) {
      this.$data.inputValue = value;
    },
    clickCallBack() {
      this.$data.searchBtClick += 1;
    },
  }
}`
      }
    },
    methods: {
      inputValueChange(value) {
        this.$data.inputValue = value;
      },
      clickCallBack() {
        this.$data.searchBtClick += 1;
      },
    }
  }
</script>
<style scoped>

</style>
