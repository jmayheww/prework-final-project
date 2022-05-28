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