<template>
  <div id="app">
    <KNav></KNav>
    <KCenter>
      <KAside></KAside>
      <router-view></router-view>
    </KCenter>
  </div>
</template>
<script>
  import Nav from './components/Nav/Nav';
  import Aside from './components/Aside/Aside';
  import Doc from './components/Doc/Doc';
  import Center from './components/Center/Center';

  export default {
    components: {
      'KNav': Nav,
      'KAside': Aside,
      'KDoc': Doc,
      'KCenter': Center
    },
    mounted() {
      this.$router.push({ path: 'layout' });
    }
  }
</script>
<style>
  body{
    font-family:  "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    margin: 0px;
    background: #eee;
    overflow: hidden;
  }
</style>
