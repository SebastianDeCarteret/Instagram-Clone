let logoHome = document.querySelector("#header-logo");
let objectElement;
let isBottomOfPage = false;

logoHome.addEventListener("click", () => {
  location.replace("feed.html");
});

function createAndInsertNewPost() {
  objectElement = document.createElement("object");
  objectElement.setAttribute("class", "post-box");
  objectElement.setAttribute("type", "text/html");
  objectElement.setAttribute("data", "post.html");
  document.body.insertBefore(objectElement, document.getElementById("#here"));
  console.log("created");
}
window.onscroll = function (ev) {
  if (
    window.innerHeight + Math.round(window.scrollY) >=
    document.body.offsetHeight
  ) {
    isBottomOfPage = true;
  }
  if (isBottomOfPage) {
    createAndInsertNewPost();
    isBottomOfPage = false;
  }
};
