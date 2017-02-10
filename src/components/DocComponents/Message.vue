<template>
  <div class="doc-div">
    <h2>Message</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-animate direction="left" delay="300">
      <k-button :callBack="message">Message</k-button>
      <k-button :callBack="messageClose">Message close</k-button>
    </k-animate>
  </div>
</template>
<script>
  export default{
    methods: {
      message() {
        this.$Kui.Message.success({text: '通知内容ner水电费水电费水电费'});
      },
      messageClose() {
        this.$Kui.Message.success({text: '通知内容ner水电费水电费水电费', remove: null});
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
