<template lang="html">
  <div class="code-content">
    <div class="code-content-header clearfix">
      <p>源代码编辑器</p>
      <div class="user-menu clearfix">
        <div class="clip-container">
          <a id="copyCode">复制</a>
        </div>
        <div class="run-container">
          <a @click="runCode">运行</a>
        </div>
        <div class="refresh-container">
          <a @click="refreshCode">刷新</a>
        </div>
        <div class="help-container">
          <a href="https://github.com/smileFDD/myMapApi" target="_blank">帮助</a>
        </div>
      </div>
    </div>
    <div class="code-content-con" id="code-content-con"></div>
    <div class="code-content-footer">
      <console-con></console-con>
    </div>
    <div class="code-toogleBar" :class="{open: isOpen, close: !isOpen}" @click="toggle"></div>
  </div>
</template>
<style lang="scss">
  .code-content {
    width: 5rem;
    -webkit-user-select: none;
    float: left;
    height: 100%;
    box-shadow: 3px 0px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    .code-content-header {
      width: 100%;
      height: 0.36rem;
      line-height: 0.36rem;
      font-size: 0.12rem;
      background-color: #f6f6f6;
      overflow: hidden;
      p {
        width: 2.0rem;
        padding: 0 0.1rem;
        float: left;
        -webkit-margin-after: 0;
        -webkit-margin-before: 0;
        -webkit-margin-start: 0;
        -webkit-margin-end: 0;
      }
      .user-menu {
        float: left;
        width: 2.6rem;
        padding: 0 0.1rem;
        div {
          float: left;
          color: #3189f3;
          margin-left: 0.1rem;
          a {
            background-image: url("../../static/images/result.png");
            background-repeat: no-repeat;
            &:hover {
              cursor: pointer;
              font-weight: bold;
              text-decoration: none;
            }
          }
        }
        .clip-container > a{
          background-position: 0 2px;
          padding-left: 0.15rem;
        }
        .run-container > a{
          background-position: 0 -23px;
          padding-left: 0.17rem;
        }
        .refresh-container > a{
          background-position: 0 -47px;
          padding-left: 0.2rem;
        }
        .help-container > a{
          text-decoration: none;
          color: #3189f3;
          background-position: 0 -71px;
          padding-left: 0.17rem;
        }
      }
    }
    .code-content-con {
      width: 100%;
      font-size: 0.16rem;
      font-family: Consolas;
      position: absolute;
      top: 0.36rem;
      bottom: 2.2rem;
    }
    .code-content-footer {
      width: 100%;
      height: 2.2rem;
      font-size: 0.16rem;
      font-family: Consolas;
      overflow: hidden;
      position: absolute;
      bottom: 0;
    }
    .code-toogleBar {
      position: absolute;
      width: 14px;
      height: 90px;
      top: 50%;
      right: -14px;
      cursor: pointer;
      transform: translate(0px, -45px);
      -ms-transform: translate(0px, -45px); /* IE 9 */
      -webkit-transform: translate(0px, -45px); /* Safari and Chrome */
    }
    .open {
      background-image: url("../../static/images/result.png");
      background-repeat: no-repeat;
      background-position: 0 -142px;
    }
    .close {
      background-image: url("../../static/images/result.png");
      background-repeat: no-repeat;
      background-position: 0 -242px;
    }
  }
  #global-zeroclipboard-flash-bridge {
    position: absolute;
    top: 0;
  }
  .CodeMirror {
    height: 100%!important;
    pre span {
      font-size: 0.16rem;
      font-family: Consolas;
    }
  }
</style>
<script lang="babel">
  import CodeMirror from 'codemirror'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/theme/monokai.css'
  import 'codemirror/keymap/sublime'
  import 'codemirror/mode/css/css'
  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/mode/htmlmixed/htmlmixed'
  import 'codemirror/addon/selection/active-line'
  import 'codemirror/addon/edit/matchbrackets'

  import consoleCon from '../components/consoleContent'
  import { mapState } from 'vuex'
  export default{
    mounted () {
      this.$store.dispatch('getCodeValue', this.name)
    },
    computed: {
      ...mapState({
        codeValue: state => state.getCode.codeValue
      })
    },
    data () {
      return {
        name: 'loadTwoMap',
        isOpen: true
      }
    },
    watch: {
      codeValue (newVal, oldVal) {
        this.init(newVal)
        this.runCode()
      }
    },
    methods: {
      init (value) {
        if (!this.editor) {
          this.editor = CodeMirror($('#code-content-con')[0], {
            tabSize: 2,
            lineWrapping: true,
            lineNumbers: true,
            matchBrackets: true,
            styleActiveLine: true,
            keyMap: 'sublime',
            autoCloseBrackets: true,
            showCursorWhenSelecting: true,
            theme: 'monokai',
            mode: 'htmlmixed',
            viewportMargin: Infinity,
            value: value
          })
          this.initClicp()
        } else {
          this.editor.setValue(value)
        }
      },
      initClicp () {
        let vm = this
        this.copyClipboard = new ZeroClipboard($('#copyCode')[0])
        this.copyClipboard.on('ready', function (event) {
          this.on('copy', function (ev) {
            ev.clipboardData.setData('text/plain', vm.getClicpValue())
          })
          this.on('aftercopy', function (ev) {
            console.log('copyed')
          })
        })
        this.copyClipboard.on('error', event => {
          ZeroClipboard.destroy()
        })
      },
      getClicpValue () {
        let iframeContent = ''
        if (this.editor) {
          iframeContent = this.editor.getValue()
        }
        return iframeContent
      },
      runCode () {
        let iframeValue = this.codeValue ? this.codeValue : ''
        if (this.editor) {
          iframeValue = this.editor.getValue()
        }
        let nr = iframeValue.indexOf('<body>')
        let iframeHead = iframeValue.slice(0, nr)
        let iframeFooter = iframeValue.slice(nr, iframeValue.length)
        let iFrame = $('#container')[0].contentWindow
        iFrame.document.open()
        iFrame.document.write(iframeHead)
        iFrame.document.write(iframeFooter)
        iFrame.document.close()
      },
      refreshCode () {
        let iframeValue = this.codeValue ? this.codeValue : ''
        if (this.editor) {
          iframeValue = this.editor.getValue()
        }
        let nr = iframeValue.indexOf('<body>')
        let iframeHead = iframeValue.slice(0, nr)
        let iframeFooter = iframeValue.slice(nr, iframeValue.length)
        let iFrame = $('#container')[0].contentWindow
        iFrame.document.open()
        iFrame.document.write(iframeHead)
        iFrame.document.write(iframeFooter)
        iFrame.document.close()
      },
      toggle () {
        this.isOpen = !this.isOpen
        if (!this.isOpen) {
          $('.code-content').animate({
            width: '0rem'
          })
          $('.view-content').animate({
            width: '+=4.99rem'
          })
        } else {
          $('.code-content').animate({
            width: '5rem'
          })
          $('.view-content').animate({
            width: '5.845rem'
          })
        }
      }
    },
    components: {
      consoleCon
    }
  }
</script>
