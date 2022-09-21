const gifs = [
  "https://media.giphy.com/media/RlOwVBqQRrNWU/giphy.gif",
  "https://media.giphy.com/media/13D9Y0kCSv5du0/giphy.gif",
  "https://media.giphy.com/media/mqcMnkAupKiugMBGPV/giphy.gif",
];

let img_element, txt_element, btn_element; //dom tags we are referencing
let scene = 1;
let player = {
  name: "",
  input: "",
};

function setup() {
  // get references to the dom elements
  img_element = select(".gif-image");
  txt_element = select(".storyText"); // the text element from the HTML
  btn_element = select("#btn"); // the enter button from the HTML
  input_element = select(".input"); // the input field from the HTML
}

// this function gets called when the button is pressed
function onMouseDown() {
  console.log("btnClick");
  let inputValue = input_element.value();
  console.log("inputValue", inputValue, scene);

  if (scene == 1) {
    if (inputValue === "") {
      txt_element.html("Sorry, I didn't hear that. What was your name again?");
    } else {
      player.name = inputValue;
      updateScene();
    }
  } else if (scene == 2) {
    if (inputValue === "") {
      txt_element.html(
        txt_element.html() + "<br />Please enter a response, A or B"
      );
    } else {
      player.input = inputValue;
      updateScene();
    }
  } else if (scene == 3) {
    if (inputValue === "") {
      txt_element.html(
        txt_element.html() + "<br />Please enter a response, A or B"
      );
    } else {
      player.input = inputValue;
      updateScene();
    }
  } else if (scene == 4) {
    if (inputValue === "") {
      txt_element.html(
        txt_element.html() + "<br />Please enter a response, A or B"
      );
    } else {
      player.input = inputValue;
      updateScene();
    }
  }
}

function clearInput() {
  input_element.value("");
  input_element.attribute("placeholder", "Enter your response...");
}

//updates gif and text
function updateScene() {
  console.log("updateScene");
  clearInput();
  if (scene == 1) {
    txt_element.html(
      `Welcome to the deep deep forest  ${player.name}, what would you like to do? <br /><br />A. Let's go! <br />B. I gotta get out of here.`
    );
  }
  if (scene == 2) {
    if (player.input === "A" || player.input === "a") {
      img_element.attribute("src", `${gifs[0]}`);
      txt_element.html(
        `The forest path leads you down a narrow path of trees. <br ><br />A. Keep going <br />B. Turn back`
      );
    }
  }
  if (scene == 3) {
    if (player.input === "A" || player.input === "a") {
      img_element.attribute("src", `${gifs[1]}`);
      txt_element.html(
        `You meet a fox. Would you like to be friends? <br ><br />A. Yes <br />B. No`
      );
    }
  }

  if (scene == 4) {
    if (player.input === "A" || player.input === "a") {
      img_element.attribute("src", `${gifs[2]}`);
      txt_element.html(`The fox has given you a magic gem!`);
    }
  }
  scene++;
}
