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
      <div>
        <div
          v-for="duelo in fecha.duelos"
          :key="duelo"
          class="grid grid-cols-11"
        >
          <div class="text-right col-start-2 col-end-5">
            {{ duelo.local }}
          </div>
          <div class="text-center col-start-6 col-end-7">
            vs
          </div>
          <div class="text-left col-start-8 col-end-11">
            {{ duelo.visita }}
          </div>
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
        { numero: 1, fecha: '13 Mayo 2021', duelos: [{ local: 'Mancoster United', visita: 'Los del Gulag' }, { local: 'The Wutang Lag', visita: 'Chichigang' }, { local: 'FPMR', visita: 'CRK' }] },
        { numero: 2, fecha: '20 Mayo 2021', duelos: [{ local: 'Mancoster United', visita: 'Chichigang' }, { local: 'The Wutang Lag', visita: 'CRK' }, { local: 'Los del Gulag', visita: 'FPMR' }] },
        { numero: 3, fecha: '27 Mayo 2021', duelos: [{ local: 'FPMR', visita: 'The Wutang Lag' }, { local: 'Chichigang', visita: 'Los del Gulag' }, { local: 'CRK', visita: 'Mancoster United' }] },
        { numero: 4, fecha: '3 Junio 2021', duelos: [{ local: 'Mancoster United', visita: 'FPMR' }, { local: 'Los del Gulag', visita: 'The Wutang Lag' }, { local: 'Chichigang', visita: 'CRK' }] },
        { numero: 5, fecha: '10 Junio 2021', duelos: [{ local: 'CRK', visita: 'Los del Gulag' }, { local: 'Chichigang', visita: 'FPMR' }, { local: 'The Wutang Lag', visita: 'Mancoster United' }] },
        { numero: 6, fecha: '17 Junio 2021', duelos: [{ local: 'Mancoster United', visita: 'The Wutang Lag' }, { local: 'FPMR', visita: 'Chichigang' }, { local: 'Los del Gulag', visita: 'CRK' }] },
        { numero: 7, fecha: '24 Junio 2021', duelos: [{ local: 'CRK', visita: 'Chichigang' }, { local: 'The Wutang Lag', visita: 'Los del Gulag' }, { local: 'FPMR', visita: 'Mancoster United' }] },
        { numero: 8, fecha: '1 Julio 2021', duelos: [{ local: 'The Wutang Lag', visita: 'FPMR' }, { local: 'Los del Gulag', visita: 'Chichigang' }, { local: 'Mancoster United', visita: 'CRK' }] },
        { numero: 9, fecha: '8 Julio 2021', duelos: [{ local: 'Chichigang', visita: 'Mancoster United' }, { local: 'CRK', visita: 'The Wutang Lag' }, { local: 'FPMR', visita: 'Los del Gulag' }] },
        { numero: 10, fecha: '15 Julio 2021', duelos: [{ local: 'Los del Gulag', visita: 'Mancoster United' }, { local: 'Chichigang', visita: 'The Wutang Lag' }, { local: 'CRK', visita: 'FPMR' }] }
      ]
    }
  }
}
</script>

<style>

</style>
