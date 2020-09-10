import React from "react";

const toogleDrinks = () => {
  const drinksTable = document.querySelector(".drinks_table");
  const foodsTable = document.querySelector(".foods_table");
  foodsTable.style.display = "none";
  drinksTable.style.display = "table";
};

const toogleFoods = () => {
  const drinksTable = document.querySelector(".drinks_table");
  const foodsTable = document.querySelector(".foods_table");
  drinksTable.style.display = "none";
  foodsTable.style.display = "table";
};

function Menu() {
  return (
    <div className="menu" id="menu">
      <h1 className="menuh1">Menu</h1>
      <div className="tablegroup">
        <div className="menu__nav">
          <button onClick={() => toogleDrinks()} className="drinksbtn btn">
            Drinks
          </button>
          <button onClick={() => toogleFoods()} className="foodsbtn btn">
            Foods
          </button>
        </div>
        <table className="drinks_table">
          <thead>
            <tr>
              <th></th>
              <th>Small</th>
              <th>Medium</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coffe Latte</td>
              <td>$4</td>
              <td>$5</td>
              <td>$6</td>
            </tr>
            <tr>
              <td>White Chocolate Mocha</td>
              <td>$6</td>
              <td>$8</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Coffe Mocha</td>
              <td>$7</td>
              <td>$9</td>
              <td>$11</td>
            </tr>
            <tr>
              <td>Latte Macchiato</td>
              <td>$6</td>
              <td>$7</td>
              <td>$8</td>
            </tr>
            <tr>
              <td>Caramel Macchiato</td>
              <td>$5</td>
              <td>$8</td>
              <td>$11</td>
            </tr>
            <tr>
              <td>Americano</td>
              <td>$4</td>
              <td>$5</td>
              <td>$7</td>
            </tr>
            <tr>
              <td>Espresso</td>
              <td>$3</td>
              <td>$4</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>Cold Brew</td>
              <td>$7</td>
              <td>$8</td>
              <td>$9</td>
            </tr>
            <tr>
              <td>Classic Hot Chocolate</td>
              <td>$6</td>
              <td>$7</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Flat White</td>
              <td>$5</td>
              <td>$6</td>
              <td>$7</td>
            </tr>
            <tr>
              <td>Espresso Macchiato</td>
              <td>$5</td>
              <td>$7</td>
              <td>$9</td>
            </tr>
            <tr>
              <td>Cold Foam Iced Cappuccino</td>
              <td>$7</td>
              <td>$8</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Nitro Latte</td>
              <td>$7</td>
              <td>$8</td>
              <td>$9</td>
            </tr>
          </tbody>
        </table>
        <table className="foods_table">
          <thead>
            <tr>
              <th></th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cinnamon Swirl</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>Fruit Toast</td>
              <td>$8</td>
            </tr>
            <tr>
              <td>Blueberry Muffin</td>
              <td>$4</td>
            </tr>
            <tr>
              <td>Triple Chocolate Muffin</td>
              <td>$6</td>
            </tr>
            <tr>
              <td>Chocolate Brownie</td>
              <td>$7</td>
            </tr>
            <tr>
              <td>Chocolate Chunk Cookie</td>
              <td>$3</td>
            </tr>
            <tr>
              <td>Banana Bread</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>Lemon Loaf Cake</td>
              <td>$3</td>
            </tr>
            <tr>
              <td>Almond Croissant</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>Chocolate Caramel Cookie</td>
              <td>$6</td>
            </tr>
            <tr>
              <td>Cream Brownie</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>Raspberry Mini Cake</td>
              <td>$7</td>
            </tr>
            <tr>
              <td>Caramel Twist</td>
              <td>$8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Menu;
