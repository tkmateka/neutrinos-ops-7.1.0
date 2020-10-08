import {JsonProperty, JsonObject} from '../lib/tj.deserializer'
import { passport_details } from './passport_details.model';

@JsonObject
export class personal_details {
  @JsonProperty('surname', String, true)
  public surname: string = undefined;

  @JsonProperty('givenName', String, true)
  public givenName: string = undefined;

  @JsonProperty('employeeId', String, true)
  public employeeId: string = undefined;

  @JsonProperty('dateOfBirth', Date, true)
  public dateOfBirth: Date = undefined;

  @JsonProperty('emailId', String, true)
  public emailId: string = undefined;

  @JsonProperty('department', String, true)
  public department: string = undefined;

  @JsonProperty('lineManager', String, true)
  public lineManager: string = undefined;

  @JsonProperty('lineManagerEmail', String, true)
  public lineManagerEmail: string = undefined;

  @JsonProperty('designation', String, true)
  public designation: string = undefined;

  @JsonProperty('cellNumber', String, true)
  public cellNumber: string = undefined;

  @JsonProperty('emergencyConactDetails', String, true)
  public emergencyConactDetails: string = undefined;

  @JsonProperty('permanentAddress', String, true)
  public permanentAddress: string = undefined;

  @JsonProperty('temporaryAddress', String, true)
  public temporaryAddress: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

  @JsonProperty('verticalHead', String, true)
  public verticalHead: string = undefined;

  @JsonProperty('photoUrl', String, true)
  public photoUrl: string = undefined;

  @JsonProperty('passportDetails', passport_details, true)
  public passportDetails: passport_details = new passport_details();

  @JsonProperty('dateOfJoining', Date, true)
  public dateOfJoining: Date = undefined;

}