'use strict;'


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        
    })
}

$(watchForm);