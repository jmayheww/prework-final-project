const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";
document.querySelector("body").appendChild(h2);



const link = document.getElementById("home", "mystory", "projects", "contact");

function linkColoChange (event) {
    if (link.onmouseover) {
        link.style.color = '#F72585';
    } else if (link.onmouseout) {
        link.style.color = '#F72585';
    }else {
        link.style.color = '#fff';
    }

};

link.addEventListener('mouseover', linkColorChange);

