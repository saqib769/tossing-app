// let cities = ["Karachi" , "Lahore" , "Quetta"];

// var username = prompt("Enter your city");

// if(username.toUpperCase() === "Karachi"){
//     console.log("you live in dangerous city".toUpperCase())
// } else if(username.toUpperCase() === "Lahore"){
//     console.log("you live in safest city".toUpperCase())
// } else if(username.toUpperCase() === "Quetta"){
//     console.log("you live in beautiful city".toUpperCase())
// } else{
//     console.log("kuch nhi chl rha")
// }


function Toss(){

    let outcome = Math.random() < 0.5 ? "Chand" : "Masjid";

    
    let resultDiv = document.querySelector("#result");

    let resultImage = document.querySelector("#resultImage");

    if(outcome === "Chand"){
        resultDiv.textContent = "You loss the toss";
        resultImage.src = "./images/download.jpeg";
    } else{
        resultDiv.textContent = "You won the toss";
        resultImage.src = "./images/download (1).jpeg";
    }

    resultImage.style.display = 'block';
}