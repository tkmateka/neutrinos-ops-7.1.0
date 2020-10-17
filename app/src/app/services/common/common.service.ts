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
            'isFlexi': '',
            'isRead': '',
            'lineManager': '',
            'lineManagerEmail': '',
            'modeOfTransport': '',
            'requestId': '',
            'department': '',
            'requestDate': '',
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
            'isRead': '',
            'lineManager': '',
            'lineManagerEmail': '',
            'requestId': '',
            'requestDate': '',
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
