document.addEventListener('DOMContentLoaded', function () {
	const graphGrid = document.querySelector('.graph__grid')
	const numberOfCards = 10

	const createCard = () => {
		const card = document.createElement('div')
		card.classList.add('graph__grid-item')

		const box = document.createElement('div')
		box.classList.add('graph__grid-box')

		const image = document.createElement('img')
		image.src = './../../img/istockphoto-1435226078-612x612.jpg'
		image.alt = 'img'

		const button = document.createElement('button')
		button.classList.add('grid__grid-btn')
		button.textContent = 'Button'

		const menu = document.createElement('ul')
		menu.classList.add('graph__grid-menu')

		for (let j = 0; j < 5; j++) {
			const menuItem = document.createElement('li')
			menuItem.textContent = 'Item ' + (j + 1)
			menu.appendChild(menuItem)
		}

		box.appendChild(image)
		card.appendChild(box)
		card.appendChild(button)
		card.appendChild(menu)
		graphGrid.appendChild(card)

		button.textContent = 'Open'
		button.addEventListener('click', function () {
			menu.classList.toggle('menu-active')
			button.textContent = menu.classList.contains('menu-active')
				? 'Close'
				: 'Open'
		})
	}

	for (let i = 0; i < numberOfCards; i++) {
		createCard()
	}
})
