<!-- serp.svelte -->
<script>
  // Import necessary modules and components
  import { onMount } from 'svelte';
  import SearchResult from './SearchResult.svelte';

  // Initialize variables
  export let results = [];
  let keyword = '';

  // Function to filter the results based on the keyword
  function filterResults() {
    if (keyword.trim() === '') {
      // If no keyword is entered, display all results
      return results;
    } else {
      // Filter the results based on the keyword
      return results.filter((result) =>
        result.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  }

  async function fetchSearchResults() {
    try {
      const response = await fetch('http://localhost:8081/api/search'); // Replace with the correct backend URL
      results = await response.json();
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }

  onMount(() => {
    // Fetch the initial search results when the component mounts
    fetchSearchResults();
  });

  // Function to handle search and fetch search results
  function handleSearch() {
    fetchSearchResults();
  }
</script>

<style>
  /* Add any necessary styles here */
  div {
    margin: 10px 0;
  }

  .no-results {
    font-size: 18px;
    color: #777;
    text-align: center;
    padding: 20px;
  }
</style>

<main>
  <!-- Comment out the SearchBar component here, as it's not needed in the SERP page -->
  <!-- <SearchBar bind:keyword={keyword} on:search={handleSearch} /> -->

  <div>
    {#if filterResults().length === 0 && keyword.trim() !== ''}
      <p class="no-results">No results found.</p>
    {:else}
      {#each filterResults() as result}
        <div>
          <SearchResult {result} />
        </div>
      {/each}
    {/if}
  </div>
</main>
