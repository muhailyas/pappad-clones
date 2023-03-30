var namevalid=document.getElementById("namevalid")
var mailvalid=document.getElementById("emailvalid")
var Numvalid=document.getElementById("numvalid")
var Msgvalid=document.getElementById('msgvalid')
var Submitvalid=document.getElementById('submitvalid')


function namevalidation() {
   var Name=document.getElementById('name').value;
   if(Name.length==0){
    namevalid.innerHTML='name is required';
    return false;
   }
   namevalid.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
  }
  function emailvalidation(){
   var Mail=document.getElementById('mail').value;
      if(Mail.length==0){
         mailvalid.innerHTML='mail is required';
         return false;
      }
      if(!Mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
         mailvalid.innerHTML='enter a valid email';
         return false;
      }
      mailvalid.innerHTML='<i class="fa-solid fa-circle-check"></i>'
      return true;
   }
  


   function phonevalidation(){
      var Num=document.getElementById('number').value;
      if(Num.length==0){
         Numvalid.innerHTML='number is required';
         return false;
      }
      if(Num.length!==10){
         Numvalid.innerHTML='number should be 10';
         return false;
      }
      if(!Num.match(/^[0-9]{10}$/)){
         Numvalid.innerHTML='only digits';
         return false;
      }
      Numvalid.innerHTML='<i class="fa-solid fa-circle-check"></i>';
      return true;
     
   }
   function msgvalid(){
      var  Msg=document.getElementById('msg').value;
      if(Msg.length==0){
         Msgvalid.innerHTML='please enter your message'
         return false
      }
      Msgvalid.innerHTML='<i class="fa-solid fa-circle-check"></i>'
         return true;
      
   }
   function validateform(){
      if(!namevalidation()||!phonevalidation()||! msgvalid()){
         Submitvalid.style.display='block';
         Submitvalid.innerHTML='please fix the errors before submit';
         setTimeout(function(){Submitvalid.style.display='none';},3000);
         return false;
      }
      //alert('message send successfull')
      return true
   }