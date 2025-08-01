const formUserDOM = document.querySelector("#formUser")
formUserDOM.addEventListener("submit", submitFunktion)

const userUlDOM = document.querySelector("#userUl")
const userNameDOM = document.querySelector("#userName")
const lastNameDOM = document.querySelector("#lastName")
const ulDOM = document.querySelector("#userUl")
const alertDOM = document.querySelector("#alert")

const ALERT = ` 
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Keine Information eingegeben wurde!</strong> Geben sie bitte in die Schachtel korrekte Infos !
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


function submitFunktion(event) {
    event.preventDefault()
    test(userNameDOM.value,lastNameDOM.value)
    userNameDOM.value = ""
    lastNameDOM.value = ""


}

function test(username, lastname) {
    if (username === "" && lastname === "") {
       alertDOM.innerHTML = ALERT
    }
     else if(username && lastname) {
        // const USER_INFO = `${userNameDOM.value} ${lastNameDOM.value} `
        // const liDOM = document.createElement("li")
        // liDOM.classList.add("list-group-item")
        // liDOM.innerHTML = USER_INFO
        // ulDOM.appendChild(liDOM)
      fetch("personalData.json")
      .then(response=>response.json())
      .then(data=>{console.log(data.name)})
      .catch(error=>{console.log("Veri alinirken hata olustu", error)})
    


      

      
    
    }
    
  }
