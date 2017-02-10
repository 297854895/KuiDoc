<template>
  <div class="aside">
    <div class="search">
      <k-input width="249px" iconAfter="fa fa-search" radius="no" placeholder="Try to search..." ></k-input>
    </div>
    <div class="doc-nav" ref="docNav">
      <ul v-for="item of this.docNav" class="doc-nav-sec">
        <span>{{item.title}}</span>
        <li v-for="item_ of item.child" :class="`doc-nav-item ${currentComponent === item_.label ? 'doc-nav-item-active' : ''}`" @click="routerTo(item_.router, item_.label)">
          {{item_.label}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'Aside',
    computed: {
      ...mapGetters({
        currentComponent: 'getCurrentComponent'
      })
    },
    props: {
      docNav: {
        type: Array,
        default: () => {
          return [
            {
              title: '布局',
              child: [
                {label: 'Layout', router: 'layout'},
              ]
            },
            {
              title: '基本',
              child: [
                {label: 'Button', router: 'button'},
                {label: 'DropDown', router: 'dropDown'},
                {label: 'ButtonGroup', router: 'buttonGroup'},
                {label: 'Switch', router: 'switch'},
                {label: 'Pageination', router: 'pageination'},
                {label: 'BreadCrumb', router: 'breadCrumb'},
                {label: 'Nav', router: 'nav'},
                {label: 'Menu', router: 'menu'},
                {label: 'Tabs', router: 'tabs'},
              ]
            },
            {
              title: '输入',
              child: [
                {label: 'Input', router: 'input'},
                {label: 'DatePicker', router: 'datePicker'},
                {label: 'CheckBox', router: 'checkBox'},
                {label: 'Select', router: 'select'},
                {label: 'Cascader', router: 'cascader'},
              ]
            },
            {
              title: '提示',
              child: [
                {label: 'Dialog', router: 'dialog'},
                {label: 'Notification', router: 'notification'},
                {label: 'Message', router: 'message'},
                {label: 'Alert', router: 'alert'},
              ]
            },
            {
              title: '其他',
              child: [
                {label: 'BackTop', router: 'backTop'},
                {label: 'Progress', router: 'progress'},
                {label: 'Tree', router: 'tree'},
                {label: 'Table', router: 'table'},
              ]
            }
          ]
        }
      }
    },
    mounted() {
      let winHeight;
      if (window.innerHeight) {
        winHeight = window.innerHeight;
      }else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
      }
      this.$refs.docNav.style.height = winHeight - 117 + 'px';
    },
    methods: {
      routerTo(val, name) {
        this.$store.dispatch('updateDocComponents', name);
        this.$router.push({ path: val })
      }
    }
  }
</script>
<style scoped>
  .aside{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    border-right: 1px solid rgb(221, 221, 221);
    background: #fff;
    width: 350px;
    height: 100%;
    float: left;
  }
  .search{
    padding: 20px 30px;
    border-bottom: 1px solid #e0e0e0;
  }
  .doc-nav{
    padding: 20px 0 40px 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .doc-nav-sec{
    padding: 10px 30px 0 30px;
  }
  .doc-nav-sec span{
    color: #888;
  }
  .doc-nav-item{
    padding: 10px 30px;
    color: #666;
    cursor: pointer;
  }
  .doc-nav-item-active{
    color: #20a0ff;
  }
  .doc-nav-item:hover{
    color: #20a0ff;
  }
  .doc-nav-item:active{
    color: #4db3ff;
  }
</style>
