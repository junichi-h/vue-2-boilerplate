<template lang="pug">
    section.section(
        :class="{active: isActive, section01: title === section01}"
    )
        .inner {{title}}
</template>

<script>
  export default {
    name: 'Section',
    props: {
      title: String,
      isActive: Boolean
    },
    created() {
      console.log('created !!!');
      console.log(this.isActive);
    }
  }
</script>

<style lang="sass" scoped>
    @import '../../styles/mixin'
    .section
        width: 100%
        height: 100vh
        position: absolute
        top: 0
        left: 0
        z-index: -1
        opacity: 0
        transition:
            property: opacity
            duration: .6s
            timing-function: easeOutSine
        &.active
            opacity: 1

    .section01
        background:
            color: #30bf10

    .section02
        background:
            color: #ffe802

    .section03
        background:
            color: #ce0404

    .section04
        background:
            color: #00abff

    .section05
        background:
            color: #b600a5


    .inner
        +font-size(40)
        color: #3f3f3f
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        width: 100%
        height: 100%
        transform: rotate(0)
        transition:
            delay: .1s
            duration: 1s
            property: transform
            timing-function: easeOutExpo

        .active &
            transform: rotate(720deg)
</style>
