<template>
  <div>
    <!-- Beggining nav menu-->
    <div class="lg:hidden sm:flex lg:gap-x-96 lg:ml-24">
      <nav
        class="flex items-center justify-between flex-wrap bg-bleuDesign p-6"
      >
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            class="h-8 w-8 fill-current text-white mr-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17H13V15H11V17ZM11 13H13V7H11V13Z"
            ></path>
          </svg>
          <span class="font-semibold text-xl tracking-tight">Logo</span>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          >
            <svg
              class="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <g>
                <rect y="9" width="20" height="2" />
                <rect y="3" width="20" height="2" />
                <rect y="15" width="20" height="2" />
              </g>
            </svg>
          </button>
        </div>
        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:block"
        >
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Item 1
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Item 2
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
            >
              Item 3
            </a>
          </div>
        </div>
      </nav>
    </div>

    <!-- Ending nav menu-->
    <div class="hidden sm:flex sm:flex-wrap sm:gap-x-96 sm:ml-24">
      <!-- First part-->
      <div class="grid grid-cols-3 gap-x-4">
        <div class="text-xl font-pop">
          <a href="" class="stories font-pop">Stories</a>
        </div>
        <div class="text-xl font-pop">
          <a href="" class="work text-neutral-400 font-pop">Works</a>
        </div>
        <div class="text-xl font-pop">
          <a href="" class="contact text-neutral-400 font-pop">Contact</a>
        </div>
      </div>
      <!-- Second part-->
      <div class="grid grid-cols-4 gap-x-8">
        <div class="text-xl font-pop">
          <a href="" class="fullName font-pop">Ammar</a>
        </div>
        <div class="text-xl font-pop">
          <a href="" class="facebook font-pop">
            <i class="fa-brands fa-facebook-f"></i>Facebook</a
          >
        </div>
        <div class="text-xl font-pop">
          <a href="" class="github font-pop"
            ><i class="fa-brands fa-github"></i>Github</a
          >
        </div>
        <div><img src="@/assets/images/logos/email.svg" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
