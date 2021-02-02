export default class ParsedAccountNumber {

  constructor(account_number_array){
    this.account_number_array = account_number_array;
    this.account_number_string = account_number_array.join('')
  }

  is_valid() {
    if(this._account_number_is_illegible()){ return false }
    return this._calculate_checksum() === 0
  }

  to_string() {
    if(this.is_valid()) {
      return this.account_number_string;
    } else if (this._account_number_is_illegible()) {
      return `${this.account_number_string} ILL`;
    } else {
      return `${this.account_number_string} ERR`;
    }
  }

  // Private methods

  _calculate_checksum() {
    /* Checksum calculation is the sum of the digit times the digit position starting at the rightmost mod 11 = 0
    / example
    / account number:  3  4  5  8  8  2  8  6  5
    / position names:  d9 d8 d7 d6 d5 d4 d3 d2 d1
    / [(5 * 1) + (6 * 2) + (8 * 3) ...] mod 11 = 0
    /      d1        d2        d3
    / The checksum is only valid if it returns 0.
    */

    if(this._account_number_is_illegible()) {
      throw new InvalidAccountNumber(
        `Account number contains non numbers. Received: ${this.account_number_string}`)
    } else {
      return this.account_number_array.reverse().reduce((prev, curr, i) => {
        return prev + (curr * (i + 1))
      }, 0) % 11
    }
  }

  _account_number_is_illegible() {
    debugger
    return Number.isNaN(Number(this.account_number_string));
  }
}

class InvalidAccountNumber {
  constructor(message) {
    this.message = message;
    this.name = "InvalidAccountNumber";
  }
}
