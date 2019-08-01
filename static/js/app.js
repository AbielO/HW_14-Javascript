// from data.js
var ufodata = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

  var button = d3.select("#filter-btn");

  button.on("click", function() {
  
    tbody.html("");

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var newdata = ufodata.filter(row => row.datetime === inputValue);

  
    

    newdata.forEach(datevalues => {

      var daterow = tbody.append("tr");

      Object.entries(datevalues).forEach(([key,value]) => {
      
      daterow.append("td").text(value);

  });

  });
});

  