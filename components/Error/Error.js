class Error {

    render() {

        const html = `
            <div class="error-container">
             <div class="error-message">
                    <h3>Нет доступа! 😓</h3>
                    <p>Попробуйте зайти позже</p>
                </div>
            </div>
        
        `
        ROOT_ERROR.innerHTML = html

    }
}

const errorPage = new Error()