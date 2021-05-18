<template>
  <section class="text-gray-600 body-font pt-12 space-y-12">
    <div
      v-for="fecha in fechas"
      :key="fecha.numero"
    >
      <div class="bg-green-500 rounded text-white flex flex-col justify-center items-center py-1">
        <h1 class="text-xl font-bold">
          Fecha {{ fecha.numero }}
        </h1>
        <h2 class="text-xs uppercase font-medium tracking-wider">
          {{ fecha.fecha }}
        </h2>
      </div>
      <div
        v-for="duelo in fecha.duelos"
        :key="duelo"
        class="grid grid-cols-11 border-b"
      >
        <div class="text-right col-start-1 col-end-5">
          {{ duelo.local.equipo }}
        </div>
        <div class="text-right col-start-5 col-end-6">
          {{ duelo.local.puntos }}
        </div>
        <div class="text-center col-start-6 col-end-7">
          vs
        </div>
        <div class="text-left col-start-7 col-end-8">
          {{ duelo.visita.puntos }}
        </div>
        <div class="text-left col-start-8 col-end-12">
          {{ duelo.visita.equipo }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      fechas: [
        { numero: 1, fecha: '13 Mayo 2021', duelos: [{ local: { equipo: 'Mancoster United', puntos: '3' }, visita: { equipo: 'Los del Gulag', puntos: '3' } }, { local: { equipo: 'The Wutang Lag', puntos: '0' }, visita: { equipo: 'Chichigang', puntos: '6' } }, { local: { equipo: 'FPMR', puntos: '6' }, visita: { equipo: 'CRK', puntos: '0' } }] },
        { numero: 2, fecha: '20 Mayo 2021', duelos: [{ local: { equipo: 'Mancoster United', puntos: '-' }, visita: { equipo: 'Chichigang', puntos: '-' } }, { local: { equipo: 'The Wutang Lag', puntos: '-' }, visita: { equipo: 'CRK', puntos: '-' } }, { local: { equipo: 'Los del Gulag', puntos: '-' }, visita: { equipo: 'FPMR', puntos: '-' } }] },
        { numero: 3, fecha: '27 Mayo 2021', duelos: [{ local: { equipo: 'FPMR', puntos: '-' }, visita: { equipo: 'The Wutang Lag', puntos: '-' } }, { local: { equipo: 'Chichigang', puntos: '-' }, visita: { equipo: 'Los del Gulag', puntos: '-' } }, { local: { equipo: 'CRK', puntos: '-' }, visita: { equipo: 'Mancoster United', puntos: '-' } }] },
        { numero: 4, fecha: '3 Junio 2021', duelos: [{ local: { equipo: 'Mancoster United', puntos: '-' }, visita: { equipo: 'FPMR', puntos: '-' } }, { local: { equipo: 'Los del Gulag', puntos: '-' }, visita: { equipo: 'The Wutang Lag', puntos: '-' } }, { local: { equipo: 'Chichigang', puntos: '-' }, visita: { equipo: 'CRK', puntos: '-' } }] },
        { numero: 5, fecha: '10 Junio 2021', duelos: [{ local: { equipo: 'CRK', puntos: '-' }, visita: { equipo: 'Los del Gulag', puntos: '-' } }, { local: { equipo: 'Chichigang', puntos: '-' }, visita: { equipo: 'FPMR', puntos: '-' } }, { local: { equipo: 'The Wutang Lag', puntos: '-' }, visita: { equipo: 'Mancoster United', puntos: '-' } }] },
        { numero: 6, fecha: '17 Junio 2021', duelos: [{ local: { equipo: 'Mancoster United', puntos: '-' }, visita: { equipo: 'The Wutang Lag', puntos: '-' } }, { local: { equipo: 'FPMR', puntos: '-' }, visita: { equipo: 'Chichigang', puntos: '-' } }, { local: { equipo: 'Los del Gulag', puntos: '-' }, visita: { equipo: 'CRK', puntos: '-' } }] },
        { numero: 7, fecha: '24 Junio 2021', duelos: [{ local: { equipo: 'CRK', puntos: '-' }, visita: { equipo: 'Chichigang', puntos: '-' } }, { local: { equipo: 'The Wutang Lag', puntos: '-' }, visita: { equipo: 'Los del Gulag', puntos: '-' } }, { local: { equipo: 'FPMR', puntos: '-' }, visita: { equipo: 'Mancoster United', puntos: '-' } }] },
        { numero: 8, fecha: '1 Julio 2021', duelos: [{ local: { equipo: 'The Wutang Lag', puntos: '-' }, visita: { equipo: 'FPMR', puntos: '-' } }, { local: { equipo: 'Los del Gulag', puntos: '-' }, visita: { equipo: 'Chichigang', puntos: '-' } }, { local: { equipo: 'Mancoster United', puntos: '-' }, visita: { equipo: 'CRK', puntos: '-' } }] },
        { numero: 9, fecha: '8 Julio 2021', duelos: [{ local: { equipo: 'Chichigang', puntos: '-' }, visita: { equipo: 'Mancoster United', puntos: '-' } }, { local: { equipo: 'CRK', puntos: '-' }, visita: { equipo: 'The Wutang Lag', puntos: '-' } }, { local: { equipo: 'FPMR', puntos: '-' }, visita: { equipo: 'Los del Gulag', puntos: '-' } }] },
        { numero: 10, fecha: '15 Julio 2021', duelos: [{ local: { equipo: 'Los del Gulag', puntos: '-' }, visita: { equipo: 'Mancoster United', puntos: '-' } }, { local: { equipo: 'Chichigang', puntos: '-' }, visita: { equipo: 'The Wutang Lag', puntos: '-' } }, { local: { equipo: 'CRK', puntos: '-' }, visita: { equipo: 'FPMR', puntos: '-' } }] }
      ]
    }
  }
}
</script>

<style>

</style>
