
import { expect, test } from '@jest/globals';
import ParsedAccountNumber from '../../lib/parsed_account_number';
import EntryParser from '../../lib/entry_parser';


test("ParsedAccountNumber#to_string returns an account number if valid", () => {
  const entryParser = new EntryParser(ParsedAccountNumber);
  const valid_input = " _  _  _  _  _  _  _  _    \n" +
                      "| || || || || || || ||_   |\n" +
                      "|_||_||_||_||_||_||_| _|  |\n" +
                      "";
  const account_number = entryParser.parse(valid_input);
  expect(account_number.to_string()).toBe("000000051");
});

test("ParsedAccountNumber#to_string returns an account number + ILL if illegible", () => {
  const entryParser = new EntryParser(ParsedAccountNumber);
  const valid_input = " _  _  _  _  _  _  _  _    \n" +
                      "| || || ||  | || || ||_   |\n" +
                      "| || ||_|| ||_||_||_| _|  |\n" +
                      "";
  const account_number = entryParser.parse(valid_input);
  expect(account_number.to_string()).toBe("??0?00051 ILL");
});

test("ParsedAccountNumber#to_string returns an account number + ERR if invalid checksum", () => {
  const entryParser = new EntryParser(ParsedAccountNumber);
  const valid_input = " _  _  _     _  _     _  _ \n" +
                      "|_| _| _||_||_ |_   ||_||_|\n" +
                      "|_||_  _|  | _||_|  ||_| _|\n" +
                      "";
  const account_number = entryParser.parse(valid_input);
  expect(account_number.checksum).not.toBe(0);
  expect(account_number.to_string()).toBe("823456189 ERR");
});
