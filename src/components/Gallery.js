import React from "react";
import shop1 from "../img/shop1.jpg";
import shop2 from "../img/shop2.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <img className="shop1" src={shop1} alt="shop1" />
      <div className="maintext1">
        <p className="maintext1__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptas nemo veniam facilis praesentium at odit quo
          reiciendis delectus dolores?
        </p>
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
