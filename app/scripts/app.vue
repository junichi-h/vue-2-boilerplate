<template lang="pug">
    #app
        h1 {{msg}}
        Button(label="prev" :click="onPrev" v-if="counter > 0 && counter <= sections.length - 1")
        Button(label="next" :click="onNext" v-if="counter >= 0 && counter < sections.length - 1")
        Section(
          v-for="(section, index) in sections"
          :title="section"
          :isActive="(index === counter)"
          :key="index"
        )
</template>

<script>
  import Button from './components/button.vue';
  import Section from './components/section.vue';

  export default {
    name: 'app',
    components: {
      Button,
      Section
    },
    data () {
      return {
        msg: 'vue test',
        counter: 0,
        sections: [
            'section01',
            'section02',
            'section03',
            'section04',
            'section05',
        ]
      }
    },
    methods: {
      onNext: function() {
        const prev = this.counter;
        const next = Math.min(this.counter + 1, this.sections.length - 1); // 5はmax
        this.goto(prev, next);
      },
      onPrev: function() {
        const prev = this.counter;
        const next = Math.max(this.counter - 1, 0); // 5はmax
        this.goto(prev, next);
      },
      goto: function(prev, next) {
        if (prev === next) {
          return;
        }
        this.counter = next;
        console.log(this.counter);
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
