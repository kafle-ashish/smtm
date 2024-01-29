import { useRecoilValue } from "recoil";
import { Button } from "../../common/components/Button";
import Text from "../../common/components/Text";
import { overallState } from "../../state/states";

export function GeneralDetails() {
    const overall = useRecoilValue(overallState);

    return (
        <div className="overview-total">
            <div className="overview-total-btns">
                <Button variant="light">
                    Overview
                </Button>
                <Button variant="dark">
                    + Portfolio
                </Button>
            </div>

            <div className="overview-total-title">
                <Text>Total Portfolio Value</Text>
                <Text variant="header">{overall.totalPortfolioValue}</Text>
            </div>

            <div className="card">
                <div className="card-item">
                    <div className="overview-total-item">
                        <Text color="#1e6255">{overall.dayGain}</Text>
                        <Text>Day's Gain</Text>
                    </div>
                    <div className="overview-total-item" style={{ alignItems: "end" }}>
                        <Text color="#c54645">{overall.unrealisedGain}</Text>
                        <Text>Unrealised Gain</Text>
                    </div>
                </div>

                <div className="card-item">
                    <div className="overview-total-item">
                        <Text color="#1e6255">{overall.dayGainPer}</Text>
                        <Text>Day's Gain %</Text>
                    </div>
                    <div className="overview-total-item" style={{ alignItems: "end" }}>
                        <Text color="#c54645">{overall.unrealisedGainPer}</Text>
                        <Text>Unrealised Gain %</Text>
                    </div>
                </div>

                <div className="card-item">
                    <div className="overview-total-item">
                        <Text>{overall.dayGain}</Text>
                        <Text color="#1e6255">({overall.dayGainPer})</Text>
                        <Text>Realised Gain</Text>
                    </div>
                    <div className="overview-total-item" style={{ alignItems: "end" }}>
                        <Text >{overall.unrealisedGain}</Text>
                        <Text color="#c54645">({overall.unrealisedGainPer})</Text>
                        <Text>Overall Gain</Text>
                    </div>
                </div>
            </div>

        </div>
    );
}