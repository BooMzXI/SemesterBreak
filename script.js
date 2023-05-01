const dateBoxes = document.querySelectorAll('.date-box');
const panel = document.querySelector('.panel');

let panelOpen = false;
let lastClickedButton = null;
let data = null;

fetch('data.json')
  .then(response => response.json())
  .then(json => data = json)
  .catch(error => console.error(error));

dateBoxes.forEach(dateBox => {
  dateBox.addEventListener('click', () => {
    const id = dateBox.getAttribute('data-id');

    const message = data.find(item => item.id === id)?.message;

    if (lastClickedButton === dateBox) {
      panelOpen = !panelOpen;
    } 
    
    else {
      panelOpen = true;
      panel.innerHTML = message.replace(/\n/g, '<br>');
      dateBox.style.marginTop = 0 + 'px';
      panel.classList.add('openPanel');
      lastClickedButton = dateBox;
    }


    if (panelOpen) {
      panel.style.display = 'block';
    } 
    
    else {
      panel.style.display = 'none';
      dateBox.style.marginTop = '5px';
      lastClickedButton = null;
    }
  });
});
