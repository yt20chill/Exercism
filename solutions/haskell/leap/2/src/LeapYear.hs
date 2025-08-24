module LeapYear (isLeapYear) where

isLeapYear :: Integer -> Bool
isLeapYear year
  | year `divisible` 4 && not (year `divisible` 100) || year `divisible` 400 = True
  | otherwise = False

divisible :: Integer -> Integer -> Bool
divisible a b = a `mod` b == 0