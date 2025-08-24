package hamming

import "errors"

func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
        return 0, errors.New("hi")
    }
    d := 0
    for i := range a {
        if b[i] != a[i] {
            d++
        }
    }
    return d, nil
}
