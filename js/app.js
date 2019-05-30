const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach(item => item.addEventListener('click', selectItem));

function selectItem(event) {
  removeBorder();
  this.classList.add('tab-border');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
