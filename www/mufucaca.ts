import { Cordova, Plugin } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

declare let window: Window;

@Plugin({
    pluginName: 'MufuCaCa',
    plugin: 'cordova-plugin-mufucaca',
    pluginRef: 'window.MufuCaCa',
    repo: 'https://github.com/0xC0DEBA5E/cordova-plugin-mufucaca.git',
})
export class MufuCaCa {

    /**
     * Registers an event listener for the read results of the plugin.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    @Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3,
        clearFunction: 'removeReadResultListener',
        clearWithArgs: true,
    })
    public static addReadResultListener(onSuccess?: Function, onFailure?: Function): Observable<any> { return; }

    /**
     * Registers an event listener for tags matching any tag type.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    @Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3,
        clearFunction: 'removeTagDiscoveredListener',
        clearWithArgs: true,
    })
    public static addTagDiscoveredListener(onSuccess?: Function, onFailure?: Function): Observable<any> { return; }

    /**
     * Show the NFC settings on the device.
     * @returns {Promise<any>}
     */
    @Cordova()
    public static showSettings(): Promise<any> { return; }

    /**
     * Check if NFC is available and enabled on this device.
     * @returns {Promise<any>}
     */
    @Cordova()
    public static enabled(): Promise<any> { return; }

}
