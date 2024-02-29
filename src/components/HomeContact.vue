<script setup></script>

<template>
    <section class="Contact-Bg py-20">
        <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="flex flex-col gap-5 xl:gap-10 lg:flex-row justify-between">
                <div class="w-full flex justify-center">
                    <div class="max-w-lg">
                        <h2 class="lg:text-5xl text-center text-[#ff3f00] font-semibold mb-6">Get Appointment</h2>
                        <p class="text-xl xl:text-2xl text-white mb-8 text-center">
                            I am Lawyer, I love this profession – not for the money, but for the thrill of solving problems.
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
.Contact-Bg{
    background: url(../assets/images/contact-bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
}
.Line {
    background: url(../assets/images/line-w-lwh.svg) no-repeat bottom;
}
</style>