<template>
  <section class="text-gray-600 body-font min-h-screen">
    <div
      v-for="faccion in facciones"
      :key="faccion.faccionId"
      class="container py-24 mx-auto max-w-5xl"
    >
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200 bg-black p-2">
          {{ faccion.faccionName }} [{{ faccion.sigla }}]
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          {{ faccion.description }}
        </p>
      </div>
      <div class="flex flex-wrap -m-2">
        <div
          v-for="soldado in faccion.soldados"
          :key="soldado.rrss"
          class="p-2 lg:w-1/3 md:w-1/2 w-full"
        >
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <!-- <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            > -->
            <div class="w-16 h-16 bg-gray-500 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
              <p class="text-center text-gray-50">
                F{{ faccion.faccionId }}
              </p>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">
                {{ soldado.name }}
              </h2>
              <p class="text-gray-500">
                {{ soldado.rrss }}
              </p>
            </div>
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
      facciones: [
        {
          faccionId: '1',
          faccionName: 'Mancoster United',
          sigla: 'MCU',
          description: '',
          soldados: [
            { name: 'MCLovin', rrss: '@mclovin', faccion: 1 },
            { name: 'IAmBatman', rrss: '@batman', faccion: 1 },
            { name: 'JE', rrss: '@juanenrique', faccion: 1 },
            { name: 'Jakesnake', rrss: '@jakesnae', faccion: 1 },
            { name: 'Anfeta', rrss: '@anfetasour', faccion: 1 }
          ]
        },
        {
          faccionId: '2',
          faccionName: 'Los del Gulag',
          sigla: 'LDG',
          description: '',
          soldados: [
            { name: 'Chernobyl', rrss: '@Chernobyl', faccion: 2 },
            { name: 'DrElvisTec', rrss: '@DrElvisTec', faccion: 2 },
            { name: 'ElCharrasqueado', rrss: '@ElCharrasqueado', faccion: 2 },
            { name: 'ElJefeReyes', rrss: '@ElJefeReyes', faccion: 2 },
            { name: 'Lex4', rrss: '@Lex', faccion: 2 }
          ]
        },
        {
          faccionId: '3',
          faccionName: 'The Wutang Lag',
          sigla: 'TWL',
          description: '',
          soldados: [
            { name: 'Cocoliso', rrss: '@Cocoliso', faccion: 3 },
            { name: 'NachoUC', rrss: '@Reaper', faccion: 3 },
            { name: 'Ragnarok', rrss: '@Ragnarok', faccion: 3 },
            { name: 'D-Day', rrss: '@D-Day', faccion: 3 },
            { name: 'Jacontr', rrss: '@Jacontr', faccion: 3 }
          ]
        },
        {
          faccionId: '4',
          faccionName: 'Chichigans',
          sigla: 'CCG',
          description: '',
          soldados: [
            { name: 'Reaper', rrss: '@reaper', faccion: 4 },
            { name: 'Huevito', rrss: '@huevito', faccion: 4 },
            { name: 'Prromax', rrss: '@prromax', faccion: 4 },
            { name: 'hipox neira', rrss: '@huevito', faccion: 4 },
            { name: 'bot ciiisar', rrss: '@huevito', faccion: 4 }
          ]
        }
        // {
        //   faccionId: '5',
        //   description: 'Invitados',
        //   soldados: [
        //     { name: 'FPMR Tego', rrss: '@FPMR Tego', faccion: 5 },
        //     { name: 'FPMR SrMiranda', rrss: '@FPMR SrMiranda', faccion: 5 },
        //     { name: 'FPMR Deimos', rrss: '@FPMR Deimos', faccion: 5 },
        //     { name: 'FPMR Zeke', rrss: '@FPMR Zeke', faccion: 5 },
        //     { name: 'FPMR ?', rrss: '@FPMR ?', faccion: 5 }
        //   ]
        // }
      ]
    }
  }
}
</script>

<style>

</style>
