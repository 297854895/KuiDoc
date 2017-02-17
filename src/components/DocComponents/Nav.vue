<template>
  <div class="doc-div">
    <h2>Nav</h2>
    <hr>
    <h4><i class="fa fa-link doc-icon"></i>导航栏(k-nav)</h4>
    <div class="doc-indent">
      <h5>简介</h5>
      <p class="doc-p">
        k-nav组件将创建一个导航栏。
      </p>
      <h5>参数</h5>
      <k-table
          :head="[
            {text: '属性', dataIndex: 'attr'},
            {text: '类型', dataIndex: 'type'},
            {text: '默认', dataIndex: 'def'},
            {text: '说明', dataIndex: 'des'}
          ]"
          :data="[
            {attr: 'type', type: 'String', des: '设置导航栏类型，可选值为：dark（导航栏内字体为白色），default（导航栏内字体为黑色）', def: 'default'},
            {attr: 'position', type: 'String', des: '设置导航栏定位，可选值为：fixed-top，fixed-bottom，normal', def: 'fixed-top'},
            {attr: 'navBorderColor', type: 'String', des: '设置导航栏整体border的颜色，接受颜色参数', def: '#ddd'},
            {attr: 'navHoverColor', type: 'String', des: '设置导航栏整体字体hover的颜色，接受颜色参数', def: '#20a0ff'},
            {attr: 'backgroundColor', type: 'String', des: '设置导航栏的背景颜色，接受颜色参数', def: 'none'},
            {attr: 'navHoverBgColor', type: 'String', des: '设置导航栏导航按钮hover、active的颜色，接受颜色参数', def: 'none'},
            {attr: 'scrollChange', type: 'Array', des: '当导航栏position属性为fixed-top或者fixed-bottom时，设置导航栏随着页面滚动的样式数组，如：[{...},{...},]', def: ''},
            {attr: 'scrollDOM', type: 'String', des: '设置滚动容器名，若不设置则滚动容器为window，容器名接受：class，id，tagName', def: 'window'},
          ]"
          :options="{
              headColor: '#888',
              headBgColor: '#e0e0e0'
            }"
          ></k-table>
      <k-alert type="warning">注：scrollChange属性接受设置如：[{scrollTop: xx, type： xx, navBorderColor： xx, navHoverColor: xx, backgroundColor: xx, navHoverBgColor: xx},...]，其中scrollTop(距离顶部多少距离)、type(同k-nav接受的type参数)、navBorderColor(同k-nav接受的navBorderColor参数)、navHoverColor(同k-nav接受的navHoverColor参数)、backgroundColor(同k-nav接受的backgroundColor参数)、navHoverBgColor(同k-nav接受的navHoverBgColor参数)，以上属性不设置代表取k-nav上所对应的值，若k-nav上也未定义上述值，则取参数表中的默认值。</k-alert>
      <k-alert type="warning">注：k-nav中指定li标签的class属性为："k-nav-current"，则该导航为active1状态</k-alert>
      <h5>默认示例</h5>
      <k-code :code="this.code_0" type="html"></k-code>
      <h5>默认演示</h5>
      <p class="doc-p">type属性为：default</p>
      <k-nav position="normal">
        <span slot="left">
        <img src="/static/img/logo.png" style="height:26px;" />
        <k-input width="200px" iconAfter="fa fa-search" placeholder="Search..."></k-input>
        </span>
        <ul slot="right">
          <li class="k-nav-current">Home</li>
          <li>Faker</li>
          <li>Pawn</li>
          <li>Imp</li>
        </ul>
      </k-nav>
      <div style="height:20px;clear:both"></div>
      <p class="doc-p">type属性为：dark</p>
      <k-nav type="dark" position="normal" backgroundColor="#222" navBorderColor="#111" navHoverColor="#eee" navHoverBgColor="#111">
        <span slot="left">
          <img src="/static/img/logo.png" style="height:26px;" />
          <k-input width="200px" iconAfter="fa fa-search" placeholder="Search..."></k-input>
        </span>
        <ul slot="right">
          <li class="k-nav-current">Home</li>
          <li>Faker</li>
          <li>Pawn</li>
          <li>Imp</li>
        </ul>
      </k-nav>
      <h5>滚动变色示例</h5>
      <k-code :code="this.code_1" type="html"></k-code>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return{
        code_0:
`<!-- type=default -->
<k-nav position="normal">
  <span slot="left">
  <img src="logo.png" style="height:26px;" />
  <k-input width="200px" iconAfter="fa fa-search" placeholder="Search..."></k-input>
  </span>
  <ul slot="right">
    <li class="k-nav-current">Home</li>
    <li>Faker</li>
    <li>Pawn</li>
    <li>Imp</li>
  </ul>
</k-nav>
<!-- type=dark -->
<k-nav type="dark" position="normal" backgroundColor="#222" navBorderColor="#111" navHoverColor="#eee" navHoverBgColor="#111">
  <span slot="left">
    <img src="logo.png" style="height:26px;" />
    <k-input width="200px" iconAfter="fa fa-search" placeholder="Search..."></k-input>
  </span>
  <ul slot="right">
    <li class="k-nav-current">Home</li>
    <li>Faker</li>
    <li>Pawn</li>
    <li>Imp</li>
  </ul>
</k-nav>`,
        code_1:
`<!-- 本站导航栏参数设置，当滚动高度高于500时触发变色 -->
<k-nav
    scrollDOM=".doc-container"
    :scrollChange="[
      {scrollTop: 500, type: 'dark', backgroundColor: '#ff4949', navBorderColor: '#cc3333', navHoverColor: '#fff', navHoverBgColor: '#cc3333'},
    ]" type="dark" backgroundColor="#222" navBorderColor="#111" navHoverColor="#eee" navHoverBgColor="#111">
  <span slot="left">
    <img src="logo.png" style="height:26px;" /><label style="font-size:18px;font-weight:bold;margin-left: 10px;">Kui</label>
  </span>
  <ul slot="right">
    <li class="k-nav-current">Home</li>
    <li>Faker</li>
    <li>Pawn</li>
    <li>Imp</li>
    <label>
      <img src="dog.jpg" style="height:26px;display:inline-block"/>
      <a>登录</a>
      <a>登出</a>
    </label>
  </ul>
</k-nav>`

      }
    },
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
  iframe{
    width: 100%;
    margin-top: 20px;
    padding: 0;
    border: none;
  }
</style>
