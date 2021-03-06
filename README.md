NewsQuest: A Choose Your Own Adventure for the News
=============

Full project documentation can be found on the wiki (https://github.com/slifty/newsquest/wiki).

This document explains how to set up the code.

If you have any questions at all please don't be afraid to ask (check the wiki to find where to ask).

Installing
-------------

Setting up the client and backend

1. Install Node.js (http://nodejs.org/)

2. Install MongoDB (http://www.mongodb.org/)

3. Using a terminal, navigate to the the same directory as this README)

4. Install the Express module (http://expressjs.com/guide.html)

5. Install the Jade module (https://github.com/visionmedia/jade#readme)

6. Install the MongoDB module (http://www.mongodb.org/display/DOCS/node.JS)

7. Install the Mongoose module (http://mongoosejs.com/)

8. Install the xml2js module (https://github.com/Leonidas-from-XIV/node-xml2js)

9. Create a local config file
		cp config.default.js config.js
		vi config.js

Please note that the brains for this (question generation) exists in a separate repository, location TBD.

Starting the Server
-------------

1. start the mongo daemon

    mongod

2. start the node server

    node app.js

Licensing
=============
The MIT License (MIT)
-------------
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.