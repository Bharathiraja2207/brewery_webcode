var url='https://api.openbrewerydb.org/breweries'
async function brewery(){
    try{var url_fetch=await fetch (url)
var result=  url_fetch.json()
var end_result=await result

for(let i of end_result){
   var name=i.name
   var type =i.brewery_type
   var state =i.state
   var city =i.city
   var pincode =i.postal_code
   var street =i.street
   var website_url =i.website_url
   var phone =i.phone

   var parrent=document.createElement('div')
   parrent.setAttribute('class','card row col-lg-6 col-sm-12')
   
   parrent.innerHTML=`
    <div class="child">
        <div class="head">
            <h3 ="search">${name}</h3>
            </div>
            <div class="body">
                <p class=""><b>Brewery type:</b>${type}</p>
                <p class=""><b>Address:</b>${street},${city},${pincode}</p>
                <p class=""><b>Phone:</b>${phone}</p>
                <a class="btn btn-outline-secondary " href="${ website_url}" target="newtag"><b>Website_url_link</b></a>
            </div>
        </div>

    `
    document.querySelector('body').append(parrent)
}

}
catch(e){
    console.log(e);
    console.log('null');

}
}
brewery()


function search_data() {
let input = document.getElementById('searchbar').value
input=input.toLowerCase();
let a = document.getElementsByClassName('child');
  
for (i = 0; i < a.length; i++) { 
    if (!a[i].innerHTML.toLowerCase().includes(input)) {
        a[i].style.display="none";
    }
    else {
        a[i].style.display="list-item";                 
    }
}
}