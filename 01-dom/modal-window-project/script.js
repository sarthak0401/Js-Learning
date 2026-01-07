'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');


const showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

document.querySelectorAll('.show-modal').forEach(button => button.addEventListener("click", showModal));

btnCloseModal.addEventListener('click', closeModal);


// Note here we are not calling the closeModal function, that thing is DONE AUTOMATICALLY by js Engine when the EventListener is invoked -> Therefore its NOT specified as closeModal(), simply the function is passed
overlay.addEventListener('click',closeModal);



// Event object is by default passed by js engine into the function
// (We used e paramater to access it) e is the event object which is passed to the calling function by js
document.addEventListener('keydown', function(e){
    if(e['key']==='Escape') {
        if(!modal.classList.contains('hidden')) closeModal();
    }
});