<script>
  import "../app.css";
</script>

<nav class="flex items-center text-center flex-wrap p-4">
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

  <!--TODO: remove hover over color and put one in css-->
  <div class="nav-options w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-200 mr-4">
        Home
      </a>
      <a href="/recipes" class="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-200  mr-4">
        Recipes
      </a>
      <a href="/featured" class="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-200 mr-4">
        Featured
      </a>
      <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-200 mr-4">
        About Us
      </a>
    </div>

    <!-- TODO SR: requires adjustments -->
 
<form class="flex items-center">   
  <label for="simple-search" class="sr-only">Search</label>
  <div class="relative w-full">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="magnifying-glass w-5 h-5"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      </div>
      <input 
        type="text" 
        id="simple-search" 
        class="nav-search-bar text-sm block pl-10 p-2.5" 
        placeholder="Search..." >
  </div>
 
</form>


  </div>
</nav>

<slot />