let modal = document.querySelector(".modal");//найти контейнер с формой
const modalButton = document.querySelector(".search-button");//найти кнопку
const modalForm = document.querySelector(".search-form");//найти форму
const modalArrival = modalForm.querySelector("#arrival-date");//дата заезда
const modalDeparture = modalForm.querySelector("#departure-date");//дата выезда

let numberOfAdults = modal.querySelector("#adult");//лэйбл взрослых
let numberOfChildrens = modal.querySelector("#children");//лэйбл детей
let adultsButtonMinus = modal.querySelector(".adult-less");//-взрослый
let adultsButtonPlus = modal.querySelector(".adult-more");//+взрослый
let childrenButtonMinus = modal.querySelector(".children-less");//-детёныш
let childrenButtonPlus = modal.querySelector(".children-more");//+детёныш

modalButton.onclick = function () {
    console.log("Кнопка нажата");//при клике вывести сообщение

    modal.classList.toggle("modal-show");//убрать 'показать'
    modal.classList.toggle("modal-hide");//убрать 'скрыть'
    modal.classList.remove("modal-error");//ошибка
    modalArrival.focus();//фокус на дату
};

modalForm.addEventListener("submit", function (evt) {//отправка данных
    if (!modalArrival.value || !modalDeparture.value) {//если дата не заполнена
        evt.preventDefault();
        modal.classList.remove("modal-error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {//реакция на эскейп
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal-show")) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
      }
    }
  });

adultsButtonMinus.addEventListener("click", function(evt) {//взрослых не меньше 1
    evt.preventDefault();
    if (numberOfAdults.value > 1) {
        numberOfAdults.value = +numberOfAdults.value - 1;
    }
});

adultsButtonPlus.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (numberOfAdults.value < 10) {
        numberOfAdults.value = +numberOfAdults.value + 1;
    }
});

childrenButtonMinus.addEventListener("click", function(evt) {//чайлдфри))
    evt.preventDefault();
    if (numberOfChildrens.value > 0) {
        numberOfChildrens.value = +numberOfChildrens.value - 1;
    }
});

childrenButtonPlus.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (numberOfChildrens.value < 10) {
        numberOfChildrens.value = +numberOfChildrens.value + 1;
    }
});