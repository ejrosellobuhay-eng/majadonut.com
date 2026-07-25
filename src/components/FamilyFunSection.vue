<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import decorating from '../assets/images/m7.jpg'
import cart from '../assets/images/cart.jpg'

const activeModal = ref(null)

const kidsTakeover = {
  title: 'Kid\'s Takeover',
  image: decorating,
  tagline: 'Mini Pizza Chef · Mini Barista · Mini Donut Decorator',
  workshops: [
    {
      name: 'Kid\'s Takeover',
      subtitle: 'Ages 4-12',
      sections: [
        {
          heading: 'Details',
          items: [
            'Open to kids 4-12 years old',
            'Happening daily, first come first served on available time slots',
            'Venue: Maja Pavilion Mall, City of Biñan, Laguna'
          ]
        },
        {
          heading: 'Inclusions',
          items: [
            '1-hour on-site experience on pizza-making, drinks-mixing, and donut decorating',
            '3 kids per session only, guided by Maja chef, barista, and manager',
            'Take home their own creation of family Hawaiian pizza, coolers, and 3 Maja donuts',
            'Chef\'s apron and hat, Maja certificate',
            '15% discount privileges for dine-in (valid within the day of workshop only)'
          ]
        }
      ],
      fee: 'Participation fee: ₱999',
      note: '₱500 reservation fee is required to book your schedule.'
    },
    {
      name: 'Teen Barista Workshop',
      subtitle: 'Ages 13-16',
      sections: [
        {
          heading: 'Details',
          items: [
            'Date: Daily',
            'Time: First come first served',
            'Venue: Maja Pavilion Mall'
          ]
        },
        {
          heading: 'Workshop highlights',
          items: [
            'Learn the basics of coffee and milktea',
            'Gain knowledge with hands-on learning',
            'Explore your artistic side with coffee bean crafts',
            'Enjoy 15% discount when you dine-in within the day'
          ]
        }
      ],
      fee: 'Participation fee: ₱999.00',
      note: '2-hour session of fun learning. Fee includes hot coffee, frappe, and milktea, coffee bean artwork materials, barista apron, and Maja badge.'
    }
  ]
}

const partyCart = {
  title: 'Donut Kart',
  image: cart,
  tagline: 'Book your party with us!',
  sections: [
    {
      heading: 'Package inclusion',
      items: [
        'Free donut kart setup featuring donut ferris wheel & chocolate fountains',
        '4 hours service & rental, 1-2 uniformed staffs'
      ]
    },
    {
      heading: 'Mode of payment',
      items: [
        '50% down payment to secure the date',
        '50% full payment on or before the event'
      ]
    },
    {
      heading: 'Additional charges',
      items: [
        'Additional decorations for the kart',
        'Customized donuts: theme party donuts, big daddy donuts, DIY donut kits',
        'Transportation fees: ₱1,000 within Biñan, Carmona, Sta. Rosa & San Pedro / ₱2,000 outside or outskirt / ingress-gate pass / parking fees',
        'Crew meals'
      ]
    }
  ],
  fee: 'As low as ₱5,900.00 consumable package',
  menu: [
    { tier: 'Classic — ₱39', flavors: 'Classic Glazed, Choco Dip' },
    { tier: 'Chef\'s Choice — ₱79', flavors: 'Tiramisu, Cappuccino Crunch, Oreo Matcha' },
    { tier: 'Premium — ₱59', flavors: 'White Almonds, Dark Berry, Peanutty, Matcha Almonds, Milky Donut, Donutella, Mango Graham, Purple Crunch, Oreo Berry, White Oreo, Nutty Nutella, Matcha Choco Fudge, Choco Crinkles, Salted Caramel, Donutty, Strawberry Sprinkles' },
    { tier: 'Minibites Chocolate Fountain — ₱399', flavors: '24 minibites, white chocolate, dark chocolate' },
    { tier: 'Milktea (12oz) — ₱100', flavors: 'Premium black pearl milktea, wintermelon, okinawa' }
  ],
  note: 'Deposits are non-refundable. Cancellation/changes should not be within 1 week before the event date. These proposals are basic packages and can be customized based on your needs.'
}

