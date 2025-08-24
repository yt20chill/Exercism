{-# LANGUAGE OverloadedStrings #-}

module Bob (responseFor) where
import qualified Data.Text as T
import Data.Text (Text)
import Data.Char (isUpper, isSpace, isAlpha)


responseFor :: Text -> Text
responseFor question
  | noSpace == "" = "Fine. Be that way!"
  | isYelling && not isQuestion = "Whoa, chill out!"
  | isYelling = "Calm down, I know what I'm doing!"
  | isQuestion = "Sure."
  | otherwise = "Whatever."
  where noSpace = T.filter (\c -> not (isSpace c)) question
        alphabets = T.filter isAlpha noSpace
        isYelling =  not (T.null alphabets) && T.all isUpper alphabets
        isQuestion = T.isSuffixOf "?" noSpace