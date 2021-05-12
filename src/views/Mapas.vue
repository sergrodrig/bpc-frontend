<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Mapas disponibles en el torneo
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Cada faccion se puede especializar en un mapa. Elijan los suyos pensando en sus cualidades.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-for="image in mapas"
          :key="image.id"
          class="lg:w-1/3 sm:w-1/2 p-4"
        >
          <div class="flex relative shadow-xl">
            <Suspense>
              <img
                :alt="image.name"
                class="absolute inset-0 w-full h-full object-cover object-center"
                :src="image.url"
              >
            </Suspense>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-indigo-300 bg-black opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                {{ image.size }}
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-200 mb-3">
                {{ image.name }}
              </h1>
              <p class="leading-relaxed text-gray-500">
                descripcion del mapa que me da paja escribir
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
      mapas: [
        { id: 'R9ogVlw', url: 'https://imgur.com/R9ogVlw.png', name: 'Chesire Park', size: 'medium' },
        { id: '3CLehG4', url: 'https://imgur.com/3CLehG4.png', name: 'Crash', size: 'medium' },
        { id: 'UeBP7r1', url: 'https://imgur.com/UeBP7r1.png', name: 'Vacant', size: 'medium' },
        { id: 'E76lQZG', url: 'https://imgur.com/E76lQZG.png', name: 'Arklov Peak', size: 'big' },
        { id: 'b4Arm6n', url: 'https://imgur.com/b4Arm6n.png', name: 'Gun Runner', size: 'big' },
        { id: 'itdbIb2', url: 'https://imgur.com/itdbIb2.png', name: 'Gun Runner (Night)', size: 'big' },
        { id: 'K7Gvtbn', url: 'https://imgur.com/K7Gvtbn.png', name: 'Grazna Raid', size: 'big' },
        { id: 'NJI0Z18', url: 'https://imgur.com/NJI0Z18.png', name: 'St Petrograd', size: 'big' },
        { id: '2pKiuSF', url: 'https://imgur.com/2pKiuSF.png', name: 'Talsik Backlot', size: 'big' },
        { id: 'cNDUDbi', url: 'https://imgur.com/cNDUDbi.png', name: 'Hardhat', size: 'big' },
        { id: '5kTTZA7', url: 'https://imgur.com/5kTTZA7.png', name: 'Hovec Sawmill', size: 'grande' },
        { id: 'JnJONdW', url: 'https://imgur.com/JnJONdW.png', name: 'Picadilly', size: 'medium' },
        { id: 'm3lLOiZ', url: 'https://imgur.com/m3lLOiZ.png', name: 'Azhir Cave', size: 'big' },
        { id: 'SsISkLG', url: 'https://imgur.com/SsISkLG.png', name: 'Azhir Cave (Night)', size: 'big' },
        { id: 'o3wfuV3', url: 'https://imgur.com/o3wfuV3.png', name: 'Suldal Harbor', size: 'big' },
        { id: 'xVfrfa6', url: 'https://imgur.com/xVfrfa6.png', name: 'Broadcast', size: 'big' },
        { id: 'e481hI1', url: 'https://imgur.com/e481hI1.png', name: 'Atlas Superstore', size: 'big' },
        { id: 'QjzcbPo', url: 'https://imgur.com/QjzcbPo.png', name: 'Euphrates Bridge', size: 'big' },
        { id: '1nTF21a', url: 'https://imgur.com/1nTF21a.png', name: 'Mialstore Tank Factory 10vs10', size: 'big' },
        { id: 'qNd8FpT', url: 'https://imgur.com/qNd8FpT.png', name: 'Khandor Hideout', size: 'big' },
        { id: '35vCola', url: 'https://imgur.com/35vCola.png', name: 'Rammaza', size: 'big' },
        { id: 'cqMc1bg', url: 'https://imgur.com/cqMc1bg.png', name: 'Rammaza (Night)', size: 'big' },
        { id: 'PRkrvma', url: 'https://imgur.com/PRkrvma.png', name: 'Scrapyard', size: 'medium' },
        { id: 'FNl0zk3', url: 'https://imgur.com/FNl0zk3.png', name: 'Petrov Oil Rig', size: 'big' },
        { id: 'WQYkpqL', url: 'https://imgur.com/WQYkpqL.png', name: 'Hackney Yard', size: 'medium' },
        { id: '6rMglPM', url: 'https://imgur.com/6rMglPM.png', name: 'Hackney Yard (Night)', size: 'medium' },
        { id: 'cKMd4nN', url: 'https://imgur.com/cKMd4nN.png', name: 'Shoot House', size: 'medium' },
        { id: 'B4b6en0', url: 'https://imgur.com/B4b6en0.png', name: 'Aniyah Incursion', size: 'big' },
        { id: 'JIrBCJl', url: 'https://imgur.com/JIrBCJl.png', name: 'Aniyah Palace', size: 'big' },
        { id: 'coXQ1bI', url: 'https://imgur.com/coXQ1bI.png', name: 'Atrium', size: 'big' },
        { id: 'eX04wM6', url: 'https://imgur.com/eX04wM6.png', name: 'Aisle 9', size: 'small' },
        { id: 'q5W3YbM', url: 'https://imgur.com/q5W3YbM.png', name: 'Rust', size: 'small' },
        { id: 'aZ3WUYE', url: 'https://imgur.com/aZ3WUYE.png', name: 'Station', size: 'small' },
        { id: 'vARwlkr', url: 'https://imgur.com/vARwlkr.png', name: 'Shipment', size: 'small' },
        { id: 'IbS8bih', url: 'https://imgur.com/IbS8bih.png', name: 'Pine', size: 'small' },
        { id: 'hgNByeJ', url: 'https://imgur.com/hgNByeJ.png', name: 'Docks', size: 'small' },
        { id: 'QzH3HTy', url: 'https://imgur.com/QzH3HTy.png', name: 'Trench', size: 'small' },
        { id: 'mE1zt4G', url: 'https://imgur.com/mE1zt4G.png', name: 'Speedball', size: 'small' },
        { id: '4EAvMze', url: 'https://imgur.com/4EAvMze.png', name: 'Stack', size: 'small' },
        { id: 'M4zD4ZH', url: 'https://imgur.com/M4zD4ZH.png', name: 'Gulag Shower', size: 'small' },
        { id: 'JFlZWv5', url: 'https://imgur.com/JFlZWv5.png', name: 'Hill', size: 'small' },
        { id: 'ApjPPGl', url: 'https://imgur.com/ApjPPGl.png', name: 'Cargo', size: 'small' },
        { id: 'jwqqKh2', url: 'https://imgur.com/jwqqKh2.png', name: 'Verdansk Stadium', size: 'small' },
        { id: 'V110HUU', url: 'https://imgur.com/V110HUU.png', name: 'Bazaar', size: 'small' },
        { id: 'ZtH6IZM', url: 'https://imgur.com/ZtH6IZM.png', name: 'Livestock', size: 'small' },
        { id: 'sUULEq6', url: 'https://imgur.com/sUULEq6.png', name: 'King', size: 'small' }
      ],
      size: ''
    }
  }
}
</script>
