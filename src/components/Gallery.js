import React from "react";
import shop1 from "../img/shop1.jpg";
import shop2 from "../img/shop2.jpg";

// Shop 1 Enter ANIMATION
document.addEventListener("scroll", function (e) {
  var top = window.pageYOffset + window.innerHeight;
  //isVisible = top > document.querySelector(".shop1").offsetTop;

  if (top < 1000) {
    document.querySelector(".shop1").classList.add("enter_first");
  } else if (top > 1700 && top < 1900) {
    document.querySelector(".shop1").classList.add("enter_animation");
    document.querySelector(".shop1").classList.remove("enter_first");
  }
});
//Shop 1 EXIT ANIMATION
document.addEventListener("scroll", function (e) {
  var top = window.pageYOffset + window.innerHeight;

  if (top > 2400) {
    document.querySelector(".shop1").classList.remove("enter_animation");
    document.querySelector(".shop1").classList.add("exit_animation");
  }
  if (top < 2400 && top > 1900) {
    document.querySelector(".shop1").classList.remove("exit_animation");
    document.querySelector(".shop1").classList.add("enter_animation");
  }
});

//SHOP 2 ANIMATIONS-------

//SHOP2 ENTER ANIMATION

document.addEventListener("scroll", function (e) {
  var top = window.pageYOffset + window.innerHeight;

  if (top < 1000) {
    document.querySelector(".shop2").classList.add("exit_animation");
  } else if (top > 2150 && top < 2400) {
    document.querySelector(".shop2").classList.add("enter_animation");
    document.querySelector(".shop2").classList.remove("exit_animation");
  }
});

//SHOP 2 EXIT ANIMATON

document.addEventListener("scroll", function (e) {
  var top = window.pageYOffset + window.innerHeight;

  if (top > 2400) {
    document.querySelector(".shop2").classList.remove("enter_animation");
    document.querySelector(".shop2").classList.add("exit_animation");
  }
  if (top < 3000 && top > 2400) {
    document.querySelector(".shop2").classList.remove("exit_animation");
    document.querySelector(".shop2").classList.add("enter_animation");
  }
});

function Gallery() {
  return (
    <div className="gallery">
      <div>
        <img className="shop1" id="shop1" src={shop1} alt="shop1" />
        <div className="maintext1">
          <p className="maintext1__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem voluptas nemo veniam facilis praesentium at odit quo
            reiciendis delectus dolores?
          </p>
        </div>
      </div>
      <img className="shop2" src={shop2} alt="shop2" />
      <div className="maintext2">
        <p className="maintext2__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum
          atque voluptatem praesentium! In beatae eaque sed reprehenderit
          voluptatem, consectetur repellat laboriosam similique, voluptas
          quaerat doloribus! Omnis, deleniti. Architecto, alias?
        </p>
      </div>
    </div>
  );
}

export default Gallery;
