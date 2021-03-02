<template>
  <div
    class="
      py-8
      px-8
      max-w-sm
      mx-auto
      bg-white
      rounded-xl
      shadow-md
      space-y-2
      sm:py-4
      sm:flex
      sm:items-center
      sm:space-y-0
      sm:space-x-6"
  >
    <p
      class="text-base"
      v-text="count"
    />
    <div class="text-center space-y-2 sm:text-left">
      <button
        class="
        px-4
        py-1
        text-sm
        text-purple-600
        font-semibold
        rounded-full
        border
        border-purple-200
        hover:text-white
        hover:bg-purple-600
        hover:border-transparent
        focus:outline-none
        focus:ring-2
        focus:ring-purple-600
        focus:ring-offset-2"
        @click="increment"
      >
        Count
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>
