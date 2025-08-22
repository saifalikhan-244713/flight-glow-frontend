//utils/orderUtils.ts
import { toast } from 'react-toastify';
import OrderController from '@/controllers/order.controller';
import OrderModel from '@/models/order.model';
import { setLoading, setFlightOffersPricing } from '@/store/slices/searchSlice';
import { Dispatch } from 'redux';
import { setOrderDetails } from '@/store/slices/orderSlice';
import SearchController from '@/controllers/search.controller';

export const handleCreateOrder = async (
  dispatch: Dispatch<any>,
  selectedSeats: any,
  router: any,
  session: any,
  resultRow: any,
  adult: number,
  children: number,
  infants: number,
  TravellerResults: any[],
  ContactResults: any,
  setAlertOpen: (open: boolean) => void,
) => {
  dispatch(setLoading(true));

  let adultCount = 0;
  let childCount = 0;
  let infantCount = 0;

  if (TravellerResults.length === 0) {
    toast.error('Please add traveler.');
    dispatch(setLoading(false));
  } else {
    const countPassengers = () => {
      TravellerResults.forEach((traveller) => {
        if (traveller.passenger_type === 'Adult') {
          adultCount += 1;
        } else if (traveller.passenger_type === 'Child') {
          childCount += 1;
        } else if (traveller.passenger_type === 'Infant') {
          infantCount += 1;
        }
      });
    };
    countPassengers();
    setAlertOpen(true);

    if (adult < adultCount) {
      toast.error('Please add required adult.');
      dispatch(setLoading(false));
    } else if (children < childCount) {
      toast.error('Please add required children.');
      dispatch(setLoading(false));
    } else if (infants < infantCount) {
      toast.error('Please add required infants.');
      dispatch(setLoading(false));
    } else {
      try {
        let user_id = '';
        if (session?.user && 'id' in session.user) {
          user_id = (session.user as { id: string }).id;
        }

        const token = session?.user?.token || '';

        if (token) {
          // const response1 = await SearchController.getOfferFinalPrice( resultRow, selectedSeats );

          // dispatch(setFlightOffersPricing(response1.data ? response1.data[0] : []));

          // if (response1.data.length > 0) {
          //   dispatch(setResultRow(flightOffersPricing));
          // }
          const orderParams = {
            user_id: user_id,
            data: {
              type: 'flight-order',
              flightOffers: [resultRow],
              travelers: TravellerResults,
              remarks: {
                general: [
                  {
                    subType: 'GENERAL_MISCELLANEOUS',
                    text: 'ONLINE BOOKING FROM INCREIBLE VIAJES',
                  },
                ],
              },
              ticketingAgreement: {
                option: 'DELAY_TO_CANCEL',
                delay: '6D',
              },
              contacts: [ContactResults],
            },
          };

          const orderModelData = new OrderModel(orderParams);
          const response = await OrderController.saveOrder(
            orderModelData,
            token,
          );

          if (response && response.data) {
            dispatch(setLoading(false));
            toast.success('Order created successfully' + response.data.id);
            // SetorderId(response.data[0].id);
            dispatch(setLoading(false));
            router.push({ pathname: '/my-trips' });
          } else {
            dispatch(setLoading(false));
            toast.error('Error in Save order' + response.errors);
          }
        } else {
          dispatch(setLoading(false));
          toast.error('Session or token is undefined.');
        }
      } catch (error) {
        dispatch(setLoading(false));
        toast.error('Error in Save order' + error);
      }
    }
  }
};
function errorDisplay(error: any) {
  toast.error('Error in Save order' + error);
}

export const fetchFlightOrders = async (
  session: any,
  order_status: string,
  dispatch: Dispatch<any>,
  page: number,
) => {
  try {
    const token = session?.user?.token || '';

    if (token) {
      const response = await OrderController.getOrder(
        token,
        order_status,
        page,
      );

      if (response && response.data) {
        dispatch(setLoading(true));
        // toast.success("Order created successfully" + response.data.id);
        return response.data;
      } else {
        // if(response.code == 406)
        toast.error(response.errors);
        // else if(response.code == 401)
        // toast.error("User is not authanticated, Please provide Bearer token.");
        // else if(response.code == 400)
        // return [];
      }
    } else {
      toast.error('Session or token is undefined.');
    }
  } catch (error) {
    console.error('Error fetching flight orders:', error);
    return [];
  }
};

export const fetchFlightOrderDetail = async (
  session: any,
  router: any,
  dispatch: Dispatch<any>,
  flightOrderId: string,
) => {
  try {
    const token = session?.user?.token || '';

    if (token) {
      const response = await OrderController.getOrderDetails(
        token,
        flightOrderId,
      );

      if (response && response.data) {
        dispatch(setLoading(true));
        dispatch(setOrderDetails(response.data.data));
        router.push('/view-flight-details');
      } else {
        toast.error('Error in fetch order' + response);
        return [];
      }
    } else {
      toast.error('Session or token is undefined.');
    }
  } catch (error) {
    console.error('Error fetching flight orders:', error);
  }
};
