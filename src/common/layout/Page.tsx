import { ReactElement } from "react";
import CloseIcon from "../../assets/close.svg?react";
import Text from "../components/Text";

interface Props {
    title: string;
    children:ReactElement;
}

export function Page(props:Props) {
    return (
    <div className="page">
        <div className="page-header">
            <div className="page-header-title">
                <Text variant="bold" color="white">{props.title}</Text>
            </div>
            <div className="page-header-btn">
                <CloseIcon  height={16} width={16} color="white"/>
            </div>
        </div>
        <div className="page-content">
            {props.children}
        </div>
    </div>
    );
}