
//=====================Login==========================

var studentnumber = "";
var controlnumber = "";
var firstname = "";
var middlename = "";
var lastname = "";
var email = "";
var course = "";
var yearlevel = "1";
var enrollmentStatus = "Regular";
var studentType = "";
var type = "";


function tryLogin(){
    var password = document.getElementById("_password");
    var pass = password.value;
    var _email = document.getElementById("_email").value;

    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function() {
        var content = "";
        var obj = JSON.parse(this.responseText);
       console.log(obj);

        if (obj.status_code == "SUCCESS"){
            firstname = obj.message.first_name;
            middlename = obj.message.middle_name;
            lastname = obj.message.last_name;
            studentnumber = obj.message.student_number;
            yearlevel = obj.message.year_level;
            email = obj.message.email;
            getCourseInfoLogin();
        }
        else{
            alert("Incorrect Password");
        }
    
    }
    // Send a request with parameters
    xhttp.open("POST", "http://localhost:8000/user/login", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    var login = {
        email: _email,
        password: pass
    };
    xhttp.send(JSON.stringify(login));
    }

    function getCourseInfoLogin(){
        
        const xhttp = new XMLHttpRequest();

        // Define a callback function
        xhttp.onload = function() {
        var content = "";
        var obj = JSON.parse(this.responseText);
        console.log(obj);

        if (obj.status_code == "SUCCESS"){
            controlnumber = obj.message.control_number;
            course = obj.message.course_code;
            studentType = obj.message.student_type;
            type = obj.message.type;
            $.viewMainPage();
        }
    
    }
        // Send a request with parameters
        xhttp.open("GET", "http://localhost:8000/enrollment/find/"+studentnumber, true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.send();
}

//=============================VIEW STUDENT INFORMATION============================
function StudentInformation(){

    let m = middlename;
    console.log(m);
    console.log(controlnumber);
    console.log(email);
    
    var fName = document.getElementById("getFirstName").innerHTML = firstname;//
    var MName = document.getElementById("getMiddleName").innerHTML = middlename;//
    var lName = document.getElementById("getLastName").innerHTML = lastname;//
    var mail = document.getElementById("getEmail").innerHTML = email;//
    var sNum = document.getElementById("getStudentNum").innerHTML = studentnumber;//
    var CNumber = document.getElementById("getControlNum").innerHTML = controlnumber;//
    var _course = document.getElementById("getCourse").innerHTML = course;//
    var yLevel = document.getElementById("getYearLevel").innerHTML = yearlevel;//
    var EStatus = document.getElementById("getEnrollmentStatus").innerHTML = enrollmentStatus;//
}


//========================================SCHEDULE=============++++++

function viewSchedule(){
    console.log(course);

if(course == "BSCE"){
    //"PED 0012"
    var r1code = document.getElementById(   "r1code").innerHTML = "PED 0012";
    var r1tilte = document.getElementById(  "r1title").innerHTML = "Group Exercise";
    var r1unit = document.getElementById(   "r1unit").innerHTML = "2";
    var r1time = document.getElementById(   "r1time").innerHTML = "4:00 - 6:40 pm";
    var r1day = document.getElementById(    "r1day").innerHTML = "W";
    var r1room = document.getElementById(   "r1room").innerHTML = "FIELD";
    
    //EIT 0121.1",
    var r2code = document.getElementById(   "r2code").innerHTML = "EIT 0121.1";
    var r2tilte = document.getElementById(  "r2title").innerHTML = "Computer Fundamentals and Programming 1";
    var r2unit = document.getElementById(   "r2unit").innerHTML = "1";
    var r2time = document.getElementById(   "r2time").innerHTML = "11:00 - 1:00pm";
    var r2day = document.getElementById(    "r2day").innerHTML = "W";
    var r2room = document.getElementById(   "r2room").innerHTML = "FIELD";

    //"PCM 0006",
    var r3code = document.getElementById(   "r3code").innerHTML = "PCM 0006";
    var r3tilte = document.getElementById(  "r3title").innerHTML = "Purposive Communication";
    var r3unit = document.getElementById(   "r3unit").innerHTML = "3";
    var r3time = document.getElementById(   "r3time").innerHTML = "1:00 - 3:00pm";
    var r3day = document.getElementById(    "r3day").innerHTML = "Th";
    var r3room = document.getElementById(   "r3room").innerHTML = "FIELD";

    //"IPP 0010",
    var r4code = document.getElementById(   "r4code").innerHTML = "IPP 0010";
    var r4tilte = document.getElementById(  "r4title").innerHTML = "Interdisiplinaryong Pagbasta at Pagsulat";
    var r4unit = document.getElementById(   "r4unit").innerHTML = "3";
    var r4time = document.getElementById(   "r4time").innerHTML = "1:00 - 3:00pm";
    var r4day = document.getElementById(    "r4day").innerHTML = "F";
    var r4room = document.getElementById(   "r4room").innerHTML = "FIELD";

    // "CET 0121"
    var r5code = document.getElementById(   "r5code").innerHTML = "CET 0121";
    var r5tilte = document.getElementById(  "r5title").innerHTML = "Calculus 2";
    var r5unit = document.getElementById(   "r5unit").innerHTML = "3";
    var r5time = document.getElementById(   "r5time").innerHTML = "1:00pm - 3:00pm";
    var r5day = document.getElementById(    "r5day").innerHTML = "S";
    var r5room = document.getElementById(   "r5room").innerHTML = "FIELD";

    //NSTP 02
    var r6code = document.getElementById(   "r6code").innerHTML = "NSTP 02";
    var r6tilte = document.getElementById(  "r6title").innerHTML = "National Service Traning Program 2";
    var r6unit = document.getElementById(   "r6unit").innerHTML = "3";
    var r6time = document.getElementById(   "r6time").innerHTML = "7:00 - 9:00am";
    var r6day = document.getElementById(    "r6day").innerHTML = "Su";
    var r6room = document.getElementById(   "r6room").innerHTML = "FIELD";

    //"EIT 0122"
    var r7code = document.getElementById(   "r7code").innerHTML = "EIT 0122";
    var r7tilte = document.getElementById(  "r7title").innerHTML = "Discrete Mathematics";
    var r7unit = document.getElementById(   "r7unit").innerHTML = "3";
    var r7time = document.getElementById(   "r7time").innerHTML = "1:00 - 3:30pm";
    var r7day = document.getElementById(    "r7day").innerHTML = "M";
    var r7room = document.getElementById(   "r7room").innerHTML = "FIELD";

    //ICC 0103.1",
    var r8code = document.getElementById(   "r8code").innerHTML = "ICC 0103.1";
    var r8tilte = document.getElementById(  "r8title").innerHTML = "Intermediate Programming LAB";
    var r8unit = document.getElementById(   "r8unit").innerHTML = "1";
    var r8time = document.getElementById(   "r8time").innerHTML = "9:00 - 11:00 am";
    var r8day = document.getElementById(    "r8day").innerHTML = "T";
    var r8room = document.getElementById(   "r8room").innerHTML = "FIELD";

    //"ICC 0103"
    var r9code = document.getElementById(   "r9code").innerHTML = "ICC 0103";
    var r9tilte = document.getElementById(  "r9title").innerHTML = "Intermediate Programming LEC";
    var r9unit = document.getElementById(   "r9unit").innerHTML = "2";
    var r9time = document.getElementById(   "r9time").innerHTML = "9:00 - 11:00 am";
    var r9day = document.getElementById(    "r9day").innerHTML = "M";
    var r9room = document.getElementById(   "r9room").innerHTML = "FIELD";
}

else if(course == "BSIT"){
    //"PED 0012",
    var r1code = document.getElementById(   "r1code").innerHTML = "PED 0012";
    var r1tilte = document.getElementById(  "r1title").innerHTML = "Group Exercise";
    var r1unit = document.getElementById(   "r1unit").innerHTML = "2";
    var r1time = document.getElementById(   "r1time").innerHTML = "4:00 - 6:40 pm";
    var r1day = document.getElementById(    "r1day").innerHTML = "W";
    var r1room = document.getElementById(   "r1room").innerHTML = "FIELD";

    //"EIT 0121.1", 
    var r2code = document.getElementById(   "r2code").innerHTML = "EIT 0121.1";
    var r2tilte = document.getElementById(  "r2title").innerHTML = "Computer Fundamentals and Programming 1";
    var r2unit = document.getElementById(   "r2unit").innerHTML = "1";
    var r2time = document.getElementById(   "r2time").innerHTML = "11:00 - 1:00pm";
    var r2day = document.getElementById(    "r2day").innerHTML = "W";
    var r2room = document.getElementById(   "r2room").innerHTML = "FIELD";

    //"PCM 0006",
    var r3code = document.getElementById(   "r3code").innerHTML = "PCM 0006";
    var r3tilte = document.getElementById(  "r3title").innerHTML = "Purposive Communication";
    var r3unit = document.getElementById(   "r3unit").innerHTML = "3";
    var r3time = document.getElementById(   "r3time").innerHTML = "1:00 - 3:00pm";
    var r3day = document.getElementById(    "r3day").innerHTML = "Th";
    var r3room = document.getElementById(   "r3room").innerHTML = "FIELD";

    //"IPP 0010",
    var r4code = document.getElementById(   "r4code").innerHTML = "IPP 0010";
    var r4tilte = document.getElementById(  "r4title").innerHTML = "Interdisiplinaryong Pagbasta at Pagsulat";
    var r4unit = document.getElementById(   "r4unit").innerHTML = "3";
    var r4time = document.getElementById(   "r4time").innerHTML = "1:00 - 3:00pm";
    var r4day = document.getElementById(    "r4day").innerHTML = "F";
    var r4room = document.getElementById(   "r4room").innerHTML = "FIELD";

    //"CIV 0121.1",
    var r5code = document.getElementById(   "r5code").innerHTML = "CIV 0121.1";
    var r5tilte = document.getElementById(  "r5title").innerHTML = "Engineering Drawing and Plans";
    var r5unit = document.getElementById(   "r5unit").innerHTML = "1";
    var r5time = document.getElementById(   "r5time").innerHTML = "7:00 - 9:00pm";
    var r5day = document.getElementById(    "r5day").innerHTML = "F";
    var r5room = document.getElementById(   "r5room").innerHTML = "FIELD";

    //"CET 0122A", 
    var r6code = document.getElementById(   "r6code").innerHTML = "CET 0122A";
    var r6tilte = document.getElementById(  "r6title").innerHTML = "Physics for Engineers (lec)";
    var r6unit = document.getElementById(   "r6unit").innerHTML = "4";
    var r6time = document.getElementById(   "r6time").innerHTML = "7:00 - 9:40am";
    var r6day = document.getElementById(    "r6day").innerHTML = "T";
    var r6room = document.getElementById(   "r6room").innerHTML = "FIELD";

    //"CET 0121", "
    var r7code = document.getElementById(   "r7code").innerHTML = "CET 0121";
    var r7tilte = document.getElementById(  "r7title").innerHTML = "Calculus 2";
    var r7unit = document.getElementById(   "r7unit").innerHTML = "3";
    var r7time = document.getElementById(   "r7time").innerHTML = "1:00pm - 3:00pm";
    var r7day = document.getElementById(    "r7day").innerHTML = "S";
    var r7room = document.getElementById(   "r7room").innerHTML = "FIELD";

    //NSTP 02", 
    var r8code = document.getElementById(   "r8code").innerHTML = "NSTP 02";
    var r8tilte = document.getElementById(  "r8title").innerHTML = "National Service Traning Program 2";
    var r8unit = document.getElementById(   "r8unit").innerHTML = "3";
    var r8time = document.getElementById(   "r8time").innerHTML = "7:00 - 9:00am";
    var r8day = document.getElementById(    "r8day").innerHTML = "Su";
    var r8room = document.getElementById(   "r8room").innerHTML = "FIELD";

    //"EIT 0122"
    var r9code = document.getElementById(   "r9code").innerHTML = "EIT 0122";
    var r9tilte = document.getElementById(  "r9title").innerHTML = "Discrete Mathematics";
    var r9unit = document.getElementById(   "r9unit").innerHTML = "3";
    var r9time = document.getElementById(   "r9time").innerHTML = "1:00 - 3:30pm";
    var r9day = document.getElementById(    "r9day").innerHTML = "M";
    var r9room = document.getElementById(   "r9room").innerHTML = "FIELD";
}
else{
    //"PED 0012"
    var r1code = document.getElementById(   "r1code").innerHTML = "PED 0012";
    var r1tilte = document.getElementById(  "r1title").innerHTML = "Group Exercise";
    var r1unit = document.getElementById(   "r1unit").innerHTML = "2";
    var r1time = document.getElementById(   "r1time").innerHTML = "4:00 - 6:40 pm";
    var r1day = document.getElementById(    "r1day").innerHTML = "W";
    var r1room = document.getElementById(   "r1room").innerHTML = "FIELD";

    //"CET 0122A", 
    var r2code = document.getElementById(   "r2code").innerHTML = "CET 0122A";
    var r2tilte = document.getElementById(  "r2title").innerHTML = "Physics for Engineers (lec)";
    var r2unit = document.getElementById(   "r2unit").innerHTML = "4";
    var r2time = document.getElementById(   "r2time").innerHTML = "7:00 - 9:40am";
    var r2day = document.getElementById(    "r2day").innerHTML = "T";
    var r2room = document.getElementById(   "r2room").innerHTML = "FIELD";

    //"CET 0121", 
    var r3code = document.getElementById(   "r3code").innerHTML = "CET 0121";
    var r3tilte = document.getElementById(  "r3title").innerHTML = "Calculus 2";
    var r3unit = document.getElementById(   "r3unit").innerHTML = "3";
    var r3time = document.getElementById(   "r3time").innerHTML = "1:00pm - 3:00pm";
    var r3day = document.getElementById(    "r3day").innerHTML = "S";
    var r3room = document.getElementById(   "r3room").innerHTML = "FIELD";

    //"NSTP 02",
    var r4code = document.getElementById(   "r4code").innerHTML = "NSTP 02";
    var r4tilte = document.getElementById(  "r4title").innerHTML = "National Service Traning Program 2";
    var r4unit = document.getElementById(   "r4unit").innerHTML = "3";
    var r4time = document.getElementById(   "r4time").innerHTML = "7:00 - 9:00am";
    var r4day = document.getElementById(    "r4day").innerHTML = "Su";
    var r4room = document.getElementById(   "r4room").innerHTML = "FIELD";

     //"CIV 0121.1", 
     var r5code = document.getElementById(   "r5code").innerHTML = "CIV 0121.1";
     var r5tilte = document.getElementById(  "r5title").innerHTML = "Engineering Drawing and Plans";
     var r5unit = document.getElementById(   "r5unit").innerHTML = "1";
     var r5time = document.getElementById(   "r5time").innerHTML = "7:00 - 9:00pm";
     var r5day = document.getElementById(    "r5day").innerHTML = "F";
     var r5room = document.getElementById(   "r5room").innerHTML = "FIELD";

    //"EIT 0122",

    var r6code = document.getElementById(   "r6code").innerHTML = "EIT 0122";
    var r6tilte = document.getElementById(  "r6title").innerHTML = "Discrete Mathematics";
    var r6unit = document.getElementById(   "r6unit").innerHTML = "3";
    var r6time = document.getElementById(   "r6time").innerHTML = "1:00 - 3:30pm";
    var r6day = document.getElementById(    "r6day").innerHTML = "M";
    var r6room = document.getElementById(   "r6room").innerHTML = "FIELD";

    //UTS 0003", 
    var r7code = document.getElementById(   "r7code").innerHTML = "UTS 0003";
    var r7tilte = document.getElementById(  "r7title").innerHTML = "Understanding the Self";
    var r7unit = document.getElementById(   "r7unit").innerHTML = "3";
    var r7time = document.getElementById(   "r7time").innerHTML = "3:00 - 5:00pm";
    var r7day = document.getElementById(    "r7day").innerHTML = "F";
    var r7room = document.getElementById(   "r7room").innerHTML = "FIELD";

   //TCW 0005, 
    var r8code = document.getElementById(   "r8code").innerHTML = "TCW 0005";
    var r8tilte = document.getElementById(  "r8title").innerHTML = "The Contemporary World";
    var r8unit = document.getElementById(   "r8unit").innerHTML = "3";
    var r8time = document.getElementById(   "r8time").innerHTML = "11:00 - 1:00pm";
    var r8room = document.getElementById(   "r8room").innerHTML = "FIELD";

    //EIT 0121.1
    var r9code = document.getElementById(   "r9code").innerHTML = "EIT 0121.1";
    var r9tilte = document.getElementById(  "r9title").innerHTML = "Computer Fundamentals and Programming 1";
    var r9unit = document.getElementById(   "r9unit").innerHTML = "1";
    var r9time = document.getElementById(   "r9time").innerHTML = "3:00 - 5:00pm";
    var r9day = document.getElementById(    "r9day").innerHTML = "M";
    var r9room = document.getElementById(   "r9room").innerHTML = "FIELD";
    }
}

function SERInformation(){
    console.log(controlnumber);
    console.log(email);
    var studentName = firstname+" "+middlename+" "+lastname;
    var sNum = document.getElementById("sgetStudentNum").innerHTML = studentnumber;//
    var fName = document.getElementById("sgetStudentName").innerHTML = studentName;//
    var _course = document.getElementById("sgetCourse").innerHTML = course;//
    var CNumber = document.getElementById("sgetControlNum").innerHTML = controlnumber;//

    SviewSchedule();
}

function SviewSchedule(){
    console.log(course);

if(course == "BSCE"){
    //"PED 0012"
    var r1code = document.getElementById(   "sr1code").innerHTML = "PED 0012";
    var r1tilte = document.getElementById(  "sr1title").innerHTML = "Group Exercise";
    var r1unit = document.getElementById(   "sr1unit").innerHTML = "2";
    var r1time = document.getElementById(   "sr1time").innerHTML = "4:00 - 6:40 pm";
    var r1day = document.getElementById(    "sr1day").innerHTML = "W";
    var r1room = document.getElementById(   "sr1room").innerHTML = "FIELD";
    
    //EIT 0121.1",
    var r2code = document.getElementById(   "sr2code").innerHTML = "EIT 0121.1";
    var r2tilte = document.getElementById(  "sr2title").innerHTML = "Computer Fundamentals and Programming 1";
    var r2unit = document.getElementById(   "sr2unit").innerHTML = "1";
    var r2time = document.getElementById(   "sr2time").innerHTML = "11:00 - 1:00pm";
    var r2day = document.getElementById(    "sr2day").innerHTML = "W";
    var r2room = document.getElementById(   "sr2room").innerHTML = "FIELD";

    //"PCM 0006",
    var r3code = document.getElementById(   "sr3code").innerHTML = "PCM 0006";
    var r3tilte = document.getElementById(  "sr3title").innerHTML = "Purposive Communication";
    var r3unit = document.getElementById(   "sr3unit").innerHTML = "3";
    var r3time = document.getElementById(   "sr3time").innerHTML = "1:00 - 3:00pm";
    var r3day = document.getElementById(    "sr3day").innerHTML = "Th";
    var r3room = document.getElementById(   "sr3room").innerHTML = "FIELD";

    //"IPP 0010",
    var r4code = document.getElementById(   "sr4code").innerHTML = "IPP 0010";
    var r4tilte = document.getElementById(  "sr4title").innerHTML = "Interdisiplinaryong Pagbasta at Pagsulat";
    var r4unit = document.getElementById(   "sr4unit").innerHTML = "3";
    var r4time = document.getElementById(   "sr4time").innerHTML = "1:00 - 3:00pm";
    var r4day = document.getElementById(    "sr4day").innerHTML = "F";
    var r4room = document.getElementById(   "sr4room").innerHTML = "FIELD";

    // "CET 0121"
    var r5code = document.getElementById(   "sr5code").innerHTML = "CET 0121";
    var r5tilte = document.getElementById(  "sr5title").innerHTML = "Calculus 2";
    var r5unit = document.getElementById(   "sr5unit").innerHTML = "3";
    var r5time = document.getElementById(   "sr5time").innerHTML = "1:00pm - 3:00pm";
    var r5day = document.getElementById(    "sr5day").innerHTML = "S";
    var r5room = document.getElementById(   "sr5room").innerHTML = "FIELD";

    //NSTP 02
    var r6code = document.getElementById(   "sr6code").innerHTML = "NSTP 02";
    var r6tilte = document.getElementById(  "sr6title").innerHTML = "National Service Traning Program 2";
    var r6unit = document.getElementById(   "sr6unit").innerHTML = "3";
    var r6time = document.getElementById(   "sr6time").innerHTML = "7:00 - 9:00am";
    var r6day = document.getElementById(    "sr6day").innerHTML = "Su";
    var r6room = document.getElementById(   "sr6room").innerHTML = "FIELD";

    //"EIT 0122"
    var r7code = document.getElementById(   "sr7code").innerHTML = "EIT 0122";
    var r7tilte = document.getElementById(  "sr7title").innerHTML = "Discrete Mathematics";
    var r7unit = document.getElementById(   "sr7unit").innerHTML = "3";
    var r7time = document.getElementById(   "sr7time").innerHTML = "1:00 - 3:30pm";
    var r7day = document.getElementById(    "sr7day").innerHTML = "M";
    var r7room = document.getElementById(   "sr7room").innerHTML = "FIELD";

    //ICC 0103.1",
    var r8code = document.getElementById(   "sr8code").innerHTML = "ICC 0103.1";
    var r8tilte = document.getElementById(  "sr8title").innerHTML = "Intermediate Programming LAB";
    var r8unit = document.getElementById(   "sr8unit").innerHTML = "1";
    var r8time = document.getElementById(   "sr8time").innerHTML = "9:00 - 11:00 am";
    var r8day = document.getElementById(    "sr8day").innerHTML = "T";
    var r8room = document.getElementById(   "sr8room").innerHTML = "FIELD";

    //"ICC 0103"
    var r9code = document.getElementById(   "sr9code").innerHTML = "ICC 0103";
    var r9tilte = document.getElementById(  "sr9title").innerHTML = "Intermediate Programming LEC";
    var r9unit = document.getElementById(   "sr9unit").innerHTML = "2";
    var r9time = document.getElementById(   "sr9time").innerHTML = "9:00 - 11:00 am";
    var r9day = document.getElementById(    "sr9day").innerHTML = "M";
    var r9room = document.getElementById(   "sr9room").innerHTML = "FIELD";
}

else if(course == "BSIT"){
    //"PED 0012",
    var r1code = document.getElementById(   "sr1code").innerHTML = "PED 0012";
    var r1tilte = document.getElementById(  "sr1title").innerHTML = "Group Exercise";
    var r1unit = document.getElementById(   "sr1unit").innerHTML = "2";
    var r1time = document.getElementById(   "sr1time").innerHTML = "4:00 - 6:40 pm";
    var r1day = document.getElementById(    "sr1day").innerHTML = "W";
    var r1room = document.getElementById(   "sr1room").innerHTML = "FIELD";

    //"EIT 0121.1", 
    var r2code = document.getElementById(   "sr2code").innerHTML = "EIT 0121.1";
    var r2tilte = document.getElementById(  "sr2title").innerHTML = "Computer Fundamentals and Programming 1";
    var r2unit = document.getElementById(   "sr2unit").innerHTML = "1";
    var r2time = document.getElementById(   "sr2time").innerHTML = "11:00 - 1:00pm";
    var r2day = document.getElementById(    "sr2day").innerHTML = "W";
    var r2room = document.getElementById(   "sr2room").innerHTML = "FIELD";

    //"PCM 0006",
    var r3code = document.getElementById(   "sr3code").innerHTML = "PCM 0006";
    var r3tilte = document.getElementById(  "sr3title").innerHTML = "Purposive Communication";
    var r3unit = document.getElementById(   "sr3unit").innerHTML = "3";
    var r3time = document.getElementById(   "sr3time").innerHTML = "1:00 - 3:00pm";
    var r3day = document.getElementById(    "sr3day").innerHTML = "Th";
    var r3room = document.getElementById(   "sr3room").innerHTML = "FIELD";

    //"IPP 0010",
    var r4code = document.getElementById(   "sr4code").innerHTML = "IPP 0010";
    var r4tilte = document.getElementById(  "sr4title").innerHTML = "Interdisiplinaryong Pagbasta at Pagsulat";
    var r4unit = document.getElementById(   "sr4unit").innerHTML = "3";
    var r4time = document.getElementById(   "sr4time").innerHTML = "1:00 - 3:00pm";
    var r4day = document.getElementById(    "sr4day").innerHTML = "F";
    var r4room = document.getElementById(   "sr4room").innerHTML = "FIELD";

    //"CIV 0121.1",
    var r5code = document.getElementById(   "sr5code").innerHTML = "CIV 0121.1";
    var r5tilte = document.getElementById(  "sr5title").innerHTML = "Engineering Drawing and Plans";
    var r5unit = document.getElementById(   "sr5unit").innerHTML = "1";
    var r5time = document.getElementById(   "sr5time").innerHTML = "7:00 - 9:00pm";
    var r5day = document.getElementById(    "sr5day").innerHTML = "F";
    var r5room = document.getElementById(   "sr5room").innerHTML = "FIELD";

    //"CET 0122A", 
    var r6code = document.getElementById(   "sr6code").innerHTML = "CET 0122A";
    var r6tilte = document.getElementById(  "sr6title").innerHTML = "Physics for Engineers (lec)";
    var r6unit = document.getElementById(   "sr6unit").innerHTML = "4";
    var r6time = document.getElementById(   "sr6time").innerHTML = "7:00 - 9:40am";
    var r6day = document.getElementById(    "sr6day").innerHTML = "T";
    var r6room = document.getElementById(   "sr6room").innerHTML = "FIELD";

    //"CET 0121", "
    var r7code = document.getElementById(   "sr7code").innerHTML = "CET 0121";
    var r7tilte = document.getElementById(  "sr7title").innerHTML = "Calculus 2";
    var r7unit = document.getElementById(   "sr7unit").innerHTML = "3";
    var r7time = document.getElementById(   "sr7time").innerHTML = "1:00pm - 3:00pm";
    var r7day = document.getElementById(    "sr7day").innerHTML = "S";
    var r7room = document.getElementById(   "sr7room").innerHTML = "FIELD";

    //NSTP 02", 
    var r8code = document.getElementById(   "sr8code").innerHTML = "NSTP 02";
    var r8tilte = document.getElementById(  "sr8title").innerHTML = "National Service Traning Program 2";
    var r8unit = document.getElementById(   "sr8unit").innerHTML = "3";
    var r8time = document.getElementById(   "sr8time").innerHTML = "7:00 - 9:00am";
    var r8day = document.getElementById(    "sr8day").innerHTML = "Su";
    var r8room = document.getElementById(   "sr8room").innerHTML = "FIELD";

    //"EIT 0122"
    var r9code = document.getElementById(   "sr9code").innerHTML = "EIT 0122";
    var r9tilte = document.getElementById(  "sr9title").innerHTML = "Discrete Mathematics";
    var r9unit = document.getElementById(   "sr9unit").innerHTML = "3";
    var r9time = document.getElementById(   "sr9time").innerHTML = "1:00 - 3:30pm";
    var r9day = document.getElementById(    "sr9day").innerHTML = "M";
    var r9room = document.getElementById(   "sr9room").innerHTML = "FIELD";
}
else{
    //"PED 0012"
    var r1code = document.getElementById(   "sr1code").innerHTML = "PED 0012";
    var r1tilte = document.getElementById(  "sr1title").innerHTML = "Group Exercise";
    var r1unit = document.getElementById(   "sr1unit").innerHTML = "2";
    var r1time = document.getElementById(   "sr1time").innerHTML = "4:00 - 6:40 pm";
    var r1day = document.getElementById(    "sr1day").innerHTML = "W";
    var r1room = document.getElementById(   "sr1room").innerHTML = "FIELD";

    //"CET 0122A", 
    var r2code = document.getElementById(   "sr2code").innerHTML = "CET 0122A";
    var r2tilte = document.getElementById(  "sr2title").innerHTML = "Physics for Engineers (lec)";
    var r2unit = document.getElementById(   "sr2unit").innerHTML = "4";
    var r2time = document.getElementById(   "sr2time").innerHTML = "7:00 - 9:40am";
    var r2day = document.getElementById(    "sr2day").innerHTML = "T";
    var r2room = document.getElementById(   "sr2room").innerHTML = "FIELD";

    //"CET 0121", 
    var r3code = document.getElementById(   "sr3code").innerHTML = "CET 0121";
    var r3tilte = document.getElementById(  "sr3title").innerHTML = "Calculus 2";
    var r3unit = document.getElementById(   "sr3unit").innerHTML = "3";
    var r3time = document.getElementById(   "sr3time").innerHTML = "1:00pm - 3:00pm";
    var r3day = document.getElementById(    "sr3day").innerHTML = "S";
    var r3room = document.getElementById(   "sr3room").innerHTML = "FIELD";

    //"NSTP 02",
    var r4code = document.getElementById(   "sr4code").innerHTML = "NSTP 02";
    var r4tilte = document.getElementById(  "sr4title").innerHTML = "National Service Traning Program 2";
    var r4unit = document.getElementById(   "sr4unit").innerHTML = "3";
    var r4time = document.getElementById(   "sr4time").innerHTML = "7:00 - 9:00am";
    var r4day = document.getElementById(    "sr4day").innerHTML = "Su";
    var r4room = document.getElementById(   "sr4room").innerHTML = "FIELD";

     //"CIV 0121.1", 
     var r5code = document.getElementById(   "sr5code").innerHTML = "CIV 0121.1";
     var r5tilte = document.getElementById(  "sr5title").innerHTML = "Engineering Drawing and Plans";
     var r5unit = document.getElementById(   "sr5unit").innerHTML = "1";
     var r5time = document.getElementById(   "sr5time").innerHTML = "7:00 - 9:00pm";
     var r5day = document.getElementById(    "sr5day").innerHTML = "F";
     var r5room = document.getElementById(   "sr5room").innerHTML = "FIELD";

    //"EIT 0122",

    var r6code = document.getElementById(   "sr6code").innerHTML = "EIT 0122";
    var r6tilte = document.getElementById(  "sr6title").innerHTML = "Discrete Mathematics";
    var r6unit = document.getElementById(   "sr6unit").innerHTML = "3";
    var r6time = document.getElementById(   "sr6time").innerHTML = "1:00 - 3:30pm";
    var r6day = document.getElementById(    "sr6day").innerHTML = "M";
    var r6room = document.getElementById(   "sr6room").innerHTML = "FIELD";

    //UTS 0003", 
    var r7code = document.getElementById(   "sr7code").innerHTML = "UTS 0003";
    var r7tilte = document.getElementById(  "sr7title").innerHTML = "Understanding the Self";
    var r7unit = document.getElementById(   "sr7unit").innerHTML = "3";
    var r7time = document.getElementById(   "sr7time").innerHTML = "3:00 - 5:00pm";
    var r7day = document.getElementById(    "sr7day").innerHTML = "F";
    var r7room = document.getElementById(   "sr7room").innerHTML = "FIELD";

   //TCW 0005, 
    var r8code = document.getElementById(   "sr8code").innerHTML = "TCW 0005";
    var r8tilte = document.getElementById(  "sr8title").innerHTML = "The Contemporary World";
    var r8unit = document.getElementById(   "sr8unit").innerHTML = "3";
    var r8time = document.getElementById(   "sr8time").innerHTML = "11:00 - 1:00pm";
    var r8room = document.getElementById(   "sr8room").innerHTML = "FIELD";

    //EIT 0121.1
    var r9code = document.getElementById(   "sr9code").innerHTML = "EIT 0121.1";
    var r9tilte = document.getElementById(  "sr9title").innerHTML = "Computer Fundamentals and Programming 1";
    var r9unit = document.getElementById(   "sr9unit").innerHTML = "1";
    var r9time = document.getElementById(   "sr9time").innerHTML = "3:00 - 5:00pm";
    var r9day = document.getElementById(    "sr9day").innerHTML = "M";
    var r9room = document.getElementById(   "sr9room").innerHTML = "FIELD";
    }
}

//===========================================REGISTER========================================================
function update(){
const defaultValue = 1;

var Uemail = document.getElementById("_Xemail");
var UconfirmPassword = document.getElementById("_confirmPassword");
var Ufirstname = document.getElementById("_firstname");
var Umiddlename = document.getElementById("_middlename");
var Ulastname = document.getElementById("_lastname");

var getEmail = _Xemail.value;
var confirmPass = _confirmPassword.value;
var getFirstname = _firstname.value;
var getmiddlename = _middlename.value;
var getLastname = _lastname.value;

updateValidate();


function updateValidate(){
    
    getemail = _email.value;
    getfirstname = _firstname.value;
    getmiddlename = _middlename.value;
    getlastname = _lastname.value;
    // getPassword = _password.value;
    confirmPass = _confirmPassword.value;
    console.log(confirmPass);
    console.log(getEmail);
    console.log(getFirstname);
    console.log(getmiddlename);
    console.log(confirmPass);

    updateStudent();
}    
function updateStudent(){
        // Create an XMLHttpRequest object
        const xhttp = new XMLHttpRequest();

        // Define a callback function
        xhttp.onload = function() {
            var obj = JSON.parse(this.responseText);
           console.log(obj);

            if (obj.status_code == "SUCCESS"){
                tempV = document.getElementById("validate").innerHTML = "Update Successfully"
                // window.location.href = "SES.html";
            }
        }

        // Send a request with parameters
        xhttp.open("POST", "http://localhost:8000/user/update", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        var update = {
            email: getEmail,
            password: confirmPass,
            first_name: getFirstname,
            middle_name: getmiddlename,
            last_name: getLastname,
            is_student: defaultValue,
            year_level: defaultValue,
            student_number: studentnumber
        };
        xhttp.send(JSON.stringify(update));
}
}
