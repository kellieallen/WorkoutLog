const baseURL = 'https://api.edamam.com/search'; 
const key = '93eb97b8429e0806278af7371eba02fe';
const appId = 'c755e98e';

const searchTerm = document.querySelector('.search'); 
const searchForm = document.querySelector('form'); 
const submitBtn = document.querySelector('.submit'); 
let url;



function fetchResults(e) {  

    e.preventDefault(); 
  let url = baseURL + '?q=' + SearchTerm + '&app_id=' + appId + '&app_key=' + key;


SearchForm.addEventListener('submit', fetchResults); 



fetch(url) 
.then(function(result) {
    return result.json(); 
     })
     
     .then(function(json) {
       console.log(json)
     displayRecipe(json); 
      });
 
    }




   

    function displayResults(json) { 
       
  



    let imgresult1 = json.hits[0].recipe.image;
    let imgresult2 = json.hits[1].recipe.image;
        
    document.getElementById("imageOne").src = imgresult1;
    document.getElementById("imageTwo").src = imgresult2;

    let recipetitle1 = json.hits[0].recipe.label;
    let recipetitle2 = json.hits[1].recipe.label;

    document.getElementById("labelOne").innerText = recipetitle1;
    document.getElementById("labelTwo").innerText = recipetitle2;
          
          
    
        }

    