<template lang="html">
  <div class="header-content">
    <div>{{title}}</div>
  </div>
</template>
<style lang="scss">
  .header-content {
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: #0075c7;
    div {
      margin-left: 0.2rem;
      color: #ffffff;
      font-size: 0.20rem;
    }
  }
</style>
<script lang="babel">
  export default{
    mounted () {
    },
    data () {
      return {
        title: '恒达时讯WEBGIS开放平台'
      }
    },
    methods: {
    }
  }
</script>
