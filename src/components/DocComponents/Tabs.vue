<template>
  <div class="doc-div">
    <h2>Tabs</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-tabs :set="{
        tabs: [
          {key: 'one', title: 'One'},
          {key: 'two', title: 'Two'},
          {key: 'three', title: 'Three'}
        ],
        current: 'one',
        animate: true
        /*animate: {
          direction: 'top',
          delay: 50
        }*/
      }">
      <div slot="one" style="height:1000px;text-align:center;line-height:400px;">T1</div>
      <div slot="two" style="height:400px;text-align:center;line-height:400px;">T2</div>
      <div slot="three" style="height:400px;text-align:center;line-height:400px;">T3</div>
    </k-tabs>
  </div>
</template>
<script>
  export default{
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
