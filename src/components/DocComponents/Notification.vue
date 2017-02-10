<template>
  <div class="doc-div">
    <h2>Notification</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-button :callBack="notification">Notification</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button :callBack="autoClosenotification">Notification AutoClose</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button :callBack="delayClosenotification">Notification Delay 5S</k-button>
  </div>
</template>
<script>
  export default{
    methods: {
      notification() {
        this.$Kui.Notification.error({title:'标题标题标题', content: '通知内容ner水电费水电费水电费'});
        setTimeout(()=>{
          this.$Kui.Notification.info({title:'标题标题标题', content: '通知内容ner水电费水电费水电费'});
        },500);
        setTimeout(()=>{
          this.$Kui.Notification.default({title:'标题标题标题', content: '通知内容ner水电费水电费水电费'});
        },1000);
        setTimeout(()=>{
          this.$Kui.Notification.success({title:'标题标题标题', content: '通知内容ner水电费水电费水电费'});
        },1500);
        setTimeout(()=>{
          this.$Kui.Notification.warning({title:'标题标题标题', content: '通知内容ner水电费水电费水电费'});
        },2000);
      },
      autoClosenotification() {
        this.$Kui.Notification.error({title:'标题标题标题', content: '通知内容ner水电费水电费水电费', autoClose: true});
      },
      delayClosenotification() {
        this.$Kui.Notification.error({title:'标题标题标题', content: '通知内容ner水电费水电费水电费', delay: 5000, autoClose: true, });
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
