// More Examples

const printWarningMessage = message => console.log(message) //?

const printNumbersRange = (start, end) => {
    for (let i = start; i <= end; i++) {
        console.log(i)
    }
}

printNumbersRange(4,8)

// Parameters always follow a specific order.
// In JS parameters are optional.
// In JS we cannot define a required parameter

const printNumbers = (start, end) => {
    if (start && end) {
        for (let index = start; index < end; index++) {
            console.log(index)
        }
    } else {
        printWarningMessage("Missing Parameter!")
    }
}

printNumbers(15)


