<template>
  <section class="text-gray-600 body-font min-h-screen">
    <div
      v-for="faccion in facciones"
      :key="faccion.faccionId"
      class="container px-5 py-24 mx-auto"
    >
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Faccion #{{ faccion.faccionId }}
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
          description: 'Soldados de Solubyte y sus secuaces.',
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
          description: 'Don Cherno y los cracks',
          soldados: [
            { name: 'Chernobyl', rrss: '@Chernobyl', faccion: 2 },
            { name: 'DrElvisTec', rrss: '@DrElvisTec', faccion: 2 },
            { name: 'ElCharrasqueado', rrss: '@ElCharrasqueado', faccion: 2 },
            { name: 'ElJefeReyes', rrss: '@ElJefeReyes', faccion: 2 },
            { name: 'Lex', rrss: '@Lex', faccion: 2 }
          ]
        },
        {
          faccionId: '3',
          description: 'Cocoliso y los malditos.',
          soldados: [
            { name: 'Cocoliso', rrss: '@Cocoliso', faccion: 3 },
            { name: 'Reaper', rrss: '@Reaper', faccion: 3 },
            { name: 'Ragnarok', rrss: '@Ragnarok', faccion: 3 },
            { name: 'D-Day', rrss: '@D-Day', faccion: 3 },
            { name: 'Jacontr', rrss: '@Jacontr', faccion: 3 }
          ]
        },
        {
          faccionId: '4',
          description: 'Huevito rey y los degenerados del kill.',
          soldados: [
            { name: 'Huevito', rrss: '@huevito', faccion: 4 },
            { name: 'Huevito', rrss: '@huevito', faccion: 4 },
            { name: 'Huevito', rrss: '@huevito', faccion: 4 },
            { name: 'Huevito', rrss: '@huevito', faccion: 4 },
            { name: 'Huevito', rrss: '@huevito', faccion: 4 }
          ]
        },
        {
          faccionId: '5',
          description: 'Invitados',
          soldados: [
            { name: 'FPMR Tego', rrss: '@FPMR Tego', faccion: 5 },
            { name: 'FPMR SrMiranda', rrss: '@FPMR SrMiranda', faccion: 5 },
            { name: 'FPMR Deimos', rrss: '@FPMR Deimos', faccion: 5 },
            { name: 'FPMR Zeke', rrss: '@FPMR Zeke', faccion: 5 },
            { name: 'FPMR ?', rrss: '@FPMR ?', faccion: 5 }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
