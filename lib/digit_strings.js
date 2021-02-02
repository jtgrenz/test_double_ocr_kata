/*
 This parser accepts input in the form of digits that are represented as pipe and underscores.
 Each digit is represented over 4 lines with the final line being blank.
 To read in a string of such numbers, each line must be chunked by 3 characters
 over 3 lines. Every 3 characters will be pushed into an array coresponding to the
 the position in the larger string of numbers. Once a string of printed numbers is fully
 parsed, we can determine the digit scanned by comparing it to the known flattened string
 representation of numbers 0 - 9.
*/

//  _
// |_|
//  _|
const Nine = " _ |_| _|";

//  _
// |_|
// |_|
const Eight = " _ |_||_|";

// _
//  |
//  |
const Seven = " _   |  |";

//  _
// |_
// |_|
const Six = " _ |_ |_|";

//  _
// |_
//  _|
const Five = " _ |_  _|";

//
// |_|
//   |
const Four = "   |_|  |";

//  _
//  _|
//  _|
const Three = " _  _| _|";

//  _
//  _|
// |_
const Two = " _  _||_ ";

//
//  |
//  |
const One = "     |  |";

//  _
// | |
// |_|
const Zero = " _ | ||_|";

const DigitStrings = {}
DigitStrings[`${Zero}`]   = '0';
DigitStrings[`${One}`]    = '1';
DigitStrings[`${Two}`]    = '2';
DigitStrings[`${Three}`]  = '3';
DigitStrings[`${Four}`]   = '4';
DigitStrings[`${Five}`]   = '5';
DigitStrings[`${Six}`]    = '6';
DigitStrings[`${Seven}`]  = '7';
DigitStrings[`${Eight}`]  = '8';
DigitStrings[`${Nine}`]   = '9';

export default DigitStrings;
