<template lang="pug">
    #app
        h1 {{msg}}
        h2 foo
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: '000'
      }
    }
  }
</script>

<style lang="sass" scoped>
    #app
        font-family: 'Avenir', Helvetica, Arial, sans-serif
        display: flex
        color: #ff00ff
        margin:
            top: 10px
</style>
