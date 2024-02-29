<script setup></script>

<template>
    <section class="Bottom_Bg py-20">
        <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative z-20">
            <div class="flex flex-col gap-5 xl:gap-10 lg:flex-row justify-between">
                <div class="w-full flex justify-center">
                    <div class="max-w-lg">
                        <h2 class="lg:text-5xl text-center text-[#ff3f00] font-semibold mb-6">Get Appointment</h2>
                        <p class="text-xl xl:text-2xl text-white mb-8 text-center">
                            Words have incredible power. They can make people’s hearts soar, or they can make people’s hearts sore.
                        </p>
                        <div class="w-full flex justify-center">
                            <a href="#!"
                                class="bg-[#ff3f00] group inline-flex transition py-4 px-6 rounded-lg text-white hover:bg-[#ff3f00] border border-transparent hover:border">
                                <span class="text-2xl font-semibold">Get Appointment</span>
                                <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2"
                                    width="30" height="34" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="white"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.Bottom_Bg {
    position: relative;
    background: url(../assets/images/Speaker/Motivational-Speaker.png) no-repeat;
    background-size: cover;
    z-index: 10;
}
.Bottom_Bg::after {
    content: ""; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>