class Preloader {

    hiddenLoader() {
        ROOT_LOAD.innerHTML = ''
    }

    render() {
        const html = `
            <div class="preloader-container">
                <img class="preloader__img" src="components/Preloader/img/load.svg" />
            </div>
        `

        ROOT_LOAD.innerHTML = html
    }
}

const preloaderPage = new Preloader()