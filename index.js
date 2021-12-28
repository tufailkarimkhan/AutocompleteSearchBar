// here i make variables of Class which i use inside html/css;
const searchInput = document.querySelector(".search");
const searchWrapper = document.querySelector(".wrapper");
const resultWrapper = document.querySelector(".result");

// here i make function to   render data  and create forEach loop to create dynamic
// html tag and store data of each element of array...
function renderResults(results) {
  if (results.length) {
    // here if condition is true then next line execute
    results.forEach((element) => {
      resultWrapper.innerHTML += `
      <li class="textStyle"><a href="https://${element.domain}" class="link">${element.domain}</a> 
      <span>${element.name} </span>
      <img class="" src="${element.logo}" alt="Card image" style="width:50px"> </li></br>
                                  `;
    });
  }
}

searchInput.addEventListener("keyup", async () => {
  // here i add keyup Event when any key press and remove finger then event fire
  let input = searchInput.value; // in searchInput.value return Event key value key is press.
  resultWrapper.innerHTML = ""; // here manually i defined resultWrapper is empty...
  if (input.length) {
    // here if condition check if value is store in input variabel then condition is true then next line execute
    let searchable = await fetch(
      // here i am fetching data from your given url
      `https://autocomplete.clearbit.com/v1/companies/suggest?query=${input}`
    ).then((response) => response.json()); // here i sue .then to store promiss object and response json data

    renderResults(searchable); // here i call the the renderResults to show data
  }
  if (input.length <= 0) {
    // here i check if input lenth less than 0 then add hidden class to resultWrapper else remove.
    resultWrapper.classList.add("hidden");
  } else {
    resultWrapper.classList.remove("hidden");
  }
});
