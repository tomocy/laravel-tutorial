<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Transactions
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          v-text="post.slug"
        />
        <p
          class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
          v-text="post.body"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThePagePost',
  props: {
    post: {
      type: Object,
      default() {
        return {
          slug: '',
          body: '',
        };
      },
    },
  },
};
</script>
