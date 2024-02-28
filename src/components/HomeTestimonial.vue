<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
    mounted() {
        this.swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: false,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
    beforeDestroy() {
        if (this.swiper) {
            this.swiper.destroy();
        }
    }
};
</script>

<template>
    <section class="py-32 bg-[#f6f9ff]">
        <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative" data-aos="fade-right" data-aos-duration="2000">
            <div>
                <div class="mx-auto text-center mb-10">
                    <span class="text-[#ff3f00] text-xl font-medium uppercase">Testmonials</span>
                    <h2 class="font-bold lg:text-5xl lg:leading-snug text-4xl leading-normal dark:text-black">
                        What’s My Customer Say
                    </h2>
                </div>

                <div class="max-w-[940px] mx-auto">
                    <div class="swiper-container overflow-hidden swiper-initialized swiper-horizontal swiper-backface-hidden">
                        <div class="swiper-wrapper" id="swiper-wrapper-10e6aaec4a1b8ca57" aria-live="off" style="transform: translate3d(-1880px, 0px, 0px); transition-duration: 0ms;">

                            <div class="swiper-slide" role="group" aria-label="3 / 3" data-swiper-slide-index="2" style="width: 940px;">
                                <div class="grid grid-cols-1 md:grid-cols-4 place-items-center border border-[#ECEAFF] shadow-customFour gap-4 rounded-lg p-8">
                                    <div class="col-span-3">
                                        <ul class="flex space-x-2 mb-2">
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                        </ul>
                                        <p class="text-2xl text-[#747681] italic block pb-10">
                                            There are many variations of passages of Lorem Ipsum
                                            into the available, majority have into the find end to
                                            find to suffered passages of Lorem Ipsum available.
                                        </p>
                                        <h3 class="font-semibold text-2xl text-interface-100">
                                            Wade De Warren
                                        </h3>
                                        <span class="text-lg text-[#747681]">Real Estate Broker</span>
                                    </div>
                                    <div class="relative">
                                        <img src="../assets/images/Testimonial/author.jpg" class="w-full rounded-lg" alt="">
                                        <span class="w-16 absolute bottom-5 -left-8 h-16 rounded-full bg-[#ff3f00] grid place-items-center">
                                            <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.8717 14.7261H6.78887V10.6598C6.78887 8.41701 8.61232 6.59356 10.8552 6.59356H11.3634C12.2084 6.59356 12.8883 5.91374 12.8883 5.06867V2.01903C12.8883 1.17402 12.2085 0.494141 11.3634 0.494141H10.8552C5.23861 0.494141 0.689453 5.0433 0.689453 10.6598V25.9084C0.689453 27.5921 2.05546 28.9581 3.73916 28.9581H11.8717C13.5554 28.9581 14.9214 27.5921 14.9214 25.9084V17.7758C14.9214 16.0921 13.5554 14.7261 11.8717 14.7261Z" fill="white"></path>
                                                <path d="M30.1706 14.7261H25.0877V10.6598C25.0877 8.41701 26.9112 6.59356 29.154 6.59356H29.6622C30.5072 6.59356 31.1871 5.91374 31.1871 5.06867V2.01903C31.1871 1.17402 30.5073 0.494141 29.6622 0.494141H29.154C23.5374 0.494141 18.9883 5.0433 18.9883 10.6598V25.9084C18.9883 27.5921 20.3543 28.9581 22.038 28.9581H30.1706C31.8543 28.9581 33.2203 27.5921 33.2203 25.9084V17.7758C33.2203 16.0921 31.8543 14.7261 30.1706 14.7261Z" fill="white"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-slide-prev" role="group" aria-label="1 / 3" data-swiper-slide-index="0" style="width: 940px;">
                                <div class="grid grid-cols-1 md:grid-cols-4 place-items-center border border-[#ECEAFF] shadow-customFour gap-4 rounded-lg p-8">
                                    <div class="col-span-3">
                                        <ul class="flex space-x-2 mb-2">
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                        </ul>
                                        <p class="text-2xl text-[#747681] italic block pb-10">
                                            There are many variations of passages of Lorem Ipsum
                                            into the available, majority have into the find end to
                                            find to suffered passages of Lorem Ipsum available.
                                        </p>
                                        <h3 class="font-semibold text-2xl text-interface-100">
                                            Wade De Warren
                                        </h3>
                                        <span class="text-lg text-[#747681]">Real Estate Broker</span>
                                    </div>
                                    <div class="relative">
                                        <img src="../assets/images/Testimonial/author.jpg" class="w-full rounded-lg" alt="">
                                        <span class="w-16 absolute bottom-5 -left-8 h-16 rounded-full bg-[#ff3f00] grid place-items-center">
                                            <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.8717 14.7261H6.78887V10.6598C6.78887 8.41701 8.61232 6.59356 10.8552 6.59356H11.3634C12.2084 6.59356 12.8883 5.91374 12.8883 5.06867V2.01903C12.8883 1.17402 12.2085 0.494141 11.3634 0.494141H10.8552C5.23861 0.494141 0.689453 5.0433 0.689453 10.6598V25.9084C0.689453 27.5921 2.05546 28.9581 3.73916 28.9581H11.8717C13.5554 28.9581 14.9214 27.5921 14.9214 25.9084V17.7758C14.9214 16.0921 13.5554 14.7261 11.8717 14.7261Z" fill="white"></path>
                                                <path d="M30.1706 14.7261H25.0877V10.6598C25.0877 8.41701 26.9112 6.59356 29.154 6.59356H29.6622C30.5072 6.59356 31.1871 5.91374 31.1871 5.06867V2.01903C31.1871 1.17402 30.5073 0.494141 29.6622 0.494141H29.154C23.5374 0.494141 18.9883 5.0433 18.9883 10.6598V25.9084C18.9883 27.5921 20.3543 28.9581 22.038 28.9581H30.1706C31.8543 28.9581 33.2203 27.5921 33.2203 25.9084V17.7758C33.2203 16.0921 31.8543 14.7261 30.1706 14.7261Z" fill="white"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide swiper-slide-active" role="group" aria-label="2 / 3" data-swiper-slide-index="1" style="width: 940px;">
                                <div class="grid grid-cols-1 md:grid-cols-4 place-items-center border border-[#ECEAFF] shadow-customFour gap-4 rounded-lg p-8">
                                    <div class="col-span-3">
                                        <ul class="flex space-x-2 mb-2">
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                            <li class="text-[#ffd233]">
                                                <i class="fa-solid fa-star"></i>
                                            </li>
                                        </ul>
                                        <p class="text-2xl text-[#747681] italic block pb-10">
                                            There are many variations of passages of Lorem Ipsum
                                            into the available, majority have into the find end to
                                            find to suffered passages of Lorem Ipsum available.
                                        </p>
                                        <h3 class="font-semibold text-2xl text-interface-100">
                                            Wade De Warren
                                        </h3>
                                        <span class="text-lg text-[#747681]">Real Estate Broker</span>
                                    </div>
                                    <div class="relative">
                                        <img src="../assets/images/Testimonial/author.jpg" class="w-full rounded-lg" alt="">
                                        <span class="w-16 absolute bottom-5 -left-8 h-16 rounded-full bg-[#ff3f00] grid place-items-center">
                                            <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.8717 14.7261H6.78887V10.6598C6.78887 8.41701 8.61232 6.59356 10.8552 6.59356H11.3634C12.2084 6.59356 12.8883 5.91374 12.8883 5.06867V2.01903C12.8883 1.17402 12.2085 0.494141 11.3634 0.494141H10.8552C5.23861 0.494141 0.689453 5.0433 0.689453 10.6598V25.9084C0.689453 27.5921 2.05546 28.9581 3.73916 28.9581H11.8717C13.5554 28.9581 14.9214 27.5921 14.9214 25.9084V17.7758C14.9214 16.0921 13.5554 14.7261 11.8717 14.7261Z" fill="white"></path>
                                                <path d="M30.1706 14.7261H25.0877V10.6598C25.0877 8.41701 26.9112 6.59356 29.154 6.59356H29.6622C30.5072 6.59356 31.1871 5.91374 31.1871 5.06867V2.01903C31.1871 1.17402 30.5073 0.494141 29.6622 0.494141H29.154C23.5374 0.494141 18.9883 5.0433 18.9883 10.6598V25.9084C18.9883 27.5921 20.3543 28.9581 22.038 28.9581H30.1706C31.8543 28.9581 33.2203 27.5921 33.2203 25.9084V17.7758C33.2203 16.0921 31.8543 14.7261 30.1706 14.7261Z" fill="white"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                    <ul class="hidden xl:block">
                        <li class="bg-[#58f394] w-[60px] h-[60px] rounded-full absolute left-0 top-0"></li>
                        <li class="bg-[#ff3f00] w-[60px] h-[60px] rounded-full absolute left-0 bottom-8"></li>
                        <li class="bg-[#ff0055] w-[65px] h-[65px] rounded-full absolute right-0 top-5"></li>
                        <li class="bg-[#ff3f00] w-[65px] h-[65px] rounded-full absolute right-10 bottom-16"></li>
                        <!-- <li class="absolute left-0 top-0">
                            <img src="../assets/images/Testimonial/av-lg-1.png" alt="">
                        </li>
                        <li class="absolute -right-10 bottom-16">
                            <img src="../assets/images/Testimonial/av-lg-2.png" alt="">
                        </li> -->
                        <li class="absolute right-10 bg-[#F2C94C] w-11 h-11 rounded-full -bottom-10"></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
</style>