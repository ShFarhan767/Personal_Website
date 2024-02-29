<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
    data() {
        return {
            showSlider: true, // Initially show the slider
            swiperInstance: null // Variable to hold the Swiper instance
        };
    },
    mounted() {
        console.log("Swiper initialization script executed.");
        if (this.showSlider) {
            this.initSwiper();
        }
    },
    methods: {
        initSwiper() {
            this.swiperInstance = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
        },
        toggleSlider() {
            this.showSlider = !this.showSlider;
            if (this.showSlider && !this.swiperInstance) {
                this.initSwiper();
            } else if (!this.showSlider && this.swiperInstance) {
                this.swiperInstance.destroy(true, true);
                this.swiperInstance = null;
            }
        }
    }
}
</script>

<template>
    <section class="py-16 bg-[#f5f5f5] dark:bg-slate-800 overflow-hidden">
        <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center lg:text-5xl pb-10 font-semibold">My <span class="text-interface-100 dark:text-white Line">Books</span></h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-5 xl:gap-10 lg:gap-16 place-items-center mb-14">
                <div class="lg:col-span-2">
                    <h2 class="font-bold text-4xl leading-normal lg:text-5xl capitalize lg:leading-snug dark:text-white">
                        Editor &
                        <span class="relative">
                            <span class="relative z-20">Writer !</span>
                            <svg class="absolute md:-left-1 -left-3 z-0 md:-top-2 -top-5" width="206" height="75"
                                viewBox="0 0 206 75" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                                <path
                                    d="M27.1282 14.4113C66.5337 9.03391 151.827 4.45371 187.897 15.4254C226.745 27.2424 180.759 53.1141 129.951 64.6499C77.3856 76.585 18.356 73.496 6.50757 58.6571C-13.495 33.6061 61.3156 8.13765 120.395 3.11796"
                                    stroke="#ff3f00" stroke-width="6" stroke-linecap="round" style="color: red;"></path>
                            </svg>
                            Let’s check it out.
                        </span>
                    </h2>
                </div>
                <div class="lg:col-span-3">
                    <div class="Wing-Bg"></div>
                    <p class="text-[#747681] text-xl z-30 relative -mt-52">
                        It wasn't until I started reading and found books they wouldn't let us read in school that I discovered you could be insane and happy and have a good life without being like everybody else.
                    </p>
                </div>
            </div>
            <div class="swiper-container overflow-hidden">
                <div class="swiper-wrapper pb-14 lg:pb-16">
                    <article class="swiper-slide swiper-slide-prev" role="group" aria-label="3 / 4"
                         style="width: 385.333px; margin-right: 30px;" data-swiper-slide-index="2">
                        <article class="bg-white shadow-custom rounded p-5 group dark:bg-slate-800" data-aos="fade-up" data-aos-duration="2000">
                            <a href="#!" class="block mb-6 rounded overflow-hidden">
                                <img src="../assets/images/Writer/Book-1.png" class="w-full lg:h-full md:h-52 transform scale-1 group-hover:scale-105 duration-500" alt="Human">
                            </a>
                            <div class="pl-1 pr-12">
                                <!-- <div class="flex space-x-2 mb-3.5">
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Property</a>
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Case</a>
                                </div> -->
                                <h3 class="blog-title mb-2 text-interface-100 font-semibold text-2xl dark:text-white">
                                    <a href="#!">Cyber Crime & Cyber Law Book</a>
                                </h3>
                                <span class="text-sm text-interface-200 dark:text-[#747681]">Al Mamun Rasel</span>
                            </div>
                            <div class="float-right">
                                <a href="#!" class="bg-[#ff3f00] group inline-flex transition py-2 px-4 rounded-lg text-white hover:bg-transparent border border-transparent hover:border hover:border-[#ff3f00] hover:text-[#ff3f00]">
                                    <span class="text-lg">Read More</span>
                                    <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2 group-hover:stroke-[#ff3f00]" width="24" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="#ff3f00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </article>
                    <article class="swiper-slide swiper-slide-active border" role="group" aria-label="4 / 4"
                        style="width: 385.333px; max-height: 650px; margin-right: 30px;" data-swiper-slide-index="3">
                        <article class="bg-white shadow-custom border rounded p-5 group dark:bg-slate-800" style="max-height:650px;" data-aos="fade-down" data-aos-duration="3000">
                            <a href="#!" class="block mb-6 rounded overflow-hidden">
                                <img src="../assets/images/Writer/Book-2.png" class="w-full lg:h-full md:h-52 transform scale-1 group-hover:scale-105 duration-500" alt="Human">
                            </a>
                            <div class="pl-1 pr-12">
                                <!-- <div class="flex space-x-2 mb-3.5">
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Cricket</a>
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Case</a>
                                </div> -->
                                <h3 class="blog-title mb-2 text-interface-100 transition font-semibold text-xl dark:text-white">
                                    <a href="#!">
                                        A Scientific Method of Being Good Speaker Persenter & Debater
                                    </a>
                                </h3>
                                <span class="text-sm text-interface-200 dark:text-[#747681]">Al Mamun Rasel</span>
                            </div>
                            <div class="float-right -mt-5">
                                <a href="#!" class="bg-[#ff3f00] group inline-flex transition py-2 px-4 rounded-lg text-white hover:bg-transparent border border-transparent hover:border hover:border-[#ff3f00] hover:text-[#ff3f00]">
                                    <span class="text-lg">Read More</span>
                                    <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2 group-hover:stroke-[#ff3f00]" width="24" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="#ff3f00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </article>
                    <article class="swiper-slide swiper-slide-next" role="group" aria-label="1 / 4"
                        style="width: 385.333px; margin-right: 30px;" data-swiper-slide-index="0">
                        <article class="bg-white shadow-custom rounded p-5 group dark:bg-slate-800" data-aos="fade-up" data-aos-duration="2000">
                            <a href="#!" class="block mb-6 rounded overflow-hidden">
                                <img src="../assets/images/Writer/Book-3.png" class="w-full lg:h-full md:h-52 transform scale-1 group-hover:scale-105 duration-500" alt="Human">
                            </a>
                            <div class="pl-1 pr-12">
                                <!-- <div class="flex space-x-2 mb-3.5">
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Government</a>
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Case</a>
                                </div> -->
                                <h3 class="blog-title mb-2 text-interface-100 transition font-semibold text-xl dark:text-white">
                                    <a href="#!">
                                        A complaint of vandalizing a government vehicle.
                                    </a>
                                </h3>
                                <span class="text-sm text-interface-200 dark:text-[#747681]">Al Mamun Rasel</span>
                            </div>
                            <div class="float-right">
                                <a href="#!" class="bg-[#ff3f00] group inline-flex transition py-2 px-4 rounded-lg text-white hover:bg-transparent border border-transparent hover:border hover:border-[#ff3f00] hover:text-[#ff3f00]">
                                    <span class="text-lg">Read More</span>
                                    <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2 group-hover:stroke-[#ff3f00]" width="24" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="#ff3f00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </article>
                    <article class="swiper-slide swiper-slide-prev" role="group" aria-label="3 / 4"
                        style="width: 385.333px; margin-right: 30px;" data-swiper-slide-index="2">
                        <article class="bg-white shadow-custom rounded p-5 group dark:bg-slate-800" data-aos="fade-up" data-aos-duration="2000">
                            <a href="#!" class="block mb-6 rounded overflow-hidden">
                                <img src="../assets/images/Writer/Book-1.png" class="w-full lg:h-full md:h-52 transform scale-1 group-hover:scale-105 duration-500" alt="Human">
                            </a>
                            <div class="pl-1 pr-12">
                                <!-- <div class="flex space-x-2 mb-3.5">
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Property</a>
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Case</a>
                                </div> -->
                                <h3 class="blog-title mb-2 text-interface-100 font-semibold text-2xl dark:text-white">
                                    <a href="#!">Cyber Crime & Cyber Law Book</a>
                                </h3>
                                <span class="text-sm text-interface-200 dark:text-[#747681]">Al Mamun Rasel</span>
                            </div>
                            <div class="float-right">
                                <a href="#!" class="bg-[#ff3f00] group inline-flex transition py-2 px-4 rounded-lg text-white hover:bg-transparent border border-transparent hover:border hover:border-[#ff3f00] hover:text-[#ff3f00]">
                                    <span class="text-lg">Read More</span>
                                    <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2 group-hover:stroke-[#ff3f00]" width="24" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="#ff3f00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </article>
                    <article class="swiper-slide swiper-slide-active border" role="group" aria-label="4 / 4"
                        style="width: 385.333px; max-height: 650px; margin-right: 30px;" data-swiper-slide-index="3">
                        <article class="bg-white shadow-custom border rounded p-5 group dark:bg-slate-800" style="max-height:650px;" data-aos="fade-down" data-aos-duration="3000">
                            <a href="#!" class="block mb-6 rounded overflow-hidden">
                                <img src="../assets/images/Writer/Book-2.png" class="w-full lg:h-full md:h-52 transform scale-1 group-hover:scale-105 duration-500" alt="Human">
                            </a>
                            <div class="pl-1 pr-12">
                                <!-- <div class="flex space-x-2 mb-3.5">
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Cricket</a>
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Case</a>
                                </div> -->
                                <h3 class="blog-title mb-2 text-interface-100 transition font-semibold text-xl dark:text-white">
                                    <a href="#!">
                                        A Scientific Method of Being Good Speaker Persenter & Debater
                                    </a>
                                </h3>
                                <span class="text-sm text-interface-200 dark:text-[#747681]">Al Mamun Rasel</span>
                            </div>
                            <div class="float-right -mt-5">
                                <a href="#!" class="bg-[#ff3f00] group inline-flex transition py-2 px-4 rounded-lg text-white hover:bg-transparent border border-transparent hover:border hover:border-[#ff3f00] hover:text-[#ff3f00]">
                                    <span class="text-lg">Read More</span>
                                    <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2 group-hover:stroke-[#ff3f00]" width="24" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="#ff3f00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </article>
                    <article class="swiper-slide swiper-slide-next" role="group" aria-label="1 / 4"
                        style="width: 385.333px; margin-right: 30px;" data-swiper-slide-index="0">
                        <article class="bg-white shadow-custom rounded p-5 group dark:bg-slate-800" data-aos="fade-up" data-aos-duration="2000">
                            <a href="#!" class="block mb-6 rounded overflow-hidden">
                                <img src="../assets/images/Writer/Book-3.png" class="w-full lg:h-full md:h-52 transform scale-1 group-hover:scale-105 duration-500" alt="Human">
                            </a>
                            <div class="pl-1 pr-12">
                                <!-- <div class="flex space-x-2 mb-3.5">
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Government</a>
                                    <a href="#" class="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md dark:text-[#ff3f00]">Case</a>
                                </div> -->
                                <h3 class="blog-title mb-2 text-interface-100 transition font-semibold text-xl dark:text-white">
                                    <a href="#!">
                                        A complaint of vandalizing a government vehicle.
                                    </a>
                                </h3>
                                <span class="text-sm text-interface-200 dark:text-[#747681]">Al Mamun Rasel</span>
                            </div>
                            <div class="float-right">
                                <a href="#!" class="bg-[#ff3f00] group inline-flex transition py-2 px-4 rounded-lg text-white hover:bg-transparent border border-transparent hover:border hover:border-[#ff3f00] hover:text-[#ff3f00]">
                                    <span class="text-lg">Read More</span>
                                    <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2 group-hover:stroke-[#ff3f00]" width="24" height="30" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="#ff3f00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </article>

                </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}
.Wing-Bg{
    width: 100%;
    height: 225px;
    position: relative;
    background: url(/src/assets/images/Writer/background-wing.png) no-repeat;
    background-size: cover;
    background-position: left;
    z-index: 0;
    left: 250px;
    top: -75px;
    rotate: 40deg;
}
.Line {
    background: url(../assets/images/line-w-lwh.svg) no-repeat bottom;
}
</style>