document.getElementById('belønning').style.visibility='hidden';

function myFunction() {
  let x = document.getElementById("nummer").value;
  let text;
  if (isNaN(x) || x < 7 || x > 203) {
    document.getElementById('belønning').style.visibility='hidden';
    text = "Koden er ikke gyldig";
  } else {
    document.getElementById('belønning').style.visibility='visible';
    text = "Koden er korrekt";
  }
}


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//Burger-menu til desktop - Jacky

function toggleClassName() {
  var sidebar = document.querySelector(".sidebar");
  var toggle = document.querySelector(".toggle");
  sidebar.classList.toggle("active");
  toggle.classList.toggle("active");
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});