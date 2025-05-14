document.getElementById("fetchData").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("userInfo").innerHTML = `<p>Name:${data.name}</p>
        <p>Email:${data.email}</p>
        <p>City:${data.address.city}</p>`;
    })
    .catch(function (error) {
      console.log("Error fetching data:", error);
      document.getElementById("userInfo").innerHTML =
        "<p>Error Fetching Data</p>";
    });
});
document.getElementById("fetch-data").addEventListener("click", fetchUserData);
