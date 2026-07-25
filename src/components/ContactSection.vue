<script setup>
const branches = [
  {
    name: 'Maja Pavilion Mall',
    address: 'Al Fresco Area, Building B, Pavilion Mall, Brgy. San Antonio, City of Biñan, Laguna',
  },
  {
    name: 'Maja Southwoods Mall',
    address: '2nd Floor, Southwoods Mall, Brgy. San Francisco, City of Biñan, Laguna',
  },
]

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/MAJAdoughsanddoughnuts/',
    svg: 'M13 22v-9h3l.5-4H13V6.5C13 5.3 13.4 4.5 15 4.5h1.5V1.1C16 .9 14.9.8 13.7.8 11 .8 9 2.4 9 5.2V9H6v4h3v9h4z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/maja_doughsanddoughnuts?igsh=MWc3MnFwbXdhcjV3cg%3D%3D',
    svg: null,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@maja_cafeanddonuts?_r=1&_t=ZS-98Jy6pq3IMn',
    svg: 'M15 3c.4 2 2 3.6 4 4v3c-1.5 0-2.9-.4-4-1.2V14a5 5 0 11-5-5c.3 0 .7 0 1 .1v3.1a2 2 0 100 3.8V3h4z',
  },
]
</script>

<template>
  <section id="contact" class="relative scroll-mt-16 overflow-hidden bg-maja-bg py-16 font-['Poppins'] sm:py-24">
    <div class="relative mx-auto max-w-6xl px-5 sm:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-2xl text-center" data-reveal>
        <span class="inline-flex items-center gap-2 rounded-full bg-maja-orange/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-maja-orange">
          <span class="h-1.5 w-1.5 rounded-full bg-maja-orange" />
          CONTACT US
        </span>
        <h2 class="mt-5 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          We'd Love to <span class="relative inline-block text-maja-orange">
            Hear From You
            <svg class="absolute -bottom-1 left-0 w-full text-maja-orange/40" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 5 Q50 0 100 5 T200 5" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" />
            </svg>
          </span>
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
          Questions, bulk orders, catering, partnerships, or just feedback — reach out and our
          team will get back to you shortly.
        </p>
      </div>

      <!-- Info cards -->
      <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Branches -->
        <div
          class="group relative rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-maja-orange/10"
          data-reveal
        >
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-maja-orange/10 text-maja-orange transition-colors duration-300 group-hover:bg-maja-orange group-hover:text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" stroke="currentColor" stroke-width="2" />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2" />
            </svg>
          </span>
          <h3 class="mt-5 font-bold text-black">Branches Location</h3>
          <ul class="mt-3 space-y-4 text-sm">
            <li v-for="b in branches" :key="b.name" class="border-l-2 border-maja-orange/20 pl-3">
              <p class="font-semibold text-black">{{ b.name }}</p>
              <p class="mt-0.5 text-black/55">{{ b.address }}</p>
            </li>
          </ul>
        </div>

        <!-- Email & Phone -->
        <div
          class="group relative rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-maja-orange/10"
          data-reveal
        >
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-maja-orange/10 text-maja-orange transition-colors duration-300 group-hover:bg-maja-orange group-hover:text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 5h18v14H3V5z" stroke="currentColor" stroke-width="2" />
              <path d="M3 6l9 7 9-7" stroke="currentColor" stroke-width="2" />
            </svg>
          </span>
          <h3 class="mt-5 font-bold text-black">Email &amp; Contact Number</h3>
          <ul class="mt-3 space-y-2.5 text-sm text-black/70">
            <li>
              <a
                href="mailto:maja.doughsanddoughnuts@gmail.com"
                class="inline-flex items-center gap-1.5 break-all transition-colors hover:text-maja-orange hover:underline"
              >
                maja.doughsanddoughnuts@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+639205324748" class="inline-flex items-center gap-1.5 transition-colors hover:text-maja-orange hover:underline">
                0920 532 4748
              </a>
            </li>
            <li>
              <a href="tel:+63495467620" class="inline-flex items-center gap-1.5 transition-colors hover:text-maja-orange hover:underline">
                (049) 546 7620
              </a>
            </li>
          </ul>
        </div>

        <!-- Follow us -->
        <div
          class="group relative rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 sm:col-span-2 lg:col-span-1"
          data-reveal
        >
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-maja-orange/10 text-maja-orange transition-colors duration-300 group-hover:bg-maja-orange group-hover:text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2l3 6 6 .9-4.5 4.3 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8l3-6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
            </svg>
          </span>
          <h3 class="mt-5 font-bold text-black">Follow Along</h3>
          <p class="mt-1 text-xs text-black/50">Fresh drops, behind-the-scenes, and daily flavors.</p>
          <div class="mt-4 flex gap-3">
            <a
              v-for="s in socials"
              :key="s.name"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Maja Donut on ${s.name}`"
              class="flex h-12 w-12 items-center justify-center rounded-full bg-maja-bg text-maja-orange ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-1 hover:bg-maja-orange hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maja-orange"
            >
              <svg v-if="s.name === 'Instagram'" width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              <svg v-else width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path :d="s.svg" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="mt-8 overflow-hidden rounded-3xl bg-white p-2 shadow-sm ring-1 ring-black/5" data-reveal>
        <div class="flex flex-col items-start justify-between gap-3 px-4 pb-3 pt-3 sm:flex-row sm:items-center">
          <div>
            <h3 class="font-bold text-black">Find Us</h3>
            <p class="text-xs text-black/50">Drop by any of our branches in Biñan, Laguna.</p>
          </div>
          <a
            href="https://www.google.com/maps?q=Pavilion+Mall+San+Antonio+Bi%C3%B1an+Laguna"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 rounded-full bg-maja-orange px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Directions
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
        <div class="overflow-hidden rounded-2xl">
          <iframe
            title="Maja Café & Donuts location map"
            src="https://www.google.com/maps?q=Pavilion+Mall+San+Antonio+Bi%C3%B1an+Laguna&output=embed"
            class="h-72 w-full grayscale-[15%] transition-all duration-300 hover:grayscale-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
</template>