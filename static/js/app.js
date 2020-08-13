// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  filters.datetime = d3.select("#datetime").property("value");
  filters.city = d3.select("#city").property("value");
  filters.state = d3.select("#state").property("value");
  filters.country = d3.select("#country").property("value");
  filters.shape = d3.select("#shape").property("value");
  // console.log(filters)

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  // https://stackoverflow.com/questions/25421233/javascript-removing-undefined-fields-from-an-object
  Object.keys(filters).forEach(key => filters[key] === "" ? delete filters[key] : {});
  
  
  console.log(filters)
  // let cleanFiltersArray = []
  // let filtersArray = Object.entries(filters);
  // filtersArray.forEach(([key, value]) => {
  //   cleanFiltersArray.push(value);
  // });
  
  // console.log(cleanFiltersArray);

  // cleanFiltersArray = cleanFiltersArray.filter(item => item);
  
  
  // console.log(cleanFiltersArray);



  // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches the filter values
  // 
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// function to clear table filters by reloading the page
function clearFilters() {
  location.reload();
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn").on("click", updateFilters);
d3.selectAll("#clear-btn").on("click", clearFilters);


// Build the table when the page loads
buildTable(tableData);
