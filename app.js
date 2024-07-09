// Accessing the root element
const root = document.documentElement;
let change = 0;
// Changing CSS variables
const p = document.querySelector(`p`);

function changeColor(primary, secondary) {
  root.style.setProperty("--primary-color", primary);
  root.style.setProperty("--secondary-color", secondary);
}
p.addEventListener("click", () => {
  if (change === 0) {
    changeColor(`#ff1f11`, `#013021`);
    change = 1;
  } else if (change === 1) {
    changeColor(`#331B3F`, `#ACC7B4`);
    change = 2;
  } else if (change === 2) {
    changeColor(`#ACC7B4`, `#331B3F`);
    change = 3;
  } else if (change === 3) {
    changeColor(`#F5D042`, `#0A174E`);
    change = 4;
  } else if (change === 4) {
    changeColor(`#9CC3D5`, `#101820`);
    change = 5;
  } else if (change === 5) {
    changeColor(`#50586C`, `#DCE2F0`);
    change = 6;
  } else if (change === 6) {
    changeColor(`#0A174E`, `#F5D042`);
    change = 7;
  } else if (change === 7) {
    changeColor(`#DCE2F0`, `#50511C`);
    change = 8;
  } else if (change === 8) {
    changeColor(`#101820`, `#9CC3D5`);
    change = 9;
  } else if (change === 9) {
    changeColor(`#7b9a4c`, `#FCF6F5`);
    change = 10;
  } else if (change === 10) {
    changeColor(`#FCFf35`, `#112255`);
    change = 11;
  } else if (change === 11) {
    changeColor(`#112255`, `#F2AA4C`);
    change = 12;
  } else if (change === 12) {
    changeColor(`#101820`, `#fb9acc`);
    change = 13;
  } else if (change === 13) {
    changeColor(`#FCF6F5`, `#7b9acc`);
    change = 14;
  } else if (change === 14) {
    changeColor(`#F8AA4C`, `#101820`);
    change = 15;
  } else if (change === 15) {
    changeColor(`#7bfadc`, `#1f8820`);
    change = 16;
  } else if (change === 16) {
    changeColor(`#F8bbfC`, `#18114C`);
    change = 17;
  } else if (change === 17) {
    changeColor(`#6f6820`, `#1f3411`);
    change = 83;
  } else {
    changeColor(`purple`, `#f3f9df`);
    change = 0;
  }
});
