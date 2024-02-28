<script setup></script>

<template>
    <section class="Contact-Bg overflow-hidden" data-aos="fade-right" data-aos-duration="2000">
        <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="flex flex-col lg:flex-row items-center justify-between lg:gap-16">
                <div class="lg:w-2/3 py-16 lg:py-20">
                    <h4 class="text-[#ff3f00] text-xl font-medium uppercase mb-2">
                        GOT A Problem?
                    </h4>
                    <h2 class="text-4xl leading-normal  xl:text-5xl xl:leading-snug font-bold text-white mb-3">
                        Hire me as a
                        <span class="text-white Line">Professional</span>
                        lawyer skills elite.
                    </h2>
                    <p class="text-[#f4f4f4] lg:text-xl text-lg">
                        Dignissim, metus sit amet suscipit elementum, mauris vulputate
                        odio, nuncurna id tellus.
                    </p>
                </div>
                <div class="lg:w-2/3 w-full">
                    <div class="bg-[#050f25] bg-opacity-60 p-12 h-full" data-aos="fade-in" data-aos-duration="5000">
                        <form>
                            <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5">
                                <div>
                                    <input type="text"
                                        class="bg-[#050F25]  text-white border focus:border-0 border-white border-opacity-20 rounded-lg px-5 py-4 h-14 w-full focus:ring-1 focus:ring-[#ff3f00]"
                                        placeholder="First Name">
                                </div>
                                <div>
                                    <input type="text"
                                        class="bg-[#050F25] text-white border focus:border-0 border-white border-opacity-20 rounded-lg px-5 py-4 h-14 w-full focus:ring-1 focus:ring-[#ff3f00]"
                                        placeholder="Last Name">
                                </div>
                                <div>
                                    <input type="text"
                                        class="bg-[#050F25] text-white border focus:border-0 border-white border-opacity-20 rounded-lg px-5 py-4 h-14 w-full focus:ring-1 focus:ring-[#ff3f00]"
                                        placeholder="Email">
                                </div>
                                <div>
                                    <input type="text"
                                        class="bg-[#050F25] text-white border focus:border-0 border-white border-opacity-20 rounded-lg px-5 py-4 h-14 w-full focus:ring-1 focus:ring-[#ff3f00]"
                                        placeholder="Subject">
                                </div>
                                <div class="md:col-span-2">
                                    <textarea
                                        class="bg-[#050F25] text-white border focus:border-0 border-white border-opacity-20 rounded-lg px-5 py-4 h-32 w-full resize-none focus:ring-1 focus:ring-[#ff3f00]"
                                        placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="flex justify-end mt-9">
                                <button
                                    class="text-lg font-medium text-white flex justify-center items-center py-4 px-6 bg-[#ff3f00] rounded-lg border border-transparent transition hover:bg-transparent hover:border hover:border-white">
                                    <span> Full Form</span>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5" stroke="white"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
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
.Contact-Bg {
    background: url(../assets/images/Writer/Contact.jpeg) no-repeat;
    background-size: cover;
    background-position: center;
}

.Line {
    background: url(../assets/images/line-w-lwh.svg) no-repeat bottom;
}</style>