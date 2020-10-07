<template>
  <body class="leading-normal tracking-normal text-white gradient" style="font-family: 'Source Sans Pro', sans-serif;">

    <!--Nav-->
    <nav id="header" class="fixed w-full z-30 top-0 text-white">

      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          
        <div class="pl-4 flex items-center">
          <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> 
            <!--Icon from: http://www.potlabicons.com/ -->
            <svg id="icon-bug" class="h-auto gree inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" fill="red"><g>
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M6.056 8.3a7.01 7.01 0 0 1 .199-.3h11.49c.069.098.135.199.199.3l2.02-1.166 1 1.732-2.213 1.278c.162.59.249 1.213.249 1.856v1h3v2h-3c0 .953-.19 1.862-.536 2.69l2.5 1.444-1 1.732-2.526-1.458A6.992 6.992 0 0 1 13 21.929V14h-2v7.93a6.992 6.992 0 0 1-4.438-2.522l-2.526 1.458-1-1.732 2.5-1.443A6.979 6.979 0 0 1 5 15H2v-2h3v-1c0-.643.087-1.265.249-1.856L3.036 8.866l1-1.732L6.056 8.3zM8 6a4 4 0 1 1 8 0H8z"/>
            </g></svg> PHP-Freelancer
          </a>
        </div>

        <div class="block lg:hidden pr-4">
          <button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a href="https://blog.nevercodealone.de" class="inline-block py-2 px-4 text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                Blog
              </a>
            </li>
            <li class="mr-3">
              <a href="https://nevercodealone.de" class="inline-block py-2 px-4 text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                Never Code Alone
              </a>
            </li>
            <li class="mr-3">
              <a href="http://testify.nevercodealone.de" class="inline-block py-2 px-4 text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                TESTIFY
              </a>
            </li>
          </ul>
          <a href="mailto:rolandgolla@gmail.com" id="navAction" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
            E-Mail
          </a>
        </div>
      </div>
      
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>

    <slot/>
    
    <!--Footer-->
    <footer class="bg-white">
      <div class="container items-center py-2 mx-auto px-8 text-center text-black">
        <h6>Anschrift: Fürstenstrasse 10 - 47051 Duisburg - <a class="underline" href="https://nevercodealone.de/impressum">Impressum</a></h6>
      </div>
    </footer>
  </body>
</template>

