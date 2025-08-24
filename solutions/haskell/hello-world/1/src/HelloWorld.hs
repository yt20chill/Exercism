-- declares a module named HelloWorld
-- The where keyword begins the body of the module.
module HelloWorld (hello) where

-- `::` has type of
-- hello is a function that takes no args amd return a String
hello :: String
hello = "Hello, World!"


{- If a function takes arguments, the type signature would look something like this: 

func :: argType1 -> argType2 -> returnType. 

The types before the last -> are the types of the arguments, and the type after the last -> is the return type. 

add :: Int -> Int -> Int

equals: (int, int): int

-}