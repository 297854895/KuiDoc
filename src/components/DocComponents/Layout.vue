<template>
  <div class="doc-div">
    <h2>Layout</h2>
    <hr>
    <!-- <pre>
      <code>

      </code>
    </pre> -->
    <k-row>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">1</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">2</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">3</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">4</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">5</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">6</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">7</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">8</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">9</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">10</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">11</div></k-col>
      <k-col span="1"><div class="layout-div" style="height: 50px; background: #eee">12</div></k-col>
    </k-row>
    <div style="height:20px;clear:both"></div>
    <k-row>
      <k-col span="3" right="3"><div class="layout-div"  style="height: 50px; background: #eee">1(right=3)</div></k-col>
      <k-col span="3"><div class="layout-div"  style="height: 50px; background: #eee">2</div></k-col>
      <k-col span="3"><div class="layout-div"  style="height: 50px; background: #eee">3</div></k-col>
    </k-row>
    <div style="height:20px;clear:both"></div>
    <k-row>
      <k-col span="2" left="2"><div class="layout-div"  style="height: 50px; background: #eee">1(left=2)</div></k-col>
      <k-col span="2" left="2"><div class="layout-div"  style="height: 50px; background: #eee">2</div></k-col>
      <k-col span="2" left="2"><div class="layout-div"  style="height: 50px; background: #eee">3</div></k-col>
    </k-row>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
  h2{
    font-size: 26px;
    font-weight: normal;
    text-align: left;
  }
  hr{
    height: 1px;
    border: none;
    background-color: #ddd;
  }
  .layout-div{
    text-align: center;
    line-height: 50px;
    color: #333;
  }
  pre{
    border: 1px solid #e0e0e0;
    background: #eee;
    overflow-x: auto;
  }
</style>
