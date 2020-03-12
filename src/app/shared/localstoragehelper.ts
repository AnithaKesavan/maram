import { Injectable } from '@angular/core';

export const LocalStorageConst = {
    accessToken: 'accessToken',
    idToken: 'idToken',
    userInfo: 'userInfo',
    VMUserInfo: 'VMUserInfo',
    authorizationEndpoint: 'authorization_endpoint',
    endSessionEndpoint: 'end_session_endpoint',
    userInfoEndpoint: 'userinfo_endpoint',
    myProductsEndpoint: 'my_products_endpoint',
    orgDetail: 'orgDetail',
    idpClientID: 'idpClientID',
    idpRedirectUri: 'idpRedirectUri',
    idpScopes: 'idpScopes',
    idpPortalUrl: 'idpPortalUrl'
};

@Injectable()
export class LocalStorageHelper {

    // Get local stored for Item
    public static getLocalStorageItemByKey(key) {
        return localStorage.getItem(key);
    }

    public static setLocalStorageItemByKey(key, value) {
        return localStorage.setItem(key, value);
    }

    public static removeLocalStorageItemByKey(key) {
        return localStorage.removeItem(key);
    }

    // Get local stored for JSON
    public static getLocalStorageJsonByKey(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    public static setIdpEndpointInLocalStorage(configs) {
        LocalStorageHelper.setLocalStorageItemByKey(LocalStorageConst.idpClientID, configs.idpClientID);
        LocalStorageHelper.setLocalStorageItemByKey(LocalStorageConst.idpRedirectUri, configs.idpRedirectUri);
        LocalStorageHelper.setLocalStorageItemByKey(LocalStorageConst.idpScopes, configs.idpScopes);
        LocalStorageHelper.setLocalStorageItemByKey(LocalStorageConst.idpPortalUrl, configs.idpPortalUrl);
    }

    public static setPropertiesInLocalStorage(configs) {
        let envProperties = JSON.parse(configs);
        this.setLocalStorageItemByKey(LocalStorageConst.authorizationEndpoint, envProperties.authorization_endpoint);
        this.setLocalStorageItemByKey(LocalStorageConst.userInfoEndpoint, envProperties.userinfo_endpoint);
        this.setLocalStorageItemByKey(LocalStorageConst.endSessionEndpoint, envProperties.end_session_endpoint);
        this.setLocalStorageItemByKey(LocalStorageConst.myProductsEndpoint, envProperties.my_products_endpoint);
    }

    public static removeLocalStorage() {
        let localStorageValArray = Object.keys(LocalStorageConst).map(function (key) { return LocalStorageConst[key]; });
        for (let localStorageVal of localStorageValArray) {
            this.removeLocalStorageItemByKey(localStorageVal);
        }
    }
}