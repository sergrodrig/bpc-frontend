<template>
  <section class="text-gray-600 body-font pt-12">
    <div class="container mx-auto max-w-5xl">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-200 bg-black p-2">
          Tabla de posiciones
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          3 puntos triunfo / 1 punto empate / 0 puntos derrota
        </p>
      </div>
      <div v-if="isFetching">
        <p>cargando...</p>
      </div>
      <div v-if="data">
        <div class="lg:w-3/3 w-full mx-auto overflow-auto">
          <table class="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th class="text-center py-3 tracking-wider font-medium text-sm bg-indigo-700 text-white rounded-tl rounded-bl">
                  Pos.
                </th>
                <th class="py-3 tracking-wider font-medium text-sm bg-indigo-700 text-white">
                  Equipo
                </th>
                <th class="text-center py-3 tracking-wider font-medium text-sm bg-indigo-700 text-white">
                  Puntos
                </th>
                <th class="text-center py-3 tracking-wider font-medium text-sm bg-indigo-700 text-white">
                  Jugados
                </th>
                <th class="text-center py-3 tracking-wider font-medium text-sm bg-indigo-700 text-white">
                  Rounds+
                </th>
                <th class="text-center py-3 tracking-wider font-medium text-sm bg-indigo-700 text-white">
                  Rounds-
                </th>
                <th class="text-center py-3 tracking-wider font-medium text-sm bg-indigo-700 text-white rounded-tr rounded-br">
                  Ratio
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="value,key in data.allPuntajes"
                :key="value.id"
              >
                <td class="text-center py-3">
                  {{ key + 1 }}
                </td>
                <td class="py-3&quot;">
                  {{ value.team.name }}
                </td>
                <td class="text-center py-3 font-bold">
                  {{ value.points }}
                </td>
                <td class="text-center py-3">
                  {{ value.matchPlayed }}
                </td>
                <td class="text-center py-3">
                  {{ value.roundsWon }}
                </td>
                <td class="text-center py-3">
                  {{ value.roundsLost }}
                </td>
                <td class="text-center py-3">
                  {{ value.roundsWLRatio }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useQuery } from 'villus'

export default {
  name: 'Resultados',
  setup () {
    const obtenerPuntajes = `
      query obtenerPuntajes {
        allPuntajes(sortBy:[points_DESC,roundsWLRatio_DESC]) {
          id
          position
          team {
            name
          }
          points
          matchPlayed
          roundsWon
          roundsLost
          roundsWLRatio
        }
      }
    `
    const { data, isFetching } = useQuery({
      query: obtenerPuntajes
    })

    return { data, isFetching }
  }
}
</script>

<style>

</style>
