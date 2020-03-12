import { Injectable } from '@angular/core'; 
import { Utility } from 'src/app/services/utility';


@Injectable()
export class RegisterService {

    constructor(private Utility: Utility) { }

    public createNewUser(param) {
        let params: any = "firstname=" + param.firstname + "&lastname=" + param.lastname + "&email=" + param.email + "&password=" + param.password + "&confirmpassword=" + param.confirmpassword;
        return this.Utility.regsiter("http://localhost/project1/v1/register-user-api.php", params, param, null, 'application/raw');
    }
}
