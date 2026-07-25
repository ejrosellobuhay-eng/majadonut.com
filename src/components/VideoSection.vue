<script setup>
const videoSrc = '/champovideo.mp4'
</script>

<template>
  <section class="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#F5F5DC] via-[#F7E0C0] to-[#eecf9a]" aria-labelledby="video-heading">
    <div class="absolute inset-0">
      <video
        class="h-full w-full object-cover"
        :src="videoSrc"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
      ></video>
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/10 to-slate-950/80"></div>
    </div>

    <div class="relative z-10 flex h-full items-center px-6 py-10 sm:px-10 lg:px-16">
      <div class="max-w-3xl text-left">
        <p class="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-maja-orange">Signature Video</p>
        <h2 id="video-heading" class="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          D' Original and trending <span class="text-maja-orange">Maja® Championrado</span> is making waves!
        </h2>
        <p class="mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-white/85">
          Indulge in the taste and visual experience that has transformed the Filipino champorado scene.
        </p>
      </div>
    </div>
  </section>
</template>
