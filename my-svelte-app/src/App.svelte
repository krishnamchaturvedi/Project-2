<!-- App.svelte -->
<script>
	// Import necessary modules and components
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import SERP from './serp.svelte';
	import SearchBar from './SearchBar.svelte';
  
	// Define a store to hold the search query and search results
	import { writable } from 'svelte/store';
	const searchQuery = writable('');
  
	// Function to fetch search results from the backend using 'stubs.go'
	// ...
  
	// Function to handle search and fetch search results
	// ...
  
	// Function to save the search query to IndexedDB
	// ...
  
	// Define a local 'let' variable for search query
	let localSearchQuery = '';
  
	onMount(() => {
	  // Additional logic to execute when the component mounts
	  // ...
  
	  // Set the localSearchQuery to the value of searchQuery store
	  localSearchQuery = $searchQuery;
	  fetchData(); // Fetch data from the Golang stub service on component mount
	});
  </script>
	
  <style>
	/* Add any necessary styles here */
	main {
	  max-width: 800px;
	  margin: 0 auto;
	  padding: 20px;
	}
	
	img {
	  max-width: 100px;
	  height: auto;
	  display: block;
	  margin: 0 auto;
	}
	
	h1 {
	  text-align: center;
	  font-size: 24px;
	  margin-bottom: 20px;
	}
	
	.letter {
	  font-size: 40px;
	  font-weight: bolder;
	}
  </style>
	
	<main>
		<!-- Header component -->
		<Header />
	  
		<!-- Other content for the main UI -->
		<!-- Example: Display logo and company name here -->
		<img src="https://cdn.discordapp.com/attachments/1110481567068979271/1130737308925173770/image.png" alt="Logo" />
		<a href="/">
		  <h1 class="letter">
			<!-- Letters with different colors -->
		  </h1>
		</a>
	  
		<!-- Render the Search Engine Results Page (SERP) content -->
		<SERP />
	  
		<!-- Pass the searchQuery store to the SearchBar component -->
		<SearchBar searchQuery={searchQuery} />
	  
		<!-- Footer component -->
		<Footer />
	  </main>