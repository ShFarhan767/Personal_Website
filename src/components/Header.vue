<script setup>
window.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the navbar
    const navbar = document.getElementById('navbar');

    // Function to toggle the affix class based on scroll position
    function toggleAffix() {
        const scrollPosition = window.pageYOffset;

        console.log('Scroll Position:', scrollPosition);
        console.log('Navbar Offset Top:', navbar.offsetTop);

        // If the scroll position is greater than the navbar's offset top
        if (scrollPosition > navbar.offsetTop) {
            // Add the affix class to the first div
            console.log('Adding affix class');
            document.querySelector('.Header').classList.add('affix');
        } else {
            // Remove the affix class from the first div
            console.log('Removing affix class');
            document.querySelector('.Header').classList.remove('affix');
        }
    }

    // Event listener for scroll event
    window.addEventListener('scroll', toggleAffix);
});

window.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the mobile menu toggle button
    const menuToggle = document.querySelector('[data-collapse-toggle="navbar-sticky"]');

    // Get a reference to the mobile menu
    const mobileMenu = document.getElementById('navbar-sticky');

    // Function to toggle the visibility of the mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden'); // Toggle the 'hidden' class
    }

    // Event listener for click event on the mobile menu toggle button
    menuToggle.addEventListener('click', toggleMobileMenu);
});

import { ref , onMounted } from 'vue';

const darkMode = ref(false);

// Function to toggle dark mode
const toggleMode = () => {
    darkMode.value = !darkMode.value;
    if (darkMode.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    // Update local storage with current theme preference
    localStorage.setItem('darkMode', darkMode.value ? 'dark' : 'light');
};

// Check if dark mode preference is stored in local storage on component mount
onMounted(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'dark') {
        darkMode.value = true;
        document.documentElement.classList.add('dark');
    }
});
</script>

<template>
    <header class="main-header absolute top-0 w-full">
        <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="flex justify-between py-3">
                <div class="grow items-center flex">
                    <div class="flex space-x-0 md:space-x-14">

                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-envelope text-[#ff3f00]"></i>
                            <a href="mailto:info@example.com" class="text-[#747681] text-base">info@example.com</a>
                        </div>

                        <div class="space-x-2 hidden md:flex items-center">
                            <i class="fa-solid fa-phone text-[#ff3f00]"></i>
                            <a href="tel:+01600000" class="text-[#747681] text-base">+880 1600 11223</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-6">
                    <a href="#" class="group transition-all text-[#747681] hover:text-[#ff3f00]" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" class="group transition-all text-[#747681] hover:text-[#ff3f00]" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" class="group transition-all text-[#747681] hover:text-[#ff3f00]" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="#" class="group transition-all text-[#747681] hover:text-[#ff3f00]" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a class="group transition-all text-[#747681] hover:text-[#ff3f00]">
                        
                        <a @click="toggleMode"  id="theme-toggle" type="button" class="text-[#747681] font-semibold hover:text-[#747681] transition-all dark:text-white">
                            <div class="Dark_Mode md:w-10 h-10 flex items-center justify-center">
                                <i v-if="!darkMode" id="theme-toggle-dark-icon" class="fa-solid fa-moon"></i>
                                <i v-else id="theme-toggle-light-icon" class="fa-solid fa-sun"></i>
                            </div>
                        </a>
                    </a>
                </div>
            </div>
        </div>

        <!-- Navbar Start -->

        <div class="Header sticky-header">
            <div class="mx-auto sm:px-6 lg:max-w-7xl lg:px-8 flex justify-center h-[75px] px-2">
                <nav class="nav nav-law top-20 relative w-full bg-white dark:bg-slate-800 shadow-md transition duration-500 transform -translate-y-full z-50" id="navbar">
                    <nav class="lg:mx-auto rounded-2xl dark:bg-gray-800 w-full z-20 top-14 start-0 dark:border-gray-600">
                        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="../assets/images/logo-lw-m.svg" class="h-8" alt="Flowbite Logo">
                            </a>
                            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <button type="button" class="lg:block hidden md:mr-3 text-white bg-[#ff3f00] font-normal rounded-lg text-base px-5 py-3 text-center group button-group">
                                    Consultation
                                    <i class="fa-solid fa-arrow-right-long text-xs transition-transform duration-300"></i>
                                </button>

                                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                    <span class="sr-only">Open main menu</span>
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                                        </svg>
                                </button>
                            </div>
                            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                <ul class="maffix bg-white fixed lg:relative w-full left-0 md:left-0 top-16 md:top-0 flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                                    <li>
                                        <RouterLink to="/" class="block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/about" class="block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</RouterLink>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Portfolio</a>
                                    </li>
                                    <li>
                                        <RouterLink to="/contact" class="block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</RouterLink>
                                    </li>
                                    <li>
                                        <div class="hs-dropdown md:py-0 md:px-3 py-2 px-3 border-none relative inline-flex [--trigger:hover]">
                                            <a id="hs-dropdown-hover-event" type="button" class="hs-dropdown-toggle border-none inline-flex items-center gap-x-2 text-base text-[#000] md:hover:text-[#ff3f00] transition-all duration-700 font-medium rounded-lg disabled:opacity-50 cursor-pointer dark:bg-slate-800 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                Pages
                                                <svg class="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                            </a>

                                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-500 hs-dropdown-open:opacity-100 opacity-0 hidden min-w-44 min-h-52 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-hover-event">
                                                <a class="flex items-center gap-x-3.5 py-3 px-3 rounded-lg text-base text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                                    Team Details
                                                </a>
                                                <a class="flex items-center gap-x-3.5 py-3 px-3 rounded-lg text-base text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                                    Achivement
                                                </a>
                                                <a class="flex items-center gap-x-3.5 py-3 px-3 rounded-lg text-base text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                                    Gallery
                                                </a>
                                                <a class="flex items-center gap-x-3.5 py-3 px-3 rounded-lg text-base text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                                    Contact
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </nav>
            </div>
        </div>


    </header>
</template>

<style scoped>
@media screen and (min-width: 1118px){
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav__toggle {
        display: none;
    }
}
.nav {
    height: 75px;
    border-radius: 12px;
    box-shadow: 5px 6px 60px rgba(0, 0, 0, 0.04);
}
.nav__toggle {
    position: relative;
    width: 32px;
    height: 32px;
}
.button-group:hover .fa-arrow-right-long {
    transform: translateX(5px); /* Move the icon 5px to the right on hover */
}
.affix {
    position: fixed;
    left: 0px;
    top: -5px;
    right: 0;
    width: 100%;
    z-index: 1000;
    transition: 0.3s ease-in;
    animation: upsdown 1000ms;
}
@keyframes upsdown{
    0% {
        transform: translateY(-100px);
        visibility: hidden;
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
    }
}
@media (max-width: 767px) {
    .maffix {
        position: fixed;
        left: 0px;
        top: 65px;
        right: 0;
        width: 100%;
        z-index: 1000;
        transition: 0.3s ease-in;
        animation: upsdown 1000ms;
    }
}
</style>