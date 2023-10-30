const input = document.getElementById("input");
const List = document.getElementById("List-container");
function addItem(){
    if(input.value === ''){
        alert("You must add the task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    input.value='';
    storeData();
}
List.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("Checked");
        storeData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        storeData();
    }
},false)

function storeData(){
    localStorage.setItem("Data", List.innerHTML);
}
function showItem(){
    List.innerHTML = localStorage.getItem("Data");
}
showItem();