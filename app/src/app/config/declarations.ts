import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-emp_hrComponent
import { emp_hrComponent } from '../components/emp_hrComponent/emp_hr.component';
//CORE_REFERENCE_IMPORT-home_empComponent
import { home_empComponent } from '../components/home_empComponent/home_emp.component';
//CORE_REFERENCE_IMPORT-ssd_integrationService
import { ssd_integrationService } from '../services/ssd_integration/ssd_integration.service';
//CORE_REFERENCE_IMPORT-emp_home_dahsboardComponent
import { emp_home_dahsboardComponent } from '../components/emp_home_dahsboardComponent/emp_home_dahsboard.component';
//CORE_REFERENCE_IMPORT-welcomeComponent
import { welcomeComponent } from '../components/welcomeComponent/welcome.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emp_hrComponent
emp_hrComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-home_empComponent
home_empComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emp_home_dahsboardComponent
emp_home_dahsboardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-welcomeComponent
welcomeComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-ssd_integrationService
ssd_integrationService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'welcome', component: welcomeComponent},{path: 'employee', component: emp_home_dahsboardComponent,
children: [{path: 'home', component: home_empComponent,
children: []},{path: 'hr', component: emp_hrComponent}]},{path: '', redirectTo: 'welcome', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
