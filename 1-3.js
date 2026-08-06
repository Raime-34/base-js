let bonusBalance = 10000, 
    amountOfPurchasesInThisMonth = 5, 
    standartBonus = 10, 
    extraBonus = 20, 
    extraBonusIfNotFirstInMonth = 5;

let totalBonusPercentage = standartBonus;

if (bonusBalance > 5000) {
    totalBonusPercentage = extraBonus;
}

if (amountOfPurchasesInThisMonth > 0) {
    totalBonusPercentage += extraBonusIfNotFirstInMonth;
}

console.log(`Процент от покупки: ${totalBonusPercentage}`)