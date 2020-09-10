import React from "react";

// document.addEventListener('scroll', function (e) {
//     var top  = window.pageYOffset + window.innerHeight,
//         isVisible = top > document.querySelector('#about > p').offsetTop;

//      if (isVisible) {
//        document.querySelector('.about').classList.add('animate');
//      }
//   });

//   document.addEventListener('scroll', function (e) {
//     var top  = window.pageYOffset + window.innerHeight,
//         isVisible = top > document.querySelector('#about > h3').offsetTop;

//      if (!isVisible) {
//        document.querySelector('.about').classList.remove('animate');
//      }
//   });

function About() {
  return (
    <div className="about" id="about">
      <h3>About Us</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        voluptates laboriosam sit. Temporibus dolorum sit architecto animi
        aperiam quo aliquam voluptatibus atque perferendis, blanditiis ipsam
        voluptatum et excepturi iste placeat consequatur sed eveniet vero in.
        Necessitatibus quia vel deleniti voluptates obcaecati ex est molestias
        fugiat doloremque architecto, debitis inventore tempora! Lorem ipsum
        dolor sit amet consectetur adipisicing elit . Necessitatibus aperiam
        culpa magni, voluptate nesciunt veniam neque modi repudiandae quidem vel
        ex, sus
      </p>
    </div>
  );
}

export default About;
