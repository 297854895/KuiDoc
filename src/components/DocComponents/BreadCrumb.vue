<template>
  <div class="doc-div">
    <h2>BreadCrumb</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-breadcrumb :set="{
        data: [
          {label: 'One'},
          {label: 'Two'},
          {label: 'Three'}
        ]
      }"></k-breadcrumb>
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
