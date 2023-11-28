

export const Modal = {
    boxModal: document.querySelector(".box-modal"),
    Tittle: document.querySelector(".modal-title"),
    BtnClose: document.querySelector(".btn-close"),
    open() {
        Modal.boxModal.classList.add("open")
    },

    close() {
        Modal.boxModal.classList.remove("open")
    }

}
// BOTÃO X, para fechar o modal
Modal.BtnClose.onclick = function () {
    Modal.close()
}

window.addEventListener("keydown",handleKeydown)
function handleKeydown(event){
    if (event.key==="Escape"){
        Modal.close()
    }
}
