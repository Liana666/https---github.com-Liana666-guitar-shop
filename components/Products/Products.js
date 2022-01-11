class Products {

    constructor() {
        this.activeClass = 'products-element__button_active'
        this.labelAdd = 'Добавить в  корзину'
        this.labelRemove = 'Удалить из корзины'
    }


    changeProductsLocalStorage(element, id) {
        const { pushProduct, products } = localstorageutil.putProducts(id)
        if (pushProduct) {
            element.classList.add(this.activeClass)
            element.innerHTML = this.labelRemove
        } else {
            element.classList.remove(this.activeClass)
            element.innerHTML = this.labelAdd
        }
        headerPage.render(products.length)
    }

    render() {
        const productsStore = localstorageutil.getProducts()
        let htmlCatalog = ''

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = ''
            let activeText = ''

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd
            } else {
                activeClass = ' ' + this.activeClass
                activeText = this.labelRemove
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                        ⚡️ ${price.toLocaleString()} USD
                    </span>
                    <button class="products-element__button${activeClass}" onclick = "productPage.changeProductsLocalStorage(this, '${id}')">
                    ${activeText}
                    </button>
                </li>
            `
        })

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `

        ROOT_PRODUCTS.innerHTML = html
    }
}

const productPage = new Products()