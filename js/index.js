var today = new Date();
// console.log(today.getFullYear());
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = 'Oksana Weigand-Suminski ' + thisYear;
footer.appendChild(copyright);