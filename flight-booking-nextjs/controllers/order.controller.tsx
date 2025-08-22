import { flightData } from '@/utils/flightData';
import axios from 'axios';

// class orderController {
//   async createOrder(user) {
//     const response = await axios.post(
//       'https://test.api.amadeus.com/v1/security/oauth2/token',
//       new URLSearchParams({
//         grant_type: 'client_credentials',
//         client_id: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID as string,
//         client_secret: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET as string,
//       }),
//       { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
//     );
//     console.log('access-token', response.data);
//     const access_token = response.data.access_token;

//     const flightOrderData = {
//       data: {
//         type: 'flight-order',
//         flightOffers: flightData,
//         travelers: user,
//         payments: [
//           {
//             method: 'creditCard',
//             card: {
//               vendorCode: 'VI',
//               cardNumber: '4111111111111111',
//               expiryDate: '2026-12',
//             },
//           },
//         ],
//       },
//     };

//     const responseNext = await axios.post(
//       'https://test.api.amadeus.com/v1/booking/flight-orders',
//       flightOrderData,
//       {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//           'Content-Type': 'application/json',
//         },
//       },
//     );
//     console.log('order-response', responseNext);
//     // console.log("token")
//   }
// }

// export default new orderController();

// class OrderController {
//   // Get Amadeus Access Token
//   private async getAuthToken(): Promise<string> {
//     const response = await axios.post(
//       'https://test.api.amadeus.com/v1/security/oauth2/token',
//       new URLSearchParams({
//         grant_type: 'client_credentials',
//         client_id: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID as string,
//         client_secret: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET as string,
//       }),
//       { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
//     );
//     console.log('Amadeus Access Token:', response.data.access_token);
//     return response.data.access_token;
//   }

//   // Create Flight Order
//   public async createOrder(travelers: any) {
//     if (!flightData || !travelers) {
//       console.error('Missing flight data or travelers');
//       return;
//     }

//     try {
//       const access_token = await this.getAuthToken();
//       const flightOffers = flightData.data?.data[0]; // Extract only the first flight offer

//       // ✅ Clone `flightOffers` and update travelerPricings
//       const updatedFlightOffers = {
//         ...flightOffers,
//         travelerPricings: flightOffers.travelerPricings.map(
//           (pricing: any, index: number) => ({
//             ...pricing,
//             travelerId: (index + 1).toString(), // Ensure travelerId is assigned properly
//           }),
//         ),
//       };

//       // ✅ Format Travelers
//       const formattedTravelers = travelers.map(
//         (traveler: any, index: number) => ({
//           id: (index + 1).toString(), // Ensure traveler IDs start from "1"
//           dateOfBirth: traveler.dateOfBirth,
//           name: {
//             firstName: traveler.firstName,
//             lastName: traveler.lastName,
//           },
//           gender: traveler.gender.toUpperCase() === 'MALE' ? 'MALE' : 'FEMALE',
//           contact: {
//             emailAddress: traveler.emailAddress,
//             phones: [{ deviceType: 'MOBILE', number: traveler.phone }],
//           },
//           documents: traveler.documentType
//             ? [
//                 {
//                   documentType: traveler.documentType,
//                   number: traveler.number,
//                   issuanceDate: traveler.issueDate,
//                   expiryDate: traveler.expiryDate,
//                   issuingCountry: traveler.nationality.toUpperCase(),
//                 },
//               ]
//             : undefined,
//         }),
//       );

//       // ✅ Create the flight order payload
//       const flightOrderData = {
//         data: {
//           type: 'flight-order',
//           flightOffers: [updatedFlightOffers], // Use updatedFlightOffers
//           travelers: formattedTravelers,
//           payments: [
//             {
//               method: 'creditCard',
//               card: {
//                 vendorCode: 'VI',
//                 cardNumber: '4111111111111111',
//                 expiryDate: '2026-12',
//               },
//             },
//           ],
//         },
//       };

//       console.log(
//         'Final flight order payload:',
//         JSON.stringify(flightOrderData, null, 2),
//       );

//       const response = await axios.post(
//         'https://test.api.amadeus.com/v1/booking/flight-orders',
//         flightOrderData,
//         {
//           headers: {
//             Authorization: `Bearer ${access_token}`,
//             'Content-Type': 'application/json',
//           },
//         },
//       );

//       console.log('Flight Order Response:', response.data);
//       return response.data;
//     } catch (error: any) {
//       console.error(
//         'Error creating flight order:',
//         error.response?.data || error,
//       );
//       throw error;
//     }
//   }
// }

// export default new OrderController();
class OrderController {
  // Get Amadeus Access Token
  private async getAuthToken(): Promise<string> {
    const response = await axios.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID as string,
        client_secret: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET as string,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );
    console.log('Amadeus Access Token:', response.data.access_token);
    return response.data.access_token;
  }

  // Create Flight Order
  public async createOrder(travelers: any) {
    if (!flightData || !travelers) {
      console.error('Missing flight data or travelers');
      return;
    }

    try {
      const access_token = await this.getAuthToken();
      const flightOffers = flightData.data?.data[0]; // Extract only the first flight offer

      if (!flightOffers || !flightOffers.travelerPricings) {
        console.error('Missing travelerPricings in flightOffers');
        return;
      }

      if (flightOffers.travelerPricings.length !== travelers.length) {
        console.error(
          `Mismatch in traveler count! Flight offer expects ${flightOffers.travelerPricings.length}, but received ${travelers.length}`,
        );
        return;
      }
      //travelers data getting modified
      const updatedTravelers = travelers.map(
        (traveler: any, index: number) => ({
          id: flightOffers.travelerPricings[index].travelerId, // Use travelerId from flightOffers
          dateOfBirth: traveler.dateOfBirth,
          name: {
            firstName: traveler.firstName,
            lastName: traveler.lastName,
          },
          gender: traveler.gender.toUpperCase() === 'MALE' ? 'MALE' : 'FEMALE',
          contact: {
            emailAddress: traveler.emailAddress,
            phones: [{ deviceType: 'MOBILE', number: traveler.phone }],
          },
          documents: traveler.documentType
            ? [
                {
                  documentType: traveler.documentType,
                  number: traveler.number,
                  issuanceDate: traveler.issueDate,
                  expiryDate: traveler.expiryDate,
                  issuingCountry: traveler.nationality.toUpperCase(),
                },
              ]
            : undefined,
        }),
      );

      
      const updatedFlightOffers = { ...flightOffers };

      const flightOrderData = {
        data: {
          type: 'flight-order',
          flightOffers: [updatedFlightOffers], // Keep `travelerPricings` unchanged
          travelers: updatedTravelers,
          payments: [
            {
              method: 'creditCard',
              card: {
                vendorCode: 'VI',
                cardNumber: '4111111111111111',
                expiryDate: '2026-12',
              },
            },
          ],
        },
      };

      console.log('Travelers:', updatedTravelers);
      console.log(
        'Flight Offers Traveler Pricings:',
        flightOffers.travelerPricings,
      );
      console.log(
        'Final flight order payload:',
        JSON.stringify(flightOrderData, null, 2),
      );

      const response = await axios.post(
        'https://test.api.amadeus.com/v1/booking/flight-orders',
        flightOrderData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Flight Order Response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error(
        'Error creating flight order:',
        error.response?.data || error,
      );
      throw error;
    }
  }
}

export default new OrderController();
