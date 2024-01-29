
import { useRecoilState, useSetRecoilState } from "recoil";
import { Page } from "../common/layout/Page";
import { GeneralDetails } from "../components/OverviewPage/GeneralDetails";
import { YourPortfolio } from "../components/OverviewPage/YourPortfolio";
import { useEffect } from "react";
import { loadingState, overallState, portfolioState } from "../state/states";
import { getOverview } from "../api/getUserOverview";

export function OverviewPage() {
    const setPortfolios = useSetRecoilState(portfolioState);
    const setOverall = useSetRecoilState(overallState);
    const [loading, setLoading] = useRecoilState(loadingState);

    useEffect(() => {
        const fn = async () => {
            const overviewData = await getOverview();
            setPortfolios(overviewData.portfolio);
            setOverall(overviewData.overall);
            setLoading(false);
        }

        fn();
    }, []);

    if(loading) return <div>Loading...</div>

    return (
        <Page title="Portfolio">
            <div className="overview">
                <GeneralDetails />
                <YourPortfolio />
            </div>
        </Page>
    );
}