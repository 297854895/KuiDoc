<template>
  <div class="doc-div">
    <h2>ButtonGroup</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>按钮组(k-button-group)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">
        k-button-group将创建一个按钮组，接受radius参数以设置按钮组是否显示为圆角样式,接受置入k-button或者k-drop-down两种组件构成一个按钮组。
        <k-alert type="warning">注：同一个按钮组中的k-button的size属性必须一致，且如需在按钮组中同时加入k-button与k-drop-down，k-button的size属性必须为normal。</k-alert>
      </p>
      <h5>参数</h5>
      <k-table
          :head="[
            {text: '属性', dataIndex: 'attr'},
            {text: '类型', dataIndex: 'type'},
            {text: '说明', dataIndex: 'des'},
            {text: '默认', dataIndex: 'def'}
          ]"
          :data="[
            {attr: 'radius', type: 'String', des: '设置是否有圆角，可选值：true，false', def: 'true'}
          ]"
          :options="{
              headColor: '#888',
              headBgColor: '#e0e0e0'
            }"
          ></k-table>
      <h5>圆角示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <h5>圆角演示</h5>
      <k-button-group radius="false">
        <k-button>Left</k-button>
        <k-button>Mid</k-button>
        <k-button width="100px">Mid</k-button>
        <k-button>Mid</k-button>
        <k-button>Right</k-button>
      </k-button-group>
      <h5>放置多类型k-button示例</h5>
      <k-code :code="this.code_1" type="html"></k-code>
      <h5>放置多类型k-button演示</h5>
      <k-button-group>
        <k-button type="info">Left</k-button>
        <k-button type="success">Mid</k-button>
        <k-button type="warning">Mid</k-button>
        <k-button type="danger">Mid</k-button>
        <k-button>Mid</k-button>
        <k-button type="primary">Right</k-button>
      </k-button-group>
      <h5>k-button与k-drop-down组合示例</h5>
      <k-code :code="this.code_2" type="html"></k-code>
      <h5>k-button与k-drop-down组合演示</h5>
      <k-button-group>
        <k-drop-down type="danger" :menu="[
          {text: 'Menu one', key: 'one'},
          {text: 'Menu two', key: 'two'},
          {text: 'Menuthreexxxxxxxxxxxxxxxxxxxxxxxxxx', key: 'three'}
        ]">Dropdown</k-drop-down>
        <k-button type="danger">Mid</k-button>
        <k-drop-down type="danger" :menu="[
          {text: 'Menu one', key: 'one'},
          {text: 'Menu two', key: 'two'},
          {text: 'Menuthreexxxxxxxxxxxxxxxxxxxxxxxxxx', key: 'three'}
        ]">Dropdown</k-drop-down>
        <k-button type="danger">Right</k-button>
        <k-drop-down type="danger" :menu="[
          {text: 'Menu one', key: 'one'},
          {text: 'Menu two', key: 'two'},
          {text: 'Menuthreexxxxxxxxxxxxxxxxxxxxxxxxxx', key: 'three'}
        ]">Dropdown</k-drop-down>
      </k-button-group>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        code_0:
`<k-button-group radius="false">
  <k-button>Left</k-button>
  <k-button>Mid</k-button>
  <k-button width="100px">Mid</k-button>
  <k-button>Mid</k-button>
  <k-button>Right</k-button>
</k-button-group>`,
        code_1:
`<k-button-group>
  <k-button type="info">Left</k-button>
  <k-button type="success">Mid</k-button>
  <k-button type="warning">Mid</k-button>
  <k-button type="danger">Mid</k-button>
  <k-button>Mid</k-button>
  <k-button type="primary">Right</k-button>
</k-button-group>`,
        code_2:
`<k-button-group>
  <k-button type="danger">Left</k-button>
  <k-button type="danger">Mid</k-button>
  <k-drop-down type="danger" :menu="[
      {text: 'Menu one', key: 'one'},
      {text: 'Menu two', key: 'two'},
      {text: 'Menuthreexxxxxxxxxxxxxxxxxxxxxxxxxx', key: 'three'}
    ]">Dropdown</k-drop-down>
  <k-button type="danger">Mid</k-button>
  <k-button type="danger">Right</k-button>
</k-button-group>`
      }
    }
  }
</script>
