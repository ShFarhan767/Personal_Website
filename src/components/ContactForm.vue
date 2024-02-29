<script setup>
import { ref } from 'vue';

const formData = ref({
    fname: '',
    lname: '',
    email: '',
    telephone: '',
    message: ''
});

const validateForm = (event) => {
    if (!event.target.checkValidity()) {
        // If the form is not valid, prevent form submission
        event.preventDefault();
    }
};
</script>

<template>
    <section class="py-20 lg:py-120">
        <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10 xl:grid-cols-7">
                <div class="xl:col-span-3 w-full">
                    <div>
                        <h2 class="text-interface-500 font-bold text-4xl leading-normal xl:text-5xl capitalize xl:leading-snug">
                            Have any
                            <span class="relative">
                                <span class="relative z-20">Thought.</span>
                                <svg class="absolute -left-4 md:-left-1 z-0 top-0" width="204" height="61" viewBox="0 0 204 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.2354 3.79049C69.1075 3.09921 152.664 7.57177 186.934 20.378C223.844 34.1708 176.864 51.5472 126.365 56.3301C74.1181 61.2786 16.807 52.8912 6.47632 39.1849C-10.9639 16.046 64.0926 1.83083 122.121 3.36689" stroke="#ff3f00" stroke-width="6" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            Find here
                        </h2>
                    </div>

                    <div class="flex flex-col">

                        <div class="border-b border-[#747681] py-8">

                            <div class="hs-accordion-group">
                                <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                                    <button class="hs-accordion-toggle hs-accordion-active:text-[#ff3f00] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                                        <h3 class="text-2xl font-medium">
                                            <span class="inline-block accordion-number mr-4">01</span>
                                            Get an project overview
                                        </h3>
                                        <svg class="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        <svg class="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                    </button>
                                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                        <div class="px-4 py-2">
                                            <p class="text-interface-100 text-xl mb-3">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                In urna,elementum turpis.
                                            </p>
                                            <a href="#!" class="text-pblue-500 inline-flex items-center gap-5 text-base"><span> Learn more about this </span>
                                                <svg width="20" class="stroke-pblue-500" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7.93333H19M19 7.93333L12.0909 1M19 7.93333L12.0909 14" stroke-width="1.5" stroke-linejoin="round"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="border-b border-[#747681] py-8">

                            <div class="hs-accordion-group">
                                <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                                    <button class="hs-accordion-toggle hs-accordion-active:text-[#ff3f00] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                                        <h3 class="text-2xl font-medium">
                                            <span class="inline-block accordion-number mr-4">02</span>
                                            Task monitoring at a glance
                                        </h3>
                                        <svg class="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        <svg class="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                    </button>
                                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                                        <div class="px-4 py-2">
                                            <p class="text-interface-100 text-xl mb-3">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                In urna,elementum turpis.
                                            </p>
                                            <a href="#!" class="text-pblue-500 inline-flex items-center gap-5 text-base"><span> Learn more about this </span>
                                                <svg width="20" class="stroke-pblue-500" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7.93333H19M19 7.93333L12.0909 1M19 7.93333L12.0909 14" stroke-width="1.5" stroke-linejoin="round"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="border-b border-[#747681] py-8">
                            <div class="hs-accordion-group">
                                <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                    <button class="hs-accordion-toggle hs-accordion-active:text-[#ff3f00] py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                        <h3 class="text-2xl font-medium">
                                            <span class="inline-block accordion-number mr-4">03</span>
                                            Weekly Project
                                        </h3>
                                        <svg class="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                        <svg class="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                    </button>
                                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                        <div class="px-4 py-2">
                                            <p class="text-interface-100 text-xl mb-3">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                In urna,elementum turpis.
                                            </p>
                                            <a href="#!" class="text-pblue-500 inline-flex items-center gap-5 text-base"><span> Learn more about this </span>
                                                <svg width="20" class="stroke-pblue-500" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7.93333H19M19 7.93333L12.0909 1M19 7.93333L12.0909 14" stroke-width="1.5" stroke-linejoin="round"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="xl:col-span-4 w-full">

                    <div class="px-8 py-10 bg-[#050f25f3] h-full rounded-lg">
                        <form @submit="validateForm">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5">
                                <div>
                                    <label for="fname" class="block mb-2 text-base font-medium text-[#747681]">First Name</label>
                                    <input v-model="formData.fname" type="text" id="fname" name="fname" class="bg-[#050F25] text-white border focus:border-0 border-white border-opacity-20 rounded-lg px-5 py-4 h-14 w-full focus:ring-1 focus:ring-[#ff3f00]" placeholder="First Name" required>
                                </div>
                                <div>
                                    <label for="lname" class="block mb-2 text-base font-medium text-[#747681]">Last Name</label>
                                    <input v-model="formData.lname" type="text" id="lname" name="lname" class="bg-[#050F25] text-white border focus:border-0 border-white border-opacity-20 rounded-lg px-5 py-4 h-14 w-full focus:ring-1 focus:ring-[#ff3f00]" placeholder="Last Name" required>
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-base font-medium text-[#747681]">Email</label>
                                    <input v-model="formData.email" type="email" id="email" name="email" class="bg-[#050F25] text-white border focus:border-0 border-white border-opacity-20 rounded-lg px-5 py-4 h-14 w-full focus:ring-1 focus:ring-[#ff3f00]" placeholder="Email" required>
                                </div>
                                <div>
                                    <label for="telephone" class="block mb-2 text-base font-medium text-[#747681]">Telephone</label>
                                    <input v-model="formData.telephone" type="tel" id="telephone" name="telephone" class="bg-[#050F25] text-white border focus:border-0 border-white border-opacity-20 rounded-lg px-5 py-4 h-14 w-full focus:ring-1 focus:ring-[#ff3f00]" placeholder="+880 1746 00000" required>
                                </div>
                                <div class="md:col-span-2">
                                    <label for="message" class="block mb-2 text-base font-medium text-[#747681]">Message Here</label>
                                    <textarea v-model="formData.message" id="message" name="message" class="bg-[#050F25] text-white border focus:border-0 border-white border-opacity-20 rounded-lg px-5 py-4 h-32 w-full resize-none focus:ring-1 focus:ring-[#ff3f00]" placeholder="Message" required></textarea>
                                </div>
                            </div>
                            <div class="mt-8 flex justify-end">
                                <button type="submit" class="py-4 px-6 rounded-lg bg-[#ff3f00] text-white font-medium text-lg transition-all hover:bg-[#ff3c00]">
                                    Send Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.Form{
    background: url(../assets/images/Contact/contact-form-bg-shape.jpg) no-repeat;
    background-size: cover;
    background-position: center;
}
</style>