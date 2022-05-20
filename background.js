const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
  '#efedac',
];

const backGroundColor = document.querySelector('body');
const giveButton = document.querySelector('button');

function handleLinearGradient() {
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];

  if (color1 !== color2) {
    backGroundColor.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
  } else {
    handleLinearGradient();
  }
}

giveButton.addEventListener('click', handleLinearGradient);