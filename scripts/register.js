//===========================================REGISTER========================================================
const defaultValue = 1;
console.log("HEHEH");


var _email = document.getElementById("_email");
var _password = document.getElementById("_password");
var _confirmPassword = document.getElementById("_confirmPassword");
var _firstname = document.getElementById("_firstname");
var _middlename = document.getElementById("_middlename");
var _lastname = document.getElementById("_lastname");
var _studentNumber = "";
var _course;
var _courseCode = "";
var _subjects = [];
console.log("TRYY");

    var email = _email.value;
    var password = _password.value;
    var confirmPass = _confirmPassword.value;
    var firstname = _firstname.value;
    var middlename = _middlename.value;
    var lastname = _lastname.value;


function register(){
    
    email = _email.value;
    firstname = _firstname.value;
    middlename = _middlename.value;
    lastname = _lastname.value;
    password = _password.value;
    confirmPass = _confirmPassword.value;
    console.log(password);
    console.log(confirmPass);
    
    if(password === confirmPass){
        
    course = document.getElementById("course");
    var strUser = course.value;

    if(strUser == "BSIT"){
        courseCode = "BSIT"
        subjects = ["PED 0012", "EIT 0121.1", "PCM 0006", "IPP 0010", "CET 0121",
         "NSTP 02", "EIT 0122", "ICC 0103.1", "ICC 0103"]

    } else if(strUser == "BSCE"){
        courseCode = "BSCE"
        subjects = ["PED 0012", "EIT 0121.1", "PCM 0006", "IPP 0010", "CIV 0121.1",
    "CET 0122A", "CET 0121", "NSTP 02", "EIT 0122"]
    } 
    
    else {
        courseCode = "BSCS"
        subjects = ["PED 0012", "CET 0122A", "CET 0121", "NSTP 02",
     "CET 0121", "EIT 0122", "UTS 0003", "CIV 0121.1", "ICC 0103"]
    };

    if(email == "" || password == "" || firstname == "" || middlename == "" || lastname == "" || strUser == "none"){
        var tempV = document.getElementById("validate").innerHTML = "Fill Up whole input field";
    }
    else{
        enrollStudent();
    }

}
else{
    var tempV = document.getElementById("validate").innerHTML = "Password Does not Match";
}

}
function enrollStudent(){
        // Create an XMLHttpRequest object
        const xhttp = new XMLHttpRequest();

        // Define a callback function
        xhttp.onload = function() {
            var obj = JSON.parse(this.responseText);
           console.log(obj);

            if (obj.status_code == "SUCCESS"){
                studentNumber = obj.message.student_number;
                enrollCourse();
                tempV = document.getElementById("validate").innerHTML = "Register Successfully"
            }
            else{
                tempV = document.getElementById("validate").innerHTML = "Duplicate Email"
            }

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
}

function enrollCourse(){
      
    //Create an XMLHttpRequest object
       const xhttp = new XMLHttpRequest();

        // Define a callback function
        xhttp.onload = function() {
            var content = "";
            var obj = JSON.parse(this.responseText);
            console.log(obj);
            studentNumber = obj.message.student_number;

            if (obj.status_code == "SUCCESS"){
                window.location.href = "./SES.html";
                }
                else{
                    alert(
                        "FAILED");
                }
            
        }
            // Send a request with parameters
            xhttp.open("POST", "http://localhost:8000/enrollment/create", true);
            xhttp.setRequestHeader('Content-Type', 'application/json');
            var enrollparams = {
                student_number: studentNumber,
                course_code: courseCode,
                subjects: subjects
            };
            xhttp.send(JSON.stringify(enrollparams));
}


