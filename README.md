# Branch University MonsterSite

## Overview
Branch University MonsterSite is a web app that includes a landing page (with a custom Branch QR Code), a shop, and a profile page. The Branch QR Code is meant to give users a way to download either the Android or iOS app version of this demo to their phones.

## Structure
Some of the main files and folders in this repo:
- `index.html`: Main HTML file; used for the landing page and to initialize the Branch Web SDK
- `styles.css`: The CSS file for all styles
- `branch_events.js`: Creates and logs Branch Commerce Events
- `shop/`
  - `shop.js`: Loads monsters to the shop
  - `item.js`: Constructs monsters
- `profile/`
  - `profile.js`: Manages user login/logout and loading user's profile
 
## SDK Requirements
This project is built using whatever the [most recent version](https://help.branch.io/developers-hub/docs/web-version-history) of the Branch Web SDK is.
 
## Getting Started
To run this web app locally:

1. Clone the repository: `git clone https://github.com/bu-monsters/bu-monsters.github.io.git`
2. Open `index.html` in your web browser.

## Landing Page Functionality
When the user hits the landing page, they can use their phone to scan the QR code.

On Android, this will open a Google Drive link, where they can download the `.apk` file. When they open the file, they'll be prompted to install and open the app.

On iOS, the user will be prompted to install TestFlight if they don't have it installed already. Once they install it, open it, and walk through the TestFlight prompts, they'll be given a button to install the iOS app. If they already have TestFlight installed, they'll simply need to accept the terms of service screen that appears after the QR code is scanned.

## Branch Events Tracked

### Standard
- `ADD_TO_CART`
- `PURCHASE`
- `SHARE`
- `LOGIN`
- `COMPLETE_REGISTRATION`

### Custom
- `CONTACT_US`
- `REFER_A_FRIEND`
- `LOGOUT`
