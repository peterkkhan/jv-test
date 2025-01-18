// .addEventListener()

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

const handler = () => {
  console.log('Parent!')
}

parentEl.addEventListener('click', handler)
childEl.addEventListener('click', () => {
  parentEl.removeEventListener('click', handler)
})