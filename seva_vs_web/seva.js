let names = ["seva_01.jpg", "seva_02.jpg", "seva_03.jpg"];
let images = document.getElementsByTagName("img");
for (imageElement of images) {
  let r = Math.floor(Math.random() * names.length);
  let file = "seva_img/" + names[r];
  let url = chrome.extension.getURL(file);
  imageElement.src = url;
}
