<template>
  <img
    src="../assets/images/logo-nopad.svg"
    alt="Disney Plus Logo"
    :style="{ width }"
  />
</template>

<script>
export default {
  name: 'Logo',
  props: {
    width: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
