document.querySelector("#form").addEventListener("submit", addItem);
document.querySelector(".tr")
let data = []
//   var prod = JSON.parse(localStorage.getItem("shoppingItems")) || [];
const writeServer = (action, data) => ({
  method: action,
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
});


const getResponse = response => response.json();
const processJSON = json => {
  if(!!Object.keys(json).length) {
    // console.log(res.data)
    output = `
      <td class="item">${json.title}</td>
      <td class="item">${json.body}</td>

    `
  }
  
  tr.innerHTML = output;
}

  function addItem(event) {
    event.preventDefault();
    var id = document.querySelector("#name").value;
    var city = document.querySelector("#price").value;
    var country = document.querySelector("#select").value;
    var population = document.querySelector("#img").value;

    var prodObj = {
      id: id,
      country: country,
      city: city,
      population: population,
    };

    
    // localStorage.setItem("shoppingItems", JSON.stringify(prod));
    const url = 'https://soumya-server.herokuapp.com/data';

    
    
  fetch(url, writeServer('POST', prodObj))
    .then(getResponse)
    .then(processJSON);
    

  }


const tabledata = document.getElementById("addData");
async function  get_data(){
	try{ 

		let res = await fetch(`https://soumya-server.herokuapp.com/data`);
		let data = await res.json();
		console.log("data:",data)
		append_data(data)
    

	}
	catch(err){
		console.log("err:", err);
	}
}


function append_data(data){
console.log(data)
// document.querySelector("#addData").textContent = " ";

data.forEach(function (el){
let tablerow = document.createElement("tr");

let id = document.createElement("td");
id.innerText = el.id;

let Country= document.createElement("td");
Country.innerText = el.country;

let City = document.createElement("td");
City.innerText = el.city;

let Population = document.createElement("td");
Population.innerText = el.population;

let Edit = document.createElement("td");
Edit.innerText = "Edit";

let Delete = document.createElement("td");
Delete.innerText = "Delete";

tablerow.append(id, Country, City, Population, Edit, Delete);

tabledata.append(tablerow);


});
}

get_data()

// var url = "http://localhost:3000/data";

// var ans = apiCall(url)

// cosnole.log(ans)
// console.log(url)