function calculateShippingCost(destination, weight, priority) {
    // Ensures that the destination is either "domestic" or "international". If not, it returns "Invalid destination".
    if (destination !== "domestic" && destination !== "international") {
        return "Invalid destination";
    }

    // Ensures that the weight is a positive number. If not, it returns "Invalid weight".
    if (weight <= 0) {
        return "Invalid weight";
    }

    // Ensures that the priority is one of "standard", "express", or "priority". If not, it returns "Invalid priority".
    if (priority !== "standard" && priority !== "express" && priority !== "priority") {
        return "Invalid priority";
    }

    // baseCost and additionalCost are initialized to 0.
    let baseCost = 0;
    let additionalCost = 0;

    // Calculate base cost and additional cost based on destination and priority
    if (destination === "domestic") {
        if (priority === "standard") {
            baseCost = 5;
        } else if (priority === "express") {
            baseCost = 10;
        } else if (priority === "priority") {
            baseCost = 20;
        }

        if (weight > 10) {
            additionalCost = 10;
        }
    } else if (destination === "international") {
        if (priority === "standard") {
            baseCost = 15;
        } else if (priority === "express") {
            baseCost = 25;
        } else if (priority === "priority") {
            baseCost = 50;
        }

        if (weight > 5) {
            additionalCost = 50;
        }
    }

    // The total cost is calculated by multiplying the baseCost by the weight and then adding the additionalCost.
    let totalCost = (baseCost * weight) + additionalCost;
    return totalCost;
}

// Example execution:
console.log(calculateShippingCost("domestic", 12, "standard"));  // 70
console.log(calculateShippingCost("international", 6, "priority"));  // 350
console.log(calculateShippingCost("domestic", -1, "express"));  // "Invalid weight"
console.log(calculateShippingCost("unknown", 5, "standard"));  // "Invalid destination"
console.log(calculateShippingCost("domestic", 5, "unknown"));  // "Invalid priority"
