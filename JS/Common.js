

navigateTo = (button) =>
{
    console.log(button);
    location.href = button;
}


window.addEventListener("load",
(event) =>
{
lineBarBtns = document.getElementsByClassName("lineBarBtn")
lineOneBtns = [];
for(i = 0; i < lineBarBtns.length; i++)
{
isInList = false;
for(j = 0; j < lineOneBtns.length; j++)
{
if(lineBarBtns.item(i) == lineOneBtns[j])
{
isInList = true;
}
}
if(!isInList)
{
lineOneBtns.push(lineBarBtns.item(i));
}

}

for(i = 0; i < lineOneBtns.length; i++)
{
lineOneBtns[i].addEventListener("mouseenter",
(event) =>
{
lineBars = Element;

for(j = 0; j < lineOneBtns.length; j++)
{
if(lineOneBtns[j] == event.target)
{
lineBars = lineOneBtns[j].querySelector(".containLines");
console.log(event.target);
console.log(j);

}

}

console.log(lineBars.children.length);
for(k = 0; k < lineBars.children.length; k++)
{

delay = k * 100;

lineBars.children.item(k).style.transition = "width 1s " + delay + "ms";

}

}

)

lineOneBtns[i].addEventListener("mouseleave",
(event) =>
{
lineBars = Element;

for(j = 0; j < lineOneBtns.length; j++)
{
if(lineOneBtns[j] == event.target)
{
lineBars = lineOneBtns[j].querySelector(".containLines");
console.log(event.target);
console.log(j);
}
}

for(k = 0; k < lineBars.children.length; k++)
{
lineBars.children.item(k).style.transition = "none";
}

}

);

}

}

);

