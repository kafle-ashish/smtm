import { useRecoilValue } from "recoil";
import { Button } from "../../common/components/Button";
import Text from "../../common/components/Text";
import { portfolioState } from "../../state/states";

export function YourPortfolio() {
    const portfolios = useRecoilValue(portfolioState);

    return (
        <div className="overview-you">
            <div style={{ marginTop: "20px" }}>
                <Text variant="bold">Your Portfolio</Text>
            </div>

            <div className="overview-you-btns">
                <Button>Day's Gain</Button>
                <Button variant="dark">Unrealised</Button>
                <Button variant="dark">Realised</Button>
                <Button variant="dark">Overall</Button>
            </div>

            {portfolios.map(portfolio => (
                <div className="card" style={{ marginBottom: "10px" }} key={portfolio.name}>
                    <div className="card-item">
                        <div className="overview-you-item">
                            <Text>{portfolio.name}</Text>
                            <Text>{portfolio.balance}</Text>
                        </div>
                        <div className="overview-you-item">
                            <Text color="#c54645">{portfolio.gain}</Text>
                            <Text color="#c54645">{portfolio.gainPercentage}</Text>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}