function main() {
    window.addEventListener('load', yearCurrent);
    let displayExpression = window.document.getElementById('displayExpression')
    const btOpenParenthesis = window.document.getElementById('btOpenParenthesis')
    const btCloseParenthesis = window.document.getElementById('btCloseParenthesis')
    const btNumZero = window.document.getElementById('btNumZero')
    const btNumOne = window.document.getElementById('btNumOne')
    const btNumTwo = window.document.getElementById('btNumTwo')
    const btNumThree = window.document.getElementById('btNumThree')
    const btNumFour = window.document.getElementById('btNumFour')
    const btNumFive = window.document.getElementById('btNumFive')
    const btNumSix = window.document.getElementById('btNumSix')
    const btNumSeven = window.document.getElementById('btNumSeven')
    const btNumEight = window.document.getElementById('btNumEight')
    const btNumNine = window.document.getElementById('btNumNine')
    const btOperAddition = window.document.getElementById('btOperAddition')
    const btOperSubtraction = window.document.getElementById('btOperSubtraction')
    const btOperMultiplication = window.document.getElementById('btOperMultiplication')
    const btOperDivision = window.document.getElementById('btOperDivision')
    const btOperPercentage = window.document.getElementById('btOperPercentage')
    const btOperExponentiation = window.document.getElementById('btOperExponentiation')
    const btNumComma = window.document.getElementById('btNumComma')
    const btOperClearAll = window.document.getElementById('btOperClearAll')
    const btOperClearEntry = window.document.getElementById('btOperClearEntry')
    const btOperEquality = window.document.getElementById('btOperEquality')

    function clickBottonZero() {
        displayExpression.value += btNumZero.value
    }

    function clickBottonOne() {
        displayExpression.value += btNumOne.value
    }

    function clickBottonTwo() {
        displayExpression.value += btNumTwo.value
    }

    function clickBottonThree() {
        displayExpression.value += btNumThree.value
    }

    function clickButtonFour() {
        displayExpression.value += btNumFour.value
    }

    function clickButtonFive() {
        displayExpression.value += btNumFive.value
    }

    function clickButtonSix() {
        displayExpression.value += btNumSix.value
    }

    function clickButtonSeven() {
        displayExpression.value += btNumSeven.value
    }

    function clickButtonEight() {
        displayExpression.value += btNumEight.value
    }

    function clickButtonNine() {
        displayExpression.value += btNumNine.value
    }

    function clickButtonOpenParenthesis() {
        if (!displayExpression.value.includes("(")) {
            displayExpression.value += "("
        } else {
            displayExpression.value += ""
        }
    }

    function clickButtonCloseParenthesis() {
        if (!displayExpression.value.includes(")")) {
            displayExpression.value += ")"
        } else {
            displayExpression.value += ""
        }
    }

    function clickButtonAddition() {
        const lastChar = displayExpression.value.slice(-1)
        if (["+", "-", "x", "÷", "%", ","].includes(lastChar)) {
            displayExpression.value = displayExpression.value.slice(0, -1) + btOperAddition.value
        } else {
            displayExpression.value += btOperAddition.value
        }
    }

    function clickButtonSubtraction() {
        const lastChar = displayExpression.value.slice(-1)
        if (["+", "-", "x", "÷", "%", ","].includes(lastChar)) {
            displayExpression.value = displayExpression.value.slice(0, -1) + btOperSubtraction.value
        } else {
            displayExpression.value += btOperSubtraction.value
        }
    }

    function clickButtonMultiplication() {
        const lastChar = displayExpression.value.slice(-1)
        if (["+", "-", "x", "÷", "%", ","].includes(lastChar)) {
            displayExpression.value = displayExpression.value.slice(0, -1) + btOperMultiplication.value
        } else {
            displayExpression.value += btOperMultiplication.value
        }
    }

    function clickButtonDivision() {
        const lastChar = displayExpression.value.slice(-1)
        if (["+", "-", "x", "÷", "%", ","].includes(lastChar)) {
            displayExpression.value = displayExpression.value.slice(0, -1) + btOperDivision.value
        } else {
            displayExpression.value += btOperDivision.value
        }
    }

    function clickButtonPercentage() {
        const lastChar = displayExpression.value.slice(-1)
        if (["+", "-", "x", "÷", "%", ","].includes(lastChar)) {
            displayExpression.value = displayExpression.value.slice(0, -1) + btOperPercentage.value
        } else {
            displayExpression.value += btOperPercentage.value
        }
    }

    function clickButtonExponentiation() {
        const lastChar = displayExpression.value.slice(0, -1)
        if (isNaN(displayExpression.value)) {
            displayExpression.value = displayExpression.value
        } else if (["+", "-", "x", "÷", "%", ","].includes(lastChar)) {
            displayExpression.value = (displayExpression.value.replace(/,/g, ".")) ** 2
        } else {
            displayExpression.value = (displayExpression.value.replace(/,/g, ".")) ** 2
        }
    }

    function clickButtonComma() {
        const lastChar = displayExpression.value.slice(-1)
        if (displayExpression.value == "") {
            displayExpression.value = "0,"
        } else if (["+", "-", "x", "÷", "%", ","].includes(lastChar)) {
                displayExpression.value = displayExpression.value.slice(0, -1) + btNumComma.value
        } else {
                displayExpression.value = displayExpression.value + btNumComma.value
        }
    }

    function clickButtonClearAll() {
        displayExpression.value = ""
    }

    function clickButtonClearEntry() {
        displayExpression.value = displayExpression.value.slice(0, -1)
    }

    function clickButtonEquality() {
        let valExpression = displayExpression.value.replace(/x/g, "*").replace(/÷/g, "/").replace(/%/g, "/100").replace(/,/g, ".")
        if (displayExpression.value == 0) {
            displayExpression.value += displayExpression.value
        } else {
            displayExpression.value = math.evaluate(valExpression)
        }
    }

    btNumOne.addEventListener('click', clickBottonOne)
    btNumTwo.addEventListener('click', clickBottonTwo)
    btNumZero.addEventListener('click', clickBottonZero)
    btNumThree.addEventListener('click', clickBottonThree)
    btNumFour.addEventListener('click', clickButtonFour)
    btNumFive.addEventListener('click', clickButtonFive)
    btNumSix.addEventListener('click', clickButtonSix)
    btNumSeven.addEventListener('click', clickButtonSeven)
    btNumEight.addEventListener('click', clickButtonEight)
    btNumNine.addEventListener('click', clickButtonNine)
    btOpenParenthesis.addEventListener('click', clickButtonOpenParenthesis)
    btCloseParenthesis.addEventListener('click', clickButtonCloseParenthesis)
    btOperAddition.addEventListener('click', clickButtonAddition)
    btOperSubtraction.addEventListener('click', clickButtonSubtraction)
    btOperMultiplication.addEventListener('click', clickButtonMultiplication)
    btOperDivision.addEventListener('click', clickButtonDivision)
    btOperPercentage.addEventListener('click', clickButtonPercentage)
    btOperExponentiation.addEventListener('click', clickButtonExponentiation)
    btNumComma.addEventListener('click', clickButtonComma)
    btOperClearAll.addEventListener('click', clickButtonClearAll)
    btOperClearEntry.addEventListener('click', clickButtonClearEntry)
    btOperEquality.addEventListener('click', clickButtonEquality)

    displayExpression.addEventListener("input", function () {
        const allowedCharacters = /[0-9%xX÷+\()-]/g;
        const val = this.value
        const lastChar = val.slice(-1)
        const secondLastChar = val.slice(-2, -1)
        if(["+", "-", "x", "÷", "%", ","].includes(lastChar) && ["+", "-", "x", "÷", "%", ","].includes(secondLastChar)) {
            this.value = val.slice(0, -1)
        }
        this.value = this.value.match(allowedCharacters)?.join("") || "";
    })
}

main()