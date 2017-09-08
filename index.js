/** Data you will be inserted into html **/
var data = [
    //item 1
    {
        "name":  "CARNITAS",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$4.99"
    },
    //item 2
    {
        "name": "CHICKEN MOLE VERDE",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
    //item 3
    {
        "name": "ENCHILLADAS",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
    //item 4
    {
        "name": "GREEN SAUCE",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
    //item 5
    {
        "name":  "CARNITAS",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$4.99"
    },
    //item 6
    {
        "name": "CHICKEN MOLE VERDE",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
    //item 7
    {
        "name": "ENCHILLADAS",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
    //item 8
    {
        "name": "GREEN SAUCE",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
]

for(i=0; i<data.length; i++){

    var dataRow = $('#menuContainer');
    var dataCol = $('<div></div>');
    var dataTitleDiv = $('<div></div>');
    var dataTitleH4 = $('<h4></h4>');
    var dataDescriptionDiv = $('<div></div>');
    var dataDescriptionP = $('<p></p>');
    var dataPriceP = $('<p></p>');
    var dataName = data[i].name;
    var dataDescription = data[i].description;
    var dataPrice = data[i].price;

    (dataCol).addClass('col-md-3');
    (dataTitleDiv).addClass('title-container');
    (dataTitleH4).addClass('menu-item-name');
    (dataDescriptionDiv).addClass('description-container');
    (dataDescriptionP).addClass('description');
    (dataPriceP).addClass('price');

    (dataTitleH4).append(dataName);
    (dataRow).append(dataTitleH4);
    (dataDescriptionP).append(dataDescription);
    (dataDescriptionDiv).append(dataDescriptionP);
    (dataPriceP).append(dataPrice);
    (dataTitleDiv).append(dataPriceP);
    (dataCol).append(dataTitleH4);
    (dataDescriptionDiv).append(dataDescriptionP);
    (dataDescriptionDiv).append(dataPriceP);
    (dataCol).append(dataDescriptionDiv);
    (dataRow).append(dataCol);
}
