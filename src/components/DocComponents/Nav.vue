<template>
  <div class="doc-div">
    <h2>Nav</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-nav position="normal">
      <span slot="left">
        <img src="/static/img/logo.png" style="height:26px;" />
        <k-input :onchange="inputValueChange" iconAfter="fa fa-search" placeholder="Search..." :btnCallBack="{
          after: clickCallBack
          }"></k-input>
      </span>
      <ul slot="right">
        <li class="k-nav-current">Home</li>
        <li>Faker</li>
        <li>Pawn</li>
        <li>Imp</li>
      </ul>
    </k-nav>
    <div style="height: 20px;clear:both"></div>
    <k-nav type="dark" position="normal" backgroundColor="#222" navBorderColor="#111" navHoverColor="#eee" navHoverBgColor="#111">
      <span slot="left">
        <img src="/static/img/logo.png" style="height:26px;" />
        <k-input :onchange="inputValueChange" iconAfter="fa fa-search" placeholder="Search..." :btnCallBack="{
          after: clickCallBack
          }"></k-input>
      </span>
      <ul slot="right">
        <li class="k-nav-current">Home</li>
        <li>Faker</li>
        <li>Pawn</li>
        <li>Imp</li>
      </ul>
    </k-nav>
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
