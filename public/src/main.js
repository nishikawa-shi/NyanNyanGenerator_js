function copyNekogo() {
    let currentRawText = document.getElementsByClassName("calculation-section__input")[0].value
    if (currentRawText === "") {
        return
    }

    let element = document.getElementsByClassName("calculation-section__nekosan")[0]

    let selection = window.getSelection()
    selection.removeAllRanges()

    let range = document.createRange()
    range.selectNodeContents(element)
    selection.addRange(range)
    document.execCommand("copy")
    selection.removeAllRanges()
    alert(`copied ${element.textContent} 😺`)
}

var nyannyanApp = new Vue({
    el: "#nyannyan",
    data: {
        placeHolder: "Type text here.",
        rawText: ""
    },
    computed: {
        nyanText: function() {
            return this.getNekogo(this.rawText)
        }
    },
    methods: {
        getNekogo: function(rawText) {
            const NEKOSAN_NAKIGOE_TYPE1 = "Meow"
            const NEKOSAN_NAKIGOE_TYPE2 = "Miaow"
            const NEKOSAN_NAKIGOE_TYPE3 = "Mew"
            const NEKOSAN_NAKIGOE_TYPE4 = "Meoow"
            const NEKOSAN_NAKIGOE_TYPE5 = "Meeow"
            const NEKOSAN_NAKIGOE_TYPE6 = "Miau"
            const NEKOSAN_NAKIGOE_TYPE7 = "Miaaaow"
            const NEKOSAN_NAKIGOE_TYPE8 = "Myau"
            const NEKOSAN_NAKIGOE_TYPE9 = "Nyan"
            const NEKOSAN_NAKIGOE_TYPE99 = "Purr"

            if (rawText === "") {
                return "Converted cat lang. is shown here."
            }
            let hashObj = new jsSHA("SHA-256", "TEXT");
            hashObj.update(rawText)
            let nyanRawBody = hashObj.getHash("HEX").slice(0, 3)

            let nyan = ""
            for (let i of nyanRawBody) {
                switch(i) {
                    case "0":
                    case "1":
                        nyan += NEKOSAN_NAKIGOE_TYPE1
                        break
                    case "2":
                    case "3":
                        nyan += NEKOSAN_NAKIGOE_TYPE2
                        break
                    case "4":
                    case "5":
                        nyan += NEKOSAN_NAKIGOE_TYPE3
                        break
                    case "6":
                    case "7":
                    case "8":
                        nyan += NEKOSAN_NAKIGOE_TYPE4
                        break
                    case "9":
                    case "a":
                        nyan += NEKOSAN_NAKIGOE_TYPE5
                        break
                    case "b":
                        nyan += NEKOSAN_NAKIGOE_TYPE6
                        break
                    case "c":
                        nyan += NEKOSAN_NAKIGOE_TYPE7
                        break
                    case "d":
                        nyan += NEKOSAN_NAKIGOE_TYPE8
                        break
                    case "e":
                    case "f":
                        nyan += NEKOSAN_NAKIGOE_TYPE9
                        break
                    default:
                        nyan += NEKOSAN_NAKIGOE_TYPE99
                }
            }

            let nyanRawSuffix = hashObj.getHash("HEX").slice(-2, -1)
            switch(nyanRawSuffix) {
                case "0":
                    case "1":
                        nyan += "😊"
                        break
                    case "2":
                        nyan += "🙁"
                        break
                    case "4":
                        nyan += "🐤"
                        break
                    case "7":
                    case "8":
                        nyan += "🐟"
                        break
                    case "9":
                        nyan += "🏆"
                        break
                    case "b":
                        nyan += "🌈"
                        break
                    case "c":
                        nyan += "🎊"
                        break
                    case "e":
                        nyan += ":)"
                        break
                    case "f":
                        nyan += "XD"
                        break
                    default:
                        break
            }
            return nyan
        }
    }
});