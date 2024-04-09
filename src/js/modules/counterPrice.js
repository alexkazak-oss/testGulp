function formatNumber(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

document.addEventListener('DOMContentLoaded', function () {
	const selectFilter = document.getElementById('selectFilter')
	const filterResult = document.getElementById('filterResult')

	selectFilter.addEventListener('input', function () {
		const formattedValue = formatNumber(selectFilter.value)
		filterResult.textContent = formattedValue
	})
	const minFilterText = document.getElementById('minFilterText')
	const maxFilterText = document.getElementById('maxFilterText')

	minFilterText.textContent = formatNumber(selectFilter.min)
	maxFilterText.textContent = formatNumber(selectFilter.max)

	const confirmedBtn = document.getElementById('confirmValue')
	const confirmedValue = document.getElementById('confirmedValue')

	confirmedBtn.addEventListener('click', function () {
		confirmedValue.textContent = filterResult.textContent
	})
})
