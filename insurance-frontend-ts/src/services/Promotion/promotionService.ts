import { apiClient } from "../../common";
import { PromotionListResponse } from "../../models";

export const promotionService = {
    getAllPromotions: async (): Promise<PromotionListResponse> => {
        const { data } = await apiClient.get<PromotionListResponse>("/promotions");
        return data;
    },
}

export default promotionService;