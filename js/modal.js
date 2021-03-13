const contactsButton = document.querySelector(".contacts-button");
const modalForm = document.querySelector(".modal-form");
const popupClose = document.querySelector(".popup-button-close");



contactsButton.addEventListener("click", function(evt){
	evt.preventDefault();	/*отключаем переход на другую страницу*/
	modalForm.classList.add("modal-form-show");/*показывает форму*/
});


popupClose.addEventListener("click", function(evt){
	evt.preventDefault();/*отключаем переход на другую страницу	*/
	popupClose.classList.remove("modal-form-show");
});