'use strict;'

const apiKey = 'ebf8wzTelsRC8L8vTGnyXgnmpWpxEloj8KbJfsMX';
const searchURL = 'https://developer.nps.gov/api/v1/parks';

function displayData() {
    //name, description, url
    console.log(responseJson);
}

function formatLimitString(params) {
    const inputLimitString = `limit=${params.limit}`;
    
    return inputLimitString;
    
}

function formatStatesCode(params) {
    const stateItems = Object.keys(params.stateCode)
    .map(function(key) {
        return `stateCode=${encodeURIComponent(params.stateCode[key])}`;
    })
    return stateItems.join('&');
}

function getData(states, maxResults) {

    const params = {
        stateCode: states,
        limit: maxResults
    };

    const options = {
        headers: new Headers({
            "X-Api-Key": apiKey})
    };

    const stateString = formatStatesCode(params);
    const limitString = formatLimitString(params);
    const url = searchURL + "?" + apiKey + stateString + "&" + limitString;
    console.log(url);

    fetch(url, options)
        .then( response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayData(responseJson))
        .catch(error => alert(error.message));
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();

        const maxResults = $('#results').val();
        const searchInputs = $(':text');
        const states = searchInputs.map(function(input) {
            if (this.value) {
                return this.value;
            }
        }).toArray();

        getData(states, maxResults);
    })
}

$(watchForm);