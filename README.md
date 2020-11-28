![](https://nodei.co/npm/thealtening-js.png?downloads=true)\
**Unofficial** API Wrapper made for [The Altening](https://thealtening.com)

### Example Usage
```js
const Client = require('thealtening-js');
const TheAltening = new Client('1234 /* your token */');

(async () => {
    const res = await TheAltening.generate();
    console.log(res);
    /* Response:
    {
        "token": "example@alt.com",       // Alt token.
        "password": "anything",           // Any password works, this is provided for convenience.
        "username": "Examp**",           // Alt username, but the two last characters are hidden.
        "limit": false,                    // Has the daily limit been reached (*100 alts/24 hours).
        "skin": "555...",                  // Skin token, can be used with the cdn to retrieve skin information of the account.
                                           // E.g.: https://cdn.thealtening.com/skins/body/555....png
        "info": {                         // This object may not have any properties set.
            "hypixel.lvl": "10",            // Level of this account on hypixel.
            "hypixel.rank": "MVP",        // Rank of this account on hypixel.
            "mineplex.lvl": "10",          // Level of this account on mineplex.
            "mineplex.rank": "LEGEND",  // Rank of this account on mineplex.
            "labymod.cape": "true",     // Signifies that this account has a cape from the mod LabyMod.
            "5zig.cape": "true"          // Signifies that this account has a cape from the mod 5Zig.
        } // (Properties are only set when they have a value, e.g.: if an account doesn't have a labymod cape then 'labymod.cape' property is not present)
    }
    */
})();
```

### Methods
#### `.generate()`
Generates an alt token.
```
{
  token: string,
  password: string,
  username: string,
  limit: boolean,
  skin: string,
  info: {},
  valid: boolean
}

```

#### `.license()`
Information about your license.
```
{
  username: string,
  hasLicense: boolean,
  licenseType: string,
  expires: date
}
```

#### `.altInfo(alt)`
Information about an alt.
```
{
  expires: date,
  username: string,
  skin: string,
  cape: string,
  password: string
}
```

#### `.favorite(alt)`
Favorite an alt. (Requires _[Premium](https://panel.thealtening.com/#prices)_))
```
{
  success: boolean
}
```

#### `.favorites()`
View your favorited alts. (Requires _[Premium](https://panel.thealtening.com/#prices)_))
```
[
    {
        altInfo()
    },
    {
        altInfo()
    }
]
```

#### `.private(alt)`
Private an alt. (Requires _[Premium](https://panel.thealtening.com/#prices)_))
```
{
  success: boolean
}
```

#### `.privates()`
View your privated alts. (Requires _[Premium](https://panel.thealtening.com/#prices)_))
```
[
    {
        altInfo()
    },
    {
        altInfo()
    }
]
```