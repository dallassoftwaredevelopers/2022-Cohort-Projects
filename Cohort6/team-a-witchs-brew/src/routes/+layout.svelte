<script>
  import "../app.css";
</script>

<nav class="flex items-center text-center flex-wrap bg-purple-900 p-4">
  <div class="text-white">
    <span class="font-semibold text-xl">Witch's Brew</span>
  </div>

  <!-- ----------------------------- -->

  <!-- TODO SR: make interactive -->

  <!-- <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div> -->

  <!-- ----------------------------- -->

  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
        Home
      </a>
      <a href="/recipes" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
        Recipes
      </a>
      <a href="/featured" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
        Featured
      </a>
      <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
        About Us
      </a>
    </div>

    <!-- TODO SR: requires adjustments -->
    <div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <input
            type="search"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="search"
            placeholder="Search"
          />
        </div>
      </div>
    </div>

  </div>
</nav>

<slot />