let bonusBalance = 10000, 
    amountOfPurchasesInThisMonth = 5, 
    standartBonus = 10, 
    extraBonus = 20, 
    extraBonusIfNotFirstInMonth = 5;

let totalBonusPercentage = 0;

if (bonusBalance > 5000) {
    totalBonusPercentage = extraBonus;
} else {
    totalBonusPercentage = standartBonus;
}

if (amountOfPurchasesInThisMonth > 0) {
    totalBonusPercentage += extraBonusIfNotFirstInMonth;
} else {
    totalBonusPercentage += 0;
}

console.log(`Процент от покупки: ${totalBonusPercentage}`)