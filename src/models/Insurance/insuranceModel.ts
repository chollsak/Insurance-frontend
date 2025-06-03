import { ApiResponse } from "../common";
import { ContentCommonModel } from "../Content/contentCommonModel";

export interface InsuranceModel extends ContentCommonModel {
    titleTh: string;
    titleEn: string;
    descriptionTh: string;
    descriptionEn: string;
    coverImagePath: string;
    iconImagePath: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}

export type InsuranceListResponse = ApiResponse<InsuranceModel[]>;