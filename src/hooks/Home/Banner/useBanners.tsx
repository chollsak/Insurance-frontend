import { useQuery } from "@tanstack/react-query";
import { bannerService } from "../../../services";

export const useBannersQuery = () => {
    return useQuery({
        queryKey: ["banners"],
        queryFn: bannerService.getAllBanners,
    });
}
