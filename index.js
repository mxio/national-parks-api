'use strict;'

const apiKey = 'ebf8wzTelsRC8L8vTGnyXgnmpWpxEloj8KbJfsMX';
const searchURL = 'https://developer.nps.gov/api/v1/parks';

function displayData(responseJson) {
    //name, description, url
    console.log(responseJson);

    $('ul').empty();

    for (let i = 0; i < responseJson.data.length; i++) {
        $('ul').append(
            `<li>
                <h2>${responseJson.data[i].name}</h2>
                <p>${responseJson.data[i].description}</p>
                <p><a href="${responseJson.data[i].url}">${responseJson.data[i].url}<a></p>
            </li>`
        )   
    }
}

function formatApiString(params) {
    const apiKeyString = `api_key=${params.api_key}`;

    return apiKeyString;
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
        api_key: apiKey,
        stateCode: states,
        limit: maxResults
    };

    const apiString = formatApiString(params);
    const stateString = formatStatesCode(params);
    const limitString = formatLimitString(params);
    const url = searchURL + "?" + apiString + "&" + stateString + "&" + limitString;
    console.log(url);

    fetch(url)
        .then(response => {
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