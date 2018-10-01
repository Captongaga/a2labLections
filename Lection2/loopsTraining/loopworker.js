function calculate() {
    data = document.getElementById("starsAmount").value
    data = parseInt(data)

    var result = ""
    var i = 0
    var j=0
    
    while ( i < data) {
        j=0
        while ( j < data)
        {
            result += "*"
            j+=1
        }
        result += "\n"
        i += 1
    }
    
    document.getElementById("result").value = result
}
