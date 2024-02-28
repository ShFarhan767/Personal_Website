<script setup></script>

<template>
    <section class="Heading pt-[235px] pb-[100px] dark:bg-slate-800">
        <div class="max-w-xs mx-auto text-center">
            <h1 class="text-5xl text-interface-100 font-semibold mb-2.5">About</h1>
            <ul class="flex justify-center items-center space-x-2">
                <li class="text-lg font-medium text-interface-100">
                    <RouterLink to="/" class="block py-2 px-3 text-[#000] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Home</RouterLink>
                </li>
                <li>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 7.5L14 12.5L10 17.5" stroke="#04091E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </li>
                <li class="text-lg font-medium text-interface-100">About</li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.Heading{
    background: url(../assets/images/About/brcm.jpg) no-repeat;
    background-size: cover;
    background-position: center;
}
</style>