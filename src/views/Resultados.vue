<template>
  <div class="container mx-auto max-w-4xl pt-12 space-y-20">
    <banner-pagina
      titulo="Tabla de posiciones"
      subtitulo="3 puntos triunfo / 1 punto empate / 0 puntos derrota"
    />
    <resultados-tabla />
    <resultados-fechas class="h-full" />
  </div>
</template>

<script>
import ResultadosTabla from '@/components/ResultadosTabla'
import ResultadosFechas from '@/components/ResultadosFechas'
import BannerPagina from '@/components/BannerPagina'

export default {
  name: 'Resultados',
  components: {
    ResultadosFechas,
    ResultadosTabla,
    BannerPagina
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
