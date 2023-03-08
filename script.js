const buttons = document.querySelectorAll('.btn')
const submitBtn = document.querySelector('#submit-btn')
const selectedRate = document.querySelector('#selected-rate')
const sectionRate = document.querySelector('.rating-state')
const sectionTy = document.querySelector('.thankyou-state')

let rate = 0

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const currentValue = button.value
		buttons.forEach((btn) => {
			const newValue = btn.value
			if (newValue != currentValue) {
				btn.classList.remove('focus')
			} else {
				btn.classList.add('focus')
				rate = newValue
			}
		})
	})
})

submitBtn.addEventListener('click', () => {
	if (rate === 0) {
		return
	}
	selectedRate.innerText = rate
	sectionRate.style.display = 'none'
	sectionTy.style.display = 'flex'
})

document.addEventListener('click', (e) => {
	if (!e.target.matches('button')) {
		buttons.forEach((button) => {
			button.classList.remove('focus')
		})
	}
})
