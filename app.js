document.getElementById("searchButton").addEventListener("click", function () {
  const searchInput = document.getElementById("searchInput").value.trim();
  const url = `superheroes.php?query=${encodeURIComponent(searchInput)}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("result").innerHTML = html; // Display the result inside the #result div
    })
    .catch(error => {
      console.error('Error fetching superhero data:', error);
      document.getElementById("result").innerHTML = `<p style="color:red;">Failed to fetch superhero data.</p>`;
    });
});
