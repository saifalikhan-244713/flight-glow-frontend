import moment from "moment";
import { format } from "date-fns";

// Function to capitalize the first letter and make the rest lowercase
export const FormatDate = (date: any) => {
    if (!date) return "03 Jan";

    return moment(date).format("DD MMM YYYY");
};

export const FormatDateReturnDateDay = (date: any): string => {
  if (!date) return "";

  return moment(date).format("ddd, D MMM");
};
export const FormatDateReturnDateAndDay = (date: any): string => {
  if (!date) return "";

  return moment(date).format("ddd, D MMM YYYY");
};
export const ExtractTimeFromISO = (dateTimeString: any) => {
    const date = new Date(dateTimeString);
    return format(date, "HH:mm");
  };

  export const FormatDuration = (isoDuration: any) => {
    // Regular expression to match ISO 8601 duration parts
    const regex =
      /P(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

    // Execute the regex on the input string
    const matches = isoDuration.match(regex);

    // Extract hours, minutes, and seconds (if available)
    const hours = matches[1] ? parseInt(matches[1], 10) : 0;
    const minutes = matches[2] ? parseInt(matches[2], 10) : 0;

    // Format the duration as '1h 20m'
    const formattedDuration = `${hours > 0 ? `${hours}h ` : ""}${
      minutes > 0 ? `${minutes}m` : ""
    }`.trim();

    return formattedDuration;
  }

  export const formatDate = (dateString?: string): string => {
    if (!dateString) {
      return ""; // or any default message like "Invalid date"
    }
    const date = new Date(dateString);
    return format(date, "eeee, dd MMM yyyy 'at' HH:mm 'hrs'");
  };

  export  const getYesterdayDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return yesterday;
  };

  export   const getTwoAfterDate = () => {
    const today = new Date();
    const day = new Date(today);
    day.setDate(today.getDate() + 2);
    return day;
  };
