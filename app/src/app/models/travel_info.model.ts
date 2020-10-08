import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class travel_info {
  @JsonProperty('from', String, true)
  public from: string = undefined;

  @JsonProperty('to', String, true)
  public to: string = undefined;

  @JsonProperty('departureDate', Date, true)
  public departureDate: Date = undefined;

  @JsonProperty('returnDate', Date, true)
  public returnDate: Date = undefined;

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

  @JsonProperty('managerComment', String, true)
  public managerComment: string = undefined;

}