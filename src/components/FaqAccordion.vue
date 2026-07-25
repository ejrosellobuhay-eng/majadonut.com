<script setup>
import { ref } from 'vue'

const faqs = [
  {
    q: 'Do you have franchise slots available?',
    a: 'Yes! We currently offer Signature, Premium, and Elite franchise packages. Check the Franchise Package section above or contact us directly for the latest availability and requirements.',
  },
  {
    q: 'Where can I find your branches?',
    a: 'Our branches are located at Maja Pavilion Mall (Al Fresco Area, Building B, Brgy. San Antonio, City of Biñan, Laguna) and Maja Southwoods Mall (2nd Floor, Brgy. San Francisco, City of Biñan, Laguna).',
  },
  {
    q: 'Which payment methods do you accept in-store?',
    a: 'We accept cash and major e-wallets. For franchise transactions, please coordinate with our team for accepted payment terms.',
  },
  {
    q: 'Do you offer delivery?',
    a: 'Yes, our products are available through major delivery platforms. Message our official Facebook page or call us directly to confirm delivery coverage in your area.',
  },
  {
    q: 'Can I book a table or reserve for an event?',
    a: 'Absolutely! Use the "Book a Table" section below to reserve a slot at our Maja Pavilion Mall Main Branch, or contact us for group bookings and the Party Cart setup.',
  },
]

const openIndex = ref(null)
function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="faqs" class="py-16 sm:py-20 bg-white scroll-mt-16">
    <div class="mx-auto max-w-3xl px-5 sm:px-8">
      <h2 class="text-center text-3xl sm:text-4xl font-bold" data-reveal>
        Frequently Asked <span class="text-maja-orange">Question</span>
      </h2>

      <div class="mt-10 divide-y divide-black/10 rounded-2xl bg-maja-bg/50 ring-1 ring-black/5" data-reveal>
        <div v-for="(item, i) in faqs" :key="i">
          <h3>
            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left font-semibold"
              :aria-expanded="openIndex === i"
              :aria-controls="`faq-panel-${i}`"
              @click="toggle(i)"
            >
              <span>{{ item.q }}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                class="shrink-0 transition-transform duration-300"
                :class="openIndex === i ? 'rotate-45 text-maja-orange' : 'text-black'"
              >
                <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
              </svg>
            </button>
          </h3>
          <div
            :id="`faq-panel-${i}`"
            class="grid transition-all duration-300 ease-in-out"
            :style="openIndex === i ? 'grid-template-rows: 1fr;' : 'grid-template-rows: 0fr;'"
          >
            <div class="overflow-hidden">
              <p class="px-5 sm:px-6 pb-5 text-sm text-black/70 leading-relaxed">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
