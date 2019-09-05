function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/api/helloclient', { //1
        method: 'GET', 
        headers: new Headers({ //2
          'Content-Type': 'application/json'
        })
    })
        .then(function (response) {
            console.log("Fetch response:", response)
            return response.text(); //3
        })
        .then(function (text) {
            console.log(text);
        });
}


function postToOneArrow(){
    var url = 'http://localhost/test/one'

    fetch(url, {
        method: 'POST'
        headers: new Headers({
            'Content-Type': 'application/json'
        })

    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success', response));
}

