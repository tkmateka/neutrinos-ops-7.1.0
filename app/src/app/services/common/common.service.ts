/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class commonService {
    getFormModel() {
        return {
            'actionType': '',
            'emailId': '',
            'employeeId': '',
            'employeeName': '',
            'isFlexi': '',
            'isRead': '',
            'lineManager': '',
            'lineManagerEmail': '',
            'modeOfTransport': '',
            'requestId': '',
            'status': '',
            'tripList': [{
                'checkInDate': null,
                'checkOutDate': null,
                'clientAddress': '',
                'countryOfAccommodation': '',
                'departureDate': null,
                'returnDate': null,
                'from': '',
                'preferredTime': '',
                'to': '',
            }],
            'comments': [],
            'tripType': ''
        }
    };
}
