<script setup>
import { onMounted, ref } from 'vue';

// Function to animate the percentage bars
const animatePercentageBars = () => {
    const percentageBars = document.querySelectorAll('.percentage-bar');

    percentageBars.forEach(bar => {
        const width = bar.parentElement.previousElementSibling.querySelector('.text-interface-100').innerText;
        bar.style.transition = `width ${width / 100}s ease`; // Adjust the duration as needed
        bar.style.width = width;
    });
}

// Call the function once to animate the bars when the page loads
onMounted(animatePercentageBars);
</script>

<template>
    <section class="pt-12 lg:pb-14 bg-[#F7F8FB] dark:bg-slate-800 overflow-hidden">
        <div class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">

                <div class="mt-20" data-aos="fade-up" data-aos-duration="3000">
                    <p class="font-3xl font-semibold mb-2 dark:text-white">My Speaker Career</p>
                    <h2 class="text-[#141414] font-semibold text-5xl leading-normal xl:text-5xl capitalize xl:leading-snug mb-3 dark:text-white">
                        Help
                        <span class="relative">
                            <span class="relative z-20">Nourishing</span>
                            <svg class="absolute -left-12 z-0 -top-4" width="351" height="89" viewBox="0 0 211 69"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M30.8353 5.20707C71.3242 4.06296 158.3 8.31774 193.87 22.426C232.179 37.6211 183.09 57.6423 130.454 63.5062C75.9959 69.573 16.3894 60.6604 5.75954 45.3131C-12.1857 19.4037 66.1136 2.68084 126.531 3.86657"
                                    stroke="#ff3f00" stroke-width="6" stroke-linecap="round"></path>
                            </svg>
                            Your Whole Self
                        </span>
                    </h2>
                    <h4 class="md:text-xl text-[#ff3f00] text-base mb-6 font-medium">
                        Unlock your life potential with me
                    </h4>
                    <p class="text-xl text-[#747681] mb-4">
                        Hello there! My name is Al Mamun Rasel. I am a Lawyer ,
                        Writer &amp; Speaker and I'm very passionate and dedicated to my work.
                        With 6 years experience as a professional a Lawyer
                    </p>
                </div>

                <div class="relative">

                    <!-- Card 1 Start! -->
                    <div data-aos="fade-left" data-aos-duration="3000">
                        <div class="border h-auto pb-8 my-6 p-5 rounded-lg transition-transform duration-500 bg-white hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900 dark:border-slate-700">
                            <div class="icon w-12 h-12 float-left text-5xl rounded-md text-[#04091E] bg-[#ff4000e5]">
                                <svg class="ml-3" id="SvgjsSvg1038" width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
                                    <defs id="SvgjsDefs1039"></defs>
                                    <g id="SvgjsG1040">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50" height="50">
                                            <path fill="#222222" d="M10.17 43.6a1 1 0 0 1-.458-.111L2.09 39.562a1 1 0 0 1-.434-1.341l8.954-17.686a1 1 0 0 1 1.347-.439l7.251 3.7a1 1 0 0 1 .448 1.323l-8.584 17.908a1 1 0 0 1-.583.515.975.975 0 0 1-.319.058Zm-6.281-5.362 5.824 3 7.718-16.1-5.49-2.8Z" class="color222 svgShape"></path>
                                            <path fill="#222222" d="M20.53 29.683a1 1 0 0 1-.491-.129l-2.906-1.638a1 1 0 1 1 .981-1.742l2.4 1.35A198.46 198.46 0 0 1 24.777 25c2.119-1.2 3.611-1.034 5.324.588a1 1 0 0 1-1.375 1.453c-1.061-1.006-1.616-1.062-2.965-.3-1.668.943-4.677 2.777-4.708 2.8a1 1 0 0 1-.523.142Z" class="color222 svgShape"></path>
                                            <path fill="#222222" d="M46.837 47.081a3.823 3.823 0 0 1-2.071-.546c-.921-.614-4.969-4.584-5.771-5.374a1 1 0 0 1 1.4-1.425c1.8 1.777 4.888 4.742 5.477 5.135a2.321 2.321 0 0 0 2.364-.246 1.42 1.42 0 0 0-.04-2.18c-1.022-1.149-5.268-5.236-6.2-6.132a66.3 66.3 0 0 1-9.432-4.321l-1.052.688a4.588 4.588 0 0 1-1.77 2.731 2.777 2.777 0 0 1-2.279.532 3.48 3.48 0 0 1-2.409-1.443 4.738 4.738 0 0 1-.166-3.616c.853-3.414 2.237-4.294 4.153-5.51l.42-.269c2.11-1.355 3.923-2.073 5.909-1.181 1.236.557 5.623 2.256 6.869 2.737l4.176-1.368a1 1 0 0 1 .623 1.9l-4.515 1.48a1.007 1.007 0 0 1-.67-.017c-.237-.091-5.815-2.238-7.3-2.907-.891-.4-1.832-.36-4.008 1.039l-.429.274c-1.748 1.11-2.625 1.668-3.285 4.307-.338 1.352-.182 1.9-.059 2.1.158.264.524.371 1.108.516a.859.859 0 0 0 .705-.2A2.585 2.585 0 0 0 29.6 32a1 1 0 0 1 .448-.75l1.925-1.258a1 1 0 0 1 1.027-.04c.067.037 6.81 3.724 9.763 4.5a1.008 1.008 0 0 1 .438.245c.216.207 5.3 5.076 6.494 6.422a3.4 3.4 0 0 1-.041 4.924 4.009 4.009 0 0 1-2.817 1.038Z" class="color222 svgShape"></path>
                                            <path fill="#222222" d="M48.947 42.781a1 1 0 0 1-.405-1.915l3.508-1.554a1 1 0 1 1 .81 1.829L49.351 42.7a1 1 0 0 1-.404.081Z" class="color222 svgShape"></path><path fill="#222222" d="M53.534 43.6a1 1 0 0 1-.927-.626l-7.548-18.727a1 1 0 0 1 .59-1.316l8.066-2.886a1 1 0 0 1 1.266.571l7.4 18.574a1 1 0 0 1-.571 1.3l-7.918 3.034a.982.982 0 0 1-.358.076zM47.3 24.463l6.791 16.846 6.054-2.32-6.665-16.736zm-4.968 25.652a3.391 3.391 0 0 1-2.264-.779c-1.339-1.19-4.781-4.63-4.927-4.776a1 1 0 0 1 1.414-1.414c.036.035 3.547 3.544 4.841 4.7a1.944 1.944 0 0 0 1.8.12A2.707 2.707 0 0 0 45 45.807a1 1 0 0 1 1.971.339 4.709 4.709 0 0 1-3.11 3.7 4.656 4.656 0 0 1-1.529.269z" class="color222 svgShape"></path>
                                            <path fill="#222222" d="M37.678 52.539a3.164 3.164 0 0 1-2.241-.8l-3.552-3.552a1 1 0 1 1 1.415-1.416l3.552 3.553a1.8 1.8 0 0 0 1.456.135 2.634 2.634 0 0 0 1.919-1.879 1 1 0 1 1 1.912.587 4.659 4.659 0 0 1-4.46 3.372Z" class="color222 svgShape"></path>
                                            <path fill="#222222" d="M33.866 55.208a3.631 3.631 0 0 1-2.268-.732c-1.475-1.18-2.715-2.149-2.716-2.151a1 1 0 1 1 1.231-1.575s1.249.976 2.734 2.164a2.132 2.132 0 0 0 2.1.042 1.556 1.556 0 0 0 .942-1.492 1 1 0 0 1 2-.061 3.559 3.559 0 0 1-2.048 3.343 4.449 4.449 0 0 1-1.975.462Z" class="color222 svgShape"></path><path fill="#222222" d="M26.372 54.746a2.482 2.482 0 0 1-.947-.19 4.416 4.416 0 0 1-1.925-1.838 3.165 3.165 0 0 1-2.083-.313 4.824 4.824 0 0 1-2.086-3.087 1 1 0 0 1 .137-.741c.813-1.268 2.039-3.239 2.222-3.651a2.549 2.549 0 0 1 1.66-1.326 3.358 3.358 0 0 1 2.842.544 2.983 2.983 0 0 1 1.324 2.743 3.321 3.321 0 0 1 2.46 1.251 3.588 3.588 0 0 1 .383 3.066 5.936 5.936 0 0 1-3 3.343 2.517 2.517 0 0 1-.987.199Zm-1.188-3.121c.314.531.875 1.293 1.4 1.074a3.945 3.945 0 0 0 1.882-2.138 1.621 1.621 0 0 0-.1-1.247 1.581 1.581 0 0 0-1.154-.452Zm-3.791-2.349a2.513 2.513 0 0 0 .977 1.371 1.219 1.219 0 0 0 .963.063l2.135-3.66a1.067 1.067 0 0 0-.412-1.265 1.4 1.4 0 0 0-1.1-.28.757.757 0 0 0-.44.242c-.264.586-1.534 2.603-2.123 3.529Z" class="color222 svgShape"></path>
                                            <path fill="#222222" d="M18.729 50.838a2.451 2.451 0 0 1-.7-.1c-1.716-.518-2.387-2.738-2.458-2.988a1 1 0 0 1 .093-.765 41.481 41.481 0 0 1 2.815-4.26 3.394 3.394 0 0 1 4.494-.806c.944.654 1.636 2.079.478 3.941a1 1 0 1 1-1.7-1.055c.257-.414.48-.966.081-1.242a1.385 1.385 0 0 0-1.77.381 39.586 39.586 0 0 0-2.434 3.64c.219.524.592 1.123.973 1.236.337.1.8-.246 1.051-.46a1 1 0 0 1 1.308 1.513 3.413 3.413 0 0 1-2.231.965Z" class="color222 svgShape"></path><path fill="#222222" d="M16.534 48.479a1 1 0 0 1-.323-.054c-.169-.058-4.155-1.45-4.155-4.572a1.019 1.019 0 0 1 .048-.31 11.672 11.672 0 0 1 1.473-2.8A3.1 3.1 0 0 1 17.425 40a2.588 2.588 0 0 1 1.4 3.206c-.654 2.107-1.325 4.514-1.332 4.538a1 1 0 0 1-.963.732Zm-2.47-4.472c.1.9 1.02 1.629 1.825 2.08.26-.911.648-2.24 1.029-3.471a.6.6 0 0 0-.375-.818 1.193 1.193 0 0 0-1.33.1 10.33 10.33 0 0 0-1.149 2.109Z" class="color222 svgShape"></path><path fill="#222222" d="M13.877 43.127a.994.994 0 0 1-.564-.174l-2.623-1.8a1 1 0 0 1 1.13-1.651l2.623 1.8a1 1 0 0 1-.566 1.825zM32 16.611a1 1 0 0 1-1-1V9.79a1 1 0 0 1 2 0v5.821a1 1 0 0 1-1 1zm-8.295 2.937a1 1 0 0 1-.637-.229l-4.489-3.707a1 1 0 1 1 1.273-1.542l4.49 3.707a1 1 0 0 1-.637 1.771zm16.595 0a1 1 0 0 1-.637-1.771l4.49-3.707a1 1 0 1 1 1.273 1.542l-4.489 3.707a1 1 0 0 1-.637.229z" class="color222 svgShape"></path>
                                        </svg>
                                    </g>
                                </svg>
                            </div>
                            <div class="ml-5 mt-2">
                                <h2 class="ml-14 text-2xl text-[#091D2D] font-semibold dark:text-[#ff3f00]">Public Speaker</h2>
                                <p class="ml-14 text-base text-[#747681] dark:text-white">If your actions inspire others to dream more, learn more, do more and become more, you are a leader.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2 Start! -->
                    <div data-aos="fade-right" data-aos-duration="3000">
                        <div class="border h-auto pb-8 my-10 p-5 rounded-lg bg-white transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900 dark:border-slate-700">
                            <div class="icon w-12 h-12 float-left text-5xl rounded-md text-[#04091E] bg-[#ff4000e5]">
                                <svg class="ml-2 mt-1" id="SvgjsSvg1316" width="48" height="48" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
                                    <defs id="SvgjsDefs1317"></defs>
                                    <g id="SvgjsG1318">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 24 24"><path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z"/></svg>
                                    </g>
                                </svg>
                            </div>
                            <div class="ml-5 mt-2">
                                <h2 class="ml-14 text-2xl text-[#091D2D] font-semibold dark:text-[#ff3f00]">Law Speaker</h2>
                                <p class="ml-14 text-base text-[#747681] dark:text-white">Always provide business-specific accessibility that can be used by people with various abilities and disabilities.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3 Start! -->
                    <div data-aos="fade-left" data-aos-duration="3000">
                        <div class="border h-auto pb-8 my-10 p-5 rounded-lg bg-white transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900 dark:border-slate-700">
                            <div class="icon w-12 h-12 float-left text-5xl rounded-md text-[#04091E] bg-[#ff4000e5]">
                                <svg class="mt-1 ml-1" id="SvgjsSvg1322" width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
                                    <defs id="SvgjsDefs1323"></defs>
                                    <g id="SvgjsG1324">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 24 24">
                                            <path d="M3.979 15.045c-1.468.978-2.168 2.263-2.231 3.955h-1.748c.069-2.346 1.1-4.186 3.153-5.497l.826 1.542zm15.36-12.045c1.468 0 2.661 1.194 2.661 2.662 0 1.115-.651 2.238-2.085 2.521l-2.366-4.417c.63-.662 1.268-.766 1.79-.766zm0-2c-1.852 0-3.198.966-4.138 2.619l3.545 6.618c3.4.222 5.254-2.149 5.254-4.575 0-2.598-2.098-4.662-4.661-4.662zm-3.722 7.631l-7.418 2.977 6.602-4.5-.949-1.772-9.38 6.393 1.557 2.906 10.539-4.229-.951-1.775zm-6.38 6.87c.633.619.764 1.648.764 2.558v4.941h1.999v-5.097c0-1.776.662-3.024 1.735-4.207l-4.498 1.805z"/>
                                        </svg>
                                    </g>
                                </svg>
                            </div>
                            <div class="ml-5 mt-2">
                                <h2 class="ml-14 text-2xl text-[#091D2D] font-semibold dark:text-[#ff3f00]">Religious Speaker</h2>
                                <p class="ml-14 text-base text-[#747681] dark:text-white">Islam is not about, ‘We are better than you’. Islam is about ‘Let me show you something that is better for you’.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>