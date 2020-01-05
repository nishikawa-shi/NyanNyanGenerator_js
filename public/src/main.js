function calculateNekogo() {
    alert("nyanyan");
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
            if (rawText === "") {
                return "Converted cat lang. is shown here."
            }
            return rawText
        }
    }
});