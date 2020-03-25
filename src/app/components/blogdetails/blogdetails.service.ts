import { Injectable } from '@angular/core';
import { Utility } from 'src/app/services/utility';
import { appConfig } from 'src/app/shared/app.settings';
import { mockRouter } from 'src/app/shared/app.mock.router';
import { serviceConfig } from 'src/app/shared/service.config';

@Injectable()
export class BlogdetailsService {

    constructor(private Utility: Utility) { }

    public get_particular_blog(id: number) { 
        let params: any = "bid=" + id;
        return this.Utility.get(serviceConfig.kioskService + serviceConfig.visionService + serviceConfig.url.GET_PARTICULAR_BLOG + '?' + params, '');
    }
}

