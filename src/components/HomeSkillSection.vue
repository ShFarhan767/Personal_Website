<script setup>

</script>

<template>
    <section class="pb-20 md:-mt-32 -mt-28 relative">
        <div class="mx-auto sm:px-6 lg:max-w-7xl lg:px-0">
            <div class="bg-white shadow-custom rounded-xl p-5 md:p-8 xl:p-14 dark:bg-slate-900">
                <div class="mx-auto sm:px-6 lg:max-w-7xl lg:px-0">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div  class="fade-in-left">
                            <div>
                                <h2 class="text-4xl leading-normal xl:text-5xl xl:leading-snug font-semibold text-interface-100 mb-3 dark:text-white">
                                    <span class="text-interface-100 Line">Biography</span>
                                </h2>
                                <p class="text-lg text-[#747681] text-justify">
                                    At only 26 years of age, I established myself as the most successful Lawyer in my batch <br> <br>
                                    Born on April 22, 1996, in El Centro, California, Rachel rose to stardom as part of a singing act with brother Ban Calen in the 2000s, hitting No. 1 with the single Make Me Happys Rachel had established a solo career of her own as well, having chart-toppers like Gypsies, Tramps and Thieves, Half-Breed and Dark Lady Rachel also found more music success with rock-oriented tracks in the '15s and a global dance hit Believe and My Dreams in the late '16s. She released Closer to the Truth, her first studio album in 10 years, in 2016, which offered fans more dance hits.
                                </p>

                                <div class="grid grid-cols-1 gap-3">
                                    <div class="Myself">
                                        <h2 class="text-4xl mt-14 leading-normal xl:text-4xl xl:leading-snug font-bold text-interface-100 dark:text-white">
                                            AL <span class="text-interface-100 dark:text-white Line">MAMUN</span> RASEL
                                        </h2>
                                        <h4 class="text-xl text-[#ff3f00] font-medium">
                                            Advocate & Lawyer
                                        </h4>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 gap-4">
                                    <div class="flex justify-end">
                                        <img src="../assets/images/About/Signature.png" alt="" class="right-0">
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="relative fade-in-right">
                            <div class="h-full lg:w-full w-full absolute border-4 border-[#ff3f00] rounded-md z-0"></div>
                            <img src="../assets/images/Choose/pexels-photo-4427616.webp" class="moveUpDown mx-auto z-10 relative top-8 left-[18px] rounded-md" alt="">
                            <div class=" absolute top-20 -left-10">
                                <img src="../assets/images/Writer/decoration-dots-2.svg" class="animated-image" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.shadow-custom {
    --tw-shadow: 5px 6px 60px rgba(13, 21, 41, 0.04);
    --tw-shadow-colored: 5px 6px 60px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.Line{
    background: url(../assets/images/line-w-lwh.svg) no-repeat bottom;
}
.fade-in-right {
  opacity: 0;
  transform: translateX(50px);
  animation: fadeInRight 2s forwards;
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: fadeInLeft 2s forwards;
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
.animated-image {
  animation: moveUpDown 2s infinite alternate; /* Adjust duration and timing function as needed */
}

@keyframes moveUpDown {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-20px); /* Adjust the vertical distance here */
    }
}
</style>