export const roundToWholeNumber = (number: number) => {
    const roundToWholeNumberFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    });

    return roundToWholeNumberFormatter.format(number);
}