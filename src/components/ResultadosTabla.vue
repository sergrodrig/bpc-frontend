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
              <th class="text-center py-3 tracking-wider font-medium text-sm bg-indigo-700 text-white hidden md:table-cell">
                Fechas Jugadas
              </th>
              <th class="text-center py-3 tracking-wider font-medium text-sm bg-indigo-700 text-white hidden md:table-cell">
                Rounds
                Ganados
              </th>
              <th class="text-center py-3 tracking-wider font-medium text-sm bg-indigo-700 text-white hidden md:table-cell rounded-tr rounded-br">
                Rounds perdidos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="value,key in data.allCodLeagueTables"
              :key="value.id"
            >
              <td class="text-center py-3">
                {{ key + 1 }}
              </td>
              <td class="py-3&quot;">
                {{ value.faction.name }}
              </td>
              <td class="text-center py-3 font-bold">
                {{ value.score }}
              </td>
              <td class="text-center py-3 hidden md:table-cell">
                {{ value.played }}
              </td>
              <td class="text-center py-3 hidden md:table-cell">
                {{ value.totalRoundsWon }}
              </td>
              <td class="text-center py-3 hidden md:table-cell">
                {{ value.totalRoundsLost }}
              </td>
              <!-- <td class="text-center py-3 hidden md:table-cell">
                {{ value.roundsWLRatio }}
              </td> -->
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
  name: 'ResultadosTabla',
  setup () {
    const obtenerPuntajes = `
      query obtenerPuntajes {
        allCodLeagueTables(sortBy: [score_DESC]) {
          id
          faction {
            name
          }
          score
          played
          totalRoundsWon
          totalRoundsLost
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
