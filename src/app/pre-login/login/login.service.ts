import { Injectable } from '@angular/core';
import { Utility } from 'src/app/services/utility';
import { appConfig } from 'src/app/shared/app.settings';
import { mockRouter } from 'src/app/shared/app.mock.router';
import { serviceConfig } from 'src/app/shared/service.config';

@Injectable()
export class LoginService {

    constructor(private Utility: Utility) { }

    public userLogin(types) {
        let params: any = "email=" + types.email + "&password=" + types.password;
        // return this.Utility.login("http://localhost/project1/v1/login-api.php", params, param, null, 'application/raw');

        if (appConfig.mock) {
            return this.Utility.get(mockRouter.login);
        } else {
            let param: any = { 'email': types.email, 'password': types.password };
            console.log(serviceConfig.kioskService + serviceConfig.visionService + serviceConfig.url.LOGIN);
            return this.Utility.post(serviceConfig.kioskService + serviceConfig.visionService + serviceConfig.url.LOGIN, types, types, null);
        }
    }

    public logout(param) {
        let params: any = "email=" + param.email;
        return this.Utility.get("api/User/login.php?" + params);
    }
}

