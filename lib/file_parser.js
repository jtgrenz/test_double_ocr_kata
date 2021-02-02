

export default class FileParser {
  constructor(entry_parser_class, account_number_class) {
    this.EntryParser = new entry_parser_class(account_number_class);
    this.entry_line_length = this.EntryParser.expected_lines;
  }

  parse(file_data) {
      this.data = file_data;
      this.entries = this._parse_entries();
      this.account_numbers = this.entries.map(entry => this.EntryParser.parse(entry))
  }

  print(){
    let out = "=== Parsed Account Numbers ===\n"
     this.account_numbers.map(account_number => { 
       out += account_number.to_string() + "\n"
      })
    return out;
  }


  // Private Methods

  _parse_entries() {
   const data_lines = this.data.split("\n")
   const entries = [] 
    while (data_lines.length > 0) {
      entries.push(data_lines.splice(0, this.entry_line_length))
    }
    return entries
  }

}
