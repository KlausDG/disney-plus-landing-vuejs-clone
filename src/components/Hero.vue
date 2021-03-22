<template>
  <section class="hero">
    <div class="hero__background"></div>
    <div class="hero__info">
      <Logo width="160px" />
      <h2>As melhores histórias em um só lugar.</h2>
      <div class="offers">
        <Offer :priceOne="monthlyPrice" period="mês" />
        <Offer :priceOne="yearlyPrice" :priceTwo="discount" period="ano" />
      </div>
      <!-- 2x Subscribe components -->
      <p>
        *Preço mensal: R$ 27,90. Preço anual: R$ 279,90 à vista. Encargos e
        impostos podem ser aplicáveis.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      monthlyPrice: '27,90',
      yearlyPrice: '334',
      discount: '279,90',
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';
.hero {
  &__background {
    position: absolute;
    z-index: -10;
    width: 100%;
    height: 100%;
    max-height: 120vh;
    background-image: url('https://cannonball-cdn.bamgrid.com/assets/originals/Mlp_Hero_Br_&_Rola_Desktop_v2.jpg');
    background-repeat: no-repeat;
    background-position: bottom bottom;
    background-size: cover;
  }

  &__info {
    margin-left: 80px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    max-width: 680px;
    width: 100%;

    h2 {
      margin-top: 25px;
      margin-bottom: 30px;
      color: $color-white;
      font-size: 2.75rem;
      font-family: $font;
      font-weight: bold;
      width: 17ch;
      line-height: 3.5rem;
    }

    p {
      color: $color-grey;
    }
  }

  .offers {
    width: 100%;
    display: flex;
    align-items: stretch;
    margin: 0 -16px 20px;
  }
}
</style>
