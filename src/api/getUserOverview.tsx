const mockData = {
    overall: {
        totalPortfolioValue: "5.45 Cr",
        dayGain: "+18,234.10",
        unrealisedGain:"-12.12 lac",
        realisedGain: "+18,234.1",
        dayGainPer: "+9.99%",
        unrealisedGainPer: "-99.99%",
        overallGain: "-12.12 lac",
    },
    portfolio: [
        {
            name: "Fam",
            balance: "68,121.00",
            gain: "-234.00",
            gainPercentage: "-0.36%",
        },
        {
            name: "Mero",
            balance: "68,121.00",
            gain: "-234.00",
            gainPercentage: "-0.36%",
        },
    ],
};

export const getOverview = ():Promise<typeof mockData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData);
        }, 4000);
    });
};
