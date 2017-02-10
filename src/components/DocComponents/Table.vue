<template>
  <div class="doc-div">
    <h2>Table</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-animate direction="left" delay="300">
      <k-table
          :head="[
            {text: 'Name', dataIndex: 'Name', sort: true},
            {text: 'Age', dataIndex: 'Age', sort: true},
            {text: 'Address', dataIndex: 'Address'},
            {text: 'Control', dataIndex: 'component'}
          ]"
          :data="[
            {Name: 'xxxxxxxxxx', Age: 1, Address: 'xxxxxxx', component: {
                component: 'button',
                iconBefore: 'fa fa-heart',
                text: 'Control',
                size: 'small',
                callBack: clickCallBack
              }},
            {Name: 'xxxxxxxxx', Age: 2, Address: 'xxxxxxx', component: {
                component: 'switch',
                enable: false,
                callBack: switchCallBack,
                status: 'disable'
              }},
            {Name: 'xxxxxxxx', Age: 3, Address: 'xxxxxxx', component: {
                component: 'switch',
                enable: false,
                callBack: switchCallBack
              }},
            {Name: 'xxxxxxx', Age: 4, Address: 'xxxxxxx'},
            {Name: 'xxxxxx', Age: 5, Address: 'xxxxxxx'},
            {Name: 'xxxxx', Age: 6, Address: 'xxxxxxx'},
            {Name: 'xxxx', Age: 7, Address: 'xxxxxxx'},
            {Name: 'xxx', Age: 8, Address: 'xxxxxxx'},
            {Name: 'xx', Age: 9, Address: 'xxxxxxx'},
            {Name: 'x', Age: 10, Address: 'xxxxxxx'}
          ]"
          :options="{
              current: 1,
              size: 10,
              total: 180,
              headColor: '#888',
              headBgColor: '#e0e0e0',
              togglePage: tableTogglePage
            }"
          ></k-table>
    </k-animate>
    <k-animate direction="left" delay="300">
      <k-table
          :head="[
            {text: 'Name', dataIndex: 'Name', sort: true},
            {text: 'Age', dataIndex: 'Age', sort: true},
            {text: 'Address', dataIndex: 'Address'},
          ]"
          :data="[]"
          ></k-table>
    </k-animate>
  </div>
</template>
<script>
  export default{
    methods: {
      clickCallBack() {
        console.log('this is callback');
      },
      switchCallBack(status, fn) {
        console.log(status);
        // fn(false);
      },
      tableTogglePage(page, fn) {
        console.log('table togglePage:', page);
        fn(page, [
            {Name: 'xxxxxxxxxx', Age: 11, Address: 'xxxxxxx', component: {
                component: 'button',
                iconBefore: 'fa fa-heart',
                text: 'Control',
                size: 'small',
                callBack: this.clickCallBack
              }},
            {Name: 'xxxxxxxxx', Age: 12, Address: 'xxxxxxx', component: {
                component: 'switch',
                enable: false,
                callBack: this.switchCallBack,
                status: 'disable'
              }},
            {Name: 'xxxxxxxx', Age: 13, Address: 'xxxxxxx', component: {
                component: 'switch',
                enable: false,
                callBack: this.switchCallBack
              }},
            {Name: 'xxxxxxx', Age: 14, Address: 'xxxxxxx'},
            {Name: 'xxxxxx', Age: 15, Address: 'xxxxxxx'},
            {Name: 'xxxxx', Age: 16, Address: 'xxxxxxx'},
            {Name: 'xxxx', Age: 17, Address: 'xxxxxxx'},
            {Name: 'xxx', Age: 18, Address: 'xxxxxxx'},
            {Name: 'xx', Age: 19, Address: 'xxxxxxx'},
            {Name: 'x', Age: 20, Address: 'xxxxxxx'}
          ]);
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
