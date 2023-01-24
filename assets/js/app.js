let cl = console.log;
  //alert('hello')


 //  Dom selectiom 


 const showModalBtn = document.getElementById("showModal");
 const backDrop = document.getElementById("backDrop");
 const myModal = document.getElementById("myModal");
 const titleControl = document.getElementById("title");
 const imgUrlControl = document.getElementById("imgUrl");
 const ratingControl = document.getElementById("rating");
 const myClose = Array.from(document.querySelectorAll(".myClose"));  //this is nodelist to convert array use arrar.from
 const movieInfo = document.getElementById("movieInfo");
 const movieform = document.getElementById("movieform");
 
 let movieArray = [];
 
 // Call back function
 
 // function expression
 // showmodalhandler
 
 const showModalHandler = function(){
   //console.log("clicked");
   backDrop.classList.remove("d-none");
   myModal.classList.remove("d-none");
 }
 
 const hideModalHandler = function(){
   backDrop.classList.add("d-none");
     myModal.classList.add("d-none");
 }
 
 const onMovieAddHandler = function(eve){
   eve.preventDefault();
    //console.log(eve.target);
    // [console.log(this.value);]
    let obj = {
      title : titleControl.value,
      imgUrl : imgUrlControl.value,
      rating : ratingControl.value
    }
   
     movieArray.push(obj);
     teamplating(movieArray);
     console.log(movieArray);
    //eve.target.reset();
     this.reset();
    hideModalHandler();
 }
 
 
 
 
 // ########    Event binding   ########
 
 showModalBtn.addEventListener('click', showModalHandler);
 backDrop.addEventListener('click', hideModalHandler);
 movieform.addEventListener('submit',onMovieAddHandler );
 
 
 
 myClose.forEach(function(ele){
   console.log(ele)
   ele.addEventListener('click', hideModalHandler)
 })
 
 
 
 //function declaration
 
  function teamplating(arr){
    let result = '';
   arr.forEach(function(ele){
      result += `		
      <div class="col-md-4">      
      <div class="card">
       <div class="card-body"> 
         <figure> 
           <h3>${ele.title}</h3> 
           <img src="${ele.imgUrl}" alt="image" title="image"> 
           <figcaption> 
             <p>
                ${ele.rating}/5
             </p> 
           </figcaption> 
         </figure> 
        </div> 
       </div> 
    </div>
     
     
     
     
     `
     movieInfo.innerHTML = result;
   })
 }