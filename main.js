//Get modal element
let modal = document.getElementById('simpleModal');
//Get open modal button
let lightBtn = document.getElementById('lightBtn');
//Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for click
lightBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside click

//Function to open modal
function openModal(){
    modal.style.display = 'block';
    window.history.pushState(null, null, '/pagina1');
}


//Function to close modal
function closeModal(){
    modal.style.display = 'none';
     window.history.replaceState(null, null, '/pagina1');
}