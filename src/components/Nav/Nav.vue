<template>
  <k-nav type="dark" backgroundColor="#222" navBorderColor="#111" navHoverColor="#eee" navHoverBgColor="#111">
    <span slot="left">
      <img src="/static/img/logo.png" style="height:26px;" /><label style="font-size:18px;font-weight:bold;margin-left: 10px;">Kui</label>
    </span>
    <ul slot="right">
      <li class="k-nav-current">Home</li>
      <li>Faker</li>
      <li>Pawn</li>
      <li>Imp</li>
      <label>
        <img src="/static/img/dog.jpg" style="height:26px;display:inline-block"/>
        <a>登录</a>
        <a>登出</a>
      </label>
    </ul>
  </k-nav>
</template>
<script>
  export default {
    name: 'Nav',
    methods: {

    }
  }
</script>
