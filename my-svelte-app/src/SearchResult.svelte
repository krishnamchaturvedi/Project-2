<style>
  /* Add any necessary styles here */
  div {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
  }

  .description {
    font-size: 16px;
    color: #333;
  }
  .URL {
    font-size: 14px;
    color: blue; /* Set the color of the link text */
    text-decoration: underline; /* Add an underline to the link text */
    cursor: pointer;
  }

  /* Style for visited URLs */
  .URL:visited {
    color: purple; /* Set the color of visited link text */
  }

  /* Style for hovering over URLs */
  .URL:hover {
    color: red; /* Set the color of link text when hovering */
    text-decoration: none; /* Remove the underline when hovering */
  }
</style>
<div>
  <!-- Display the result details -->
  <p class="title">{results.title}</p>
  <p class="description">{results.description}</p>
  <a class="URL" href={results.url} target="_blank" rel="noopener noreferrer">
    {results.url}
  </a>

</div>
