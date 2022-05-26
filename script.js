const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";
document.querySelector("body").appendChild(h2);



const childLinks = [...document.querySelector(".nav-headings").children];


function pageLocation () {
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

};


// ("home", "mystory", "projects", "contact");

// function linkColoChange (event) {
//     if (link.onmouseover) {
//         link.style.color = '#F72585';
//     } else if (link.onmouseout) {
//         link.style.color = '#F72585';
//     }else {
//         link.style.color = '#fff';
//     }

// };

// link.addEventListener('mouseover', linkColorChange);*/