document.getElementById("btn-post").addEventListener("click", function(){
       // const btnPost = document.getElementById("btn-post")
       const inputFiled = document.getElementById("input-filed")
       const inputValue = inputFiled.value
       // console.log(inputValue)
       const container = document.getElementById("main-container")
       const p = document.createElement("p")
       p.innerText = inputValue;
       container.appendChild(p)
       inputFiled.value = "";

})