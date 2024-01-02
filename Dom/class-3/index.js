document.getElementById("btn").addEventListener("click", function(){
       
       const inputField = document.getElementById("input-filed");
       const inputValue = inputField.value;
       const container = document.getElementById("container")
       const p = document.createElement("p")
       p.innerText = inputValue;
       container.appendChild(p);
       inputField.value = "";

})