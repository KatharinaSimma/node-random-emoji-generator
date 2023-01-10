import emoji from 'node-emoji';

const userEmoji = process.argv[2];
let result;

if (!userEmoji) {
  result = emoji.random().emoji;
} else if (emoji.hasEmoji(userEmoji)) {
  result = emoji.get(userEmoji);
} else {
  result = `${userEmoji} is not a valid emoji. Try again!`;
}

console.log(result);
