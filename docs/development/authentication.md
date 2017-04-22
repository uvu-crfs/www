# Authentication

The actual web server has shibboleth installed to handle authentication. Protected routes can be configured in the file `/etc/httpd/conf.d/shib.conf`. Attributes can be configured in the file `/etc/shibboleth/attribute-map.xml`. In the docker setup the authentication is faked. See the variable `g.uvu` in the file `html/mithril/app.js`.

## Protected Routes

There are some sections of the site that are protected by just authentication and others that are protected by an admin entitlement.

* The route `/uvu` is the same as `/` except it requires UVU authentication.
* Any APIs that change the database are in the under the folder `html/api/admin` which requires an entitlement.

## Grouper

Grouper is the website that UVU uses to control authentication

* [This page](https://grouper.uvu.edu/grouper/grouperUi/app/UiV2Main.index?operation=UiV2Stem.stemPrivileges&stemId=008aa814a2674d0b8f6a757195053fcc) controls who can control the crfs entitlements.
* [This page](https://grouper.uvu.edu/grouper/grouperUi/app/UiV2Main.index?operation=UiV2Group.viewGroup&groupId=e1eabcd1914e4f1d850919e1199a58bc) is where new users can receive the admin entitlement.


## Files

/etc/httpd/conf.d/shib.conf
```xampp
LoadModule mod_shib /usr/lib64/shibboleth/mod_shib_24.so

ShibCompatValidUser Off

<Location /Shibboleth.sso>
  AuthType None
  Require all granted
</Location>

<IfModule mod_alias.c>
  <Location /shibboleth-sp>
    AuthType None
    Require all granted
  </Location>
  Alias /shibboleth-sp/main.css /usr/share/shibboleth/main.css
</IfModule>

<Location /uvu>
  AuthType shibboleth
  ShibRequestSetting requireSession 1
  require shib-session
</Location>

<Location /api/admin>
  AuthType shibboleth
  ShibRequestSetting requireSession 1
  require shib-attr uvuEntitlements ~ ^urn:mace:uvu.edu:entitlement:iam:services:crfs:admin$
</Location>
```

/etc/shibboleth/attribute-map.xml
```xml
<Attributes xmlns="urn:mace:shibboleth:2.0:attribute-map" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

    <Attribute name="urn:oid:1.3.6.1.4.1.5923.1.1.1.6" id="eppn">
        <AttributeDecoder xsi:type="ScopedAttributeDecoder"/>
    </Attribute>
    <Attribute name="urn:mace:dir:attribute-def:eduPersonPrincipalName" id="eppn">
        <AttributeDecoder xsi:type="ScopedAttributeDecoder"/>
    </Attribute>

    <Attribute name="urn:oid:1.3.6.1.4.1.5923.1.1.1.9" id="affiliation">
        <AttributeDecoder xsi:type="ScopedAttributeDecoder" caseSensitive="false"/>
    </Attribute>
    <Attribute name="urn:mace:dir:attribute-def:eduPersonScopedAffiliation" id="affiliation">
        <AttributeDecoder xsi:type="ScopedAttributeDecoder" caseSensitive="false"/>
    </Attribute>

    <Attribute name="urn:oid:1.3.6.1.4.1.5923.1.1.1.1" id="unscoped-affiliation">
        <AttributeDecoder xsi:type="StringAttributeDecoder" caseSensitive="false"/>
    </Attribute>
    <Attribute name="urn:mace:dir:attribute-def:eduPersonAffiliation" id="unscoped-affiliation">
        <AttributeDecoder xsi:type="StringAttributeDecoder" caseSensitive="false"/>
    </Attribute>

    <Attribute name="urn:oid:1.3.6.1.4.1.5923.1.1.1.7" id="entitlement"/>
    <Attribute name="urn:mace:dir:attribute-def:eduPersonEntitlement" id="entitlement"/>


    <Attribute name="urn:mace:dir:attribute-def:eduPersonTargetedID" id="targeted-id">
        <AttributeDecoder xsi:type="ScopedAttributeDecoder"/>
    </Attribute>

    <Attribute name="urn:oid:1.3.6.1.4.1.5923.1.1.1.10" id="persistent-id">
        <AttributeDecoder xsi:type="NameIDAttributeDecoder" formatter="$NameQualifier!$SPNameQualifier!$Name" defaultQualifiers="true"/>
    </Attribute>

    <Attribute name="urn:oasis:names:tc:SAML:2.0:nameid-format:persistent" id="persistent-id">
        <AttributeDecoder xsi:type="NameIDAttributeDecoder" formatter="$NameQualifier!$SPNameQualifier!$Name" defaultQualifiers="true"/>
    </Attribute>

    <Attribute name="urn:oid:0.9.2342.19200300.100.1.1" id="uid"/>
    <Attribute name="urn:oid:2.5.4.10" id="o"/>
    <Attribute name="urn:oid:2.5.4.11" id="ou"/>
    <Attribute name="urn:oid:2.5.4.3" id="cn"/>
    <Attribute name="urn:oid:2.5.4.4" id="sn"/>
    <Attribute name="urn:oid:2.5.4.42" id="givenName"/>
    <Attribute name="urn:oid:2.16.840.1.113730.3.1.241" id="displayName"/>
    <Attribute name="urn:oid:0.9.2342.19200300.100.1.3" id="mail"/>
    <Attribute name="urn:oid:2.5.4.12" id="title"/>

    <Attribute name="urn:mace:uvu.edu:attribute-def:portalEmail" id="portalMail"/>
    <Attribute name="urn:mace:uvu.edu:attribute-def:uvuEntitlements" id="uvuEntitlements"/>
    <Attribute name="urn:mace:uvu.edu:attribute-def:idCardPhoto" id="idCardPhoto"/>
</Attributes>
```
