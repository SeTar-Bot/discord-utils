# discord-utils
 a module to help you automate some functions

## Table of Contents
- [Installation](#installation)
- [Methods](#methods)
    - [AutoPublish](#autopublish)
- [License](#license)

### Installation

`npm install @setar/utils`

### Methods

#### AutoPublish
> Publish any created Message on the Channel (you can specify the author(s) too)

```js
// ESM
import UtilClient from "@setar/utils"

// CommonJS/CJS
const { Client: UtilClient } = require("@setar/utils")

const myUtils = new UtilClient(myBotClient);
myUtils.autoPublish('channel_id', ['admin_id', 'admin_id_2']);
```

## License
[MIT License](https://github.com/SeTar-Bot/discord-utils/blob/main/LICENSE)