import React from "react";

function NavBar() {

    return (

<nav class="bg-secondary border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="text-xl text-white">Devin Sinitiere</a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">About</a>
        </li>
        <li>
          <a href="/" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</a>
        </li>
        <li>
          <a href="/" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">GitHub</a>
        </li>
        <li>
          <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">LinkedIn</a>
        </li>
        <li>
          <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
    
}

export default NavBar;

{/* <nav class="bg-secondary">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" class="flex items-center">
                    <span class="text-white text-xl">Devin Sinitiere</span>
                </a>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4">
                        <li>
                            <a href="/" class="text-white block">About</a>
                        </li>
                        <li>
                            <a href="/" class="text-white">Portfolio</a>
                        </li>
                        <li>
                            <a href="/" class="text-white">GitHub</a>
                        </li>
                        <li>
                            <a href="/" class="text-slate-700">LinkedIn</a>
                        </li>
                        <li>
                            <a href="/" class="text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}