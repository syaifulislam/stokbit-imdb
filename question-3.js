let input = "(tasd)est"

console.log(findFirstStringInBracket(input))
function findFirstStringInBracket(string) {
    let findFirstBracket = string.indexOf("(")
    if (findFirstBracket >= 0) {
        let findLastBracket = string.indexOf(")")
        if (findLastBracket >= 0) {
            let str = ''
            for (let i = findFirstBracket + 1; i < findLastBracket; i++) {
                str = `${str}${input[i]}`
            }
            return str
        } else {
            return ""
        }
    } else {
        return ""
    }
}