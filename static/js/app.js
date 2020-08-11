// import the data from data.js
const tableData = data;

// Reference the html table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear existing data from table
    tbody.html("");

    // then loop thru each object in the data
    // append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");
        
        // loop thru each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}