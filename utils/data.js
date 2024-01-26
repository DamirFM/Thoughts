const users = [
  'Emily White',
  'Brandon Johnson',
  'Jessica Miller',
  'Daniel Davis',
  'Ava Robinson',
  'Ryan Taylor',
  'Sophia Garcia',
  'Ethan Thomas',
  'Olivia Brown',
  'Noah Martin',
  'Isabella Hall',
  'Logan Adams',
  'Chloe Lee',
  'Lucas Turner',
  'Lily Hernandez',
  'Jackson Harris',
  'Emma King',
  'Aiden Cooper',
  'Grace Wright',
  'Carter Mitchell',
  'Abigail Nelson',
  'Liam Perez',
];

const thoughts = [
  "Feeling motivated to tackle a challenging problem today.",
  "Learning new things every day is what makes coding fun!",
  "Excited about the possibilities of machine learning.",
  "I love the feeling when my code finally works!",
  "Trying to master React for my next project.",
  "Thinking about starting a coding blog.",
  "Coding is like solving puzzles; each line of code is a piece.",
  "Feeling inspired after attending a tech conference.",
  "Discussing code with fellow developers is always enlightening.",
  "Working on a side project to improve my skills.",
  "The more I code, the more I realize there is to learn.",
  "Planning to contribute to open source projects soon.",
  "Reflecting on my coding journey; it's been a great adventure.",
  "Pair programming is a fantastic way to learn from others.",
  "Dreaming of creating my own tech startup one day.",
  "Today's challenge: optimizing code for better performance.",
  "Looking forward to a productive coding session!",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user
const getRandomName = () =>
  `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;
// Function to generate emails from names
const generateEmails = (names) => {
    const domain = 'example.com'; // Replace with your desired domain
    return names.map((name) => {
      const [firstName, lastName] = name.split(' ');
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
      return email;
    });
  };

// Function to generate random Thought that we can add to User object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtsId: getRandomArrItem(thoughts),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, generateEmails };
