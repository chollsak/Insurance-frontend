import { useQueries } from "@tanstack/react-query"
import { bannerService, insuranceService, promotionService, suitInsuranceService } from "../../../services"

export const useHomeData = () => {
    const results = useQueries({
        queries: [
            { queryKey: ["banners"], queryFn: bannerService.getAllBanners },
            { queryKey: ["insurances"], queryFn: insuranceService.getAllInsurances },
            { queryKey: ["promotions"], queryFn: promotionService.getAllPromotions },
            { queryKey: ["suit_insurances"], queryFn: suitInsuranceService.getAllSuitInsurances },
        ]
    });

    const [banner, insurance, promotion, suitInsurance] = results;
    return {
        data: {
            banners: banner.data,
            insurances: insurance.data,
            promotions: promotion.data,
            suitInsurances: suitInsurance.data,
        },
        isLoading: results.some(r => r.isLoading),
        isError: results.some(r => r.isError),
        errors: results.filter(r => r.isError).map(r => r.error),
    };
}