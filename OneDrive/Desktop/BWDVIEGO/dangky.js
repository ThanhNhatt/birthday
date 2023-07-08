const inputLabels = document.querySelectorAll('.input-label');

inputLabels.forEach(label => {
  const input = label.previousElementSibling;
  input.addEventListener('input', () => {
    label.classList.toggle('input-label-hidden', input.value !== '');
  });
});
