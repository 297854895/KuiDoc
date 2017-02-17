<template>
  <div class="doc-div">
    <h2>Pageination</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>分页(k-page)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">k-page将创建一个分页组件，接受参数以设置分页属性以及回调方法。</p>
      <h5>参数</h5>
      <k-table
          :head="[
            {text: '属性', dataIndex: 'attr'},
            {text: '类型', dataIndex: 'type'},
            {text: '默认', dataIndex: 'def'},
            {text: '说明', dataIndex: 'des'}
          ]"
          :data="[
            {attr: 'pageSet', type: 'Object', des: '设置分页参数，接受一个如：{current: 1, total: 20, pageCallBack: function}的对象，current为当前页码，total为分页总数，pageCallBack为切换页码的回调方法', def: '{current: 1, total: 0}'},
            {attr: 'size', type: 'String', des: '设置分页组件大小，可选值：normal，small', def: 'normal'}
          ]"
          :options="{
              headColor: '#888',
              headBgColor: '#e0e0e0'
            }"
          ></k-table>
      <k-alert type="warning">注：若k-page接受的pageSet参数中total属性小于等于0，则该组件将不会执行渲染。</k-alert>
      <h5>尺寸示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <h5>尺寸演示</h5>
      <k-page :pageSet="{
          current: 1,
          total: 20
        }"></k-page>
      <div style="height:20px;clear:both"></div>
      <k-page size="small" :pageSet="{
          current: 1,
          total: 20
        }"></k-page>
      <h5>回调示例</h5>
      <k-code :code="this.code_1" type="html"></k-code>
      <k-code :code="this.code_2"></k-code>
      <h5>回调演示</h5>
      <p class="doc-p">当前页码：{{this.$data.cur_page}}</p>
      <k-page :pageSet="{
        current: 1,
        total: 20,
        callBack: pageCallBack
      }"></k-page>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        cur_page: 1,
        code_0:
`<k-page :pageSet="{
  current: 1,
  total: 20
}"></k-page>
<k-page size="small" :pageSet="{
    current: 1,
    total: 20,
    callBack: pageCallBack
  }"></k-page>`,
        code_1:
`<p>当前页码：{{this.$data.cur_page}}</p>
<k-page :pageSet="{
  current: 1,
  total: 20,
  pageCallBack: this.pageCallBack
}"></k-page>`,
        code_2:
`export default{
  data() {
    return {
      cur_page: 1
    }
  },
  methods: {
    pageCallBack(page) {
      this.$data.cur_page = page;
    }
  }
}`
      }
    },
    methods: {
      pageCallBack(page) {
        this.$data.cur_page = page;
      },
    }
  }
</script>
<style scoped>

</style>
