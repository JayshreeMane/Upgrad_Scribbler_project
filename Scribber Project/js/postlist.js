/* To delete post*/


      function deletePost(postname){
        var modal=document.getElementById("deletemodel");
        modal.style.display="block";
        document.getElementById('yes').addEventListener('click',()=>{   
              document.getElementById(postname).style.display="none";
              modal.style.display="none";
       });
      }

/* to close deletemodal*/
function closedeletemodal(){

        document.getElementById("deletemodel").style.display = "none";
}