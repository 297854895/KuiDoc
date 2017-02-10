<template>
  <div class="doc-div">
    <h2>DatePicker</h2>
    <hr>
    <div style="height: 20px;clear:both"></div>
    <k-datepicker width="180px" value="2017-01-01 12:34:56" :onchange="datepickerValueChange" accurate="YYYYMMDD"></k-datepicker>
    <div style="height: 20px;clear:both"></div>
    <k-datepicker value="2017-01-01 13:34:56" :onchange="datepickerValueChange" accurate="HHMMSS"></k-datepicker>
    <div style="height: 20px;clear:both"></div>
    <k-datepicker :onchange="datepickerValueChange" accurate="HHMMSS" placeholder="input date"></k-datepicker>
    <div style="height: 20px;clear:both"></div>
    <k-datepicker readonly="readonly" :onchange="datepickerValueChange" placeholder="input date"></k-datepicker>
    <div style="height: 20px;clear:both"></div>
    <k-datepicker startValue="2016-06-26" endValue="2016-08-25" type="range" readonly="readonly" :onchange="datepickerValueChange"></k-datepicker>
    <div style="height: 20px;clear:both"></div>
    <k-datepicker type="range" accurate="HHMMSS" :onchange="datepickerValueChange"></k-datepicker>
  </div>
</template>
<script>
  export default{
    methods: {
      datepickerValueChange(date) {
        console.log(date);
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
