import { ApiResponse } from "../common";
import { ContentCommonModel } from "../Content/contentCommonModel";

export interface PromotionModel extends ContentCommonModel {
    titleTh: string;
    titleEn: string;
    descriptionTh: string;
    descriptionEn: string;
    coverImagePath: string;
    stateDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}

export type PromotionListResponse = ApiResponse<PromotionModel[]>;
