import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class facilities {
  @JsonProperty('requestType', String, true)
  public requestType: string = undefined;

  @JsonProperty('country', String, true)
  public country: string = undefined;

  @JsonProperty('request', String, true)
  public request: string = undefined;

}