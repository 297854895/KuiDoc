<template>
  <div class="doc-div">
    <h2>Tree</h2>
    <hr>
    <div style="height:20px;clear:both"></div>
    <k-tree
      checkChangeOutPut="node"
      :checkChange="treeCheckOnchange"
      :tree="[
        {text: 'Node-0', key: 'Node-0', children: [
          {text: 'Node-0-0', key: 'Node-0-0', children: [
            {text: 'Node-0-0-0', key: 'Node-0-0-0', children: [
              {text: 'Node-0-0-0-0', key: 'Node-0-0-0-0', children: [
                {text: 'Node-0-0-0-0-0', key: 'Node-0-0-0-0-0'}
              ]},
              {text: 'Node-0-0-0-1', key: 'Node-0-0-0-1'},
              {text: 'Node-0-0-0-2', key: 'Node-0-0-0-2'},
              {text: 'Node-0-0-0-3', key: 'Node-0-0-0-3'},
            ]},
            {text: 'Node-0-0-1', key: 'Node-0-0-1'},
            {text: 'Node-0-0-2', key: 'Node-0-0-2'},
            {text: 'Node-0-0-3', key: 'Node-0-0-3'},
          ]},
          {text: 'Node-0-1', key: 'Node-0-1', children: [
            {text: 'Node-0-1-0', key: 'Node-0-1-0', children: [
              {text: 'Node-0-1-0-0', key: 'Node-0-1-0-0', children: [
                {text: 'Node-0-1-0-0-0', key: 'Node-0-1-0-0-0'},
                {text: 'Node-0-1-0-0-1', key: 'Node-0-1-0-0-1'}
              ]},
              {text: 'Node-0-1-0-1', key: 'Node-0-1-0-1'},
              {text: 'Node-0-1-0-2', key: 'Node-0-1-0-2'},
              {text: 'Node-0-1-0-3', key: 'Node-0-1-0-3'},
            ]},
            {text: 'Node-0-1-1', key: 'Node-0-1-1'},
            {text: 'Node-0-1-2', key: 'Node-0-1-2'},
            {text: 'Node-0-1-3', key: 'Node-0-1-3'},
          ]},
          {text: 'Node-0-2', key: 'Node-0-2'},
        ]},
        {text: 'Node-1', key: 'Node-1', children: [
          {text: 'Node-1-0', key: 'Node-1-0', children: [
            {text: 'Node-1-0-0', key: 'Node-1-0-0', children: [
              {text: 'Node-1-0-0-0', key: 'Node-1-0-0-0', children: [
                {text: 'Node-1-0-0-0-0', key: 'Node-1-0-0-0-0'}
              ]},
              {text: 'Node-1-0-0-1', key: 'Node-1-0-0-1'},
              {text: 'Node-1-0-0-2', key: 'Node-1-0-0-2'},
              {text: 'Node-1-0-0-3', key: 'Node-1-0-0-3'},
            ]},
            {text: 'Node-1-0-1', key: 'Node-1-0-1'},
            {text: 'Node-1-0-2', key: 'Node-1-0-2'},
            {text: 'Node-1-0-3', key: 'Node-1-0-3'},
          ]},
          {text: 'Node-1-1', key: 'Node-1-1'},
          {text: 'Node-1-2', key: 'Node-1-2'},
        ]},
        {text: 'Node-2', key: 'Node-2'},
        {text: 'Node-3', key: 'Node-3'},
      ]"
      ></k-tree>
    <div style="height: 20px"></div>
    <k-tree
      :checkChange="treeCheckOnchange"
      type="primary"
      :tree="[
        {text: 'Node-0', key: 'Node-0', children: [
          {text: 'Node-0-0', key: 'Node-0-0', children: [
            {text: 'Node-0-0-0', key: 'Node-0-0-0', children: [
              {text: 'Node-0-0-0-0', key: 'Node-0-0-0-0', children: [
                {text: 'Node-0-0-0-0-0', key: 'Node-0-0-0-0-0'}
              ]},
              {text: 'Node-0-0-0-1', key: 'Node-0-0-0-1'},
              {text: 'Node-0-0-0-2', key: 'Node-0-0-0-2'},
              {text: 'Node-0-0-0-3', key: 'Node-0-0-0-3'},
            ]},
            {text: 'Node-0-0-1', key: 'Node-0-0-1'},
            {text: 'Node-0-0-2', key: 'Node-0-0-2'},
            {text: 'Node-0-0-3', key: 'Node-0-0-3'},
          ]},
          {text: 'Node-0-1', key: 'Node-0-1', children: [
            {text: 'Node-0-1-0', key: 'Node-0-1-0', children: [
              {text: 'Node-0-1-0-0', key: 'Node-0-1-0-0', children: [
                {text: 'Node-0-1-0-0-0', key: 'Node-0-1-0-0-0'},
                {text: 'Node-0-1-0-0-1', key: 'Node-0-1-0-0-1'}
              ]},
              {text: 'Node-0-1-0-1', key: 'Node-0-1-0-1'},
              {text: 'Node-0-1-0-2', key: 'Node-0-1-0-2'},
              {text: 'Node-0-1-0-3', key: 'Node-0-1-0-3'},
            ]},
            {text: 'Node-0-1-1', key: 'Node-0-1-1'},
            {text: 'Node-0-1-2', key: 'Node-0-1-2'},
            {text: 'Node-0-1-3', key: 'Node-0-1-3'},
          ]},
          {text: 'Node-0-2', key: 'Node-0-2'},
        ]},
        {text: 'Node-1', key: 'Node-1', children: [
          {text: 'Node-1-0', key: 'Node-1-0', children: [
            {text: 'Node-1-0-0', key: 'Node-1-0-0', children: [
              {text: 'Node-1-0-0-0', key: 'Node-1-0-0-0', children: [
                {text: 'Node-1-0-0-0-0', key: 'Node-1-0-0-0-0'}
              ]},
              {text: 'Node-1-0-0-1', key: 'Node-1-0-0-1'},
              {text: 'Node-1-0-0-2', key: 'Node-1-0-0-2'},
              {text: 'Node-1-0-0-3', key: 'Node-1-0-0-3'},
            ]},
            {text: 'Node-1-0-1', key: 'Node-1-0-1'},
            {text: 'Node-1-0-2', key: 'Node-1-0-2'},
            {text: 'Node-1-0-3', key: 'Node-1-0-3'},
          ]},
          {text: 'Node-1-1', key: 'Node-1-1'},
          {text: 'Node-1-2', key: 'Node-1-2'},
        ]},
        {text: 'Node-2', key: 'Node-2'},
        {text: 'Node-3', key: 'Node-3'},
      ]"
      ></k-tree>
  <div style="height: 20px"></div>
  <k-tree
    check="false"
    :treeNodeClick="treeNodeClick"
    type="primary"
    :tree="[
      {text: 'Node-0', key: 'Node-0', children: [
        {text: 'Node-0-0', key: 'Node-0-0', children: [
          {text: 'Node-0-0-0', key: 'Node-0-0-0', children: [
            {text: 'Node-0-0-0-0', key: 'Node-0-0-0-0', children: [
              {text: 'Node-0-0-0-0-0', key: 'Node-0-0-0-0-0'}
            ]},
            {text: 'Node-0-0-0-1', key: 'Node-0-0-0-1'},
            {text: 'Node-0-0-0-2', key: 'Node-0-0-0-2'},
            {text: 'Node-0-0-0-3', key: 'Node-0-0-0-3'},
          ]},
          {text: 'Node-0-0-1', key: 'Node-0-0-1'},
          {text: 'Node-0-0-2', key: 'Node-0-0-2'},
          {text: 'Node-0-0-3', key: 'Node-0-0-3'},
        ]},
        {text: 'Node-0-1', key: 'Node-0-1', children: [
          {text: 'Node-0-1-0', key: 'Node-0-1-0', children: [
            {text: 'Node-0-1-0-0', key: 'Node-0-1-0-0', children: [
              {text: 'Node-0-1-0-0-0', key: 'Node-0-1-0-0-0'},
              {text: 'Node-0-1-0-0-1', key: 'Node-0-1-0-0-1'}
            ]},
            {text: 'Node-0-1-0-1', key: 'Node-0-1-0-1'},
            {text: 'Node-0-1-0-2', key: 'Node-0-1-0-2'},
            {text: 'Node-0-1-0-3', key: 'Node-0-1-0-3'},
          ]},
          {text: 'Node-0-1-1', key: 'Node-0-1-1'},
          {text: 'Node-0-1-2', key: 'Node-0-1-2'},
          {text: 'Node-0-1-3', key: 'Node-0-1-3'},
        ]},
        {text: 'Node-0-2', key: 'Node-0-2'},
      ]},
      {text: 'Node-1', key: 'Node-1', children: [
        {text: 'Node-1-0', key: 'Node-1-0', children: [
          {text: 'Node-1-0-0', key: 'Node-1-0-0', children: [
            {text: 'Node-1-0-0-0', key: 'Node-1-0-0-0', children: [
              {text: 'Node-1-0-0-0-0', key: 'Node-1-0-0-0-0'}
            ]},
            {text: 'Node-1-0-0-1', key: 'Node-1-0-0-1'},
            {text: 'Node-1-0-0-2', key: 'Node-1-0-0-2'},
            {text: 'Node-1-0-0-3', key: 'Node-1-0-0-3'},
          ]},
          {text: 'Node-1-0-1', key: 'Node-1-0-1'},
          {text: 'Node-1-0-2', key: 'Node-1-0-2'},
          {text: 'Node-1-0-3', key: 'Node-1-0-3'},
        ]},
        {text: 'Node-1-1', key: 'Node-1-1'},
        {text: 'Node-1-2', key: 'Node-1-2'},
      ]},
      {text: 'Node-2', key: 'Node-2'},
      {text: 'Node-3', key: 'Node-3'},
    ]"
    ></k-tree>
  </div>
</template>
<script>
  export default{
    methods: {
      treeCheckOnchange(data) {
        console.log('treeCheckOnchange', data);
      },
      treeNodeClick(data) {
        console.log('treeNodeClick', data);
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
