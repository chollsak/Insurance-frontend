import { useQuery } from "@tanstack/react-query";
import { promotionService } from "../../../services";

export const usePromotionsQuery = () => {
    return useQuery({
        queryKey: ["promotions"],
        queryFn: promotionService.getAllPromotions,
    });
}
