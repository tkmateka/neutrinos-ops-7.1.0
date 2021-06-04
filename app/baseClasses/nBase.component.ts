// Base component 
import { NDataModel } from './nDataModel.class';
import { localesService } from './localesService';
export class NBaseComponent {
    dm: NDataModel;
    locales :any = {};
    constructor() {
        this.dm = new NDataModel();
        localesService.getLocalesInstance().$localeSub.subscribe(locales => {
            this.locales = locales;
        });
        localesService.getLangInstance();
    }
}