module Darts (score) where

score :: Float -> Float -> Int
score x y
  | r <= 1 = 10
  | r <= 5 = 5
  | r <= 10 = 1
  | otherwise = 0
  where r = distance x y



-- `^` is for Integer and `**` is for Float
distance :: Float -> Float -> Float
distance x y = sqrt (x**2 + y**2)

