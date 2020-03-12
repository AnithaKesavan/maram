import { LocalStorageHelper } from "./localstoragehelper";
 
export class GlobalConfig {
    public static get getJWTToken(): any {
        return LocalStorageHelper.getLocalStorageItemByKey('token') ? LocalStorageHelper.getLocalStorageItemByKey('autoPrintStr') : false;
    };
}