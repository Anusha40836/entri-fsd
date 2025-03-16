let searchInputEl = document.getElementById("searchInput");
searchInputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let searchInput = searchInputEl.value;
    console.log(searchInput);
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData);
      });
  }
});
