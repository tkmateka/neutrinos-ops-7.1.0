import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class travel_cancellation {
  @JsonProperty('reason', String, true)
  public reason: string = undefined;

}