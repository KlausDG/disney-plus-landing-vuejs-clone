<template>
  <div id='app'>
    <TheHero></TheHero>
  </div>
</template>

<script>
import TheHero from '@/components/Hero.vue';

export default {
  name: 'App',
  components: {
    TheHero,
  },
};
</script>

<style lang='scss'>
 @import '@/scss/main.scss';
body {
  background: $color-black;
}
</style>
