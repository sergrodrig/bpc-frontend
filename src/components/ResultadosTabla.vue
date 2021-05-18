<template>
  <section class="text-gray-600 body-font">
    <!-- Skeleton loader while fetching -->
    <div v-if="isFetching">
      <div class="lg:w-3/3 w-full mx-auto overflow-auto animate-pulse rounded-lg">
        <table class="table-auto w-full text-left whitespace-no-wrap">
          <thead class="bg-gray-400">
            <tr class="h-12">
              <th
                v-for="keyd in 7"
                :key="keyd"
              />
            </tr>
          </thead>
          <tbody class="space-y-4">
            <tr>
              <td
                v-for="keyc in 7"
                :key="keyc"
                class="bg-gray-200 h-72 m-4"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- real data once fetched from api -->
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
