/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class commonService {
    getTravelModel() {
        return {
            'actionType': '',
            'emailId': '',
            'employeeId': '',
            'employeeName': '',
            'isFlexi': false,
            'isRead': false,
            'lineManager': '',
            'lineManagerEmail': '',
            'modeOfTransport': '',
            'requestId': null,
            'department': '',
            'requestDate': null,
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

    getFacilitiesModel() {
        return {
            'emailId': '',
            'employeeId': '',
            'employeeName': '',
            'isRead': false,
            'department': '',
            'lineManager': '',
            'lineManagerEmail': '',
            'requestId': null,
            'requestDate': null,
            'status': '',
            'request': {
                'requestType': '',
                'country': '',
                'request': ''
            },
            'comments': []
        }
    };
}
