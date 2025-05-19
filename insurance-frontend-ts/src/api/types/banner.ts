// src/api/types/banner.ts
import { ApiResponse } from './apiResponses';

export interface BannerContent {
  id: string;
  contentImagePath: string;
  contentHyperLink: string;
}

export interface Banner {
  id: string;
  title: string;
  effectiveFrom: string;
  effectiveTo: string;
  status: string;
  coverImagePath: string;
  coverHyperLink: string;
  contents: BannerContent[];
}

export type BannerResponse = ApiResponse<Banner>;
export type BannerListResponse = ApiResponse<Banner[]>;