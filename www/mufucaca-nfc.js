/*jshint  bitwise: false, camelcase: false, quotmark: false, unused: vars */
/*global cordova, console */
"use strict";

function handleNfcFromIntentFilter() {

    // This was historically done in cordova.addConstructor but broke with PhoneGap-2.2.0.
    // We need to handle NFC from an Intent that launched the application, but *after*
    // the code in the application's deviceready has run.  After upgrading to 2.2.0,
    // addConstructor was finishing *before* deviceReady was complete and the
    // ndef listeners had not been registered.
    // It seems like there should be a better solution.
    if (cordova.platformId === "android") {
        setTimeout(
            function () {
                cordova.exec(
                    function () {
                        console.log("Initialized the MufuCaCa-Plugin");
                    },
                    function (reason) {
                        console.log("Failed to initialize the MufuCaCa-Plugin " + reason);
                    },
                    "MufuCaCa", "init", []
                );
            }, 10
        );
    }
}

document.addEventListener('deviceready', handleNfcFromIntentFilter, false);

// nfc provides javascript wrappers to the native phonegap implementation
var MufuCaCa = {

    addTagDiscoveredListener: function (callback, win, fail) {
        document.addEventListener("tag", callback, false);
        cordova.exec(win, fail, "MufuCaCa", "registerTag", []);
    },

    enabled: function (win, fail) {
        cordova.exec(win, fail, "MufuCaCa", "enabled", [[]]);
    },

    removeTagDiscoveredListener: function (callback, win, fail) {
        document.removeEventListener("tag", callback, false);
        cordova.exec(win, fail, "MufuCaCa", "removeTag", []);
    },

    showSettings: function (win, fail) {
        cordova.exec(win, fail, "MufuCaCa", "showSettings", []);
    }

};

var util = {
    // i must be <= 256
    toHex: function (i) {
        var hex;

        if (i < 0) {
            i += 256;
        }

        hex = i.toString(16);

        // zero padding
        if (hex.length === 1) {
            hex = "0" + hex;
        }

        return hex;
    },

    toPrintable: function(i) {

        if (i >= 0x20 & i <= 0x7F) {
            return String.fromCharCode(i);
        } else {
            return '.';
        }
    },

    bytesToString: function(bytes) {
        // based on http://ciaranj.blogspot.fr/2007/11/utf8-characters-encoding-in-javascript.html

        var result = "";
        var i, c, c1, c2, c3;
        i = c = c1 = c2 = c3 = 0;

        // Perform byte-order check.
        if( bytes.length >= 3 ) {
            if( (bytes[0] & 0xef) == 0xef && (bytes[1] & 0xbb) == 0xbb && (bytes[2] & 0xbf) == 0xbf ) {
                // stream has a BOM at the start, skip over
                i = 3;
            }
        }

        while ( i < bytes.length ) {
            c = bytes[i] & 0xff;

            if ( c < 128 ) {

                result += String.fromCharCode(c);
                i++;

            } else if ( (c > 191) && (c < 224) ) {

                if ( i + 1 >= bytes.length ) {
                    throw "Un-expected encoding error, UTF-8 stream truncated, or incorrect";
                }
                c2 = bytes[i + 1] & 0xff;
                result += String.fromCharCode( ((c & 31) << 6) | (c2 & 63) );
                i += 2;

            } else {

                if ( i + 2 >= bytes.length  || i + 1 >= bytes.length ) {
                    throw "Un-expected encoding error, UTF-8 stream truncated, or incorrect";
                }
                c2 = bytes[i + 1] & 0xff;
                c3 = bytes[i + 2] & 0xff;
                result += String.fromCharCode( ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63) );
                i += 3;

            }
        }
        return result;
    },

    stringToBytes: function(string) {
        // based on http://ciaranj.blogspot.fr/2007/11/utf8-characters-encoding-in-javascript.html

        var bytes = [];

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {

                bytes[bytes.length]= c;

            } else if((c > 127) && (c < 2048)) {

                bytes[bytes.length] = (c >> 6) | 192;
                bytes[bytes.length] = (c & 63) | 128;

            } else {

                bytes[bytes.length] = (c >> 12) | 224;
                bytes[bytes.length] = ((c >> 6) & 63) | 128;
                bytes[bytes.length] = (c & 63) | 128;

            }

        }

        return bytes;
    },

    bytesToHexString: function (bytes) {
        var dec, hexstring, bytesAsHexString = "";
        for (var i = 0; i < bytes.length; i++) {
            if (bytes[i] >= 0) {
                dec = bytes[i];
            } else {
                dec = 256 + bytes[i];
            }
            hexstring = dec.toString(16);
            // zero padding
            if (hexstring.length === 1) {
                hexstring = "0" + hexstring;
            }
            bytesAsHexString += hexstring;
        }
        return bytesAsHexString;
    },

    // This function can be removed if record.type is changed to a String
    /**
     * Returns true if the record's TNF and type matches the supplied TNF and type.
     *
     * @record NDEF record
     * @tnf 3-bit TNF (Type Name Format) - use one of the TNF_* constants
     * @type byte array or String
     */
    isType: function(record, tnf, type) {
        if (record.tnf === tnf) { // TNF is 3-bit
            var recordType;
            if (typeof(type) === 'string') {
                recordType = type;
            } else {
                recordType = nfc.bytesToString(type);
            }
            return (nfc.bytesToString(record.type) === recordType);
        }
        return false;
    }

};

// create aliases
MufuCaCa.bytesToString = util.bytesToString;
MufuCaCa.stringToBytes = util.stringToBytes;
MufuCaCa.bytesToHexString = util.bytesToHexString;

// kludge some global variables for plugman js-module support
// eventually these should be replaced and referenced via the module
window.MufuCaCa = MufuCaCa;
window.util = util;
