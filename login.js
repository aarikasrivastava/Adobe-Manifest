function validate () {
    username = document.getElementById('loginUser').value;
    password = document .getElementById('loginPassword').value;
    if (username=='admin' &&  password == 'admin123') 
    {
        
        window.location='\index.html'
        
    }
else 
alert ("Password Incorrect");
return;
}