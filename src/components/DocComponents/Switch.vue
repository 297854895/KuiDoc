<template>
  <div class="doc-div">
    <h2>Switch</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>开关(k-switch)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">k-switch将创建一个switch按钮，接受参数以设置按钮的样式以及回调方法。</p>
      <h5>参数</h5>
      <k-table
          :head="[
            {text: '属性', dataIndex: 'attr'},
            {text: '类型', dataIndex: 'type'},
            {text: '说明', dataIndex: 'des'},
            {text: '默认', dataIndex: 'def'}
          ]"
          :data="[
            {attr: 'status', type: 'String', des: '设置状态，可选值：true，false', def: 'false'},
            {attr: 'disable', type: 'String', des: '设置禁用状态，可选值：true，false', def: 'false'},
            {attr: 'callBack', type: 'Function', des: '设置回调方法，该方法接受两个参数(status, fn)，status为点击按钮后按钮当前状态得boolean值，fn为异步处理按钮状态的方法，该方法接受一个status参数，用以异步修改按钮状态', def: 'true'},
          ]"
          :options="{
              headColor: '#888',
              headBgColor: '#e0e0e0'
            }"
          ></k-table>
      <h5>基本示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <k-code :code="this.code_1" type="javascript"></k-code>
      <h5>基本演示</h5>
      <p class="doc-p">当前switch状态为：{{this.$data.switch_1 ? '开启' : '关闭'}}</p>
      <k-switch :callBack="switchCallBack"></k-switch>
      <h5>异步回调示例</h5>
      <k-code :code="this.code_2" type="html"></k-code>
      <k-code :code="this.code_3" type="javascript"></k-code>
      <h5>异步回调演示</h5>
      <p class="doc-p">按钮点击后延时两秒将会对当前状态取反，并通过fn异步改变按钮状态</p>
      <p class="doc-p">当前switch状态为：{{this.$data.switch_2 ? '开启' : '关闭'}}</p>
      <k-switch :callBack="switchCallBack_"></k-switch>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        switch_1: false,
        switch_2: false,
        code_0:
`<p>当前switch状态为：{{this.$data.switch_1 ? '开启' : '关闭'}}</p>
<k-switch></k-switch>`,
        code_1:
`export default{
  data() {
    return {
      switch_1: false
    }
  }
  methods: {
    witchCallBack(status, fn) {
      this.$data.switch_1 = status;
      // fn(false);
    }
  }
}`,
        code_2:
`<p>当前switch状态为：{{this.$data.switch_2 ? '开启' : '关闭'}}</p>
<k-switch></k-switch>`,
        code_3:
`export default{
  data() {
    return {
      switch_2: false
    }
  }
  methods: {
    witchCallBack_(status, fn) {
      this.$data.switch_2 = status;
      setTimeout(() => {
        this.$data.switch_2 = !this.$data.switch_2;
        fn(this.$data.swicth_2);
      }, 2000);
    }
  }
}`
      }
    },
    methods: {
      switchCallBack(status, fn) {
        this.$data.switch_1 = status;
        // fn(false);
      },
      switchCallBack_(status, fn) {
        this.$data.switch_2 = status;
        setTimeout(() => {
          this.$data.switch_2 = !this.$data.switch_2;
          fn(this.$data.switch_2);
        }, 2000);
      }
    }
  }
</script>
