'use strict;'

const apiKey = 'ebf8wzTelsRC8L8vTGnyXgnmpWpxEloj8KbJfsMX';
const searchURL = 'api.nps.gov/api/v1/parks';

const states = 

function displayData() {
    //name, description, url
}

function getData() {

    const params = {
        key: apiKey,
        q: query,
        stateCode: states,
        limit: maxResults
    }
    displayData(params, );
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();

        const maxResults = $('#results').val();
        
        const searchInputs = $(':text');
        const states = searchInputs.map(function(input) {
            return this.value;
        })

        getData();
    })
}

$(watchForm);