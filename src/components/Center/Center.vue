<template>
  <div class="kui-doc" ref="center">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'center',
    mounted() {
      let winHeight;
      if (window.innerHeight) {
        winHeight = window.innerHeight;
      }else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
      }
      this.$refs.center.style.height = winHeight - 48 + 'px';
    }
  }
</script>
<style>
  .kui-doc{
    width: 100%;
    height: auto;
    padding-top: 48px;
  }
</style>
