
import { expect, test } from '@jest/globals';
import EntryParser from '../../lib/entry_parser';
import ParsedAccountNumber from '../../lib/parsed_account_number';

const AccountNumberClass = ParsedAccountNumber;

test("EntryParser is constructed with correct defaults", () => {
  const entryParser = new EntryParser(AccountNumberClass);
  expect(entryParser.expected_lines).toBe(4);
  expect(entryParser.expected_line_length).toBe(27);
  expect(entryParser.expected_digits).toBe(9);
});

test("EntryParser#parse throws no error if input invalid", () => {
  const entryParser = new EntryParser(AccountNumberClass);
  const valid_input = "    _  _     _  _  _  _  _ \n" +
                      "  | _| _||_||_ |_   ||_||_|\n" +
                      "  ||_  _|  | _||_|  ||_| _|\n" +
                      "";

  expect(() => { entryParser.parse(valid_input) }).not.toThrow();
});

test("EntryParser#parse throws error if line lengths do not match expected_line_length", () => {
  const entryParser = new EntryParser(AccountNumberClass);
  const invalid_input = " _  _  _  _  _  _  _  _ \n"    +
                        " | || || || || || || |\n"      +
                        "|_||_||_||_||_||_||_||_||_|\n" +
                        "";

    expect(() => { entryParser.parse(invalid_input) }).toThrow();
});

test("EntryParser#parse throws error if input does not contain expected number of lines", () => {
  const entryParser = new EntryParser(AccountNumberClass);
  const invalid_input = " _  _  _  _  _  _  _  _  _ \n" +
                        "| || || || || || || || || |\n"

    expect(() => { entryParser.parse(invalid_input) }).toThrow();
});

test("EntryParser#parse returns a AccountNumberClass", () => {
  const entryParser = new EntryParser(AccountNumberClass);
  const valid_input = "    _  _     _  _  _  _  _ \n" +
                      "  | _| _||_||_ |_   ||_||_|\n" +
                      "  ||_  _|  | _||_|  ||_| _|\n" +
                      "";

  expect(entryParser.parse(valid_input)).toBeInstanceOf(AccountNumberClass);
});

test("EntryParser#parse returns a ParsedAccountNumber", () => {
  const entryParser = new EntryParser(AccountNumberClass);
  const valid_input = "    _  _     _  _  _  _  _ \n" +
                      "  | _| _||_||_ |_   ||_||_|\n" +
                      "  ||_  _|  | _||_|  ||_| _|\n" +
                      "";

  expect(entryParser.parse(valid_input)).toBeInstanceOf(AccountNumberClass);
});
