<template>
  <div>
    <button class="btn" :style="{ padding }">
      {{ formattedText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    padding: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedText() {
      return this.text.toUpperCase();
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';

.btn {
  width: 100%;
  max-width: 340px;
  background: $color-blue;
  color: $color-white;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: 0.8px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background: lighten($color-blue, 10);
  }
}
</style>
