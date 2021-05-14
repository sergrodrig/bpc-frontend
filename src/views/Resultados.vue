<template>
  <section class="text-gray-600 body-font">
    <div class="container py-24 mx-auto max-w-5xl">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-200 bg-black p-2">
          Tabla de posiciones
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          3 puntos triunfo / 1 punto empate / 0 puntos derrota
        </p>
      </div>
      <div class="lg:w-3/3 w-full mx-auto overflow-auto">
        <table class="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th class="px-6 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Pos.
              </th>
              <th class="px-6 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Equipo
              </th>
              <th class="px-6 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Puntos
              </th>
              <th class="px-6 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Rounds ganados
              </th>
              <th class="px-6 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Rounds perdidos
              </th>
              <th class="px-6 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                Ratio
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-6 py-3">
                1
              </td>
              <td class="px-6 py-3">
                Chichigans
              </td>
              <td class="px-6 py-3">
                3
              </td>
              <td class="px-6 py-3">
                36
              </td>
              <td class="px-6 py-3 text-lg text-gray-900">
                10
              </td>
              <td class="px-6 py-3 text-lg text-gray-900">
                3,6
              </td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-6 py-3">
                2
              </td>
              <td class="border-t-2 border-gray-200 px-6 py-3">
                Los del Gulag
              </td>
              <td class="border-t-2 border-gray-200 px-6 py-3">
                1
              </td>
              <td class="border-t-2 border-gray-200 px-6 py-3">
                29
              </td>
              <td class="border-t-2 border-gray-200 px-6 py-3 text-lg text-gray-900">
                20
              </td>
              <td class="border-t-2 border-gray-200 px-6 py-3 text-lg text-gray-900">
                1,45
              </td>
            </tr>
            <tr>
              <td class="border-t-2 border-gray-200 px-6 py-3">
                3
              </td>
              <td class="border-t-2 border-gray-200 px-6 py-3">
                Mancoster United
              </td>
              <td class="border-t-2 border-gray-200 px-6 py-3">
                1
              </td>
              <td class="border-t-2 border-gray-200 px-6 py-3">
                20
              </td>
              <td class="border-t-2 border-gray-200 px-6 py-3 text-lg text-gray-900">
                29
              </td>
              <td class="border-t-2 border-gray-200 px-6 py-3 text-lg text-gray-900">
                0,68
              </td>
            </tr>
            <tr>
              <td class="border-t-2 border-b-2 border-gray-200 px-6 py-3">
                4
              </td>
              <td class="border-t-2 border-b-2 border-gray-200 px-6 py-3">
                The Wutang Lag
              </td>
              <td class="border-t-2 border-b-2 border-gray-200 px-6 py-3">
                0
              </td>
              <td class="border-t-2 border-b-2 border-gray-200 px-6 py-3">
                10
              </td>
              <td class="border-t-2 border-b-2 border-gray-200 px-6 py-3 text-lg text-gray-900">
                36
              </td>
              <td class="border-t-2 border-b-2 border-gray-200 px-6 py-3 text-lg text-gray-900">
                0,27
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
