
// window.addEventListener("load",
// (event) =>
// {
// container = document.querySelector(".container");
//
// container.style.top = 0;
//
// }
// );

const startDate = Date.now();

moveContainer = () =>
{
secsPassed = Date.now() - startDate;

container = document.querySelector(".container");
offsetY = Math.sin(secsPassed / 1000) * 100;

container.style.top = offsetY;
// console.log(offsetY);
console.log(secsPassed);

}


// for(i = 0; i < lineBarBtns.length; i++)
// {
//
// console.log(lineBarBtns.item(i).className);
//
// }

// lineBarBtn = document.getQuerySelector()

// lineBarBtn.addEventListener("hover", 
// (event) =>
// {
//
// }
// );

