<template>
  <div
    class="alert"
    v-text="message"
  />
</template>

<script>
export default {
  data() {
    return {
      message: 'I am an alert.',
    };
  },
};
</script>

<style>
.alert {
  background: red;
}
</style>
