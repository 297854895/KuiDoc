<template>
  <div class="doc-div">
    <h2>Cascader</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <div style="height: 20px;clear:both"></div>
    <k-cascader width="200px"
      :onchange="cascaderChange"
      placeholder="input this"
      :select="[
        {key: 'chongqing',text: 'chongqing', select: [
          {key: 'c0-xxxx', text: 'c0-xxxx', select: [
            {key: 'c0-xxx', text: 'c0-xxx', select: [
              {key: 'c0-xx', text: 'c0-xx', select: [
                {key: 'c0-x', text: 'c0-x', select: [
                  {key: 'c0', text: 'c0'}
                ]}
              ]},
              {key: 'c0-x', text: 'c0-x'},
            ]},
          ]},
          {key: 'c1-xxxx', text: 'c1-xxxx', select: [
            {key: 'c1-xxx', text: 'c1-xxx', select: [
              {key: 'c1-xx', text: 'c1-xx'},
              {key: 'c1-x', text: 'c1-x'},
            ]},
          ]},
          {key: 'c2-xxxx', text: 'c2-xxxx', select: [
            {key: 'c2-xxx', text: 'c2-xxx', select: [
              {key: 'c2-xx', text: 'c2-xx'},
              {key: 'c2-x', text: 'c2-x'},
            ]},
          ]},
          {key: 'c3-xxxx', text: 'c3-xxxx', select: [
            {key: 'c3-xxx', text: 'c3-xxx', select: [
              {key: 'c3-xx', text: 'c3-xx'},
              {key: 'c3-x', text: 'c3-x'},
            ]},
          ]},
        ]},
        {key: 'beijing', text: 'beijing', select: [
          {key: 'b0-xxxx', text: 'b0-xxxx', select: [
            {key: 'b0-xxx', text: 'b0-xxx', select: [
              {key: 'b0-xx', text: 'b0-xx'},
              {key: 'b0-x', text: 'b0-x'},
            ]},
          ]},
          {key: 'b1-xxxx', text: 'b1-xxxx', select: [
            {key: 'b1-xxx', text: 'b1-xxx', select: [
              {key: 'b1-xx', text: 'b1-xx'},
              {key: 'b1-x', text: 'b1-x'},
            ]},
          ]},
          {key: 'b2-xxxx', text: 'b2-xxxx', select: [
            {key: 'b2-xxx', text: 'b2-xxx', select: [
              {key: 'b2-xx', text: 'b2-xx'},
              {key: 'b2-x', text: 'b2-x'},
            ]},
          ]},
          {key: 'b3-xxxx', text: 'b3-xxxx', select: [
            {key: 'b3-xxx', text: 'b3-xxx', select: [
              {key: 'b3-xx', text: 'b3-xx'},
              {key: 'b3-x', text: 'b3-x'},
            ]},
          ]},
        ]},
        {key: 'shanghai', text: 'shanghai'}
    ]"></k-cascader>
  </div>
</template>
<script>
  export default{
    methods: {
      cascaderChange(data) {
        console.log('cascaderChange', data);
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
