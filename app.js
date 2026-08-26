const searchToggle=document.querySelector('.search-toggle');
const searchPanel=document.querySelector('.search-panel');
const searchInput=document.querySelector('#search');
searchToggle?.addEventListener('click',()=>{searchPanel.classList.add('open');searchInput.focus()});
searchPanel?.querySelector('button').addEventListener('click',()=>searchPanel.classList.remove('open'));
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filters .active').classList.remove('active');button.classList.add('active');document.querySelectorAll('.product').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.kind!==button.dataset.filter)}));
searchInput?.addEventListener('input',()=>{const term=searchInput.value.toLowerCase();document.querySelectorAll('.product').forEach(card=>card.hidden=!card.textContent.toLowerCase().includes(term))});
