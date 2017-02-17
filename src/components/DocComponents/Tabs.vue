<template>
  <div class="doc-div">
    <h2>Tabs</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>标签页(k-tabs)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">k-tabs将创建一个标签页组件，接受参数以设置标签页的名字及key值。</p>
      <h5>参数</h5>
      <k-table
          :head="[
            {text: '属性', dataIndex: 'attr'},
            {text: '类型', dataIndex: 'type'},
            {text: '默认', dataIndex: 'def'},
            {text: '说明', dataIndex: 'des'}
          ]"
          :data="[
            {attr: 'set', type: 'Obejct', des: '设置标签属性，接受一个对象值', def: ''},
            {attr: 'tabs', type: 'Array', des: '设置标签数组，接受一个数组，格式如：[{key: xxx, title: xxx}, {...}]', def: ''},
            {attr: 'current', type: 'String', des: '设置当前标签，接受tabs属性中各项tab的key值', def: ''},
            {attr: 'animate', type: 'Boolean', des: '设置标签切换的动画开启与否，可选值：true，false', def: 'true'}
          ]"
          :options="{
              headColor: '#888',
              headBgColor: '#e0e0e0'
            }"
          ></k-table>
      <h5>标签示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <h5>标签示例</h5>
      <k-tabs :set="{
          tabs: [
            {key: 'one', title: 'One'},
            {key: 'two', title: 'Two'},
            {key: 'three', title: 'Three'}
          ],
          current: 'one',
          animate: true
        }">
        <div slot="one" style="height:1200px;text-align:center;line-height:400px;">T1</div>
        <div slot="two" style="height:400px;text-align:center;line-height:400px;">T2</div>
        <div slot="three" style="height:400px;text-align:center;line-height:400px;">T3</div>
      </k-tabs>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        code_0:
`<!-- 将需要包裹的内容放入k-tabs组件内，并在该dom上制定slot属性，该属性值为k-tabs中对应的key值 -->
<k-tabs :set="{
    tabs: [
      {key: 'one', title: 'One'},
      {key: 'two', title: 'Two'},
      {key: 'three', title: 'Three'}
    ],
    current: 'one',
    animate: true
  }">
  <div slot="one" style="height:1200px;text-align:center;line-height:400px;">T1</div>
  <div slot="two" style="height:400px;text-align:center;line-height:400px;">T2</div>
  <div slot="three" style="height:400px;text-align:center;line-height:400px;">T3</div>
</k-tabs>`
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
