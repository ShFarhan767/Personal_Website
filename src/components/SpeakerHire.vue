<script setup></script>

<template>
    <section class="Bottom_Bg py-20">
        <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative z-20">
            <div class="flex flex-col gap-5 xl:gap-10 lg:flex-row justify-between">
                <div class="xl:w-5/12" data-aos="fade-right" data-aos-duration="2000">
                    <h2 class="text-4xl leading-normal xl:text-5xl xl:leading-tight font-bold text-white">
                        Start Living <br>
                        Your Ideal Life Today
                    </h2>
                </div>
                <div class="xl:w-5/12" data-aos="fade-left" data-aos-duration="2000">
                    <div class="max-w-lg">
                        <p class="text-xl xl:text-2xl text-white mb-8">
                            I am Speaker, I love this profession – not for the money, but for the thrill of inspirating people's.
                        </p>
                        <a href="#" class="bg-[#ff3f00] group inline-flex gap-1 items-center justify-center py-4 px-7 rounded-xl text-white text-lg transition-all hover:bg-[#ff4000b9]">
                            <span>Start Consultation</span>
                        </a>
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