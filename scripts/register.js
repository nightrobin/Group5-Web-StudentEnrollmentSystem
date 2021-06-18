const defaultValue = 1;
console.log("HEHEH");

    var email = document.getElementById("_email").value;
    var password = document.getElementById("_password").value;
    var firstname = document.getElementById("_firstname").value;
    var middlename = document.getElementById("_middlename").value;
    var lastname = document.getElementById("_lastname").value;

function selectCourse(){
    
}


    function getButton(){
        const xhttp = new XMLHttpRequest();
    
        xhttp.onload = function() {
            var content = "";
            var obj = JSON.parse(this.responseText);
            console.log(obj.message.first_name);
            document.getElementById("he").innerHTML= obj.message.first_name;
        }
    
        // Send a request
        xhttp.open("GET", "http://localhost:8000/user/2021-00001", true);
        xhttp.send();
    }

function validateForms(){
    if(email == "" && password == "" && firstname == "" && middlename == "" && lastname == ""){
        alert("Name must be filled out");
    }
    else{
        enrollStudent();
    }
  }

function enrollStudent(){
    
        // Create an XMLHttpRequest object
        const xhttp = new XMLHttpRequest();

        // Define a callback function
        xhttp.onload = function() {
            var content = "";
            var obj = JSON.parse(this.responseText);
            console.log(obj);
   
            if (obj.status_code == "SUCCESS"){
                    
                }
                else{
    
                }
    
                document.getElementById("content-div").innerHTML = content;
            
            }

            
    
            // Send a request with parameters
            xhttp.open("POST", "http://localhost:8000/user/create", true);
            xhttp.setRequestHeader('Content-Type', 'application/json');
            var params = {
                email: email,
                password: password,
                first_name: firstname,
                middle_name: middlename,
                last_name: lastname,
                is_student: defaultValue,
                year_level: defaultValue
            };
            xhttp.send(JSON.stringify(params));

            

            xhttp.open("POST", "http://localhost:8000/enrollment/create", true);
            xhttp.setRequestHeader('Content-Type', 'application/json');
            var enrollParams = {
                email: email,
                password: password,
                first_name: firstname,
                middle_name: middlename,
                last_name: lastname,
                is_student: defaultValue,
                year_level: defaultValue
            };
            xhttp.send(JSON.stringify(enrollParams));

            window.location = "../Webpage/mainpage.html";
}


