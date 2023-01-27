/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function renderModal(){
    modal = document.querySelector('dialog')
    
    modalHeader = document.createElement('div')
    modalHeader.classList.add('modal__header')
    modalTitle = document.createElement('h2')
    modalTitle.classList.add('modal__title')
    modalTitle.innerText = 'Cadastro'
    
    modalBtnClose = document.createElement('span')
    modalBtnClose.innerText = 'X'
    modalBtnClose.classList.add('modal__close')
    
    modalForm = document.createElement('form')
    modalForm.classList.add('modal__form')
    
    modalText = document.createElement('h3')
    modalText.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    modalText.classList.add('modal__text')
    
    modalEmail = document.createElement('input')
    modalEmail.classList.add('modal__email')
    modalEmail.placeholder = 'Digitar e-mail'
    
    modalSubmit = document.createElement('button')
    modalSubmit.classList.add('modal__submit')
    modalSubmit.innerText = 'Entrar na lista para próxima turma'

    modalHeader.append(modalTitle, modalBtnClose)

    modalForm.append(modalText, modalEmail, modalSubmit)

    modal.append(modalHeader, modalForm)
}


function pressBtn(){
    const btnOpenModal = document.querySelectorAll('.button__nextClass')
    const modal = document.querySelector('dialog')

    for (let i = 0; i < btnOpenModal.length; i++){
        btnOpenModal[i].addEventListener('click', () =>{
            modal.showModal()
            closeModal()
        })
    }

}

function closeModal(){
    const modalBtn = document.querySelector(".modal__close");
    const modal = document.querySelector("dialog");
  
    modalBtn.addEventListener("click", (event) => {
      event.preventDefault()
      modal.close()
    });

}

renderModal()
pressBtn()