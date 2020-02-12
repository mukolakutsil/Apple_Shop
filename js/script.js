let li = document.getElementsByClassName("menu-item"),
    ul = document.querySelector(".menu"),
    colm = document.querySelector(".column"),
    title = document.querySelector(".title"),
    adv = document.querySelector(".adv"),
    prompp = document.querySelector('.prompt');

    ul.insertBefore(li[1], li[3]);

    var li5 = document.createElement("li");
    ul.appendChild(li5);
    li5.classList.add("menu-item");
    li5.innerHTML = "<h4>Пятий пункт</h4>";

    document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

    console.log(li5);

    title.innerHTML = "<h3>Мы продаем только подлинную технику Apple</h3>";
     
    adv.style.display = "none";

    var qest = prompt("Яке ваше ставлення до техніки Apple?");

    prompp.textContent =  qest;