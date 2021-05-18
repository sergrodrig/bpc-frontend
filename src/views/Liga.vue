<template>
  <section class="text-gray-600 body-font pt-24">
    <div class="container max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto space-y-16">
      <div>
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-200 bg-black p-2">
          Bases
        </h1>
        <p class="italic text-gray-400">
          Ultima modificacion: 13 Mayo 2021
        </p>
      </div>
      <div>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200 bg-black inline-block p-2">
          Formato
        </h1>
        <ol class="leading-relaxed list-disc list-inside">
          <li>Los equipos participantes jugaran en un sistema todos contra todos.</li>
          <li>Las fechas seran los dias <span class="font-medium text-indigo-700">Jueves a las 22:00 hrs.</span> a menos que se coordine un cambio.</li>
          <li>
            La fecha consta de <span class="font-medium text-indigo-700">6 partidas (mapas)</span>. Las partidas las gana el que llega a <span class="font-medium text-indigo-700">6 win</span> como ha sido hasta ahora.
            Se pueden jugar mas partidas si creen que es muy poco 6 pero debe ser numero par (8, 10, 12...) y que esten de acuerdo los 2 equipos.
          </li>
          <li>En cada fecha, <span class="font-medium text-indigo-700">el equipo que este de local elige los 6 mapas a jugar</span>. Deben confirmarlos con antelacion.</li>
          <li>El <span class="font-medium text-indigo-700">primer duelo en un mapa sera de prueba</span> para que se alcancen a conectar todos y puedan probar las armas.</li>
          <li>El mapa sera configurado de modo que <span class="font-medium text-indigo-700">a cada equipo le toque plantar alternadamente cada 1 punto.</span></li>
          <li>El <span class="font-medium text-indigo-700">ganador de la fecha se lleva 3 puntos en la tabla</span> y el <span class="font-medium text-indigo-700">perdedor 0</span>. En caso de <span class="font-medium text-indigo-700">empate 1 punto para cada equipo</span>.</li>
          <li>Al final de las 6 fechas el equipo con mas puntos gana la liga y queda como campeon hasta la proxima edicion. Ademas entra al salon de la fama de BPC.</li>
        </ol>
      </div>
      <div>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200 bg-black inline-block p-2">
          Reglas
        </h1>
        <ol class="leading-relaxed text-base list-disc list-inside">
          <li>Las armas a utilizar seran limitadas por las reglas de COD League. El armamento indica las armas que son incompatibles con un signo de exclamacion. *</li>
          <li>Se permitira 1 sniper por equipo. Se descontara 1 punto al equipo si es que se demuestra.</li>
          <li>Si a un equipo se le cae un jugador la partida debe continuar, a menos que los equipos lleguen a un acuerdo de esperarlo o reinicar.</li>
          <li>Cada equipo tendra un lider que representa al equipo para las votaciones, acuerdos, etc...</li>
        </ol>
        <div class="mt-12 text-gray-500 text-xs uppercase">
          * Si eres host, debes configurar la partida de acuerdo a esta
          <router-link
            :to="{ name: 'ConfigurarPartida' }"
            class="underline text-blue-500 font-bold"
          >
            guia
          </router-link>.
        </div>
      </div>
      <div>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200 bg-black inline-block p-2">
          Proximas fechas
        </h1>
        <ol>
          <h2 class="sm:text-lg text-md font-medium title-font mb-4 text-gray-900">
            PRIMERA RUEDA
          </h2>
          <ul><span class="font-semibold">Fecha #1: </span>Jueves 13 Mayo 22:00</ul>
          <ul><span class="font-semibold">Fecha #2: </span>Jueves 20 Mayo 22:00</ul>
          <ul><span class="font-semibold">Fecha #3: </span>Jueves 27 Mayo 22:00 **</ul>
          <ul><span class="font-semibold">Fecha #4: </span>Jueves 3 Junio 22:00 **</ul>
          <ul><span class="font-semibold">Fecha #5: </span>Jueves 10 Junio 22:00 **</ul>
          <h2 class="sm:text-lg text-md font-medium title-font mb-4 text-gray-900 mt-4">
            SEGUNDA RUEDA
          </h2>
          <ul><span class="font-semibold">Fecha #6: </span>Jueves 17 Junio 22:00 **</ul>
          <ul><span class="font-semibold">Fecha #7: </span>Jueves 24 Junio 22:00 **</ul>
          <ul><span class="font-semibold">Fecha #8: </span>Jueves 1 Julio 22:00 **</ul>
          <ul><span class="font-semibold">Fecha #9: </span>Jueves 8 Julio 22:00 **</ul>
          <ul><span class="font-semibold">Fecha #10: </span>Jueves 15 Julio 22:00 **</ul>
        </ol>
        <p class="mt-4 text-sm italic">
          ** por confirmar
        </p>
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
