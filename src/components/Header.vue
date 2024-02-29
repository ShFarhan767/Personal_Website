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

    // Get all menu items
    const menuItems = document.querySelectorAll('.navbar-item');

    // Function to toggle the visibility of the mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden'); // Toggle the 'hidden' class
    }

    // Function to close mobile menu
    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
    }

    // Event listener for click event on the mobile menu toggle button
    menuToggle.addEventListener('click', toggleMobileMenu);

    // Event listener for click event on menu items to close the mobile menu
    menuItems.forEach(item => {
        item.addEventListener('click', closeMobileMenu);
    });
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
                            <a href="mailto:info@example.com" class="text-[#ff5e5e] text-base">info@example.com</a>
                        </div>

                        <div class="space-x-2 hidden md:flex items-center">
                            <i class="fa-solid fa-phone text-[#ff3f00]"></i>
                            <a href="tel:+01600000" class="text-[#ff5e5e] text-base">+880 1600 11223</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-6">
                    <a href="#" class="group transition-all text-[#ff5e5e] hover:text-[#ff3f00]" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" class="group transition-all text-[#ff5e5e] hover:text-[#ff3f00]" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" class="group transition-all text-[#ff5e5e] hover:text-[#ff3f00]" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="#" class="group transition-all text-[#ff5e5e] hover:text-[#ff3f00]" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin-in"></i>
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
                            <a href="#!" class="flex items-center space-x-3 rtl:space-x-reverse">
                                <h2 class="font-medium text-4xl Header_Logo uppercase">AAM</h2>
                                <img src="../assets/images/Header-Logo.png" class="w-14 h-12 relative -left-[18px]" alt="">
                            </a>
                            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <a href="/contact" type="button" class="lg:block hidden md:mr-3 cursor-pointer text-white bg-[#ff3f00] font-normal rounded-lg text-base px-5 py-3 text-center group button-group">
                                    Meet With Me
                                    <i class="fa-solid fa-arrow-right-long text-xs transition-transform duration-300"></i>
                                </a>

                                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                    <span class="sr-only">Open main menu</span>
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                                        </svg>
                                </button>
                            </div>
                            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                <ul class="maffix bg-white lg:relative w-full left-0 md:left-0 top-16 md:top-0 flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                                    <li>
                                        <RouterLink to="/" class="navbar-item block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</RouterLink>
                                    </li>
                                    <!-- <li>
                                        <RouterLink to="/about" class="navbar-item block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</RouterLink>
                                    </li> -->
                                    <li>
                                        <RouterLink to="/lawyer" class="navbar-item block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Lawyer</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/writer" class="navbar-item block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Wrtiter</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/speaker" class="navbar-item block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Speaker</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/contact" class="navbar-item block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</RouterLink>
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
nav a.router-link-exact-active {
    color: #ff3f00;
}
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