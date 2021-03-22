<template>
  <div class="offer">
    <h3 v-if="!priceTwo">
      R$ {{ priceOne }}<span>/{{ period }}*</span>
    </h3>
    <h3 v-else>
      De R$ {{ priceOne }} por R$ {{ priceTwo }}<span>/{{ period }}*</span>
    </h3>
    <MainButton padding="16.5px 14px" text="assine agora" />
  </div>
</template>

<script>
export default {
  name: 'Offer',
  props: {
    priceOne: {
      type: String,
      required: true,
    },
    priceTwo: String,
    period: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

.offer {
  display: block;
  width: 100%;
  max-width: 380px;
  height: 140px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: $color-white;
    font-size: 1.875rem;
    font-weight: bold;
    font-family: $font;
    width: 13ch;

    span {
      color: $color-grey;
      font-size: 0.875rem;
    }
  }
}
</style>
