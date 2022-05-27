const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";
document.querySelector("body").appendChild(h2);


// const p = document.createElement("p");
// p.innerHTML = "test text";
// document.querySelector("body").appendChild(p);
// p.style.visibility = "hidden";

const p = document.createElement("p");
p.innerHTML = "test text";
document.querySelector("body").appendChild(p);

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");



  function show(element) {
        p.style.visibility = 'visible';
  };

  function hide(element) {
      p.style.visibility = 'hidden';
  };

  firstName.addEventListener('mouseover', show);
  firstName.addEventListener('mouseout', hide);
  lastName.addEventListener('mouseover', show);
  lastName.addEventListener('mouseout', hide);




const childLinks = [...document.querySelector(".nav-headings").children];


function pageLocation() {
    // if
}
for (i = 0; i < childLinks.length; i++) {
    const link = childLinks[i].children[0];
    link.addEventListener('mouseover', function () {
        link.style.color = '#f72585';
        console.log(link);
    });

    link.addEventListener('mouseout', function () {
        link.style.color = '#fff';
        console.log(link);
    });

    link.addEventListener('click', function () {
        link.style.color = '#f72585';
        console.log(link);
    });

}