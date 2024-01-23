function virtualEnvironment() {
    const regularFunction = function () {
        console.log(this)
    }

    regularFunction()

    const arrowFunction = () => {
        console.log(this)
    }

    arrowFunction()
}


virtualEnvironment()