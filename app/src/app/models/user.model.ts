import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class user {
  @JsonProperty('emailId', String, true)
  public emailId: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

}