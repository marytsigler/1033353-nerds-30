const contactsButton = document.querySelector(".contacts-button");/*находит кнопку по которой открывается попап*/
const modalForm = document.querySelector(".modal-form");/*само модальное окно - секция в HTML*/
const popupClose = modalForm.querySelector(".popup-button-close");
const formPopup = modalForm.querySelector("formPopup");/*Форма */
const modalUser = modalForm.querySelector(".modal-user");/*Инпут Имя*/
const modalEmail = modalForm.querySelector(".modal-email");/*Инпут Емэйл*/

let isStorageSupport = true;
let storage = "";

try	{
	storage = localStorage.getItem("name");
} catch (err){
	isStorageSupport = false;
}

/*Открывает форму*/

contactsButton.addEventListener("click", function(evt){
	evt.preventDefault();	/*отключает переход на другую страницу*/
	modalForm.classList.add("modal-form-show");/*показывает форму*/

	if (storage) {
		modalUser.value	= storage;
		modalEmail = focus();
	}
	else{
		modalUser.focus();/*фокус при открытии модального окна в поле ввода логина.*/
	}
});

/*Закрывает форму*/

popupClose.addEventListener("click", function(evt){
	evt.preventDefault();/*отключает переход на другую страницу	*/
	modalForm.classList.remove("modal-form-show");/*отключает класс - закрывает форму*/
});

formPopup.addEventListener("submit", function(evt){
	if (!modalUser.value || !modalEmail.value) {
		evt.preventDefault();
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", modalUser.value);/*сохраняет имя*/
		}	
	}
});

/*Закрывает форму при нажатии esc*/

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		if (modalForm.classList.contains("modal-form-show")) {
			evt.preventDefault();
			modalForm.classList.remove("modal-form-show");
		}
	}
});
