// Function to capitalize the first letter and make the rest lowercase, also format string with underscores
export const ConvertCapitalFirstLetterWithSpace = (string: string): string => {
    if (!string) {
        return "";
    }
    const formattedString = string
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

    // Add "Class" if the string does not contain underscores
    return string.includes("_") ? formattedString : `${formattedString} Class`;
};

// Function to capitalize the first letter and make the rest lowercase
export const ConvertCapitalFirstLetter = (string: string): string => {
    if (!string) {
        return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

//
export const ConvertSmall = (string: string): string => {
    if (!string) {
        return "";
    }
    return  string.toLowerCase();
};
