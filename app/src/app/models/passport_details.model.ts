import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class passport_details {
  @JsonProperty('passportNumber', String, true)
  public passportNumber: string = undefined;

  @JsonProperty('placeOfBirth', String, true)
  public placeOfBirth: string = undefined;

  @JsonProperty('placeOfIssue', String, true)
  public placeOfIssue: string = undefined;

  @JsonProperty('dateOfIssue', Date, true)
  public dateOfIssue: Date = undefined;

  @JsonProperty('dateOfExpiry', Date, true)
  public dateOfExpiry: Date = undefined;

  @JsonProperty('nationality', String, true)
  public nationality: string = undefined;

  @JsonProperty('addressAsPerPassport', String, true)
  public addressAsPerPassport: string = undefined;

}