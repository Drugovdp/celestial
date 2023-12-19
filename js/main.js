// Блок управления слайдером
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Блок переключения кнопки с "Войти" в "Личный кабинет" и обратно
// Условно показал
const closePass = document.querySelector('.closePass');
const accauntLogin = document.querySelector(".btn__accaunt");
const logIn = document.querySelector(".logIn");
const popup = document.querySelector(".wrapper__popup");

closePass.addEventListener('click', () => {
  closePass.children[0].src = "./images/openPass.svg"
  document.querySelector('.pass input').type = 'text'
})

accauntLogin.addEventListener("click", () => {
  if (!document.querySelector(".logIn")) {
    popup.style.display = "block";
  } else {
    loginAccount()
  }
});

const btnClose = document.querySelector(".btn__close");

btnClose.addEventListener("click", () => {
  popup.style.display = "none";
});

const btnForm = document.querySelector(".btnForm > button");
const form = document.forms.form;
const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const rePass = /^[A-Za-z0-9,!,?]{6,}$/;

const isErrorBlock = (text, el) => {
  const elem = document.querySelector(`.${el} .error`);
  elem.textContent = text;
  elem.style.display = "block";
  btnForm.disabled = true;
  btnForm.style.opacity = "0.5";
};

const noErrorBlock = (el) => {
  el.textContent = "";
  el.style.display = "none";
  btnForm.disabled = false;
  btnForm.style.opacity = "1";
};

form.elements.email.addEventListener("focus", () => {
  const el = document.querySelector(".email .error");
  noErrorBlock(el);
});

form.elements.pass.addEventListener("focus", () => {
  const el = document.querySelector(".pass .error");
  noErrorBlock(el);
});

btnForm.addEventListener("click", (e) => {
  e.preventDefault();
  let count = 0;
  [].forEach.call(form, (el) => {
    if (el.name === "email") {
      if (!el.value.trim()) {
        isErrorBlock("Пустое поле", el.name);
        count++;
      } else if (!reEmail.test(el.value)) {
        isErrorBlock("Некоректный адрес", el.name);
        count++;
      }
    }
    if (el.name === "pass") {
      if (!el.value.trim()) {
        isErrorBlock("Пустое поле", el.name);
        count++;
      } else if (!rePass.test(el.value)) {
        isErrorBlock(
          "Нужно не менее шести символов латинского алфавита",
          el.name
        );
        count++;
      }
    }
  });
  if (count === 0) {
    loginAccount();
    popup.style.display = "none";
  }
});

const loginAccount = () => {
  const loginButton = document.querySelector(".btn__accaunt");
  if (!loginButton.classList.contains("logIn")) {
    const newImg = document.createElement("img");
    newImg.src = "./icons/avatarAccaunt.svg";

    const newSpan = document.createElement("span");
    newSpan.textContent = "Александр";

    loginButton.classList.add("logIn");
    loginButton.textContent = "";
    loginButton.style.backgroundColor = "#ffffff";
    loginButton.style.padding = "0";
    loginButton.appendChild(newImg);
    loginButton.appendChild(newSpan);

    const count = document.querySelectorAll(".count");
    count.forEach((el) => (el.style.display = "block"));
  } else {
    const img = document.querySelector(".btn__accaunt>img");
    img.remove();
    const span = document.querySelector(".btn__accaunt>span");
    span.remove();
    const loginButton = document.querySelector(".btn__accaunt");
    loginButton.classList.remove("logIn");
    loginButton.style.backgroundColor = "#f2f7fd";
    loginButton.style.padding = "9px 15px";
    loginButton.textContent = "Войти";

    const count = document.querySelectorAll(".count");
    count.forEach((el) => (el.style.display = "none"));
  }
};

