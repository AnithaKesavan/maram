import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UtilHelper {

    constructor(public snackBar: MatSnackBar) {

    }

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

    public static getLocalStorageJsonByKey(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    public static loginHide: boolean;

    open(message: string) {
        let config = new MatSnackBarConfig();
        config.verticalPosition = 'top';
        config.horizontalPosition = 'right';
        config.duration = 2000;
        this.snackBar.open(message, 'OK', config);
    }
}
