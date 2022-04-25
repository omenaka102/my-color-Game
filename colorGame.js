var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

/* Looping through the mode buttons */
for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");

    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    /* if(this.textContent === "Easy"){
        numSquares = 3;
    } else {
        numSquares = 6;
    } */
    
    reset();

    //figure out how many squares to show
    //pick new colors
    //pick a pickedColor
    //update page to reflect changges
    });
}

function reset(){
    //generate all new random colors.
    colors = generateRandomColors(numSquares);
    //Pick a new color from the random colors.
    pickedColor = pickColor();
    //Change the color display to match the picked color.
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    messageDisplay.textContent = "";
    resetButton.textContent = "new colors"
    
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = steelblue;
}

/* easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});
 */
resetButton.addEventListener("click",function(){
   reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    // Add colors to squares.
    squares[i].style.backgroundColor = colors[i];

    // Add click events to squares.
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        // console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor){
            messageDisplay.textContent ="Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again";
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent  = "Try Again"
        }
    });
}

function changeColors(color){
    // Loop through all the squares

    for (var i = 0; i < squares.length; i++){
        // Change the color to match the given color.
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
  var random =  Math.floor(Math.random() * colors.length); 
  return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //get random color and push into arr
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
     return  "rgb(" + r +", "  + g + ", "  + b +")";   
}
