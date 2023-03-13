const CloseBtn = document.getElementById('close-btn');
const InstructionBtn = document.getElementById('instruction-btn');
const intro = document.getElementById('intro');

CloseBtn.addEventListener('click', () => {
    intro.classList.add('display-none');
});

InstructionBtn.addEventListener('click', () => {
    intro.classList.remove('display-none');
});