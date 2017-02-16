<template>
  <div class="doc-div">
    <h2>Layout</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>行(k-row)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">k-row将会占据一整行，宽度为当前容器宽度的100%。</p>
      <h5>示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <h5>演示</h5>
      <k-row>
        <div style="background: #302f2f; width: 100%; padding: 10px 0; color: #fff; text-align: center;">
          k-row
        </div>
      </k-row>
    </div>
    <h4><i class="fa fa-link doc-icon"></i>列(k-col)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">
        k-col需放置于k-row组件内，Kui默认地将k-row均分为12等份，所以k-col接受span属性，以制定该列在k-row中的宽度占比。
        <k-alert type="warning">注：若一个k-row中所有k-col的span属性之和大于12，则多出的列将会换行。</k-alert>
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
            {attr: 'span', type: 'String', des: '占据当前行多少等份（一行默认分为12等份）', def: ''},
            {attr: 'left', type: 'String', des: '当前列左边距，1代表1等份', def: ''},
            {attr: 'right', type: 'String', des: '当前列右边距，1代表1等份', def: ''}
          ]"
          :options="{
              headColor: '#888',
              headBgColor: '#e0e0e0'
            }"
          ></k-table>
      <h5>示例</h5>
      <k-code :code="this.code_1" type="html"></k-code>
      <h5>演示</h5>
      <k-row>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">1</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">2</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">3</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">4</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">5</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">6</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">7</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">8</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">9</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">10</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">11</div></k-col>
        <k-col span="1"><div class="layout-div" style="background: #302f2f">12</div></k-col>
      </k-row>
      <div class="doc-div-clear"></div>
      <h5>示例</h5>
      <k-code :code="this.code_2" type="html"></k-code>
      <h5>演示</h5>
      <k-row>
        <k-col span="3" right="3"><div class="layout-div"  style="background: #302f2f">1(right=3)(span=3)</div></k-col>
        <k-col span="3"><div class="layout-div"  style="background: #302f2f">2</div></k-col>
        <k-col span="3"><div class="layout-div"  style="background: #302f2f">3</div></k-col>
      </k-row>
      <div class="doc-div-clear"></div>
      <h5>示例</h5>
      <k-code :code="this.code_3" type="html"></k-code>
      <h5>演示</h5>
      <k-row>
        <k-col span="2" left="2"><div class="layout-div" style="background: #302f2f">1(left=2)</div></k-col>
        <k-col span="2" left="2"><div class="layout-div" style="background: #302f2f">2(span=2)</div></k-col>
        <k-col span="2" left="2"><div class="layout-div" style="background: #302f2f">3</div></k-col>
      </k-row>
    </div>
    <div style="height:20px;clear:both"></div>
  </div>
</template>
<script>
  export default{
    data() {
      return{
        code_0:
`<k-row>
  <div style="background: #302f2f; width: 100%; height: 30px; color: #fff; text-align: center">
    k-row
  </div>
</k-row>`,
        code_1:
`<k-row>
    <k-col span="1"><div style="background: #302f2f">1</div></k-col>
    <k-col span="1"><div style="background: #302f2f">2</div></k-col>
    <k-col span="1"><div style="background: #302f2f">3</div></k-col>
    <k-col span="1"><div style="background: #302f2f">4</div></k-col>
    <k-col span="1"><div style="background: #302f2f">5</div></k-col>
    <k-col span="1"><div style="background: #302f2f">6</div></k-col>
    <k-col span="1"><div style="background: #302f2f">7</div></k-col>
    <k-col span="1"><div style="background: #302f2f">8</div></k-col>
    <k-col span="1"><div style="background: #302f2f">9</div></k-col>
    <k-col span="1"><div style="background: #302f2f">10</div></k-col>
    <k-col span="1"><div style="background: #302f2f">11</div></k-col>
    <k-col span="1"><div style="background: #302f2f">12</div></k-col>
  </k-row>`,
        code_2:
`<k-row>
  <k-col span="3" right="3"><div style="background: #302f2f">1(right=3)</div></k-col>
  <k-col span="3"><div  style="background: #302f2f">2</div></k-col>
  <k-col span="3"><div style="background: #302f2f">3</div></k-col>
</k-row>`,
        code_3:
`<k-row>
  <k-col span="2" left="2"><div style="background: #302f2f">1(left=2)</div></k-col>
  <k-col span="2" left="2"><div style="background: #302f2f">2</div></k-col>
  <k-col span="2" left="2"><div style="background: #302f2f">3</div></k-col>
</k-row>`
      }
    }
  }
</script>
<style scoped>
  .layout-div{
    text-align: center;
    padding: 10px 0;
    color: #fff;
  }
</style>
