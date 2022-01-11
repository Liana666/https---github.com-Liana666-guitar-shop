class Shop {

    shopClear() {
        ROOT_SHOP.innerHTML = ''
    }

    render() {
        const productStore = localstorageutil.getProducts()
        let htmlCatalog = ''
        let totalPrice = 0

        CATALOG.forEach(({ id, name, price }) => {
            if (productStore.includes(id)) {
                htmlCatalog += `
                <tr>
                    <td class="shop-element__name">
                    ⚡️ <span>${name}</span>
                    </td>
                    <td class="shop-element__price">${price.toLocaleString()} USD</td>
                </tr>
                `
                totalPrice += price
            }
        })

        const html = `
            <div class="shop-container">
                <div class="shop-close" onclick="shopPage.shopClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                    <td class="shop-element__name">
                    💥<span>Сумма:</span>
                    </td>
                    <td class="shop-element__price">${totalPrice.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `

        ROOT_SHOP.innerHTML = html

    }

}

const shopPage = new Shop()