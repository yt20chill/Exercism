// Package weather provides forecast of weather.
package weather

// CurrentCondition hard coded condition.
var CurrentCondition string
// CurrentLocation hard coded location.
var CurrentLocation string

// Forecast returns a repl string of the weather forecast.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
