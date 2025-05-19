// src/api/types/insurance.ts
import { ApiResponse } from './apiResponses';

export interface Insurance {
  id: string;
  title: string;
  effectiveFrom: string;
  effectiveTo: string;
  status: string;
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  coverImagePath: string;
  iconImagePath: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export type InsuranceResponse = ApiResponse<Insurance>;
export type InsuranceListResponse = ApiResponse<Insurance[]>;