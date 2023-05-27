//functions for sign up modal
//To show Sign Up modal
function showsignupmodal(){
    document.getElementById("sp").style.visibility="visible";
     
}
//to hide Sign up modal
function hideform(){
    document.getElementById("sp").style.visibility="hidden";
     


    }
//functions for sign in modal
//To show Sign in modal
    function showsigninmodal(){
        document.getElementById("sin").style.visibility="visible";
    

    }
    //to hide Sign in modal
    function hideformsignIn()
    {
        document.getElementById("sin").style.visibility="hidden";
    }
    function showsignupmodal_insignIn(){
        document.getElementById("sin").style.display="none";
        showsignupmodal();
    }

/*Pst modal*/
let myModel2 = document.getElementById('myModal-2');
let close2 = document.getElementById('close3');

function showpostmodal(){
  var modal=  document.getElementById('myModal-2');
  modal.style.display="block";
    modal.style.zIndex=1;

document.body.style.backgroundBlendMode="overlay";
}
function closepostmodal(){
    document.getElementById('myModal-2').style.display="none";
     document.body.style.backgroundBlendMode="normal";
}