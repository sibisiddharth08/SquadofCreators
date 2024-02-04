async function loadFiles() {
    try {
      // Fetch spinner content
      const spinnerResponse = await fetch("../Dynamic/spinner.html");
      const spinnerHTML = await spinnerResponse.text();
      document.getElementById("spinner").innerHTML = spinnerHTML;
  
      // Fetch header content
      const headerResponse = await fetch("../Dynamic/header.html");
      const headerHTML = await headerResponse.text();
      document.getElementById("header").innerHTML = headerHTML;
  
      // Fetch footer content
      const footerResponse = await fetch("../Dynamic/footer.html");
      const footerHTML = await footerResponse.text();
      document.getElementById("footer").innerHTML = footerHTML;

      // Fetch footer content
      const teamsResponse = await fetch("../Dynamic/teams.html");
      const teamsHTML = await teamsResponse.text();
      document.getElementById("teams").innerHTML = teamsHTML;

    } 
    catch (error) {
      console.error("Error loading files:", error);
    }
  }
  
  // Automatically call loadFiles() when the page loads
  window.onload = function() {
    loadFiles();
  };
  