package isbn

import "strings"
import "fmt"
import "strconv"
import "errors"



func IsValidISBN(isbn string) bool {
    fmt.Println(isbn)
    t := strings.ReplaceAll(isbn, "-", "")
    if len(t) != 10 {
        return false
    }
    sum := 0
	for i := 0; i < 10; i++ {
        digit, err := toDigit(t[i])
        if err != nil || (digit == 10 && i != 9) {return false}
        sum += int(digit) * (10 - i)
        fmt.Println(digit, sum)
    }
    return sum % 11 == 0
}

func toDigit(s byte) (int64, error) {
	 valid := [11]byte{
    	'1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'X'}

    if !includes(valid, s) {
        return 0, errors.New("")
    }
    if s == 'X' {
        return 10, nil
    }
    d, err := strconv.ParseInt(string(s),  10, 16)
    return d, err
}

func  includes(slice [11]byte, element byte) bool {

    for _, v := range slice {
        if v == element {
            return true
        }
    }
    return false
}

