import { atom } from "recoil";

interface Portfolio {
    name: string;
    balance: string;
    gain: string;
    gainPercentage: string;
}

interface Overall {
    totalPortfolioValue: string;
    dayGain: string;
    unrealisedGain: string;
    realisedGain: string;
    dayGainPer: string;
    unrealisedGainPer: string;
    overallGain: string;
}

export const portfolioState = atom<Portfolio[]>({
    key: "PortfolioState",
});

export const overallState = atom<Overall>({
    key: "OverallState"
});

export const loadingState = atom({
    key: "Loading",
    default: true,
});