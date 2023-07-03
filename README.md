
## Extra Life Donate-athon Widget - Donations add time to countdown

### Maintainer
Jason Sckrabulis (zolloz89)

> If this widget has helped you in any way, please consider donating to my [Extra Life fundraising page](bit.ly/jasonel).

---

### Issues and suggestions

Submit any issues for this repository [here](https://github.com/jasonsckrabulis/extra-life-donation-timer/issues).

---

### Change Log

* Jul 03, 2023: Major rework & public release
* May 25, 2019: First full commit & private release

---

### Repository contents

* README.md  
* fonts  
   * `LetsGoDigitalRegular.ttf`
* `config.js`
* `donation_timer.html`
* `LICENSE.txt`
* `script.js`
* `style.css`

---

### Setup and use

#### 1) Download the repository

Click the green 'Code' button and download as a .zip. Extract that and keep in a known location.

#### 2) Set up `config.js` and `style.css`

Open `config.js` in your favorite text editor and edit the desired values

Parameter | Description
--- | ---
`participantID` | Your Extra Life participantID. It's found as the 6 digits of your fundraising URL. Example: `extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=508911` - participantID = 508911
`marathonStartLength` | The starting length of your marathon, in hours. Time will be added to this number.
`dollarMultiplier` | The multiplier for calculating added time. Default is 1 ($1 * 1 = 1 minute added).
`usePreviousDonations` | An option to include all previous donations as added time. Default is false. Example: if `marathonStartLength` = 0, then `usePreviousDonations` = true then gives you a starting marathon length based on your donation history.
`startDelay` | The length of time before the countdown actually starts once the page is loaded, in minutes.

You can customize the style of the countdown in `style.css`. Default style inspired by [Extra Life Helper by Bread](https://github.com/breadweb/extralife-helper).

#### 3) Add widget to stream

You can now add `donation_timer.html` as a browser source in whatever streaming software you use. As soon as it is added, it will start the script (requiring the `startDelay` parameter).

---

### Notes

* Use caution when refreshing the widget. The amount of time added is dependent on the starting API call when the script starts running. This WILL restart the entire countdown.
* Upon adding the browser source, it will not show a time until the `startDelay` is complete.
