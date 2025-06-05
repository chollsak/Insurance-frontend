import { useQuery } from "@tanstack/react-query";
import { suitInsuranceService } from "../../../services";

export const useSuitInsurancesQuery = () => {
    return useQuery({
        queryKey: ["suit_insurances"],
        queryFn: suitInsuranceService.getAllSuitInsurances,
    });
}
