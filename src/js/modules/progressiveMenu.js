document.addEventListener('DOMContentLoaded', function () {
	const brandsWithModels = [
		{ brand: 'Audi', models: ['A4', 'A5', 'A6', 'A2', 'A3', 'A7', 'Q2'] },
		{
			brand: 'BMW',
			models: ['X3', 'X4', 'X5', 'X6', 'series 1', 'series 2', 'series 3'],
		},
		{ brand: 'MercedesBenz', models: ['C', 'SLS', 'A'] },
		{ brand: 'Toyota', models: ['Camry', 'Avensis', 'Yaris', 'Verso'] },
	]

	brandsWithModels.sort((a, b) => a.brand.localeCompare(b.brand))

	const menuList = document.getElementById('brands__list')

	brandsWithModels.forEach(item => {
		const brandItem = document.createElement('ul')
		brandItem.textContent = item.brand
		menuList.appendChild(brandItem)
		brandItem.classList.add('brand__item')

		item.models.sort((a, b) => a.localeCompare(b))

		const modelList = document.createElement('ul')
		modelList.classList.add('model__list')

		item.models.forEach(model => {
			const modelItem = document.createElement('li')
			modelItem.textContent = model
			modelList.appendChild(modelItem)
			modelItem.classList.add('model__item')
		})

		brandItem.appendChild(modelList)

		brandItem.addEventListener('click', function () {
			modelList.style.display =
				modelList.style.display === 'block' ? 'none' : 'block'
		})
	})
})
