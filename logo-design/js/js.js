const works = document.querySelector('.works')
const openAll = document.querySelector('.slider-openAll')

openAll.addEventListener('click', () => {
  works.style.display = 'block'
})

works.addEventListener('click', () => {
  works.style.display = 'none'
})