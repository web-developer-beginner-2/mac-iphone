 let iphone = document.querySelector('.iphone')
 let purple = document.querySelector('.purple')
 let gold = document.querySelector('.gold')
 let white = document.querySelector('.white')
 let black = document.querySelector('.black')
 let img = document.querySelector('img')

purple.onclick = () => {
iphone.setAttribute('src', " https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578")
}
gold.onclick = () => {
iphone.setAttribute('src', "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519")
}
white.onclick = () => {
iphone.setAttribute('src', "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488")
}
black.onclick = () => {
    iphone.setAttribute('src', "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510")
}