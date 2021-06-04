import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class oneway {
  @JsonProperty('tripType', String, true)
  public tripType: string = undefined;

  @JsonProperty('modeOfTransport', String, true)
  public modeOfTransport: string = undefined;

  @JsonProperty('actionType', String, true)
  public actionType: string = undefined;

  @JsonProperty('from', String, true)
  public from: string = undefined;

  @JsonProperty('to', String, true)
  public to: string = undefined;

  @JsonProperty('departureDate', Date, true)
  public departureDate: Date = undefined;

  @JsonProperty('preferredTime', String, true)
  public preferredTime: string = undefined;

  @JsonProperty('countryOfAccommodation', String, true)
  public countryOfAccommodation: string = undefined;

  @JsonProperty('clientAddress', String, true)
  public clientAddress: string = undefined;

  @JsonProperty('checkInDate', Date, true)
  public checkInDate: Date = undefined;

  @JsonProperty('checkOutDate', Date, true)
  public checkOutDate: Date = undefined;

  @JsonProperty('isFlexi', Boolean, true)
  public isFlexi: boolean = undefined;

  @JsonProperty('employeeId', String, true)
  public employeeId: string = undefined;

  @JsonProperty('lineManager', String, true)
  public lineManager: string = undefined;

  @JsonProperty('lineManagerEmail', String, true)
  public lineManagerEmail: string = undefined;

  @JsonProperty('employeeName', String, true)
  public employeeName: string = undefined;

  @JsonProperty('emailId', String, true)
  public emailId: string = undefined;

  @JsonProperty('status', String, true)
  public status: string = undefined;

  @JsonProperty('isRead', Boolean, true)
  public isRead: boolean = undefined;

  @JsonProperty('requestId', String, true)
  public requestId: string = undefined;

}