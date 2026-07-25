<script setup>
import { ref } from 'vue'
import gtv from '../assets/images/goodnews.jpg'
import gma from '../assets/images/gma.jpg'
import goodnews from '../assets/images/gtv.jpg'

defineEmits(['view-image'])

const items = [
  {
    src: gtv,
    alt: 'Maja Championrado featured on GTV Dapat Alam Mo with Ms. Susan Enriquez',
    badge: 'GTV',
    title: 'Dapat Alam Mo with Ms. Susan Enriquez',
    text: "From Champorado to Championrado! Because champion talaga tayo, hindi lang sa lasa kundi pati na rin sa presentation, nainvite ang Maja sa GTV's Dapat Alam Mo with Ms. Susan Enriquez.",
    link: 'https://www.facebook.com/DamiMongAlamKuyaKim/videos/847086103929290/?vh=e&fs=e&mibextid=wwXIfr&rdid=rGj16YiT4xPHmdg7#',
  },
  {
    src: gma,
    alt: 'Maja Championrado featured on GMA Unang Hirit',
    badge: 'GMA',
    title: 'GMA Unang Hirit',
    text: 'Dahil Champion talaga ang ating Maja Championrado, muling naimbitahan ang Maja sa pangalawang TV Guesting sa GMA Network. Panoorin ang segment na ito ng Unang Hirit.',
    link: 'https://www.facebook.com/Unang.Hirit/videos/422570824007683/?vh=e&mibextid=wwXIfr&rdid=cHFaRTKk2k6dYu82#',
  },
  {
    src: goodnews,
    alt: 'Maja Championrado featured in a Good News segment about Biñan',
    badge: 'Good News',
    title: 'Good News',
    text: "Thank you Good News for visiting the City of Biñan and featuring the story of D' Original Maja Championrado that changed the shape and flavors of Filipino's favorite trending champorado!",
    link: 'https://www.facebook.com/MAJAdoughsanddoughnuts/videos/469662242736964/?vh=e&fs=e&mibextid=wwXIfr&rdid=T69LQI2gGUi38m5y&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F18TL5ReowT%2F%3Fmibextid%3DwwXIfr#',
  },
]

const active = ref(1)

const openFacebook = (url) => {
  if (!url) {
    return
  }

  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section class="py-16 sm:py-20 bg-[#F5F5DC]" aria-labelledby="featured-heading">
    <div class="mx-auto max-w-6xl px-5 sm:px-8 text-center">
      <p class="text-3xl sm:text-4xl font-bold tracking-widest text-maja-orange">Featured</p>
      <h2 id="featured-heading" class="mt-2 text-xl sm:text-2xl font-semibold" data-reveal>
        Explore our spotlight moments&mdash;discover our TV features!
      </h2>
    </div>

    <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 px-5 sm:px-8">
      <button
        v-for="(item, i) in items"
        :key="item.badge"
        type="button"
        class="group w-full max-w-sm rounded-2xl bg-white p-4 text-left shadow-md ring-1 ring-black/5 transition-all duration-300"
        :class="active === i ? 'md:scale-105 shadow-xl ring-maja-orange/30' : 'md:scale-95 opacity-80 hover:opacity-100'"
        @click="active = i"
        @dblclick="$emit('view-image', item)"
      >
        <div
          class="relative overflow-hidden rounded-xl bg-white transition-colors duration-300 hover:bg-maja-orange-light/25"
          @click.stop="$emit('view-image', item)"
        >
          <img :src="item.src" :alt="item.alt" class="h-48 w-full object-cover" loading="lazy" />
          <span class="absolute top-2 right-2 rounded-full bg-maja-orange px-3 py-1 text-xs font-bold text-white shadow">
            {{ item.badge }}
          </span>
        </div>
        <h3 class="mt-4 text-base font-semibold">{{ item.title }}</h3>
        <p class="mt-2 text-xs text-black/70 line-clamp-4">{{ item.text }}</p>
        <span
          class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-black group-hover:text-maja-orange"
          @click.stop.prevent="openFacebook(item.link)"
        >
          Watch Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </button>
    </div>
  </section>
</template>
