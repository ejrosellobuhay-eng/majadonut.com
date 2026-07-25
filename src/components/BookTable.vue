<script setup>
import donut from '../assets/images/d42.png'
import { ref, computed } from 'vue'

const submitted = ref(false)
const errorMessage = ref('')

const name = ref('')
const contactNumber = ref('')
const bookingDate = ref('')
const bookingTime = ref('')
const guests = ref('')

// bukas lang ang store 10:00 AM - 9:00 PM
const STORE_OPEN = '10:00'
const STORE_CLOSE = '21:00'

// hindi pwedeng mag-book ng petsang lumipas na
const todayStr = computed(() => {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
})

// numbers lang, max 10 digits
function onContactInput(e) {
  const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10)
  contactNumber.value = digitsOnly
  e.target.value = digitsOnly
}

function handleSubmit() {
  errorMessage.value = ''

  if (contactNumber.value.length !== 10) {
    errorMessage.value = 'Please enter a valid 10-digit contact number.'
    return
  }

  if (!bookingDate.value || bookingDate.value < todayStr.value) {
    errorMessage.value = 'Please select today or a future date — past dates cannot be booked.'
    return
  }

  if (!bookingTime.value || bookingTime.value < STORE_OPEN || bookingTime.value > STORE_CLOSE) {
    errorMessage.value = 'Please pick a time within our store hours: 10:00 AM to 9:00 PM.'
    return
  }

  submitted.value = true
}
</script>

<template>
  <section id="booktable" class="relative overflow-hidden bg-[#E5C287] py-20 sm:py-28">
    <!-- Curvy top edge — kulay #FFF6A1 dahil yan ang background ng FranchisePackage section sa itaas nito -->
    <svg
      class="absolute top-0 left-0 w-full h-16 sm:h-24 text-[#FFF6A1]"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,0 C240,90 480,90 720,45 C960,0 1200,0 1440,55 L1440,0 L0,0 Z"
      />
    </svg>

    <!-- Curvy bottom edge — kulay #F5F5DC dahil yan ang background ng section sa ibaba nito -->
    <svg
      class="absolute bottom-0 left-0 w-full h-16 sm:h-24 text-[#F5F5DC]"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,120 C240,10 480,10 720,60 C960,110 1200,110 1440,50 L1440,120 L0,120 Z"
      />
    </svg>

    <!-- Curvy bottom edge — kulay #F5F5DC, palitan kung iba ang background ng ContactSection sa ibaba nito -->
    <svg
      class="absolute bottom-0 left-0 w-full h-16 sm:h-24 text-[#F5F5DC]"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,120 C240,10 480,10 720,60 C960,110 1200,110 1440,50 L1440,120 L0,120 Z"
      />
    </svg>

    <div class="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-10 md:grid-cols-2">
      <!-- decorative donut, left side -->
      <div class="hidden md:flex relative justify-center" data-reveal>
        <div
          class="absolute inset-0 m-auto h-[85%] w-[85%] bg-[#FFF6A1] rounded-[42%_58%_65%_35%/45%_40%_60%_55%]"
          aria-hidden="true"
        />
        <img
          :src="donut"
          alt=""
          aria-hidden="true"
          class="relative z-10 w-full max-w-md object-contain select-none pointer-events-none"
        />
      </div>

      <!-- booking card, right side -->
      <div class="rounded-[2rem] bg-[#EFAE6C] p-8 sm:p-12 shadow-xl" data-reveal>
        <h2 class="text-center text-2xl sm:text-3xl font-bold text-white">Book a Table with us</h2>
        <p class="mt-2 text-center text-sm font-semibold text-white/90">@ Maja Pavilion Mall &mdash; Main Branch</p>

        <form class="mt-8 flex flex-col gap-4" @submit.prevent="handleSubmit">
          <div class="flex items-center justify-between rounded-full bg-white px-5 py-3.5 shadow-sm">
            <input
              id="bt-name"
              v-model="name"
              type="text"
              required
              placeholder="Name"
              class="w-full bg-transparent text-sm font-medium text-black placeholder:text-black/40 focus:outline-none"
            />
          </div>

          <div class="flex items-center justify-between rounded-full bg-white px-5 py-3.5 shadow-sm">
            <input
              id="bt-contact"
              type="tel"
              required
              inputmode="numeric"
              maxlength="10"
              pattern="[0-9]{10}"
              placeholder="09XXXXXXXXX (10 digits)"
              :value="contactNumber"
              title="Maximum of 10 digits, numbers only"
              class="w-full bg-transparent text-sm font-medium text-black placeholder:text-black/40 focus:outline-none"
              @input="onContactInput"
            />
          </div>

          <div class="flex items-center justify-between rounded-full bg-white px-5 py-3.5 shadow-sm">
            <input
              id="bt-date"
              v-model="bookingDate"
              type="date"
              required
              :min="todayStr"
              class="w-full bg-transparent text-sm font-medium text-black focus:outline-none"
            />
          </div>

          <div class="flex items-center justify-between rounded-full bg-white px-5 py-3.5 shadow-sm">
            <input
              id="bt-time"
              v-model="bookingTime"
              type="time"
              required
              :min="STORE_OPEN"
              :max="STORE_CLOSE"
              title="Bukas lang ang store 10:00 AM - 9:00 PM"
              class="w-full bg-transparent text-sm font-medium text-black focus:outline-none"
            />
          </div>
          <p class="-mt-2 px-2 text-xs text-white/80">Open daily, 10:00 AM &ndash; 9:00 PM only.</p>

          <div class="flex items-center justify-between rounded-full bg-white px-5 py-3.5 shadow-sm">
            <input
              id="bt-guests"
              v-model="guests"
              type="number"
              min="1"
              max="20"
              placeholder="Number of guests"
              class="w-full bg-transparent text-sm font-medium text-black placeholder:text-black/40 focus:outline-none"
            />
          </div>

          <p v-if="errorMessage" class="text-center text-sm font-semibold text-white bg-black/20 rounded-lg px-4 py-2">
            {{ errorMessage }}
          </p>

          <button
            type="submit"
            class="mt-3 inline-flex items-center justify-center rounded-full bg-maja-orange px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-maja-orange-dark transition-colors duration-200"
          >
            {{ submitted ? 'Thank you! We\'ll confirm shortly.' : 'Reserve Now' }}
          </button>
          <p class="text-center text-xs text-white/80">
            This form is for reservation requests only, our team will contact you to confirm your booking.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>