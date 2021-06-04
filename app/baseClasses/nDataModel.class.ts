import { oneway } from '../src/app/models/oneway.model';
import { roundtrip } from '../src/app/models/roundtrip.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
oneway: oneway;
roundtrip: roundtrip;
//DECLARE NEW VARIABLE

constructor() {
this.oneway = new oneway();
this.roundtrip = new roundtrip();
//CREATE NEW DM INSTANCE
    }
}