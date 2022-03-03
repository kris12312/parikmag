const masCardButtons = document.querySelectorAll(".card__button");
const basket = document.getElementById("basket");
const totalPrice = document.getElementById("totalPrice");
const buttonBuy = document.getElementById("buy");

const products = [
  {
    title: "Andis машинка для стрижки + шейвер Cordless Combo 75025",
    price: 399.0,
    number: 0,
  },
  {
    title:
      "Andis машинка для стрижки BTF3 SLIMLINE Li-Ion T-Blade окантовочная 25225",
    price: 166.25,
    number: 0,
  },
  {
    title: "Andis машинка для стрижки Cordless USPro Li 73010",
    price: 272.65,
    number: 0,
  },
  {
    title: "Andis машинка для стрижки Cordless USPro Li Andis",
    price: 266.0,
    number: 0,
  },
  {
    title: "Брашинг Hercules деревянный, темная, щетина+нейлон, d54мм.",
    price: 33.52,
    number: 0,
  },
  {
    title: "Брашинг Hercules деревянный, темная, щетина+нейлон, d66мм.",
    price: 39.1,
    number: 0,
  },
  {
    title: "Брашинг Hercules деревянный, темная, щетина+нейлон, d74мм.",
    price: 40.96,
    number: 0,
  },
  {
    title: "Брашинг JAGUAR керамика, ТРЕУГОЛЬНИК, d.53",
    price: 14.9,
    number: 0,
  },
  {
    title: "Sibel шпильки, 45мм., 500гр., черные",
    price: 23.28,
    number: 0,
  },
  {
    title: "EUROstil липучки-разделители, 2шт., Barber Line",
    price: 5.99,
    number: 0,
  },
  {
    title: "BaByliss CROCO CLIP, уточки, 1шт.",
    price: 2.29,
    number: 0,
  },
  {
    title: "BaByliss плойка ProMIRACURL BAB2666E",
    price: 352.45,
    number: 0,
  },
  {
    title: "Валик PROFI line для причесок, сетка с кнопкой, черный, 25см.",
    price: 5.59,
    number: 0,
  },
  {
    title:
      "Валик PROFI line для причесок, круглый, коричневый, из искусственного волоса",
    price: 7.58,
    number: 0,
  },
  {
    title:
      "Валик PROFI line для причесок, круглый, черный, из искусственного волоса",
    price: 7.58,
    number: 0,
  },
  {
    title:
      "Валик PROFI line для причесок, круглый, белый, из искусственного волоса",
    price: 7.58,
    number: 0,
  },
  {
    title: "BaByliss плойка DIGICURL KERATIN LUSTRE IRON 10мм BAB2910E",
    price: 179.55,
    number: 0,
  },
  {
    title: "BaByliss плойка DIGICURL KERATIN LUSTRE IRON 32мм BAB2914E",
    price: 199.5,
    number: 0,
  },
  {
    title: "BaByliss плойка EXSTRA LONG 19мм BAB2472TDE",
    price: 159.6,
    number: 0,
  },
  {
    title: "BaByliss плойка CONICAL IRON конус 13-25мм BAB2280TTE",
    price: 146.3,
    number: 0,
  },
];

menu.onclick = function Myfunction() {
  let topnav = document.getElementById("myTopnav");
  let icon = document.getElementById("menu");

  if (topnav.className === "") {
    topnav.classList.add("active");
    icon.innerHTML = "×";
  } else {
    topnav.classList.remove("active");
    icon.innerHTML = "&#9776;";
  }
};

function clearBasket() {
  for (let i = 0; i < products.length; i++) {
    products[i].number = 0;
  }
  masCardButtons.forEach((button) => {
    button.removeAttribute("disabled");
    button.innerHTML = "В корзину";
    button.classList.remove("card__button-active");
  });
}
function displayBasket() {
  basket.innerHTML = "";
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].number != 0) {
      let item = `
      <div class="basket_item" id="${i}">
        <p class="basket_item-text">${products[i].title}</p>
        <span class="basket_item-price">${products[i].price} руб.</span>
        <div class="basket_numbers">
          <button class="minus basket_button"><</button>
          <span class="basket_item-number">${products[i].number}</span>
          <button class="plus basket_button">></button>
        </div>
      </div>
      `;
      basket.innerHTML += item;
      sum += sum + products[i].price * products[i].number;
    }
  }
  totalPrice.innerHTML = sum.toFixed(2);
  subscribe();
}

buttonBuy.addEventListener("click", () => {
  clearBasket();
  displayBasket();
});

masCardButtons.forEach((button) =>
  button.addEventListener("click", () => {
    products[button.parentElement.parentElement.getAttribute("id")].number++;
    button.toggleAttribute("disabled");
    button.classList.add("card__button-active");
    button.innerHTML = "Добавлено!";
  })
);
function subscribe() {
  let minus = document.querySelectorAll(".minus");
  let plus = document.querySelectorAll(".plus");

  minus.forEach((button) =>
    button.addEventListener("click", () => {
      products[button.parentElement.parentElement.getAttribute("id")].number--;
      displayBasket();
    })
  );
  plus.forEach((button) =>
    button.addEventListener("click", () => {
      products[button.parentElement.parentElement.getAttribute("id")].number++;
      displayBasket();
    })
  );
}
