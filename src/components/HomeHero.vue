<script setup></script>

<template>
    <section class="Hero w-full h-auto pt-52 pb-24 z-0">
        <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8">
                <div class="Image">
                    <img src="../assets/images/lawyer-hero.png" class="" alt="">
                </div>
            <div class="pb-10">
                <h1 class="text-5xl leading-normal xl:text-6xl xl:leading-snug font-bold text-white mb-4">
                    Practical
                    <span class="text-white Line">Solutions</span>
                    to Real-World Legal Problems
                </h1>
                <p class="pl-5 text-white text-xl border-l-2 border-white mb-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. tellus,
                    luctus neculla corper mattis, pulvinar dapibus.
                </p>
                <a href="contact.html" class="bg-[#ff3f00] group inline-flex transition py-4 px-6 rounded-lg text-white hover:bg-transparent border border-transparent hover:border hover:border-white">
                    <span> Contact us today</span>
                        <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </a>
            </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.Hero{
    width: 100%;
    min-height: 900px;
    height: auto;
    background: url(../assets/images/hero-5.jpg) no-repeat;
    background-size: cover;
    background-position: center;
}
.Line{
    background: url(../assets/images/line-w-lwh.svg) no-repeat bottom;
}
</style>