function openModal(data) {
  activeModal.value = data
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  activeModal.value = null
  document.body.style.overflow = ''
}

function handleKeydown(e) {
  if (e.key === 'Escape' && activeModal.value) closeModal()
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
      <path fill="currentColor" d="M0,0 C240,90 480,90 720,45 C960,0 1200,0 1440,55 L1440,0 L0,0 Z" />
    </svg>

    <svg
      class="absolute bottom-0 left-0 w-full h-16 sm:h-24 text-white"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path fill="currentColor" d="M0,120 C240,10 480,10 720,60 C960,110 1200,110 1440,50 L1440,120 L0,120 Z" />
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
            @click="openModal(kidsTakeover)"
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
            @click="openModal(partyCart)"
            class="mt-6 inline-flex items-center justify-center rounded-full bg-maja-orange px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-maja-orange-dark transition-colors duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="activeModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        @click.self="closeModal"
      >
        <div class="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          <button
            type="button"
            @click="closeModal"
            aria-label="Close"
            class="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black/60 hover:bg-white hover:text-black transition-colors"
          >
            &#10005;
          </button>

          <div class="overflow-y-auto">
            <img
              v-if="activeModal.image"
              :src="activeModal.image"
              :alt="activeModal.title"
              class="w-full h-48 sm:h-56 object-cover"
            />

            <div class="p-6 sm:p-8">
              <h3 class="text-2xl sm:text-3xl font-bold text-black">
                {{ activeModal.title }}
              </h3>
              <p v-if="activeModal.tagline" class="mt-1 text-maja-orange font-medium">
                {{ activeModal.tagline }}
              </p>

              <!-- Multi-workshop layout (Kid's Takeover + Teen Barista) -->
              <template v-if="activeModal.workshops">
                <div
                  v-for="(workshop, index) in activeModal.workshops"
                  :key="workshop.name"
                  :class="['pt-6', index > 0 ? 'mt-6 border-t border-black/10' : 'mt-4']"
                >
                  <h4 class="text-lg font-bold text-black">{{ workshop.name }}</h4>
                  <p class="text-sm text-maja-orange font-medium">{{ workshop.subtitle }}</p>

                  <div v-for="section in workshop.sections" :key="section.heading" class="mt-4">
                    <h5 class="font-semibold text-black text-sm">{{ section.heading }}</h5>
                    <ul class="mt-2 space-y-1.5 text-black/70 text-sm leading-relaxed list-disc list-inside">
                      <li v-for="item in section.items" :key="item">{{ item }}</li>
                    </ul>
                  </div>

                  <div class="mt-4 rounded-xl bg-maja-orange/10 px-4 py-3">
                    <p class="font-semibold text-maja-orange text-sm">{{ workshop.fee }}</p>
                  </div>

                  <p v-if="workshop.note" class="mt-3 text-xs text-black/50 leading-relaxed">
                    {{ workshop.note }}
                  </p>
                </div>
              </template>

              <!-- Single content layout (Party Cart) -->
              <template v-else>
                <div v-for="section in activeModal.sections" :key="section.heading" class="mt-5">
                  <h4 class="font-semibold text-black">{{ section.heading }}</h4>
                  <ul class="mt-2 space-y-1.5 text-black/70 text-sm leading-relaxed list-disc list-inside">
                    <li v-for="item in section.items" :key="item">{{ item }}</li>
                  </ul>
                </div>

                <div v-if="activeModal.menu" class="mt-5">
                  <h4 class="font-semibold text-black">Menu</h4>
                  <div class="mt-2 space-y-3">
                    <div v-for="entry in activeModal.menu" :key="entry.tier">
                      <p class="text-sm font-medium text-black">{{ entry.tier }}</p>
                      <p class="text-sm text-black/60">{{ entry.flavors }}</p>
                    </div>
                  </div>
                </div>

                <div class="mt-6 rounded-xl bg-maja-orange/10 px-4 py-3">
                  <p class="font-semibold text-maja-orange">{{ activeModal.fee }}</p>
                </div>

                <p v-if="activeModal.note" class="mt-4 text-xs text-black/50 leading-relaxed">
                  {{ activeModal.note }}
                </p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>