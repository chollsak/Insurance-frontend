import { useQuery } from "@tanstack/react-query";
import { insuranceService } from "../../services";

export const useInsurancesQuery = () => {
    return useQuery({
        queryKey: ["insurances"],
        queryFn: insuranceService.getAllInsurances,
    });
}
