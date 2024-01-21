function virtualEnvironment() {
    const regularFunction = function () {
        console.log(this)
    }

    const arrowFunction = () => {
        console.log(this)
    }
}