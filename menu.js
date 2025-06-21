import PromptSync from "prompt-sync";
const prompt = PromptSync ();

function showMenu() {
    console.log("\n Main Menu");
    console.log("1. Greet Me");
    console.log("2. Tell a joke");
    console.log("3. Show current time");
    console.log("4. Reverse a word");
    console.log("5. Check if a number is even or odd");
    console.log("6. Calculate square of a number");
    console.log("7. Repeat a phrase");
    console.log("8. Convert Celcius to Fahrenheit");
    console.log("9. Count down");
    console.log("10. Exit")
}

let option;
do {
    showMenu();
    option = prompt("Enter your option (1-10): ");
    switch (option) {
        case "1":
            console.log("Hello, welcome to the menu app!")
            break;
        
        case "2":
            const joke = {
                q: "Why do programmers prefer dark mode?",
                a: "Because light attracts bugs."
            };
            console.log("[JOKE] Why do programmers prefer dark mode?")
            console.log(">>> Because light attracts bugs.")
            break;
        
        case "3":
            let now = new Date();
            console.log("Current time is: ", now.toLocaleTimeString());
            break;

        case "4":
            let word = prompt("Enter a word: ");
            let reversed = word.split("").reverse().join("");
            console.log("Reversed word: ", reversed);
            break;

        case "5":
            let num = parseInt(prompt("Enter a number: "));
            if (isNaN(num)) {
                console.log("Invalid input! Please enter a nimber");
            } else {
                if (num % 2 === 0) {
                    console.log("The number is even.");
                } else {
                    console.log("The number is odd.")
                }
            }
            break;

        case "6":
            let base = parseFloat(prompt("Enter a number: "));
            console.log("Square is: ", base * base);
            break;

        case "7":
            let phrase = prompt("Enter a phrase: ");
            let times = parseInt(prompt("How many time? "));
            for (let i = 0; i < times; i++) {
                console.log(phrase);
            }
            break;

        case "8":
            let C = parseFloat(prompt("Enter Celcius: "));
            let F = C * 1.8 + 32;
            console.log(`${C} = ${F.toFixed(2)}`);
            break;

        case "9":
            let Countdown = parseInt(prompt("Start countdown from: "));
            for (let i = Countdown; i >= 0; i--) {
                console.log(i)
            }
            break;

        case "10":
            console.log("Goodbye");
            break;

            default:
                console.log("Invalid option. Please enter 1-10.");
    }
} while (option !== "10");