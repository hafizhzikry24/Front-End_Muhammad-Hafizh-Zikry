function calculateTax(income, age, dependents, step = 1) {
    // These checks ensure that the inputs are valid. If any input is invalid, the function returns an appropriate error message.
    if (typeof income !== 'number' || income < 0) {
        return "Invalid income";
    }
    if (typeof age !== 'number' || age < 0) {
        return "Invalid age";
    }
    if (typeof dependents !== 'number' || dependents < 0) {
        return "Invalid dependents";
    }

    // If the age is less than 18, the function returns "Not eligible for tax".
    if (age < 18) {
        return "Not eligible for tax";
    }

    // Recursive steps for tax calculation
    switch (step) {
        case 1: // Calculate base tax
            if (income <= 10000) {
                return calculateTax(0.1 * income, age, dependents, step + 1); //If income is less than or equal to 10,000, the tax is 10% of the income.
            } else if (income <= 50000) {
                return calculateTax(0.2 * income, age, dependents, step + 1); //If income is between 10,001 and 50,000, the tax is 20% of the income.
            } else {
                return calculateTax(0.3 * income, age, dependents, step + 1); //If income is above 50,000, the tax is 30% of the income.
            }
        case 2: // Apply deductions for dependents
            let deduction = 500 * dependents;
            return calculateTax(income - deduction, age, dependents, step + 1); //For each dependent, a deduction of 500 is applied.
        case 3: // Apply discount for seniors
            if (age >= 65) {
                return calculateTax(income * 0.8, age, dependents, step + 1);
            } //If age is 65 or above, the tax is reduced by 20% (multiplied by 0.8).
            return calculateTax(income, age, dependents, step + 1);
        case 4: // Ensure non-negative tax
            if (income < 0) {
                return 0;
            }
            return income;
        default:
            return income;
    }
}
console.log(calculateTax(50000, 70, 2));  //example execution
