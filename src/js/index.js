/*

OBJ 1 - QUANDO O USUARIO CLIKCAR NO BOTAO VER TRAILER ABRIR MODAL

 OBJ 2 - QUANDO CLICKAR NO X FECHAR A MODAL


*/
const botaoTrailerMario = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailerMario.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    modal.classList.toggle("aberto");
    video.setAttribute("src","");
});







