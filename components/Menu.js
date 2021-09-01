// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

const menuMaker = (menuItems) => {
  /* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.
*/

  const tag_div = document.createElement("div");
  tag_div.classList.add(...["menu"]);
  const tag_ul = document.createElement("ul");

  /*
  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>
*/
  Array.from(menuItems).forEach((element) => {
    const tag_li = document.createElement("li");
    tag_li.textContent = element;
    tag_ul.appendChild(tag_li);
  });

  /*
  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
*/
  const tag_menu_button = document.querySelector(".menu-button");

  /*
  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
*/
  tag_menu_button.addEventListener("click", () => {
    tag_div.classList.toggle("menu--open");
  });

  /*
  Step 5: Don't forget to return your div.menu.
*/
  tag_div.appendChild(tag_ul);
  return tag_div;
}; //end function

/*
  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const temp_menu = menuMaker(menuItems);
const tag_header = document.querySelector(".header");
tag_header.appendChild(temp_menu);
