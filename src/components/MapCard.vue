<template>
  <div class="flex relative shadow-xl">
    <img
      :alt="name"
      class="absolute inset-0 w-full h-full object-cover object-center"
      :src="url"
    >
    <div class="px-8 py-10 relative z-10 w-full border-4 border-indigo-300 bg-black opacity-0 hover:opacity-100">
      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
        {{ size }}
      </h2>
      <h1 class="title-font text-lg font-medium text-gray-200 mb-3">
        {{ name }}
      </h1>
      <p class="leading-relaxed text-gray-500">
        {{ descripcion }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapCard',
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      default: 'descripcion del mapa que me da paja escribir'
    },
    size: {
      type: String,
      default: 'Desconocido'
    }
  }
}
</script>

<style>

</style>
