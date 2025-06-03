import { apiClient } from "../../common";
import { InsuranceListResponse } from "../../models";

export const insuranceService = {
    getAllInsurances: async (): Promise<InsuranceListResponse> => {
        const { data } = await apiClient.get<InsuranceListResponse>("/insurances");
        return data;
    },
}

export default insuranceService;