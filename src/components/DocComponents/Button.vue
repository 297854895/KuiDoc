<template>
  <div class="doc-div">
    <h2>Button</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>按钮(k-button)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">k-button将创建一个按钮，并接受参数以设置按钮的样式以及回调方法。</p>
      <h5>参数</h5>
      <k-table
          :head="[
            {text: '属性', dataIndex: 'attr'},
            {text: '类型', dataIndex: 'type'},
            {text: '说明', dataIndex: 'des'},
            {text: '默认', dataIndex: 'def'}
          ]"
          :data="[
            {attr: 'type', type: 'String', des: '设置类型，可选值：primary，info，danger，success，warning，text', def: 'default'},
            {attr: 'size', type: 'String', des: '设置尺寸，可选值：mini，small，normal，large', def: 'normal'},
            {attr: 'radius', type: 'String', des: '设置是否有圆角，可选值：true，false', def: 'true'},
            {attr: 'width', type: 'String', des: '设置按钮宽度，接受单位为px的字符串', def: ''},
            {attr: 'status', type: 'String', des: '设置按钮状态，可选值为：disable，enable', def: 'enable'},
            {attr: 'iconBefore', type: 'String', des: '设置按钮左边的icon，基于font-awesome字体图标，格式如：fa fa-xxx', def: ''},
            {attr: 'iconAfter', type: 'String', des: '设置按钮右边的icon，基于font-awesome字体图标，格式如：fa fa-xxx', def: ''},
            {attr: 'callBack', type: 'Function', des: '设置按钮的回调方法', def: ''},
            {attr: 'set', type: 'Obejct', des: '设置按钮的参数对象', def: ''},
          ]"
          :options="{
              headColor: '#888',
              headBgColor: '#e0e0e0'
            }"
          ></k-table>
      <h5>圆角示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <h5>圆角演示</h5>
      <k-button>有圆角</k-button>
      <k-button radius='false'>无圆角</k-button>
      <h5>尺寸示例</h5>
      <k-code :code="this.code_1" type="html"></k-code>
      <h5>尺寸演示</h5>
      <k-button size="large">大尺寸</k-button>
      <k-button size="normal">普通尺寸</k-button>
      <k-button size="small">小尺寸</k-button>
      <k-button size="mini">超小尺寸</k-button>
    </div>
    <div style="height:20px;clear:both"></div>
    <k-button>示例</k-button>
    <div style="height:20px;clear:both"></div>
    <div style="height:20px;clear:both"></div>
    <k-button>示例</k-button>
    <k-button type="info">示例</k-button>
    <k-button type="primary">示例</k-button>
    <k-button type="success">示例</k-button>
    <k-button type="warning">示例</k-button>
    <k-button type="danger">示例</k-button>
    <k-button type="text">示例</k-button>
    <k-button type="danger" status="disable">示例</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button iconBefore="fa fa-heart" :callBack="this.clickCallBack">示例</k-button>
    <k-button iconAfter="fa fa-chrome">示例</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button type="danger" size="large" width="300px">示例</k-button>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        code_0:
`<k-button>有圆角</k-button>
<k-button radius="false">无圆角</k-button>`,
        code_1:
`<k-button size="large">大尺寸</k-button>
<k-button size="normal">普通尺寸</k-button>
<k-button size="small">小尺寸</k-button>
<k-button size="mini">超小尺寸</k-button>`
      }
    },
    methods: {
      clickCallBack() {
        console.log('Button click');
      }
    }
  }
</script>
<style scoped>

</style>
