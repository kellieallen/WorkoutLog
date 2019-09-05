const baseURL = 'https://api.edamam.com/search'; 
const key = '93eb97b8429e0806278af7371eba02fe';
const appId = 'c755e98e';
let url; 


//SEARCH FORM
const searchTerm = document.querySelector('.search'); 
const searchForm = document.querySelector('form'); 
const submitBtn = document.querySelector('.submit'); 


//RESULTS SECTION
const section = document.querySelector('section');  


//EventListener
searchForm.addEventListener('submit', fetchResults); 

//searchForm

function fetchResults(e) {  // sets up a new function to get results from the API when an event happens
   e.preventDefault(); // prevents page refresh
// url = 'https://api.edamam.com/search?q=potato&app_id=$c755e98e&app_key=$93eb97b8429e0806278af7371eba02fe'

   url = baseURL + '?q=' + searchTerm.value + '&app_id=' + appId + '&app_key=' + key



   fetch(url) // initializes request to get URL for our specific search 
   .then(function(result) { // a sync action to return  our search request from server
   console.log(result) // display search results within console only
   return result.json(); // turns API result into json format
 })
 
 .then(function(json) { // async action to return     `our json data
   displayResults(json); // display jsonified search results in browser
 }); // FYI then means do this step next
}


function displayResults(json) { // creates new fucntion to display results
 while (section.firstChild) { // if there is more than one search performed
   section.removeChild(section.firstChild); // remove previous search results
 }



        let imgresult1 = json.hits[5].recipe.image;
        let imgresult2 = json.hits[1].recipe.image;
            
        document.getElementById("imageOne").src = imgresult1;
        document.getElementById("imageTwo").src = imgresult2;
    
        let recipetitle1 = json.hits[5].recipe.label;
        let recipetitle2 = json.hits[1].recipe.label;
    
        document.getElementById("labelOne").innerText = recipetitle1;
        document.getElementById("labelTwo").innerText = recipetitle2;
    

       
     }
