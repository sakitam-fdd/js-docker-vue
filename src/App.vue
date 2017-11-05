<template lang="html">
  <div id="app">
    <headercon></headercon>
    <div class="content clearfix">
      <navcon></navcon>
      <codecon></codecon>
      <viewcon></viewcon>
    </div>
  </div>
</template>
<script lang="babel">
  import { headercon, navcon, codecon, viewcon } from './components'
  import store from './store/'
  export default {
    name: 'app',
    store,
    mounted () {
      window.Konsole = {
        exec: function (code) {
          code = code || ''
          try {
            console.log(code)
//            /* eslint no-eval: "error" */
//            /* eslint-env browser */
//            let result = eval(code)
//            window.parent.setIFrameResult('result', result)
          } catch (e) {
//            window.parent.setIFrameResult('error', e)
          }
        }
      }
    },
    components: {
      headercon,
      navcon,
      codecon,
      viewcon
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: "Microsoft YaHei UI";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    .content {
      height: 100%;
      width: 100%;
    }
  }
</style>
