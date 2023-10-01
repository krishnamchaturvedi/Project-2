<!-- SearchBar.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  // Define props to receive the searchQuery store from the parent component (App.svelte)
  export let searchQuery;

  const dispatch = createEventDispatcher();

  function handleSearch() {
    // Dispatch the 'search' event with the current search query
    dispatch('search', searchQuery);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      // Dispatch the 'search' event with the current search query
      dispatch('search', searchQuery);
    }
  }

  // Set the localSearchQuery to the value of searchQuery store on component mount
  let localSearchQuery = '';
  onMount(() => {
    localSearchQuery = $searchQuery;
  });
</script>
<style>
  /* Add any necessary styles here */
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 800px;
    margin-bottom: 20px;
    margin: 4 auto;
  }
  
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    flex: 1;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
</style>
<div>
  <!-- Bind the value of the input to the localSearchQuery variable -->
  <input type="text" bind:value={localSearchQuery} placeholder="Enter your search term" on:keydown={handleKeyPress} />
  <button on:click={handleSearch}>Search</button>
</div>