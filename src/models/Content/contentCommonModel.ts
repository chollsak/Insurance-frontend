import { ContentStatus } from "./contentStatus";

export interface ContentCommonModel {
    id: string;
    title: string;
    effectiveFrom: string;
    effectiveTo: string;
    status: ContentStatus;
}