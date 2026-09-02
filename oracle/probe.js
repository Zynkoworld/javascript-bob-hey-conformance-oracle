const isSilence = (message) => message.replace(/\s+/g, '') === '';
const isShouting = (message) =>
  message.toUpperCase() === message && /[A-Z]/.test(message);
const isAQuestion = (message) => message.endsWith('?');

const hey = (message) => {
  if (isSilence(message)) {
    return 'Fine. Be that way!';
  }
  if (isShouting(message)) {
    if (isAQuestion(message)) {
      return "Calm down, I know what I'm doing!";
    }
    return 'Whoa, chill out!';
  }
  if (isAQuestion(message.trim())) {
    return 'Sure.';
  }
  return 'Whatever.';
};

const __in = ["Tom-ay-to, tom-aaaah-to.", "WATCH OUT!", "Does this cryogenic chamber make me look fat?", "You are, what, like 15?", "Let's go make out behind the gym!", "It's OK if you don't want to go to the DMV.", "1, 2, 3 GO!", "1, 2, 3", "ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!", "Ending with a ? means a question.", ":) ?", "", "          ", "\nDoes this cryogenic chamber make\n me look fat?", "         hmmmmmmm...", "\n\r \t"];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: hey(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
