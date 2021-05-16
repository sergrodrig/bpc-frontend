<template>
  <div class="flex relative z-0">
    <div class="absolute inset-0 z-10 flex transition hover:opacity-0 focus:opacity-0 active:opacity-0 duration-200 ease-in">
      <div class="absolute inset-0 bg-black opacity-20" />
      <div class="mx-auto text-white z-10 self-center uppercase tracking-wide text-xl font-thin shadow-xl">
        {{ name }}
      </div>
    </div>
    <img
      :alt="name"
      :src="url"
    >
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
