const buttons = document.querySelectorAll('.btn')
const submitBtn = document.querySelector('#submit-btn')
const selectedRate = document.querySelector('#selected-rate')
const sectionRate = document.querySelector('.rating-state')
const sectionTy = document.querySelector('.thankyou-state')

let rate = 0

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		buttons.forEach((btn) => {
			btn.classList.remove('focus')
		})
		button.classList.add('focus')
		rate = button.value
	})
})

submitBtn.addEventListener('click', () => {
	if (!rate) return
	selectedRate.innerText = rate
	sectionRate.style.display = 'none'
	sectionTy.style.display = 'flex'
})

document.addEventListener('click', (e) => {
	if (!e.target.matches('button')) {
		buttons.forEach((button) => {
			button.classList.remove('focus')
			rate = 0
		})
	}
})
