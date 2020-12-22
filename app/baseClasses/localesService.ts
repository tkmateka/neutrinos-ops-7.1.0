import { NLocaleResource } from '../src/app/n-services/n-localeResources.service';

export class localesService {

    private static langInstance;
    private static localesInstance;
    static getLangInstance () {
        if (!localesService.langInstance) {
            localesService.langInstance = new localesService();
            localesService.getLocalesInstance().getLang();
        }
        return localesService.langInstance;
    }
     static getLocalesInstance () {
        if (!localesService.localesInstance) {
            localesService.localesInstance = new NLocaleResource();
        }
        return localesService.localesInstance;
    }
}