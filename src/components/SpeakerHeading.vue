<script setup></script>

<template>
    <section class="pt-[235px] pb-[100px] Writer">
        <div class="max-w-lg mx-auto text-center">
            <h1 class="text-5xl text-[#ff3f00] font-semibold mb-2.5">
                Speaker
            </h1>
            <ul class="flex justify-center items-center space-x-2">
                <RouterLink to="/"
                    class="block py-2 px-3 text-xl font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ff3f00] md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Home</RouterLink>
                <li>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 7.5L14 12.5L10 17.5" stroke="#fff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </li>
                <li class="text-xl font-medium text-white">Speaker</li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.Writer {
    width: 100%;
    background: url(../assets/images/Speaker/Top-BG.jpg) no-repeat;
    background-size: cover;
    background-position: center;
}
</style>