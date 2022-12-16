var stars = document.getElementsByClassName("star");
var emoji = document.getElementById("emoji");
stars[0].addEventListener("mouseover", function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#e4e4e4";
  stars[2].style.color = "#e4e4e4";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(0)";
});
stars[1].addEventListener("mouseover", function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#e4e4e4";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-100px)";
});
stars[2].addEventListener("mouseover", function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-200px)";
});
stars[3].addEventListener("mouseover", function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-300px)";
});
stars[4].addEventListener("mouseover", function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#ffd93b";
  emoji.style.transform = "translateX(-400px)";
});
const handle_star_click = (rate) => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxp9_2lsEzLzqlWswkx1qWdRK7g6AkYwi_JUM9MOjOvswufGMUyqVH9xk6E47KA0TMqfQ/exec";
  console.log(rate);
  document.querySelector(".feedbackbox").style.display = "none";
  document.querySelector("#form_title").style.marginTop = "40vh";
  document.querySelector("#form_title").innerHTML = "Thank you for rating us!";
  document.querySelector("#form_title").style.fontSize = "1.5rem";
  const _form = new FormData();
  _form.append("Rating", rate);
  fetch(scriptURL, { method: "POST", body: _form })
    .then((response) => {
      console.log("Success!");
    })
    .catch((error) => console.error("Error!", error.message));
};
stars[0].addEventListener("click", () => handle_star_click(1));
stars[1].addEventListener("click", () => handle_star_click(2));
stars[2].addEventListener("click", () => handle_star_click(3));
stars[3].addEventListener("click", () => handle_star_click(4));
stars[4].addEventListener("click", () => handle_star_click(5));
