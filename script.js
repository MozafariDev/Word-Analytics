let input = document.querySelector(".container_input");
let word_counter = document.querySelector(".word-counter");
let alfabet_counter = document.querySelector(".alfabet-counter");
let twitter_limit = document.querySelector(".twitter-post-lmit");
let redit_limit = document.querySelector(".redit-post-limit");
let alfabet_counter_operation = () => {
  let value = input.value.trim();
  let length = value.length;
  alfabet_counter.textContent = length;
};
let word_counter_operation = () => {
  let value = input.value.trim();
  let word = value.split(/\s+/);
  let length = word.length;
  if (value) {
    word_counter.textContent = length;
  } else {
    word_counter.textContent = `0`;
  }
};
let twitter_limit_operation = () => {
  let value = input.value.trim();
  let alfabet = value.length;
  twitter_limit.textContent = 200 - Number(alfabet);
  if (Number(twitter_limit.textContent) < 0) {
    twitter_limit.classList.add("max_output");
  } else {
    twitter_limit.classList.remove("max_output");
  }
};
let redit_limit_operation = () => {
  let value = input.value.trim();
  let alfabet = value.length;
  redit_limit.textContent = 350 - Number(alfabet);
  if (Number(redit_limit.textContent) < 0) {
    redit_limit.classList.add("max_output");
  } else {
    redit_limit.classList.remove("max_output");
  }
};
let all_operations = () => {
  alfabet_counter_operation();
  word_counter_operation();
  twitter_limit_operation();
  redit_limit_operation();
};
input.addEventListener("input", all_operations);
