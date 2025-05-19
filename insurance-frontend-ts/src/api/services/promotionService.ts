// src/api/services/promotionService.ts
import apiClient from '../config/apiClient';
import { Promotion, PromoData, PromotionListResponse, PromotionResponse } from '../types/promotions';

const BASE_PATH = '/promotions';

// Function to transform backend response to your frontend model
const transformBackendToFrontend = (backendPromo: Promotion): PromoData => {
  return {
    ...backendPromo, // Include all original fields
    subTitle: backendPromo.titleEn || '',
    description: backendPromo.descriptionEn || backendPromo.descriptionTh || '',
    validUntil: `วันนี้ - ${new Date(backendPromo.effectiveTo).toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })}`,
    bgColor: '#a8bbd6', // Default background color
  };
};

export const promotionService = {
  /**
   * Get all promotions
   * @returns Promise with an array of promotions formatted for the frontend
   */
  getAllPromotions: async (): Promise<PromoData[]> => {
    try {
      const response = await apiClient.get<PromotionListResponse>(BASE_PATH);
      
      // Transform backend data to match frontend component expectations
      return response.data.data.map(transformBackendToFrontend);
    } catch (error) {
      console.error('Error fetching promotions:', error);
      throw error;
    }
  },

};