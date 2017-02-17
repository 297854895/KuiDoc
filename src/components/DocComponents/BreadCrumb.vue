<template>
  <div class="doc-div">
    <h2>BreadCrumb</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>面包屑(k-breadcrumb)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">k-breadcrumb将创建一个面包屑组件，接受数组参数options以设置按钮的样式以及回调方法。</p>
      <h5>参数</h5>
      <k-table
          :head="[
            {text: '属性', dataIndex: 'attr'},
            {text: '类型', dataIndex: 'type'},
            {text: '默认', dataIndex: 'def'},
            {text: '说明', dataIndex: 'des'}
          ]"
          :data="[
            {attr: 'options', type: 'Array', des: '设置面包屑数据，如：[{...}]', def: 'null'},
            {attr: 'label', type: 'String', des: '设置该项名称，置于options属性中，如[{label: xxx}]，该属性为必须设置', def: ''},
            {attr: 'key', type: 'String', des: '设置该项key，置于options属性中，如[{key: xxx}]，该属性为非必须设置', def: ''},
            {attr: 'href', type: 'String', des: '设置跳转路径，置于options属性中，如[{href: xxx}]，该属性为非必须设置', def: ''},
            {attr: 'callBack', type: 'Function', des: '设置点击回调函数，置于options属性中，如[{callBack: Function}]，该属性为非必须设置。该方法接受点击项数据得参数，如：{label: xxx, key: xxx}', def: ''}
          ]"
          :options="{
              headColor: '#888',
              headBgColor: '#e0e0e0'
            }"
          ></k-table>
      <k-alert type="warning">注：若k-breadcrumb接受的options参数的长度小于1，则该组件将不会执行渲染。</k-alert>
      <h5>基本示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <k-code :code="this.code_1"></k-code>
      <h5>基本演示</h5>
      <p class="doc-p">你点击的路径</p>
      <p class="doc-p">label为：{{this.$data.click_path.label}}</p>
      <p class="doc-p">key为：{{this.$data.click_path.key}}</p>
      <k-breadcrumb :options="[
        {label: 'One', key: 'oneKey', callBack: callBack},
        {label: 'Two', key: 'twoKey', callBack: callBack},
        {label: 'Three'}
      ]"></k-breadcrumb>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        click_path: '',
        code_0:
`<p>你点击的路径</p>
<p>label为：{{this.$data.click_path.label}}</p>
<p>key为：{{this.$data.click_path.key}}</p>
<k-breadcrumb :options="[
  {label: 'One', key: 'oneKey', callBack: callBack},
  {label: 'Two', key: 'twoKey', callBack: callBack},
  {label: 'Three'}
]"></k-breadcrumb>`,
        code_1:
`export default{
  data() {
    return {
      click_path: ''
    }
  },
  methods: {
    callBack(data) {
      this.$data.click_path = data;
    }
  }
}`
      }
    },
    methods: {
      callBack(data) {
        this.$data.click_path = data;
      }
    }
  }
</script>
<style scoped>

</style>
