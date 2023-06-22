// Define arrays with different pieces of data
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a fish with no eyes? Fsh!",
    "Why don't skeletons fight each other? They don't have the guts!"
  ];
  
  const openings = [
    "Here's a joke for you:",
    "Get ready to laugh:",
    "Check out this hilarious joke:",
    "I've got a good one for you:",
    "How about this joke:"
  ];
  
  const closings = [
    "Hope that made you smile!",
    "I hope that brightened your day!",
    "Enjoy the joke!",
    "Have a good laugh!",
    "Keep smiling!"
  ];
  
  // Function to generate a random index
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  
  // Function to generate a random joke
  function generateJoke() {
    const opening = openings[getRandomIndex(openings)];
    const joke = jokes[getRandomIndex(jokes)];
    const closing = closings[getRandomIndex(closings)];
    
    const message = `${opening} ${joke} ${closing}`;
    return message;
  }
  
  // Generate and display a random joke
  const randomJoke = generateJoke();
  console.log(randomJoke);