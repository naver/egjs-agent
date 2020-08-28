import { NavigatorUAData } from "./src/types";

declare global {
    interface Navigator {
        userAgentData: NavigatorUAData;
    }
}
