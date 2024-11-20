const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "p1.jpg") {
        myImage.setAttribute("src", "p2.jpg");
    } else {
        myImage.setAttribute("src", "p1.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Wellcome, ${myName}`;
    }
}


myButton.onclick = function () {
    setUserName();
};
