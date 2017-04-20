# Authentication

The actual web server has shibboleth installed to handle authentication. Protected routes can be configure in the file `/etc/httpd/conf.d/shib.conf`. Attributes can be configured in the file `/etc/shibboleth/attribute-map.xml`. In the docker setup the authentication is faked. See the variable `g.uvu` in the file `html/mithril/app.js`.

## Protected Routes

There are some sections of the site that are protected by just authentication and others that are protected by an admin entitlement.

* The route `/uvu` is the same as `/` except it requires UVU authentication.
* Any APIs that change the database are in the under the folder `html/api/admin` which requires an entitlement.

## Grouper

Grouper is the website that UVU uses to control authentication

* [This page](https://grouper.uvu.edu/grouper/grouperUi/app/UiV2Main.index?operation=UiV2Stem.stemPrivileges&stemId=008aa814a2674d0b8f6a757195053fcc) controls who can control the crfs entitlements.
* [This page](https://grouper.uvu.edu/grouper/grouperUi/app/UiV2Main.index?operation=UiV2Group.viewGroup&groupId=e1eabcd1914e4f1d850919e1199a58bc) is where new users can receive the admin entitlement.
