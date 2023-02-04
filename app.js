const toggle = document.querySelector('.toggle')
const pageViewHandler = document.querySelector('#pageview-handler')
const pageViewValue = document.querySelector('.previews-count')
const pricingValue = document.querySelector('.price-display')

toggle.addEventListener('click', function () {
  const toggleCircle = toggle.querySelector('.toggle-circle')
  toggleCircle.classList.toggle('toggle-state-change')
  const checkToggleState = toggleCircle.classList.contains(
    'toggle-state-change'
  )

  if (!checkToggleState) {
    toggle.style.backgroundColor = 'hsl(223, 50%, 87%)'
    let value = pricingValue.textContent
  } else {
    let value = pricingValue.textContent
    let discount = (25 / 100) * value
    let discountValue = value - discount
    pricingValue.textContent = `${discountValue}`
    toggle.style.backgroundColor = 'hsl(174, 77%, 80%)'
  }
})
pageViewHandler.addEventListener('input', function () {
  const toggleCircle = toggle.querySelector('.toggle-circle')
  toggleCircle.classList.remove('toggle-state-change')
  toggle.style.backgroundColor = 'hsl(223, 50%, 87%)'

  pricingHandling()
})
function pricingHandling() {
  let value = pageViewHandler.value
  if (value <= '20') {
    pageViewValue.textContent = '10k'
    pricingValue.textContent = '8.00'
  }
  if (value == '40') {
    pageViewValue.textContent = '50k'
    pricingValue.textContent = '12.00'
  }
  if (value == '60') {
    pageViewValue.textContent = '100k'
    pricingValue.textContent = '16.00'
  }
  if (value == '80') {
    pageViewValue.textContent = '500k'
    pricingValue.textContent = '24.00'
  }
  if (value == '100') {
    pageViewValue.textContent = '1M'
    pricingValue.textContent = '36.00'
  }
}
