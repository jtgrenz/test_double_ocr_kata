
import { expect, test } from '@jest/globals';
import ParsedAccountNumber from '../../lib/parsed_account_number';
import EntryParser from '../../lib/entry_parser';
import FileParser from '../../lib/file_parser';
import fs from 'fs';
import path from 'path';

const test_file_path = path.resolve('test/data/scanned_numbers.txt');
const file_data = fs.readFileSync(test_file_path, 'utf8');
const EntryParserClass = EntryParser;
const AccountNumberClass = ParsedAccountNumber;

test("FileParser read whole file and prints correct account numbers", () => {
  const file_parser = new FileParser(EntryParserClass, AccountNumberClass);
  file_parser.parse(file_data);
  const expected_output = `=== Parsed Account Numbers ===
000000051
49006771? ILL
1234?678? ILL
823456189 ERR
`
  expect(file_parser.print()).toBe(expected_output);
});
