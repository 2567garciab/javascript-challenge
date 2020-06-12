// from data.js
var tableData = data;

// YOUR CODE HERE!
function tableDisplay(Sightings) {
    var tbody = d3.select("tbody");
    Sightings.forEach((Record) => {
      var row = tbody.append("tr");
      Object.entries(Record).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  0
  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  
  console.log(tableData);
  tableDisplay(tableData);

  var button = d3.select("#filter-btn");
  
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
    
    if (dateInput.trim() === "" ) {
      var filteredData = tableData;
    } else {
      var filteredData = tableData.filter(Sighting => 
        Sighting.datetime === dateInput.trim());
    };
  
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
  
    console.log(filteredData);
    tableDisplay(filteredData);
  });