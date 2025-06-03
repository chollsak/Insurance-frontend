import { ApiResponse } from "../common";
import { ContentCommonModel } from "../Content/contentCommonModel";
import { BannerContentModel } from "./BannerContentModel";

export interface BannerModel extends ContentCommonModel {
    coverImagePath: string;
    coverHyperLink: string;
    contents: BannerContentModel[];
}

export type BannerListResponse = ApiResponse<BannerModel[]>