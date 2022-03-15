// script.js

// get songs as json object from external file
object = {};
window.onload = fetch("songs.json")
                    .then(response => response.json())
                    .then(json => {
                        object = json;
                        displayString();
                        displayTable();
                    })
                    .catch(error => console.log(error));

// display data in raw json string
function displayString() {
    $("#raw-songs").html(JSON.stringify(object));
}

// display data in user friendly table
function displayTable() {
    for (i = 0; i < object.songs.length; i++) {
        $("#songs-table").append(
            '<tr>' +
                '<td>' + 
                    object.songs[i].title + 
                '</td><td>' + 
                    object.songs[i].artists.join(', ') + 
                '</td><td>' + 
                    object.songs[i].genres.join(', ') + 
                '</td><td>' + 
                    object.songs[i].year_released + 
                '</td>' +
            '</tr>'
        );
    }
}

// filter form
function filter() {
    table = $("#filter-table");
    table.empty();
    table.append(
        '<tr>' +
            '<th>Title</th>' +
            '<th>Artist</th>' +
            '<th>Genre</th>' +
            '<th>Year Released</th>' +
        '</tr>'
    );
    genre = $("#select-genre").val();
    for (i = 0; i < object.songs.length; i++) {
        if (object.songs[i].genres.includes(genre)) {
            table.append(
                '<tr>' +
                    '<td>' + 
                        object.songs[i].title + 
                    '</td><td>' + 
                        object.songs[i].artists.join(', ') + 
                    '</td><td>' + 
                        object.songs[i].genres.join(', ') + 
                    '</td><td>' + 
                        object.songs[i].year_released + 
                    '</td>' +
                '</tr>'
            );
        }
    }
}