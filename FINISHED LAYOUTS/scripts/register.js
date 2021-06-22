const defaultValue = 1;
console.log("HEHEH");

    var email = document.getElementById("_email").value;
    var password = document.getElementById("_password").value;
    var firstname = document.getElementById("_firstname").value;
    var middlename = document.getElementById("_middlename").value;
    var lastname = document.getElementById("_lastname").value;
    var studentNumber = "";

    
    function getButton(){
        const xhttp = new XMLHttpRequest();
    
        xhttp.onload = function() {
            var content = "";
            var obj = JSON.parse(this.responseText);
            console.log(obj);
            

            document.getElementById("he").innerHTML= obj.message.last_name;
            
        }
    
        // Send a request
        xhttp.open("GET", "http://localhost:8000/user/2021-00001", true);
        xhttp.send();
    }

// function validateForms(){
//     if(email == "" && password == "" && firstname == "" && middlename == "" && lastname == ""){
//         alert("Name must be filled out");
//     }
//     else{
//         enrollStudent();
//     }
//   }
    

    function enrollStudent(){
   
    // var course = document.getElementById("course");
    // var strUser = course.value;
    //     console.log(strUser);
       
    //     var studentNumber = "";
    //     var courseCode = "";
    //     var subjects = [];

    // if(strUser == "BSIT"){
        
    //     courseCode = "BSIT"
    //     subjects = ["PED 0012", "EIT 0121.1", "PCM 0006", "IPP 0010", "CET 0121",
    //      "NSTP 02", "EIT 0122", "ICC 0103.1", "ICC 0103"]

    // } else if(strUser == "BSCE"){
    //     courseCode = "BSCE"
    //     subjects = ["PED 0012", "EIT 0121.1", "PCM 0006", "IPP 0010", "CIV 0121.1",
    // "CET 0122A", "CET 0121", "NSTP 02", "EIT 0122"]
    // } 
    
    // else {
    //     courseCode = "BSCS"
    //     subjects = ["PED 0012", "EIT 0121.1", "PCM 0006", "IPP 0010",
    //  "CET 0121", "NSTP 02", "EIT 0122", "ICC 0103.1", "ICC 0103"]
    // };
      
       
    
    //  Create an XMLHttpRequest object
       const xhttp = new XMLHttpRequest();

       console.log(password);

        // Define a callback function
        xhttp.onload = function() {
            var content = "";
            var obj = JSON.parse(this.responseText);
            console.log(obj);

            if (obj.status_code == "SUCCESS"){
                // window.location = "../Webpage/mainpage.html";
                console.log("Success");
                }
                else{
                    console.log("failed");
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
          

            // xhttp.open("GET", "http://localhost:8000/user/2021-00001", true);
            // xhttp.send();
            
           
            // xhttp.open("POST", "http://localhost:8000/enrollment/create", true);
            // xhttp.setRequestHeader('Content-Type', 'application/json');
            // var enrollParams = {
            //     student_number: obj.message.student_number //error-part,
            //     course_code: courseCode,
            //     subjects: subjects
            // };
            // xhttp.send(JSON.stringify(enrollParams));
            
        
           // window.location = "../Webpage/mainpage.html";

            
 }