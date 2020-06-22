export const dateStringToDate = (dateString: string): Date => {
    // ex. 28/10/2018
    const dateParsed = dateString
        .split('/')
        .map((val: string): number => parseInt(val));

    return new Date(dateParsed[2], dateParsed[1] - 1, dateParsed[0]);
};
