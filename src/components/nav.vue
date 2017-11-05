<template lang="html">
  <div class="nav-content">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<style lang="scss">
  .nav-content {
    min-width: 2.8rem;
    float: left;
    border-right: 1px solid #e9e9e9;
    overflow-y: scroll;
    height: 100%;
    .el-tree {
      border: none;
      .el-tree-node__expand-icon {
        background: url(../../static/images/result.png) no-repeat 0 -96px;
        cursor: pointer;
        width: 13px;
        height: 13px;
        margin-top: 4px;
        margin-right: 7px;
        margin-left: 10px;
        border: none;
        -ms-transform: rotate(0);
        transform: rotate(0);
        transition: transform .3s ease-in-out;
      }
      .el-tree-node__expand-icon.expanded {
        background: url(../../static/images/result.png) no-repeat 0 -119px;
      }
      .el-tree-node__expand-icon.is-leaf {
        background: none;
        font-family: element-icons!important;
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        vertical-align: baseline;
        display: inline-block;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &:before {
          content: "\e614"
        }
      }
    }
  }
</style>
<script lang="babel">
  import * as api from '../store/api'
  export default{
    mounted () {
      this.init()
      api.getNavlist().then(res => {
        this.data = res['data']
      })
    },
    data () {
      return {
        data: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      init () {
        console.log('init')
      },
      handleNodeClick (data) {
        if (data && data['alias'] && data['alias'] !== '') {
          this.$store.dispatch('getCodeValue', data.alias)
        }
      }
    }
  }
</script>
