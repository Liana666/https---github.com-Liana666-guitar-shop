function render() {

    const productStore = localstorageutil.getProducts()

    headerPage.render(productStore.length)
    productPage.render()
}

preloaderPage.render()

let CATALOG = []

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body
        preloaderPage.hiddenLoader()
        render()
    })
    .catch(err => {
        preloaderPage.hiddenLoader()
        errorPage.render()
    }) 
