import { oneway } from '../src/app/models/oneway.model';
import { roundtrip } from '../src/app/models/roundtrip.model';
import { multicity } from '../src/app/models/multicity.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
oneway: oneway;
roundtrip: roundtrip;
multicity: multicity;
//DECLARE NEW VARIABLE

constructor() {
this.oneway = new oneway();
this.roundtrip = new roundtrip();
this.multicity = new multicity();
//CREATE NEW DM INSTANCE
    }
}