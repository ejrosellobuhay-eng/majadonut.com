<script setup>
import donut1 from '../assets/images/m6.jpg'
import donut2 from '../assets/images/dd4.jpg'
import donut3 from '../assets/images/m4.jpg'
import donut4 from '../assets/images/m5.jpg'
import donut5 from '../assets/images/dd4.jpg'
import donut6 from '../assets/images/m6.jpg'
import donut7 from '../assets/images/dd5.jpg'
import donut8 from '../assets/images/m4.jpg'
import donut9 from '../assets/images/m5.jpg'
import donut10 from '../assets/images/dd4.jpg'
import donut11 from '../assets/images/dd5.jpg'
import donut12 from '../assets/images/dd6.jpg'

defineEmits(['view-image'])

const foods = [
  { src: donut1, alt: 'Chocolate glazed donut with sprinkles' },
      { src: donut2, alt: 'Pink strawberry glazed donut' },
      { src: donut3, alt: 'Assorted specialty donut' },
      { src: donut4, alt: 'Maja signature donut close-up' },
      { src: donut5, alt: 'Maja Championrado dessert cup' },
      { src: donut6, alt: 'Chocolate glazed donut with sprinkles' },
      { src: donut7, alt: 'Pink strawberry glazed donut' },
      { src: donut8, alt: 'Assorted specialty donut' },
      { src: donut9, alt: 'Maja signature donut close-up' },
      { src: donut10, alt: 'Maja Championrado dessert cup' },
      { src: donut11, alt: 'Chocolate glazed donut with sprinkles' },
      { src: donut12, alt: 'Pink strawberry glazed donut' },
]
const track = [...foods, ...foods]
</script>

<template>
  <section class="relative overflow-hidden bg-maja-bg pb-16 pt-24 sm:pt-28 sm:pb-20" aria-label="Our Delicious Food">
    <div class="relative mx-auto w-full max-w-[1800px] px-5 sm:px-8">
      <div class="relative z-10 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-black" data-reveal>
          Our Delicious <span class="text-maja-orange">Food</span>
        </h2>
      </div>

      <div class="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div class="flex w-max animate-marquee hover:[animation-play-state:paused] py-2 px-4 no-scrollbar">
          <button
            v-for="(item, i) in track"
            :key="i"
            type="button"
            class="mx-3 shrink-0 overflow-hidden rounded-[1rem] bg-transparent transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-3 focus-visible:outline-maja-orange"
            @click="$emit('view-image', item)"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              class="h-80 w-52 sm:h-[26rem] sm:w-56 rounded-[1rem] object-cover"
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>