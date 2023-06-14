// var menu = document.getElementById('menu');
// var heading = document.getElementById('heading-and-supporting-text');
// var services = document.getElementById('menu-services');
// var subMenuServices = document.getElementById('sub-menu-services');
// var color = document.getElementById('color');
// var home = document.getElementById('banner-logo');
// console.log(menu)
// console.log(heading)
// var mobileMenu = document.getElementById('menu-mobile');
// console.log(mobileMenu)

//MObile menu button 
// mobileMenu.onclick = function () {
//     var isClosedMenu = menu.style.display == 'flex';
//     var isClosedHeading = heading.style.display == 'none';
//     menu.style.display = 'flex';
//     heading.style.display = 'none';
   
//     if (isClosedMenu) {
//         menu.style.display = 'none';
//     }

//     if (isClosedHeading) {
//         heading.style.display = 'flex';
//     }

//     if (subMenuServices.style.display == 'flex' && !isClosedMenu ) {
//         menu.style.display = 'none';
//         subMenuServices.style.display = 'none';
//         color.style.display = 'flex';
//     }
// }

//Submenu service button
// services.onclick = function () {
//     subMenuServices.style.display = 'flex';
//     heading.style.display = 'none';
//     menu.style.display = 'none';
//     color.style.display = 'none';
// }

//
// home.onclick = function () {
//     menu.style.display = 'flex';
//     subMenuServices.style.display = 'none';
//     heading.style.display = 'flex';
//     color.style.display = 'flex'
// }

const toggleButtons = document.querySelectorAll('.toggle-button');
for (let i = 0; i < toggleButtons.length;i++) {
    console.log(toggleButtons[i].id)
}

toggleButtons.onclick = function () {
    console.log(toggleButtons)
}


