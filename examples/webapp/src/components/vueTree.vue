<template lang="html">
  <li class="vue-tree-li">
    <div class="item-content">
      <span class="vue-tree-toogleIcon" @click="toggle"></span>
      <span class="vue-tree-name">{{model.name}}</span>
      <span class="vue-tree-tool"></span>
    </div>
    <ul v-show="open" v-if="isFolder" class="vue-tree-ul">
      <vue-tree class="vue-tree-content" v-for="model in model.children" :model="model"></vue-tree>
    </ul>
  </li>
</template>
<style lang="scss">
  .vue-tree-content {
    font-size: 0.16rem;
    .vue-tree-li {

    }
  }
</style>
<script lang="babel">
  export default {
    name: 'vueTree',
    props: {
      model: Object
    },
    data: function () {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      changeType: function () {
        if (!this.isFolder) {
          this.$set(this.model, 'children', [])
          this.addChild()
          this.open = true
        }
      },
      addChild: function () {
        this.model.children.push({
          name: 'new stuff'
        })
      }
    }
  }
</script>
