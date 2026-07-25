<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Navigation, Keyboard, Mousewheel, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

defineEmits(['view-image'])

const menuBoards = [
  { src: '/menu1.jpg', alt: 'Maja Café classic & premium donuts menu with prices' },
  { src: '/menu2.jpg', alt: 'Maja Café boba milktea and iced blended drinks menu' },
  { src: '/menu3.jpg', alt: 'Maja Café hot coffee, frappe, and iced coffee menu' },
  { src: '/menu4.jpg', alt: 'Maja Café coolers, fruit teas, and affogato menu' },
 { src: '/menu5.jpg', alt: 'Maja Café coolers, fruit teas, and affogato menu' },
 { src: '/menu6.jpg', alt: 'Maja Café coolers, fruit teas, and affogato menu' },
 { src: '/menu7.jpg', alt: 'Maja Café coolers, fruit teas, and affogato menu' },
 { src: '/menu8.jpg', alt: 'Maja Café coolers, fruit teas, and affogato menu' },
]

const prevEl = ref(null)
const nextEl = ref(null)

// scroll-triggered entrance for the decorative donuts
const menuSectionEl = ref(null)
const donutsInView = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        donutsInView.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 }
  )
  if (menuSectionEl.value) observer.observe(menuSectionEl.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section
    id="menu"
    ref="menuSectionEl"
    class="relative z-10 py-16 sm:py-20 bg-maja-bg scroll-mt-16"
  >
    <!-- decorative donuts, bigger, no crop/background, allowed to bleed past the section -->
    <img
      :src="'/d6.png'"
      alt=""
      aria-hidden="true"
      class="donut-float hidden lg:block pointer-events-none absolute -left-48 -top-48 h-[560px] w-[560px] object-contain select-none z-0"
      :class="donutsInView ? 'donut-in' : 'donut-out'"
      style="transition-delay: 0ms; --donut-rotate: -10deg;"
    />
    <img
      :src="'/d7.png'"
      alt=""
      aria-hidden="true"
      class="donut-float hidden lg:block pointer-events-none absolute -right-48 -top-36 h-[560px] w-[560px] object-contain select-none z-0"
      :class="donutsInView ? 'donut-in' : 'donut-out'"
      style="transition-delay: 150ms; --donut-rotate: 8deg;"
    />
    <img
      :src="'/d5.png'"
      alt=""
      aria-hidden="true"
      class="donut-float hidden lg:block pointer-events-none absolute -right-40 -bottom-48 h-[580px] w-[580px] object-contain select-none z-0"
      :class="donutsInView ? 'donut-in' : 'donut-out'"
      style="transition-delay: 300ms; --donut-rotate: -5deg;"
    />

    <!-- decorative hand holding drink -->
    <img
      :src="'/m8.png'"
      alt=""
      aria-hidden="true"
      class="donut-float hidden lg:block pointer-events-none absolute -left-16 -bottom-16 h-[420px] w-auto object-contain select-none z-0"
      :class="donutsInView ? 'donut-in' : 'donut-out'"
      style="transition-delay: 450ms; --donut-rotate: 0deg;"
    />

    <div class="mx-auto max-w-5xl px-5 sm:px-8 text-center relative z-10" data-reveal>
      <h2 class="text-3xl sm:text-4xl font-bold">
        Our <span class="text-maja-orange">Menu</span>
      </h2>
      <p class="mt-3 text-black/70">Tap the menu for a closer look at every item and price.</p>
    </div>

    <div class="mt-10 relative z-10 mx-auto max-w-5xl px-4 overflow-visible">
      <Swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :loop="false"
        :speed="550"
        :watchOverflow="true"
        :keyboard="{ enabled: true, onlyInViewport: true }"
        :mousewheel="{ forceToAxis: true, sensitivity: 0.6 }"
        :a11y="{
          prevSlideMessage: 'Previous menu board',
          nextSlideMessage: 'Next menu board',
        }"
        :coverflowEffect="{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }"
        :navigation="{ prevEl, nextEl }"
        :modules="[EffectCoverflow, Navigation, Keyboard, Mousewheel, A11y]"
        class="menu-swiper !pb-4"
      >
        <SwiperSlide
          v-for="board in menuBoards"
          :key="board.src"
          class="!w-[220px] sm:!w-[260px] md:!w-[300px]"
        >
          <button
            type="button"
            class="group block w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10 bg-white flex items-center justify-center transition-shadow duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-maja-orange"
            :aria-label="`View full menu board: ${board.alt}`"
            @click="$emit('view-image', board)"
          >
            <img
              :src="board.src"
              :alt="board.alt"
              class="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </button>
        </SwiperSlide>
      </Swiper>

      <!-- custom arrows, positioned outside the carousel edge -->
      <button
        ref="prevEl"
        type="button"
        aria-label="Previous menu board"
        class="menu-nav-btn absolute -left-3 sm:-left-8 top-[42%] -translate-y-1/2 z-20 flex items-center justify-center h-11 w-11 rounded-full bg-white shadow-sm ring-1 ring-black/10 text-maja-orange hover:bg-maja-orange hover:text-white transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button
        ref="nextEl"
        type="button"
        aria-label="Next menu board"
        class="menu-nav-btn absolute -right-3 sm:-right-8 top-[42%] -translate-y-1/2 z-20 flex items-center justify-center h-11 w-11 rounded-full bg-white shadow-sm ring-1 ring-black/10 text-maja-orange hover:bg-maja-orange hover:text-white transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
.donut-float {
  transition: opacity 0.9s ease-out, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.donut-out {
  opacity: 0;
  transform: scale(0.85) rotate(0deg);
}

.donut-in {
  opacity: 1;
  transform: scale(1) rotate(var(--donut-rotate));
  animation: donut-bob 5s ease-in-out 1.2s infinite;
}

@keyframes donut-bob {
  0%, 100% { transform: scale(1) rotate(var(--donut-rotate)) translateY(0px); }
  50% { transform: scale(1) rotate(var(--donut-rotate)) translateY(-14px); }
}

/* auto-dim + disable the arrows when there's nothing left to scroll to */
.menu-nav-btn.swiper-button-disabled {
  opacity: 0.35;
  pointer-events: none;
  cursor: default;
}

@media (prefers-reduced-motion: reduce) {
  .donut-float,
  .donut-in {
    transition: none;
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>