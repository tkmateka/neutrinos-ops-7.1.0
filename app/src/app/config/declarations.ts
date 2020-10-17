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
//CORE_REFERENCE_IMPORT-facilities_managementComponent
import { facilities_managementComponent } from '../components/facilities_managementComponent/facilities_management.component';
//CORE_REFERENCE_IMPORT-emp_profileComponent
import { emp_profileComponent } from '../components/emp_profileComponent/emp_profile.component';
//CORE_REFERENCE_IMPORT-ops_managementComponent
import { ops_managementComponent } from '../components/ops_managementComponent/ops_management.component';
//CORE_REFERENCE_IMPORT-requestsComponent
import { requestsComponent } from '../components/requestsComponent/requests.component';
//CORE_REFERENCE_IMPORT-dialogService
import { dialogService } from '../services/dialog/dialog.service';
//CORE_REFERENCE_IMPORT-notification_popupComponent
import { notification_popupComponent } from '../components/notification_popupComponent/notification_popup.component';
//CORE_REFERENCE_IMPORT-ops_popupComponent
import { ops_popupComponent } from '../components/ops_popupComponent/ops_popup.component';
//CORE_REFERENCE_IMPORT-commonService
import { commonService } from '../services/common/common.service';
//CORE_REFERENCE_IMPORT-travelComponent
import { travelComponent } from '../components/travelComponent/travel.component';
//CORE_REFERENCE_IMPORT-visa_detailsComponent
import { visa_detailsComponent } from '../components/visa_detailsComponent/visa_details.component';
//CORE_REFERENCE_IMPORT-visaComponent
import { visaComponent } from '../components/visaComponent/visa.component';
//CORE_REFERENCE_IMPORT-operations_empComponent
import { operations_empComponent } from '../components/operations_empComponent/operations_emp.component';
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
  ops_popupComponent,
  notification_popupComponent
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
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-facilities_managementComponent
facilities_managementComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emp_profileComponent
emp_profileComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ops_managementComponent
ops_managementComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-requestsComponent
requestsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-notification_popupComponent
notification_popupComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ops_popupComponent
ops_popupComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-travelComponent
travelComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-visa_detailsComponent
visa_detailsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-visaComponent
visaComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-operations_empComponent
operations_empComponent,
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
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-dialogService
dialogService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-commonService
commonService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-ssd_integrationService
ssd_integrationService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'welcome', component: welcomeComponent},{path: 'ops-app', component: emp_home_dahsboardComponent,
children: [{path: 'home', component: home_empComponent,
children: []},{path: 'hr', component: emp_hrComponent},{path: 'operations', component: operations_empComponent,
children: []},{path: 'operations/visa', component: visaComponent},{path: 'operations/visa/:country', component: visa_detailsComponent},{path: 'operations/travel', component: travelComponent},{path: 'operations/facilities', component: facilities_managementComponent},{path: 'requests', component: requestsComponent},{path: 'operations-management', component: ops_managementComponent}]},{path: '', redirectTo: 'welcome', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
