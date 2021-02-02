import FileParser from './lib/file_parser.js'
import EntryParser from './lib/entry_parser.js';
import ParsedAccountNumber from './lib/parsed_account_number.js';
import fs from 'fs';

try {
  const file_data = fs.readFileSync(process.argv[2], 'utf8');
  const parser = new FileParser(EntryParser, ParsedAccountNumber);
  parser.parse(file_data);
  console.log(parser.print());
} catch (err){
  console.error(err);
}







