<template>
  <div class="flex flex-col text-center">
    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-200 bg-black p-2">
      {{ titulo }}
    </h1>
    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
      {{ subtitulo }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BannerPagina',
  props: {
    titulo: {
      type: String,
      required: true
    },
    subtitulo: {
      type: String,
      default: ''
    }
  }
}
</script>
