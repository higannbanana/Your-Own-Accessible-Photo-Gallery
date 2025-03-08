function upDate(previewPic) {
    console.log("Mouse over or focus on image:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

    let mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = `url('${previewPic.src}')`;
    mainImage.innerText = previewPic.alt;
}

function undo() {
    console.log("Mouse leave or blur event triggered.");

    let mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = "url('')";
    mainImage.innerText = "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Adding tabindex to images...");

    let images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }

    console.log("Tabindex added successfully.");
}
