import { ApiResponse } from "./apiResponses";

// src/api/types/suitInsurance.ts
export interface SuitInsurance {
    id: string;
    title: string;
    effectiveFrom: string;
    effectiveTo: string;
    status: string;
    titleTh: string;
    titleEn: string;
    imagePath: string;
  }
  
  export interface SuitInsuranceCreateRequest {
    title: string;
    effectiveFrom: string;
    effectiveTo: string;
    status: string;
    titleTh: string;
    titleEn: string;
    image: File;
  }
  
  export type SuitInsuranceResponse = ApiResponse<SuitInsurance>;
  export type SuitInsuranceListResponse = ApiResponse<SuitInsurance[]>;