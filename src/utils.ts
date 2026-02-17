export const dateStringToDate = (datestring: string) => {
    const dateParts = datestring.split('/').map(
        (value: string): number => {
            return parseInt(value)
        }
    );
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}