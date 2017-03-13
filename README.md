cordova-plugin-mufucaca
==========================

This plugin allows to read the Multifuntional Campus Card from Karlsruhes students from KIT, DH, HsKa and PH. 
It is derived from [phonegap-nfc](https://github.com/chariotsolutions/phonegap-nfc) because the card is a Mifare 1K-Tag, which is not supported by phonegap-nfc.

Supported Platforms
-------------------
* Android

## Contents

* [Installing](#installing)
* [TypeScript](#typescript)
* [MufuCaCa](#mufucaca)
* [Credits](#credits)
* [License](#license)

# Installing

### Cordova
To install via NPM, use:

    $ cordova plugin add cordova-plugin-mufucaca
    
To install from this repo, use:
    
    $cordova plugin add https://github.com/0xC0DEBA5E/cordova-plugin-mufucaca
    
# TypeScript
If you plan to use TypeScript, there is a TypeScript-wrapper for this project at: [mufucaca-typescript](https://github.com/0xC0DEBA5E/mufucaca-typescript).

# MufuCaCa

> The MufuCaCa object provides access to the functions of the plugin.

## Methods

- [MufuCaCa.addTagDiscoveredListener](#mufucacaaddtagdiscoveredlistener)
- [MufuCaCa.removeTagDiscoveredListener](#mufucacaremovetagdiscoveredlistener)
- [MufuCaCa.addReadResultListener](#mufucacaaddreadresultlistener)
- [MufuCaCa.removeReadResultListener](#mufucacaremovereadresultlistener)
- [MufuCaCa.addAdapterStateListener](#mufucacaaddadapterstatelistener)
- [MufuCaCa.removeAdapterStateListener](#mufucacaremoveadapterstatelistener)
- [MufuCaCa.enabled](#mufucacaenabled)
- [MufuCaCa.showSettings](#mufucacashowsettings)

## MufuCaCa.addTagDiscoveredListener

Registers an event listener for tags matching any tag type.

    MufuCaCa.addTagDiscoveredListener(callback, [onSuccess], [onFailure]);

### Parameters

- __callback__: The callback that is called when a tag is detected.
- __onSuccess__: (Optional) The callback that is called when the listener is added.
- __onFailure__: (Optional) The callback that is called if there was an error.

### Description

Function `MufuCaCa.addTagDiscoveredListener` registers the callback for tag events.

This event occurs when any tag is detected by the phone.

## MufuCaCa.removeTagDiscoveredListener

Removes the previously registered event listener added via `MufuCaCa.addTagDiscoveredListener`.

    MufuCaCa.removeTagDiscoveredListener(callback, [onSuccess], [onFailure]);

### Parameters

- __callback__: The previously registered callback.
- __onSuccess__: (Optional) The callback that is called when the listener is successfully removed.
- __onFailure__: (Optional) The callback that is called if there was an error during removal.

## MufuCaCa.addReadResultListener

Registers an event listener for read results of the campus card.

    MufuCaCa.addTagDiscoveredListener(callback, [onSuccess], [onFailure]);

### Parameters

- __callback__: The callback that is called when a new read result is available.
- __onSuccess__: (Optional) The callback that is called when the listener is added.
- __onFailure__: (Optional) The callback that is called if there was an error.

### Description

Function `MufuCaCa.addReadResultListener` registers the callback for read result events.

This event occurs when a new read result from the campus card is available.

## MufuCaCa.removeReadResultListener

Removes the previously registered event listener added via `MufuCaCa.addTagDiscoveredListener`.

    MufuCaCa.removeReadResultListener(callback, [onSuccess], [onFailure]);

### Parameters

- __callback__: The previously registered callback.
- __onSuccess__: (Optional) The callback that is called when the listener is successfully removed.
- __onFailure__: (Optional) The callback that is called if there was an error during removal.

## MufuCaCa.addAdapterStateListener

Registers an event listener for adapter state changes.

    MufuCaCa.addAdapterStateListener(callback, [onSuccess], [onFailure]);

### Parameters

- __callback__: The callback that is called when a adapter state change is detected.
- __onSuccess__: (Optional) The callback that is called when the listener is added.
- __onFailure__: (Optional) The callback that is called if there was an error.

### Description

Function `MufuCaCa.addAdapterStateListener` registers the callback for adapter state change events.

This event occurs when the user enables or disables nfc in the device-settings.

## MufuCaCa.removeAdapterStateListener

Removes the previously registered event listener added via `MufuCaCa.addAdapterStateListener`.

    MufuCaCa.removeAdapterStateListener(callback, [onSuccess], [onFailure]);

### Parameters

- __callback__: The previously registered callback.
- __onSuccess__: (Optional) The callback that is called when the listener is successfully removed.
- __onFailure__: (Optional) The callback that is called if there was an error during removal.

## MufuCaCa.enabled

Check if NFC is available and enabled on this device.

MufuCaCa.enabled(onSuccess, onFailure);

### Parameters

- __onSuccess__: The callback that is called when NFC is enabled.
- __onFailure__: The callback that is called when NFC is disabled or missing.

### Description

Function `MufuCaCa.enabled` explicitly checks to see if the phone has NFC and if NFC is enabled. If
everything is OK, the success callback is called. If there is a problem, the failure callback
will be called with a reason code.

The reason will be **NO_NFC** if the device doesn't support NFC and **NFC_DISABLED** if the user has disabled NFC.

Note: that on Android the NFC status is checked before every API call **NO_NFC** or **NFC_DISABLED** can be returned in **any** failure function.

Credits
===============
This project combines code from other projects. Special thanks go to [phonegap-nfc](https://github.com/chariotsolutions/phonegap-nfc) (MIT-License) and [kitcard-reader](https://github.com/pkern/kitcard-reader) (GNU-GPL v2 License).

License
================

This software is dual-licensed under the GNU GPL v2 and MIT License. See LICENSE.txt for details.
