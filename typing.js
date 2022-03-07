let output = document.querySelector("#sample");
let string = "Start";
let chars = [];
let assembled = "";
let score = 0;
let errors = 0;
let timer = 30;
let letters = [
	"a","b",
	"c","d",
	"e","f",
	"g","h",
	"i","j",
	"k","l",
	"m","n",
	"o","p",
	"q","r",
	"s","t",
	"u","v",
	"w","x",
	"y","z",
]

setInterval(function(){
	timer -= 0.1;
	if (timer <= 0) {
		output.innerText = "Your score: " + ((score*5) - (errors*2))
	}
}, 100)


document.addEventListener("keydown", function(e) {
	if (e.key == string.charAt(0)) {
		string = string.substring(1);
		chars.push(e.key);
		assembled = ""
		chars.forEach(char => {
			assembled = assembled + "<c>" + char + "</c>";
		})
		output.innerHTML = assembled + string;
	} else {
		if (timer > 0) {
		errors += 1
		}
	}

	if (string == "") {
		chars = [];
		assembled = "";
		string = "";
		for (var i = 0; i <= 5; i++) {
			string += letters[random(26)]
		}
		score += 1;
		output.innerHTML = string
	}
})


function random(a) {
	return Math.floor(Math.random() * a)
}