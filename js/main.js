let dropDown = document.querySelectorAll('.dropdownMenu');
let navLinks = document.querySelectorAll('.navLink');
let smallNav = document.querySelector('.smallNav');
let smallNavContent = document.querySelector('.navDropContent')


smallNav.addEventListener('click', toggleSmallDrop);

navLinks.forEach((e, i) => {
    e.addEventListener('mouseover', function() {openDropdown(i)});
    e.addEventListener('mouseout', function() {closeDropdown(i)});
})

dropDown.forEach((e, i) => {
    e.addEventListener('mouseover', function() {openDropdown(i)});
    e.addEventListener('mouseout', function() {closeDropdown(i)});
})

function openDropdown(i) {
    if(!dropDown[i].classList.contains('active')) dropDown[i].classList.add('active');
}

function closeDropdown(i) {
    dropDown[i].classList.remove('active');
}

function toggleSmallDrop() {
    if(!smallNavContent.classList.contains('active')) smallNavContent.classList.add('active');
    else smallNavContent.classList.remove('active');
}