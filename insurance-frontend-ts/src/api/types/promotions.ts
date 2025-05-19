// src/api/types/promotions.ts
import { ApiResponse } from './apiResponses';

// Promotion entity type
export interface Promotion {
  id: string;
  title: string;
  effectiveFrom: string;
  effectiveTo: string;
  status: 'ACTIVE' | 'INACTIVE' | 'EXPIRED'; // Add other possible statuses if needed
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  coverImageUrl: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

// Frontend-specific promotion type (can include additional fields for UI)
export interface PromoData extends Promotion {
  // Additional fields used by the frontend
  bgColor?: string;
  subTitle?: string;
  description?: string;
  validUntil?: string;
}

// API response types
export type PromotionListResponse = ApiResponse<Promotion[]>;
export type PromotionResponse = ApiResponse<Promotion>;