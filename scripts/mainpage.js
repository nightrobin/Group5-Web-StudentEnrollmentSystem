
// function getButton(){

        
//     const xhttp = new XMLHttpRequest();

//     xhttp.onload = function() {
//         var content = "";
//         var obj = JSON.parse(this.responseText);
//         console.log(obj);
//     }

//     // Send a request
//     xhttp.open("GET", "http://localhost:8000/user/2021-00001", true);
//     xhttp.send();
// }

//  function postButton(){
//     // var control_number = document.getElementById("control_number").value;
//     // console.log(control_number);

//     // Create an XMLHttpRequest object
//     const xhttp = new XMLHttpRequest();

//     // Define a callback function
//     xhttp.onload = function() {
//         var content = "";
//         var obj = JSON.parse(this.responseText);
//        console.log(obj);

//         if (obj.status_code == "SUCCESS"){
//             console.log("success")
//         }
//         else{
//             console.log("no")
//         }

//         document.getElementById("content-div").innerHTML = content;
    
//     }
//     // Send a request with parameters
//     xhttp.open("POST", "http://localhost:8000/user/create", true);
//     xhttp.setRequestHeader('Content-Type', 'application/json');
//     var params = {
//         email: "hehe@gmail.com",
//         password: "1234",
//         first_name: "juan",
//         middle_name: "A",
//         last_name: "dela cruz",
//         is_student: 1,
//         year_level: 1
//     };
//     xhttp.send(JSON.stringify(params));
// }


