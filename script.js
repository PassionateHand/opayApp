// const studentListContainer = document.querySelector("#StudentListContainer");

// const submitBtn = document.querySelector("#submitBtn");
// const inputStudentName = document.querySelector("#inputStudentName");

// const StudentNameList = [];

// submitBtn.addEventListener('click', ()=>{

//  let studentName = inputStudentName.value;

//  studentName = studentName.charAt(0).toUpperCase() + studentName.slice(1) ;

//  if(studentName.trim() !== ""){
  
//             StudentNameList.push(studentName);

//             const studentTemplate = StudentNameList.map((name, index)=>{
//               return `<div class="flex justify-between gap-10  mx-auto mt-8 px-4">
//                 <div class="flex gap-2 text-sm">
//                     <p>${index+1}</p>
//                     <p>${name}</p>
//                 </div>
//                 <p class="text-sm text-red-700 deleteBtn" data-index="${index}" >delete</p>
//             </div>`
//             })

//             studentListContainer.innerHTML = studentTemplate.join('');
//             inputStudentName.value = "";
//     } 

    
//     else {
//       alert("Input valid Name");
//     }
// })



// studentListContainer.addEventListener('click', (e)=>{
//   if(e.target.classList.contains('deleteBtn')){
//     const index = e.target.dataset.index;
//     StudentNameList.splice(index, 1);
    
//     studentListContainer.innerHTML = StudentNameList.join("")
//   }
// })
// const prevBtn = document.getElementById('prevBtn')
// const nextBtn = document.getElementById('nextBtn')

const slides = document.querySelectorAll('.sliders .slider');

slideIndex = 0;

interValid = null;

// initializeSlide()

document.addEventListener("DOMContentLoaded", initializeSlide);

function initializeSlide(){

  if(slideShow.length > 0){
     slides[slideIndex].classList.add('displaySlide');
     interValid = setInterval(nextSlide, 5000);
  }
 
}

function slideShow(index){

  if(index >= slides.length){
    slideIndex = 0;
  }

  else if(index < 0){
    slideIndex = slides.length - 1;
  }
    slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  })
  slides[slideIndex].classList.add("displaySlide");
}

function preSlide(){
  slideIndex--
  slideShow(slideIndex)
}

function nextSlide(){
  slideIndex++
  slideShow(slideIndex)
}


// console.log(nextBtn)
