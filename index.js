'use strict;'

const apiKey = 'ebf8wzTelsRC8L8vTGnyXgnmpWpxEloj8KbJfsMX';
const searchURL = 'api.nps.gov/api/v1/parks'

function displayData() {

}

function getData() {

    displayData();
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getData();
    })
}

$(watchForm);