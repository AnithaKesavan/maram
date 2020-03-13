import { Injectable } from '@angular/core';
import { Utility } from 'src/app/services/utility';
import { serviceConfig } from 'src/app/shared/service.config';

@Injectable()
export class GalleryService {

    constructor(private Utility: Utility) { }

     public get_all_gallery() { 
        return this.Utility.get(serviceConfig.kioskService + serviceConfig.visionService + serviceConfig.url.GET_ALL_GALLERY); 
    }
}

