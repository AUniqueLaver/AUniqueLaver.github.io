
window.addEventListener("load", 
(event) =>
{

workHeaderBtns = document.querySelector("#WorkDonePage .WorkBarBtns").getElementsByTagName("ul");

for(i = 0; i < workHeaderBtns.length; i++)
{

// workHeaderBtns.item(i).

}

workBtn = document.querySelector("#WorkDonePage .WorkBarBtns li:nth-child(1)");

workBtn.addEventListener("click", 
(event) =>
{

workDoneText = document.querySelector("#WorkDonePage .WorkDoneText .TextContainer .TextDescription .TextStore"); 

console.log(workDoneText.querySelector("p").textContent);

workDoneText.removeChild(workDoneText.querySelector("p"));

paragraphElement = document.createElement("p");

paragraphDescription = "I have done work on installing hardware before, and learnt the essentials to proper installation and maintenace of it. Some of my work include dissembling and rebuilding entire PCs and finding bugs or faults in them. I can confirm that I am able to install and fix hardware if it is needed.";

// I have done work on installing hardware before, and learnt the essentials to proper installation and maintenace of it. Some of my work include dissembling and rebuilding entire PCs and finding bugs or faults in them. I can confirm that I am able to install and fix hardware if it is needed. 

paragraphText = document.createTextNode(paragraphDescription);

paragraphElement.appendChild(paragraphText);

workDoneText.appendChild(paragraphElement);

workDoneImg = document.querySelector("#WorkDonePage .WorkDoneText .TextContainer .TextDescription img"); 

workDoneImg.src = "./Assets/CPU.jpeg";

}

);


workBtn1 = document.querySelector("#WorkDonePage .WorkBarBtns li:nth-child(2)");

workBtn1.addEventListener("click", 
(event) =>
{

workDoneText = document.querySelector("#WorkDonePage .WorkDoneText .TextContainer .TextDescription .TextStore"); 

console.log(workDoneText.querySelector("p").textContent);

workDoneText.removeChild(workDoneText.querySelector("p"));

paragraphElement = document.createElement("p");

paragraphDescription = "I have worked on computer networks before and am familiar with setting and conifguring them. I know how to install networks and the protocols around them. Some of the networking work done includes setting up an file server and being able for users of that network to perform file transfer throughout it.";


paragraphText = document.createTextNode(paragraphDescription);

paragraphElement.appendChild(paragraphText);

workDoneText.appendChild(paragraphElement);

workDoneImg = document.querySelector("#WorkDonePage .WorkDoneText .TextContainer .TextDescription img"); 

console.log(workDoneImg.src);
workDoneImg.src = "./Assets/Network.jpeg";

}

);


workBtn2 = document.querySelector("#WorkDonePage .WorkBarBtns li:nth-child(3)");

workBtn2.addEventListener("click", 
(event) =>
{

workDoneText = document.querySelector("#WorkDonePage .WorkDoneText .TextContainer .TextDescription .TextStore"); 

console.log(workDoneText.querySelector("p").textContent);

workDoneText.removeChild(workDoneText.querySelector("p"));

paragraphElement = document.createElement("p");

paragraphDescription = "I have made and produced mobile apps before, and that I have familarised myself with the development of them. Work I have done also includes a working app that I developed, and anybody can download and use it themselves.";

paragraphText = document.createTextNode(paragraphDescription);

paragraphElement.appendChild(paragraphText);

workDoneText.appendChild(paragraphElement);

workDoneImg = document.querySelector("#WorkDonePage .WorkDoneText .TextContainer .TextDescription img"); 

workDoneImg.src = "./Assets/Apple.png";

}

);


workBtn3 = document.querySelector("#WorkDonePage .WorkBarBtns li:nth-child(4)");

workBtn3.addEventListener("click", 
(event) =>
{

workDoneText = document.querySelector("#WorkDonePage .WorkDoneText .TextContainer .TextDescription .TextStore"); 

console.log(workDoneText.querySelector("p").textContent);

workDoneText.removeChild(workDoneText.querySelector("p"));

paragraphElement = document.createElement("p");

paragraphDescription = "My work done also includes information about the online world, the IP and VOIP protocols are something that I am familiar with, and I can use the online world effectively.";

paragraphText = document.createTextNode(paragraphDescription);

paragraphElement.appendChild(paragraphText);

workDoneText.appendChild(paragraphElement);

workDoneImg = document.querySelector("#WorkDonePage .WorkDoneText .TextContainer .TextDescription img"); 

workDoneImg.src = "./Assets/OnlineWorld.jpeg";

}

);


}

);

