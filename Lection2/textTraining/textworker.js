function encrypt() {
    text = document.getElementById("text").value
    kod = document.getElementById("kod").value

    kod = parseInt(kod)

    var result = ""
    var i = 0

    while ( i < text.length )
    {
        letter = text[i]
        letter = String.charCodeAt(letter)
        letter = letter + kod

        result += String.fromCharCode(letter)
        i++
    }
    
    document.getElementById("encrypted").value = result
}
