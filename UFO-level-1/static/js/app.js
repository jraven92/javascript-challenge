// from data.js
var tableData = data;

console.log(tableData);

// reference to table body
var tbody = d3.select("tbody");

//loop through 'data' and console.log

tableData.forEach(ufoSightings => {
    console.log(ufoSightings)
    // append one table tow 'tr' for each sighting
    var row = tbody.append('tr')

    //use 'Object.entries' to console.log each sighting
    Object.entries(ufoSightings).forEach(([ key, value ]) =>{
        console.log(key, value);
        //append cell to row
        var td = row.append('td');
        td.text(value);
    });

});
// select button
var button = d3.select("filter-btn");

button.on('click', () =>{
    // prevent page from refreshing
    d3.event.preventDefault();

    var input = d3.select('#datetime');
    var inputValue = input.property('value');
    console.log(inputValue);

    var filteredData = sighting.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);


    
    filteredData.forEach(selections =>{

        console.log(selections);

        var row = tbody.append('tr');

        Object.entries(selections).forEach(([key, value ]) =>{
            console.log(key, value);

            var cell = row.append('td');
            cell.text(value);
        });
    });
});


