const {
  getRandomName,
  getRandomThoughts,
  generateEmails,
} = require('./data'); // Replace with the correct path to your functions file
const fs = require('fs');

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate a random number of users
const generateUsers = (numUsers) => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    const user = {
      name: getRandomName(),
      email: getRandomArrItem(generateEmails([getRandomName()])),
      thoughts: getRandomThoughts(5), // Adjust the number of thoughts as needed
    };
    users.push(user);
  }
  return users;
};

// Write the generated user data to a JSON file
const generatedUsers = generateUsers(20); // Adjust the number of users as needed
const outputPath = './generatedUsers.json'; // Adjust the output path as needed

fs.writeFileSync(outputPath, JSON.stringify(generatedUsers, null, 2));

console.log(`Generated user data has been saved to ${outputPath}`);
