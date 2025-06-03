import { apiClient } from "../../common";
import { SuitInsuranceListResponse } from "../../models";

export const suitInsuranceService = {
    getAllSuitInsurances: async (): Promise<SuitInsuranceListResponse> => {
        const { data } = await apiClient.get<SuitInsuranceListResponse>("/suit-insurances");
        return data;
    },
}

export default suitInsuranceService;