document.getElementById("btn-submit").addEventListener("click", function(){
       console.log("click me")
       const emailField = document.getElementById("input-email");
       console.log(emailField)
       const email = emailField.value;
       console.log(email)

       const passwordField = document.getElementById("input-password")
       const password = passwordField.value;
       console.log(password)
        if(email === 'yeasinmiah1272001@gmail.com' && password === '1272001'){
            window.location.href = "bank.html"
       }
       else{
              alert('invalid user')
       }

}) 

