# Nexecur Scheduler

This package aims at scheduling repetitive activation and desactivation of Nexecur security system using [unofficial API](https://github.com/baudev/Nexecur-Unofficial-API).

## Installation

1. `git clone https://github.com/quelqun007/NexecureScheduler.git --recurse-submodules`
2. `npm install`

3. Configure the `config.json` file in the Nexecur-Unofficial-API directory. You should provide the following values:
- `id_site`
- `password` (hash)
- `pin` (hash)

4. Configure users id and password in the `users.json` file.

4. `npm start` to run the script

## License

MIT License

Copyright (c) 2018 Baudev, Quelqun007.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### Legal
This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by Nexecur or any of its affiliates or subsidiaries. This is an independent and unofficial API. Use at your own risk.