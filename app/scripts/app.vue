<template lang="pug">
    #app
        h1 {{msg}}
        h2.title testes
        Button(label="hoge")
</template>

<script>
  import Button from './components/button.vue';
  export default {
    name: 'app',
    components: {
      Button
    },
    data () {
      return {
        msg: 'test'
      }
    }
  }
</script>

<style lang="sass" scoped>
    #app
        font-family: 'Avenir', Helvetica, Arial, sans-serif
        position: relative

        .title
            text:
                align: center
</style>
