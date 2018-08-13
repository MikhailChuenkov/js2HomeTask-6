let name = document.getElementById("name");
let number = document.getElementById("number");
let mail = document.getElementById("mail");
let textMy = document.getElementById("text");

function regexName() {
  let namePattern = /^([A-Za-zА-Яа-яЁё\s*]+)$/;
  document.querySelector('div#nameError').innerText = '';
  if (!namePattern.test(name.value)) {
    let nameError = document.createElement("div");
    nameError.innerHTML = "Вы не ввели имя или ввели некорректно. Имя должно состоять только из букв";
    document.getElementById("nameError").appendChild(nameError);
    document.getElementById("name").setAttribute("class", "error");
    document.getElementById("nameError").setAttribute("class", "errorActiv");
  } else {
    document.getElementById("name").setAttribute("class", "valid");
  }
}

function regexNumber() {
  let numberPattern = /\+\d{1}\(\d{3}\)\d{3}-\d{4}$/;
  document.querySelector('div#numberError').innerText = '';
  if (!numberPattern.test(number.value)) {
    let numberError = document.createElement("div");
    numberError.innerHTML = "Вы не ввели телефонный номер или ввели некорректно. Телефонный номер должен быть в формате" +
      " +7(000)000-0000";
    document.getElementById("numberError").appendChild(numberError);
    document.getElementById("number").setAttribute("class", "error");
    document.getElementById("numberError").setAttribute("class", "errorActiv");
  } else {
    document.getElementById("number").setAttribute("class", "valid");
  }
}

function regexMail() {
  let mailPattern = /^(\w+\.*\w+-*\w+@{1}[A-Za-z]+.[A-Za-z]{2,4})$/;
  document.querySelector('div#mailError').innerText = '';
  if (!mailPattern.test(mail.value)) {
    let mailError = document.createElement("div");
    mailError.innerHTML = "Вы не ввели e-mail или ввели некорректно. E-mail должен быть в формате" +
      " mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru";
    document.getElementById("mailError").appendChild(mailError);
    document.getElementById("mail").setAttribute("class", "error");
    document.getElementById("mailError").setAttribute("class", "errorActiv");
  } else {
    document.getElementById("mail").setAttribute("class", "valid");
  }
}

function regexText() {
  let textPattern = /./;
  document.querySelector('div#textError').innerText = '';
  if (!textPattern.test(textMy.value)) {
    let textError = document.createElement("div");
    textError.innerHTML = "Ну пожалуйста! Хотябы пару символов.";
    document.getElementById("textError").appendChild(textError);
    document.getElementById("text").setAttribute("class", "error");
    document.getElementById("textError").setAttribute("class", "errorActiv");
  } else {
    document.getElementById("text").setAttribute("class", "valid");
  }
}


name.addEventListener("input", regexName);
number.addEventListener("input", regexNumber);
mail.addEventListener("input", regexMail);
textMy.addEventListener("input", regexText);

(function ($) {
  $(function () {
$("#bnt").click(function () {
  $(".error").effect("shake", {times: 2}, "slow");
  $(".errorActiv").dialog();
});

$.ajax({
  url: 'city.json',
  dataType: "json",
  success: function (data, textStatus) {
    for (let i = 0; i < data.citySelect.length; i++) {
      let option = document.createElement("option");
      option.innerHTML = data.citySelect[i].city;
      document.getElementById("city").appendChild(option);
    }
  }
});

    $('#datebirthday').datepicker({
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь"
        , "Ноябрь", "Декабрь"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      firstDay: 1,
      dateFormat: "dd.mm.yy"
    });
    $('#datebirthdayTitle').draggable({axis: "x", cursor: "move"});

    $('#slide-show').on('click', '#next', function () {
      $('.active').removeClass('active');

    });
    $('#slide-show').on('click', '#back', function () {
      $('.active').removeClass('active');

    });
  })
})(jQuery);