// Блок преключения между адресами, если имеются например филиалы в других городах
const onclickHandler = () => {
  let select = document.querySelector("#select");
  select.addEventListener("change", () => {
    if (select.value === "Екатеринбург") {
      let adressEkb1 = document.getElementsByClassName("adress_1")[0].children;

      adressEkb1[0].textContent = "Магазин на Черняховского";
      adressEkb1[1].textContent = "улица Черняховского, 99";
      adressEkb1[2].textContent = "+7 (999) 012-34-56";
      adressEkb1[3].textContent = "Ежедневно с 09:00 до 22:00";

      let adressEkb2 = document.getElementsByClassName("adress_2")[0].children;
      adressEkb2[0].textContent = "Магазин на Блюхера";
      adressEkb2[1].textContent = "улица Блюхера, 99";
      adressEkb2[2].textContent = "+7 (999) 012-34-56 (доб. 02)";
      adressEkb2[3].textContent = "Ежедневно с 10:00 до 21:00";

      let iframe = document.querySelector("iframe");
      iframe.src =
        'https://yandex.ru/map-widget/v1/?um=constructor%3Ae668a195cc245890995f54179b921a5a0646541ccb7d35b6d04199facbd959bd&amp;source=constructor" width="100%" height="650" frameborder="0"';
    }

    if (select.value === "Челябинск") {
      let adressChel1 = document.getElementsByClassName("adress_1")[0].children;

      adressChel1[0].textContent = "Магазин на Свердловском проспекте";
      adressChel1[1].textContent = "улица Свердловский проспект, 35";
      adressChel1[2].textContent = "+7 (922) 0123-45-56";
      adressChel1[3].textContent = "Ежедневно с 09:00 до 22:00";

      let adressChel2 = document.getElementsByClassName("adress_2")[0].children;

      adressChel2[0].textContent = "Магазин на Каспийском шоссе";
      adressChel2[1].textContent = "улица Каспийское шоссе, 31/5";
      adressChel2[2].textContent = "+7 (922) 0123-45-56";
      adressChel2[3].textContent = "Ежедневно с 09:00 до 22:00";

      let iframe = document.querySelector("iframe");
      iframe.src =
        'https://yandex.ru/map-widget/v1/?um=constructor%3Abe6bb6ca56b6e7ba277737fb5fdf8757b0cefcada7b6d1c9f1a92433fa6b60d1&amp;source=constructor" width="100%" height="650" frameborder="0"';
    }
  });
};

//  Блок кликов по меню, которое на маленьких устройствах, изменяется цвет,
// но можно добавить и переход на другие страницы
const itemMenu = document.querySelectorAll(".item__footer");

itemMenu.forEach((el) => {
  el.addEventListener("click", (e) => {
    itemMenu.forEach((el) => {
      el.classList.remove("active");
      el.children[0].children[0].setAttribute("stroke", "#8285A5");
      if (el.children[0].children[0].hasAttribute("fill")) {
        el.children[0].children[0].setAttribute("fill", "#8285A5");
      }
    });
    e.currentTarget.classList.add("active");
    e.currentTarget.children[0].children[0].setAttribute("stroke", "#0064D8");
    if (e.currentTarget.children[0].children[0].hasAttribute("fill")) {
      e.currentTarget.children[0].children[0].setAttribute("fill", "#0064D8");
    }
  });
});

const li = document.querySelectorAll(".list__prodacts li");
const arrList = [
  "Гирлянды и освещение",
  "Ёлки искусственные",
  "Украшения для ёлки",
  "Сувениры новогодние",
  "Посуда новогодняя",
  "Текстиль новогодний",
  "Карнавальные товары",
  "Игрушки новогодние",
  "Галантерея новогодняя",
  "Упаковка новогодняя",
  "Новогодние книжки",
  "Канцтовары новогодние",
  "Атрибуты праздника",
  "Одежда и обувь новогодние",
  "Товары для дома новогодние",
  "Открытки новогодние",
  "Предыдущие коллекции",
];

li.forEach((el) => {
  el.addEventListener("click", (e) => {
    const div = document.getElementsByClassName("subdirectory")[0];

    if (div.children.length > 0) {
      Array.from(div.children).forEach((el) => el.remove());
    }

    const item = e.currentTarget;

    if (item.children[0].textContent === "Новогодние товары") {
      const button = document.createElement("button");
      button.classList.add("btn__subdir");
      button.textContent = "Новинки";
      const ul = document.createElement("ul");
      ul.classList.add("list__subdirectory");
      const h3 = document.createElement("h3");
      h3.classList.add("title__subdir");
      h3.textContent = "Все товары категории";
      div.prepend(button);
      div.append(ul);
      ul.prepend(h3);
      for (let i = 0; i < arrList.length; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", "#");
        a.textContent = arrList[i];
        ul.append(li);
        li.prepend(a);
      }
    } else {
      const p = document.createElement("p");
      p.textContent = "Тут скоро будет список";
      div.append(p);
    }
  });
});
