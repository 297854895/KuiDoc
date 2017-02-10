<template>
  <div class="doc-div">
    <h2>ButtonGroup</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-button-group radius="no">
      <k-button>Left</k-button>
      <k-button>Mid</k-button>
      <k-button width="100px">Mid</k-button>
      <k-button>Mid</k-button>
      <k-button>Right</k-button>
    </k-button-group>
    <div style="height:20px;clear:both"></div>
    <k-button-group>
      <k-button type="info">Left</k-button>
      <k-button type="success">Mid</k-button>
      <k-button type="warning">Mid</k-button>
      <k-button type="danger">Mid</k-button>
      <k-button>Mid</k-button>
      <k-button type="primary">Right</k-button>
    </k-button-group>
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
</style>
