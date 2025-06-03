import { apiClient } from "../../common";
import { BannerListResponse } from "../../models";

export const bannerService = {
    getAllBanners: async (): Promise<BannerListResponse> => {
        const { data } = await apiClient.get<BannerListResponse>("/banners");
        return data;
    },
}

export default bannerService;