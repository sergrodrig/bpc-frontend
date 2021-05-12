<template>
  <div
    id="progress"
    class="fixed w-full h-1 z-20 top-0 shadow-xl"
    :style="`background:linear-gradient(to right, #4dc0b5 ${progress}%, transparent 0);`"
  />
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>

</style>
