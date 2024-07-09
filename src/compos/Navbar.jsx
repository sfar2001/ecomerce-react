import React from 'react'

export default function navbar() {
    return (


        <nav class="bg-white dark:bg-gray-1200 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600" style={{ height: "80px", fontSize: "30px", }}>
            <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/Welcome" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="" class="h-8" alt="" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Products</span>
                </a>
                <div class="flex md:order-2 space-x-4 md:space-x-3 rtl:space-x-reverse">

                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        <li>
                            <a href="./Men" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Men</a>
                        </li>
                        <li>
                            <a href="./Women" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Women</a>
                        </li>
                        <li>
                            <a href="./Electronics" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Electronics</a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>



    )
}
