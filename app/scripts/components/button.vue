<template lang="pug">
    button.button(type='button' @click="onClick") {{label}}
</template>

<script>
  export default {
    name: 'Button',
    props: {
      label: String,
      click: Function
    },
    methods: {
      onClick(event) {
        event.preventDefault();
        this.click();
      }
    }
  }
</script>

<style lang="sass" scoped>
    .button
        margin: 10px
        padding: 20px
        border: 2px solid #3f3f3f
        text:
            align: center
            transform: uppercase
        position: relative
        overflow: hidden
        outline: none
        transition:
            duration: 0.3s
            // post-cssのeasing読み込み
            timing-function: easeOutSine
        &:after
            position: absolute
            content: ''
            width: 0
            left: 50%
            bottom: 0
            height: 3px
            background: #3f3f3f
            transition:
                duration: .3s
        &:hover
            cursor: pointer
            border:
                radius: 30px
            &:after
                width: 0
                left: 0
</style>
