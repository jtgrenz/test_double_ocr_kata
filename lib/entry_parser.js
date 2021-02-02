import DigitStrings from './digit_strings.js';

export default class EntryParser {

  constructor(account_number_class) {
    this.expected_lines = 4;
    this.expected_line_length = 27;
    this.digit_height = 3;
    this.digit_width = 3;
    this.expected_digits = this.expected_line_length / this.digit_width;
    this.AccountNumber = account_number_class;
  }

  parse(input){
    let lines = Array.isArray(input) ? input : input.split("\n");
    lines = this._validate_input_lines(lines);
    const digit_strings = this._parse_lines_to_string_digits_array(lines);
    return new this.AccountNumber(digit_strings);
  }


  // Private methods
  _validate_input_lines(lines){
    // we expect lines to be of equal length. If not, we cannot accurately parse.
    const line_lengths = lines.map(line => line.length);
    if (lines.length !== this.expected_lines) { throw new InvalidInputError(`Entry should contain ${this.expected_lines} lines.`) }
    if (lines[lines.length - 1] !== "") { throw new InvalidInputError("Last line should be blank.")}
    if (!line_lengths.slice(0, (this.expected_lines - 1)).every(line_length => line_length === this.expected_line_length)) {
      throw new InvalidInputError(`Line lengths are not all ${this.expected_line_length}`)
    }
    return lines;
  }

  _parse_lines_to_string_digits_array(lines) {
    const chars = lines.map(line => line.match(/.{1,3}/g));
    if(chars[chars.length -1] == null) { chars.pop() };

    let digits = new Array(chars[0].length).fill("");
    digits = digits.map((digit, i) => {
      return chars.map(line => {
        return digit.concat(line.pop());
      })
    });

    digits = digits.reverse().map(digit => digit.join(""));
    return digits.map(digit_string => {
      return DigitStrings[digit_string] || "?"
    });
  }
}

class InvalidInputError {
  constructor(message) {
    this.message = message;
    this.name = "InvalidInputError";
  }
}
