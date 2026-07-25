<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import decorating from '../assets/images/m7.jpg'
import cart from '../assets/images/cart.jpg'

const kidsTakeoverPdf = '/pdfs/kidstakeover.pdf'
const partyCartPdf = '/pdfs/kart.pdf'

const activePdf = ref(null)

function openPdf(url, title) {
  activePdf.value = { url, title }
  document.body.style.overflow = 'hidden'
}

function closePdf() {
  activePdf.value = null
  document.body.style.overflow = ''
}

function handleKeydown(e) {
  if (e.key === 'Escape' && activePdf.value) closePdf()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="relative overflow-hidden bg-[#FFF6A1] py-16 sm:py-20">

    <svg
      class="absolute top-0 left-0 w-full h-16 sm:h-24 text-maja-bg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,0 C240,90 480,90 720,45 C960,0 1200,0 1440,55 L1440,0 L0,0 Z"
      />
    </svg>


    <svg
      class="absolute bottom-0 left-0 w-full h-16 sm:h-24 text-white"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,120 C240,10 480,10 720,60 C960,110 1200,110 1440,50 L1440,120 L0,120 Z"
      />
    </svg>

    <div class="relative z-10 mx-auto grid max-w-6xl gap-16 px-5 sm:px-8">
      <div class="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold">
            Kid&rsquo;s <span class="text-maja-orange">Takeover</span>
          </h2>
          <p class="mt-4 text-black/70 leading-relaxed">
            Calling all young chefs and baristas! Join us for three fun-filled workshops: become a Mini Pizza Chef, a Mini Barista, or a Mini Donut Decorator. Let&rsquo;s cook, brew, and decorate your way to delicious fun.
          </p>
          <button
            type="button"
            @click="openPdf(kidsTakeoverPdf, 'Kid\'s Takeover')"
            class="mt-6 inline-flex items-center justify-center rounded-full bg-maja-orange px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-maja-orange-dark transition-colors duration-200"
          >
            Learn More
          </button>
        </div>

        <div class="overflow-hidden rounded-2xl shadow-xl">
          <img
            :src="decorating"
            alt="Child decorating a donut during Maja's Kid's Takeover workshop"
            class="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div class="grid gap-10 md:grid-cols-2 items-center">
        <div class="order-2 md:order-1 overflow-hidden rounded-2xl shadow-xl">
          <img
            :src="cart"
            alt="Maja donut party cart decorated with balloons for events"
            class="w-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="order-1 md:order-2">
          <h2 class="text-3xl sm:text-4xl font-bold">
            Party <span class="text-maja-orange">Cart</span>
          </h2>
          <p class="mt-4 text-black/70 leading-relaxed">
            Because parties should never be boring, we are introducing our most unique and creative donut party cart! Contact us today to learn more.
          </p>
          <button
            type="button"
            @click="openPdf(partyCartPdf, 'Party Cart')"
            class="mt-6 inline-flex items-center justify-center rounded-full bg-maja-orange px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-maja-orange-dark transition-colors duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="activePdf"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        @click.self="closePdf"
      >
        <div class="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          <div class="flex items-center justify-between border-b border-black/10 px-5 py-3">
            <h3 class="font-semibold text-black">{{ activePdf.title }}</h3>
            <div class="flex items-center gap-3">
              <a
                :href="activePdf.url"
                target="_blank"
                rel="noopener"
                class="text-sm font-medium text-maja-orange hover:underline"
              >
                Open in new tab
              </a>
              <button
                type="button"
                @click="closePdf"
                aria-label="Close"
                class="flex h-8 w-8 items-center justify-center rounded-full text-black/60 hover:bg-black/5 hover:text-black transition-colors"
              >
                &#10005;
              </button>
            </div>
          </div>
          <iframe
            :src="activePdf.url"
            :title="activePdf.title"
            class="flex-1 w-full"
          ></iframe>
        </div>
      </div>
    </Teleport>
  </section>
</template>