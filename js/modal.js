const contactsButton = document.querySelector(".contacts-button");/*находит кнопку по которой открывается попап*/
const modalForm = document.querySelector(".modal-form");/*само модальное окно - секция в HTML*/
const popupClose = modalForm.querySelector(".popup-button-close");
const form = modalForm.querySelector("form");/*Форма */
const modalUser = modalForm.querySelector("[name=name]");/*Инпут Имя*/
const modalEmail = modalForm.querySelector("[name=mail]");/*Инпут Емэйл*/

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

form.addEventListener("submit", function(evt){
	if (!name.value || !mail.value) {
		evt.preventDefault();
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", name.value);/*сохраняет имя*/
		}	
	}
});