import {JsonProperty, JsonObject} from '../lib/tj.deserializer'
import { travel_info } from './travel_info.model';

@JsonObject
export class travel_new_ticket {
  @JsonProperty('transportType', String, true)
  public transportType: string = undefined;

  @JsonProperty('tripType', String, true)
  public tripType: string = undefined;

  @JsonProperty('employeeId', String, true)
  public employeeId: string = undefined;

  @JsonProperty('info', [travel_info], true)
  public info: travel_info[] = [];

  @JsonProperty('lineManager', String, true)
  public lineManager: string = undefined;

  @JsonProperty('lineManagerEmail', String, true)
  public lineManagerEmail: string = undefined;

  @JsonProperty('formType', String, true)
  public formType: string = undefined;

  @JsonProperty('isFlexi', Boolean, true)
  public isFlexi: boolean = undefined;

  @JsonProperty('approvalComment', String, true)
  public approvalComment: string = undefined;

  @JsonProperty('emailId', String, true)
  public emailId: string = undefined;

  @JsonProperty('requestId', Number, true)
  public requestId: number = undefined;

  @JsonProperty('isRead', Boolean, true)
  public isRead: boolean = undefined;

  @JsonProperty('status', String, true)
  public status: string = undefined;

  @JsonProperty('employeeName', String, true)
  public employeeName: string = undefined;

  @JsonProperty('managerComment', String, true)
  public managerComment: string = undefined;

}