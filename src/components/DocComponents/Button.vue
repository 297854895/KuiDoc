<template>
  <div class="doc-div">
    <h2>Button</h2>
    <hr>
    <k-button radius="no">示例</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button>示例</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button size="large">示例</k-button>
    <k-button size="normal">示例</k-button>
    <k-button size="small">示例</k-button>
    <k-button size="mini">示例</k-button>
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
    methods: {
      clickCallBack() {
        console.log('Button click');
      }
    }
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
