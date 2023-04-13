const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  const inputLength = Number(inputEl.getAttribute('data-length'));
  const inputTextLength = inputEl.value.length;

  if (inputTextLength === inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});