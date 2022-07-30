import style from	 "./style.css";
import avatar from "./images/avatar.png";

const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const title = document.createElement("h1");
title.innerText = "About";
container.append(title);

const section = document.createElement("section");
section.className = "section";
container.append(section);

const img = document.createElement("img");
img.className = "img";
img.src = `${avatar}`;
section.append(img);

const tabs = document.createElement("div");
tabs.className = "tabs-inner";
section.append(tabs);

const btnContainer = document.createElement("div");
btnContainer.className = "btn-container";
tabs.append(btnContainer);

const button1 = document.createElement("button");
button1.className = "btn";
button1.dataset.tab = "#tab-1";
button1.innerText = "About Us";
btnContainer.append(button1);

const button2 = document.createElement("button");
button2.className = "btn";
button2.dataset.tab = "#tab-2";
button2.innerText = "Our Mission";
btnContainer.append(button2);

const button3 = document.createElement("button");
button3.className = "btn";
button3.dataset.tab = "#tab-3";
button3.innerText = "Our Goals";
btnContainer.append(button3);

const tabsContent = document.createElement("div");
tabsContent.className = "tabs-content";
tabs.append(tabsContent);

const tabsItem = document.createElement("div");
tabsItem.className = "tabs-item";
tabsItem.id = "tab-1";
tabsContent.append(tabsItem);

const subTitle1 = document.createElement("h4");
subTitle1.className = "tabs-title";
subTitle1.innerText = "About Us";
tabsItem.append(subTitle1);

const text1 = document.createElement("p");
text1.className = "tabs-desc";
text1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident corruptinon aperiam distinctio molestiae suscipit, ab reiciendis officiis laborum corporis obcaecati perferendisullam autem itaque excepturi unde pariatur expedita. Sapiente provident corruptinon aperiam distinctio molestiae suscipit, ab reiciendis officiis laborum corporis obcaecati perferendisullam autem itaque excepturi unde pariatur expedita.";
tabsItem.append(text1);

const tabsItem2 = document.createElement("div");
tabsItem2.className = "tabs-item";
tabsItem2.id = "tab-2";
tabsContent.append(tabsItem2);

const subtitle2 = document.createElement("h4");
subtitle2.className = "tabs-title";
subtitle2.innerText = "Our Mission";
tabsItem2.append(subtitle2);

const text2 = document.createElement("p");
text2.className = "tabs-desc";
text2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident corruptinon aperiam distinctio molestiae suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident corruptinon aperiam distinctio molestiae suscipit.";
tabsItem2.append(text2);

const tabsItem3 = document.createElement("div");
tabsItem3.className = "tabs-item";
tabsItem3.id = "tab-3";
tabsContent.append(tabsItem3);


const subtitle3 = document.createElement("h4");
subtitle3.className = "tabs-title";
subtitle3.innerText = "Our Goals";
tabsItem3.append(subtitle3);

const text3 = document.createElement("p");
text3.className = "tabs-desc";
text3.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident corruptinon aperiam distinctio molestiae suscipit, ab reiciendis officiis laborum corporis obcaecati perferendisullam autem itaque excepturi unde pariatur expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident corruptinon aperiam distinctio molestiae suscipit, ab reiciendis officiis laborum corporis obcaecati perferendisullam autem itaque excepturi unde pariatur expedita.";
tabsItem3.append(text3);


// Tabs Event:
const btn = document.querySelectorAll(".btn");
const tabsItems = document.querySelectorAll(".tabs-item");

btn.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId); 

		if( ! currentBtn.classList.contains("active")) {
			btn.forEach(function(item) {
			item.classList.remove("active");
		});

		tabsItems.forEach(function(item) {
			item.classList.remove("active");
		});

		currentBtn.classList.add("active");
		currentTab.classList.add("active");
		}
	});
});

document.querySelector(".btn:nth-child(3)").click();
