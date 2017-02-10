<template>
  <div class="doc-div">
    <h2>Dialog</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-button iconBefore="fa fa-chrome" :callBack="dialog" type="success">Dialog</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button :callBack="dialog2">Dialog2</k-button>
  </div>
</template>
<script>
  export default{
    methods: {
      dialog() {
        this.$Kui.Dialog({title: 'Dialog', content: 'this is content', button: [
          {label: 'Sure', CallBack: this.clickCallBack},
          {label: 'Cancel', CallBack: this.clickCallBack},
        ]});
      },
      dialog2() {
        this.$Kui.Dialog({title: 'Dialogxxxxx', content: 'this is content222222222222222'});
      },
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
