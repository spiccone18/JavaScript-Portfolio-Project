// Random Message Generator

// Arrays of possible message components
const greetings = ["Hello", "Lets GO!", "Hi", "Greetings", "What's up"];
const names = ["Philadelphia", "Bob", "Charlie", "Dana", "Elliott"];
const actions = ["hope you're doing well!", "wanted to check in.", "was thinking about you.", "wanted to say hi!", "hope your day is going great!"];
const emojis = ["😊", "👍", "🙌", "😎", "🎉"];

// Function to generate a random message
function generateMessage() {
    // Randomly pick one element from each array
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    // Construct and return the message
    return `${randomGreeting}, ${randomName}! I ${randomAction} ${randomEmoji}`;
}

// Generate and display a random message
console.log(generateMessage());