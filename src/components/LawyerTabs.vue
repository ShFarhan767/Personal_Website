<script setup>
import { ref, onMounted } from 'vue';

const tabBtns = ref([]);
const tabContents = ref([]);

onMounted(() => {
    tabBtns.value = document.querySelectorAll("[data-tab]");
    tabContents.value = document.querySelectorAll(".tab-content");

    console.log("Number of tab buttons:", tabBtns.value.length);
    console.log("Number of tab contents:", tabContents.value.length);

    tabBtns.value.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            console.log("Tab button clicked:", btn.getAttribute("data-tab"));

            const tabId = btn.getAttribute("data-tab");

            // Hide all tab contents
            tabContents.value.forEach(content => {
                content.classList.add("hidden");
            });

            // Show the selected tab content
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.classList.remove("hidden");
                console.log("Tab content shown:", tabId);
            }

            // Remove active class from all buttons
            tabBtns.value.forEach(button => {
                button.classList.remove("active");
            });

            // Add active class to clicked button
            btn.classList.add("active");
        });

        // Activate the first tab by default
        if (index === 0) {
            btn.click();
        }
    });
});
</script>

<template>
    <div class="container mx-auto pb-12">

        <div class="md:p-8 xl:p-10 relative z-10">
            <nav class="relative z-0 flex border-b rounded-xl overflow-hidden dark:border-gray-700">
                <button data-tab="tab1" class="tab-btn active:border-b-[#ff3f00] focus:border-b-[#ff3f00] hover:bg-gray-300relative min-w-0 flex-1 bg-white first:border-s-0 border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 md:text-xl text-sm font-medium text-center overflow-hidden focus:z-10 focus:outline-none focus:text-[#ff3f00] disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400 active">
                    Investigative Services
                </button>
                <button data-tab="tab2" class="tab-btn active:border-b-[#ff3f00] focus:border-b-[#ff3f00] hover:bg-gray-300relative min-w-0 flex-1 bg-white first:border-s-0 border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 md:text-xl text-sm font-medium text-center overflow-hidden focus:z-10 focus:outline-none focus:text-[#ff3f00] disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400">
                    Security Consultations
                </button>
                <button data-tab="tab3" class="tab-btn active:border-b-[#ff3f00] focus:border-b-[#ff3f00] hover:bg-gray-300relative min-w-0 flex-1 bg-white first:border-s-0 border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 md:text-xl text-sm font-medium text-center overflow-hidden focus:z-10 focus:outline-none focus:text-[#ff3f00] disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400">
                    Criminal Defense Investigations
                </button>
            </nav>

            <!-- Tab 1 Start -->

            <div id="tab1" class="tab-content hidden overflow-hidden">
                <div class="mt-3 p-3">
                    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-24 xl:gap10 items-center" data-aos="fade-in">
                        <div  class="" data-aos="fade-right" data-aos-duration="2000">
                            <div class="About_BG"></div>
                            <div class="relative z-10">
                                <h2 class="text-4xl leading-normal xl:text-5xl xl:leading-snug font-semibold text-interface-100 mb-2 dark:text-white">
                                    <span class="text-interface-100 Line">Investigative Services</span>
                                </h2>
                                <p class="text-lg text-[#747681] md:pt-4 text-justify">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </p>

                                <div class="grid grid-cols-1 gap-3">
                                    <div class="Myself md:mt-8 mt-4">
                                        <a href="#!" class="bg-[#ff3f00] group inline-flex transition py-4 px-6 rounded-lg text-white hover:bg-[#747681] border border-transparent hover:border hover:border-[#747681]">
                                            <span>Read More</span>
                                            <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="relative col-span-2" data-aos="fade-left" data-aos-duration="2000">
                            <img src="../assets/images/Lawyer/about_1.jpg.webp" class="moveUpDown w-full h-full mx-auto z-10 relative lg:top-6 top-8 md:top-10" alt="">
                            <div class=" absolute top-44 -left-10 md:block hidden">
                                <img src="../assets/images/Writer/decoration-dots-2.svg" class="animated-image" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tab 2 Start -->

            <div id="tab2" class="tab-content hidden overflow-hidden">
                <div class="p-3">
                    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-24 xl:gap10 items-center">
                        <div  class="" data-aos="fade-right" data-aos-duration="2000">
                            <div class="About_BG"></div>
                            <div class="relative z-10">
                                <h2 class="text-4xl leading-normal xl:text-5xl xl:leading-snug font-semibold text-interface-100 mb-2 dark:text-white">
                                    <span class="text-interface-100 Line">Security Consultations</span>
                                </h2>
                                <p class="text-lg text-[#747681] md:pt-4 text-justify">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </p>

                                <div class="grid grid-cols-1 gap-3">
                                    <div class="Myself md:mt-8 mt-4">
                                        <a href="#!" class="bg-[#ff3f00] group inline-flex transition py-4 px-6 rounded-lg text-white hover:bg-[#747681] border border-transparent hover:border hover:border-[#747681]">
                                            <span>Read More</span>
                                            <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="relative col-span-2" data-aos="fade-left" data-aos-duration="2000">
                            <img src="../assets/images/Lawyer/hero_2.jpg.webp" class="moveUpDown w-full h-full mx-auto z-10 relative lg:top-6 top-8 md:top-10" alt="">
                            <div class=" absolute top-44 -left-10 md:block hidden">
                                <img src="../assets/images/Writer/decoration-dots-2.svg" class="animated-image" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tab 3 Start -->

            <div id="tab3" class="tab-content hidden overflow-hidden">
                <div class="p-3">
                    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-24 xl:gap10 items-center mt-3">
                        <div  class="" data-aos="fade-right" data-aos-duration="2000">
                            <div class="About_BG"></div>
                            <div class="relative z-10">
                                <h2 class="text-4xl xl:text-5xl leading-[1.1] xl:leading-snug font-semibold text-interface-100 mb-2 dark:text-white">
                                    <span class="text-interface-100 Line">Criminal Defense Investigations</span>
                                </h2>
                                <p class="text-lg text-[#747681] md:pt-4 text-justify">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </p>

                                <div class="grid grid-cols-1 gap-3">
                                    <div class="Myself md:mt-8 mt-4">
                                        <a href="#!" class="bg-[#ff3f00] group inline-flex transition py-4 px-6 rounded-lg text-white hover:bg-[#747681] border border-transparent hover:border hover:border-[#747681]">
                                            <span>Read More</span>
                                            <svg class="stroke-white transform translate transition-transform group-hover:translate-x-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="relative col-span-2" data-aos="fade-left" data-aos-duration="2000">
                            <img src="../assets/images/Lawyer/about_3.jpg.webp" class="moveUpDown w-full h-full mx-auto z-10 relative lg:top-6 top-8 md:top-10" alt="">
                            <div class=" absolute top-44 -left-10 md:block hidden">
                                <img src="../assets/images/Writer/decoration-dots-2.svg" class="animated-image" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.About_BG{
    width: 300px;
    height: 400px;
    background: url(../assets/images/Lawyer/about2-img.png) no-repeat;
    background-size: cover;
    background-position: left;
    position: absolute;
    z-index: 0;
    left: 160px;
}
.tab-btn.active {
    color: #ff3f00;
    border-bottom-color: #ff3f00;
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