Cordova MufuCaCa Plugin
==========================

This plugin allows to read the Multifuntional Campus Card from Karlsruhes students from KIT, DH, HsKa and PH. 

Supported Platforms
-------------------
* Android

## Contents

* [Installing](#installing)
* [NFC](#nfc)
* [Events](#events)
* [Launching Application when Scanning a Tag](#launching-your-android-application-when-scanning-a-tag)
* [Testing](#testing)
* [Sample Projects](#sample-projects)
* [License](#license)

# Installing

### Cordova

    $ cordova plugin add https://github.com/0xC0DEBA5E/cordova-plugin-mufucaca.git

# NFC

> The nfc object provides access to the device's NFC sensor.

## Methods

- [nfc.addTagDiscoveredListener](#nfcaddtagdiscoveredlistener)
- [nfc.removeTagDiscoveredListener](#nfcremovetagdiscoveredlistener)
- [nfc.enabled](#nfcenabled)
- [nfc.showSettings](#nfcshowsettings)

## nfc.addTagDiscoveredListener

Registers an event listener for tags matching any tag type.

    nfc.addTagDiscoveredListener(callback, [onSuccess], [onFailure]);

### Parameters

- __callback__: The callback that is called when a tag is detected.
- __onSuccess__: (Optional) The callback that is called when the listener is added.
- __onFailure__: (Optional) The callback that is called if there was an error.

### Description

Function `nfc.addTagDiscoveredListener` registers the callback for tag events.

This event occurs when any tag is detected by the phone.

## nfc.removeTagDiscoveredListener

Removes the previously registered event listener added via `nfc.addTagDiscoveredListener`.

    nfc.removeTagDiscoveredListener(callback, [onSuccess], [onFailure]);

### Parameters

- __callback__: The previously registered callback.
- __onSuccess__: (Optional) The callback that is called when the listener is successfully removed.
- __onFailure__: (Optional) The callback that is called if there was an error during removal.

## nfc.enabled

Check if NFC is available and enabled on this device.

nfc.enabled(onSuccess, onFailure);

### Parameters

- __onSuccess__: The callback that is called when NFC is enabled.
- __onFailure__: The callback that is called when NFC is disabled or missing.

### Description

Function `nfc.enabled` explicitly checks to see if the phone has NFC and if NFC is enabled. If
everything is OK, the success callback is called. If there is a problem, the failure callback
will be called with a reason code.

The reason will be **NO_NFC** if the device doesn't support NFC and **NFC_DISABLED** if the user has disabled NFC.

Note: that on Android the NFC status is checked before every API call **NO_NFC** or **NFC_DISABLED** can be returned in **any** failure function.

License
================

The MIT License

Copyright (c) 2011-2015 Chariot Solutions

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
