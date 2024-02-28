<script setup></script>

<template>
    <section class="pb-20 relative">
        <div class="mx-auto sm:px-6 lg:max-w-7xl lg:px-0">
            <div class="bg-white shadow-custom rounded-xl md:p-8 xl:p-10 dark:bg-slate-900">
                <!-- <div class="About_BG"></div> -->
                <div class="mx-auto sm:px-6 lg:max-w-7xl lg:px-0">
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 xl:gap10 items-center">
                        <div  class="" data-aos="fade-right" data-aos-duration="2000">
                            <div class="p-3 md:mt-5">
                                <h2 class="md:text-4xl text-3xl leading-normal xl:text-5xl xl:leading-snug font-semibold text-interface-100 mb-2 dark:text-white">
                                    <span class="text-interface-100 Line">I'm Al Mamun Rasel</span>
                                </h2>
                                <h4 class="md:text-xl text-[#ff3f00] text-base font-medium">
                                    Advocate At Supreme Court Of Bangladesh
                                </h4>
                                <p class="text-lg text-[#747681] md:pt-4 text-justify">
                                    At only 26 years of age, I established myself as the most successful Lawyer in my batch <br> <br>
                                    Born on Jult 1, 1990, in Cumilla, I passed SSC and HSC from AJFKM and completed my bachelor's degree from University of Dhaka. Then I completed my post graduation from Bangabandhu Sheikh Mujibur Rahman Maritime University on Special LLM (Maritime Law). <br> <br>
                                    Now I successfully serving as a lawyer of Supreme Court of Bangladesh & also owns a law firm named Legal Solution Chamber(LSC)
                                </p>

                                <div class="grid grid-cols-1 gap-3">
                                    <div class="Myself md:mt-8 mt-4">
                                        <a href="#!" class="bg-[#ff3f00] group inline-flex transition py-4 px-6 rounded-lg text-white hover:bg-[#747681] border border-transparent hover:border hover:border-[#747681]">
                                            <span> Contact us today</span>
                                            <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="relative">
                            <div class="h-72 bottom-0 w-full absolute bg-black z-0"></div>
                            <img src="../assets/images/Lawyer/About.jpg" class="moveUpDown md:w-[480px] md:h-[500px] md:p-0 p-5 mx-auto z-10 relative lg:-top-6 md:top-10" data-aos="fade-up" data-aos-duration="2000" alt="">
                            <div class=" absolute top-60 -left-10">
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

.About_BG{
    width: 350px;
    height: 540px;
    background: url(../assets/images/Lawyer/about2-img.png) no-repeat;
    background-size: cover;
    background-position: left;
    position: absolute;
    z-index: 0;
}
.animated-image {
    animation: moveUpDown 2s infinite alternate; /* Adjust duration and timing function as needed */
}

@keyframes moveUpDown {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-25px);
    }
}
</style>