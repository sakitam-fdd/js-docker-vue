<template lang="html">
  <div class="console-content">
    <div class="console-con-header clearfix">
      <div class="header-title">控制台</div>
      <div class="header-clear">清空</div>
    </div>
    <div class="console-code" id="console-code"></div>
  </div>
</template>
<style lang="scss">
  .console-content {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    .console-con-header {
      height: 0.33rem;
      line-height: 0.33rem;
      background: #FFFFFF;
      font-size: 14px;
      padding: 0 10px;
      -moz-user-select: none;
      -webkit-user-select: none;
      border-bottom: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
      cursor: row-resize;
      .header-title {
        float: left;
      }
      .header-clear {
        float: right;
      }
    }
    .console-code {
      width: 100%;
      height: 100%;
    }
  }
</style>
<script lang="babel">
  import CodeMirror from 'codemirror'
  import 'codemirror/mode/javascript/javascript'
  import Utils from '../assets/scripts/utils'
  export default{
    mounted () {
      this.init()
      this.Utils = new Utils()
      this.Utils.consoleDrag('.console-con-header', $('.code-content-footer'), $('.code-content-con'))
    },
    data () {
      return {
      }
    },
    methods: {
      init () {
        let vm = this
        if (!this.editor) {
          this.consoleEditor = CodeMirror($('#console-code')[0], {
            value: 'console.log(\'实时调试，输入代码后按Enter执行。\')',
            mode: 'javascript',
            viewportMargin: Infinity,
            tabSize: 2,
            lineWrapping: true,
            lineNumbers: false,
            matchBrackets: true,
            styleActiveLine: true,
            autoCloseBrackets: true,
            showCursorWhenSelecting: true
          })
          this.consoleEditor.setOption('extraKeys', {
            'Enter': function () {
              let code = vm.consoleEditor.getValue()
              if (code.length > 0) {
//                setIFrameResult('code', code);
                window.Konsole.exec(code)
              }
            }
          })
        } else {
          this.consoleEditor.setValue('')
        }
      }
    }
  }
</script>
