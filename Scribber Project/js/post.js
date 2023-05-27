/* to change the color of textarea*/

document.getElementById("commentarea").addEventListener('click',()=>{
    document.getElementById("commentarea").style.borderBlockColor="blue";
});

/* to change the edit icon  to save and vice versa */

function toggleEditSave(){
    if(document.getElementById("para").getAttribute("contentEditable")==="false"){
         document.getElementById("title").setAttribute('contentEditable','true');
     document.getElementById("para").setAttribute("contentEditable","true");
       
        var t=document.getElementById('title');
        t.style.border="1px solid pink";
        t.insertAdjacentText('afterbegin','updated :');
        var p=document.getElementById("paragraph");
        p.style.border="1px solid pink";
        p.insertAdjacentText('afterbegin','updated :');
        document.getElementById("edit").innerHTML='Save <i class="fa-light fa-floppy-disk">  </i>';
    }
    else{
        document.getElementById("title").setAttribute("contentEditable","false");
         document.getElementById("para").setAttribute("contentEditable","false");
        
           var t=document.getElementById("title");
           t.style.border="1px solid black";
           
           var p=document.getElementById("paragraph");
           p.style.border="1px solid black";

           document.getElementById("edit").innerHTML='Edit <i class="fa fa-edit"></i>';
   

    }
}
/* to diplay no.of persons like the post */
var likecount=0;
function likepost(){
    
    document.getElementById('like-btn').innerHTML='<i class="fa fa-thumbs-up"></i>Liked';
    likecount+=1;
    if(likecount==1){
        document.getElementById('liketext').innerHTML=likecount+'person like this';

    }else{
        document.getElementById('liketext').innerHTML=likecount+'persons like this';

    }
}

    function commentclick(){ 

        var commtext=document.getElementById('commentarea').value;
        console.log(commtext);
        if(commtext===""){
            alert("Please enter a comment");
        }
        else{
            var allcommentdiv=document.getElementById('allcomments');
           
           /*create new cimment div*/
           var element=document.createElement("div");
           element.className="pdiv";
           var p=document.createElement("p");//create new element p
          var text=document.createTextNode(commtext);//create new node
        p.appendChild(text);                 //add text to the paragraph
           element.appendChild(p);             //add paragraph to the div tag

         /*insert latest comment before the first element*/
           allcommentdiv.insertBefore(element,allcommentdiv.childNodes[0]);
           document.getElementById('commentarea').value="";
           
        }
    }

   