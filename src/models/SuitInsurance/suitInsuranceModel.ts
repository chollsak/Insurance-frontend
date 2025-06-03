import { ApiResponse } from "../common";
import { ContentCommonModel } from "../Content/contentCommonModel";

export interface SuitInsuranceModel extends ContentCommonModel {
    titleTh: string;
    titleEn: string;
    imagePath: string;
}

export type SuitInsuranceListResponse = ApiResponse<SuitInsuranceModel[]>;