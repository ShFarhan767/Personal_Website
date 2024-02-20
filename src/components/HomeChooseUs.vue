<script>
export default {
    mounted() {
        window.addEventListener('scroll', this.checkVisibility);
        this.checkVisibility(); // Check visibility on component mount
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.checkVisibility);
    },
    methods: {
        checkVisibility() {
            const rect = this.$refs.section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Check if section is in viewport
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                const upElements = this.$refs.section.querySelectorAll('.fade-in-up');
                upElements.forEach(element => {
                    element.classList.add('fade-in-up-active');
                });

                const downElements = this.$refs.section.querySelectorAll('.fade-in-down');
                downElements.forEach(element => {
                    element.classList.add('fade-in-down-active');
                });
            }
        }
    }
}
</script>

<template>
        <section ref="section" class="py-20 dark:bg-slate-900 fade-in-section">
            <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div class="fade-in-down">
                        <h4 class="text-xl text-[#ff3f00] font-medium uppercase">
                            ABOUT ME
                        </h4>
                        <h2 class="text-4xl leading-normal xl:text-5xl xl:leading-snug font-bold text-interface-100 dark:text-white">
                            AL <span class="text-interface-100 dark:text-white Line">MAMUN</span> RASEL
                        </h2>
                        <h4 class="text-xl text-[#ff3f00] font-medium">
                            Advocate & Lawyer
                        </h4>
                        <p class="py-6 text-lg text-[#747681]">
                            Donec dignissim, metus sit amet susc elementum, arcu mauris
                            vulputate odio, quis cursus nunc urna id tellus. Quis que hendre
                            rit commodo dignissim.
                        </p>
                        <ul class="grid md:grid-cols-2 gap-7">
                            <li class="flex space-x-3 dark:text-[#f5f5f5]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_537_39594)">
                                        <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_537_39594)"></circle>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z" fill="white"></path>
                                    </g>
                                    <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="white" stroke-width="1.5"></rect>
                                    <defs>
                                        <linearGradient id="paint0_linear_537_39594" x1="-9.7" y1="2.31967e-06" x2="25.6204" y2="3.39579" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FCAD02"></stop>
                                            <stop offset="1" stop-color="#FF0041"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0_537_39594">
                                            <rect width="24" height="24" rx="12" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>(B2B) buying .</span>
                            </li>
                            <li class="flex space-x-3 dark:text-[#f5f5f5]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_537_39594)">
                                        <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_537_39594)"></circle>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z" fill="white"></path>
                                    </g>
                                    <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="white" stroke-width="1.5"></rect>
                                    <defs>
                                        <linearGradient id="paint0_linear_537_39594" x1="-9.7" y1="2.31967e-06" x2="25.6204" y2="3.39579" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FCAD02"></stop>
                                            <stop offset="1" stop-color="#FF0041"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0_537_39594">
                                            <rect width="24" height="24" rx="12" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Demographic data.</span>
                            </li>
                            <li class="flex space-x-3 dark:text-[#f5f5f5]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_537_39594)">
                                        <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_537_39594)"></circle>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z" fill="white"></path>
                                    </g>
                                    <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="white" stroke-width="1.5"></rect>
                                    <defs>
                                        <linearGradient id="paint0_linear_537_39594" x1="-9.7" y1="2.31967e-06" x2="25.6204" y2="3.39579" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FCAD02"></stop>
                                            <stop offset="1" stop-color="#FF0041"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0_537_39594">
                                            <rect width="24" height="24" rx="12" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Demographic data..</span>
                            </li>
                            <li class="flex space-x-3 dark:text-[#f5f5f5]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_537_39594)">
                                        <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_537_39594)"></circle>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z" fill="white"></path>
                                    </g>
                                    <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="white" stroke-width="1.5"></rect>
                                    <defs>
                                        <linearGradient id="paint0_linear_537_39594" x1="-9.7" y1="2.31967e-06" x2="25.6204" y2="3.39579" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FCAD02"></stop>
                                            <stop offset="1" stop-color="#FF0041"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0_537_39594">
                                            <rect width="24" height="24" rx="12" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Marketing established.</span>
                            </li>
                        </ul>
                        <div class="mt-10">
                            <img src="../assets/images/About/Signature.png" alt="">
                            <span class="text-2xl  text-interface-100 dark:text-[#f5f5f5]">CEO &amp; Founder of Difolio</span>
                        </div>
                    </div>

                    <div class="relative fade-in-up">
                        <img src="../assets/images/Writer/image-1.jpg" class="relative z-30 w-full" alt="">
                        <div class="hidden xl:block">
                            <img src="../assets/images/About/ls-1.png" class="absolute -left-20 z-40 bottom-24" alt="">
                            <img src="../assets/images/About/ls-2.png" class="absolute top-8 -right-20 bottom-20 z-40" alt="">
                            <img src="../assets/images/About/ls-3.png" class="absolute -right-20 bottom-0 z-40" alt="">
                            <img src="../assets/images/Writer/shape-1.png" class="absolute -right-20 top-32 -z-10 animated-image" alt="">
                            <img src="../assets/images/About/ls-4.png" class="absolute -left-16 bottom-60 z-0" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>
.Photo{
    width: 80%;
    height: 500px;
    top: 50px;
    right: 80px;
    background: url(../assets/images/Writer/image-1.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 20;
}
.Line {
    background: url(../assets/images/line-w-lwh.svg) no-repeat bottom;
}
/* scroll animation */
.fade-in-up, .fade-in-down {
  opacity: 0;
  transform: translateX(50px); /* Start 50px below/above */
  transition: opacity 0.7s, transform 2s;
}

.fade-in-up-active, .fade-in-down-active {
  opacity: 1;
  transform: translateY(0);
}
/* @keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
} */
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