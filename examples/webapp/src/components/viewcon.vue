<template lang="html">
  <div class="view-content">
    <iframe class="" unselectable="on" name="container" id="container" :src="'../../static/demo/' + demoSrc"></iframe>
  </div>
</template>
<style lang="scss">
  .view-content {
    width: 5.845rem;
    -webkit-user-select: none;
    float: left;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
</style>
<script lang="babel">
  export default{
    mounted () {
//      this.init()
    },
    data () {
      return {
        demoSrc: 'loadTwoMap'
      }
    },
    methods: {

    }
  }
</script>
