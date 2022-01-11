class Header {

    openShopCartPage() {
        shopPage.render()
    }

    render(count) {
        const html = `
            <div class="header-container">
                 <div class="header-count" onclick="headerPage.openShopCartPage()">
                 🔥${count}
                 </div>
            </div>
        `

        ROOT_HEADER.innerHTML = html

    }
}

const headerPage = new Header()