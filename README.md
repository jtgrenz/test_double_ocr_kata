## Bank OCR kata

Based on the Kata outlined https://github.com/testdouble/contributing-tests/wiki/Bank-OCR-kata


### Setup

Requires node.js version: `15.5.1`.

1. Install dependencies with `npm install`. 
2. Read in a file of scanned account numbers with `node account_reader.js ${path to file}`
3. You can demo this using a test file using `npm run demo`


### Demo

Given a file containing:

```
 _  _  _  _  _  _  _  _    
| || || || || || || ||_   |
|_||_||_||_||_||_||_| _|  |

    _  _  _  _  _  _     _ 
|_||_|| || ||_   |  |  | _ 
  | _||_||_||_|  |  |  | _|

    _  _     _  _  _  _  _ 
  | _| _||_| _ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _ 

 _  _  _     _  _     _  _ 
|_| _| _||_||_ |_   ||_||_|
|_||_  _|  | _||_|  ||_| _|

```
the following output is generated:

[![alt](https://screenshot.click/2021-02-vpkk8-hukvq.png)](https://screenshot.click/2021-02-vpkk8-hukvq.png)

