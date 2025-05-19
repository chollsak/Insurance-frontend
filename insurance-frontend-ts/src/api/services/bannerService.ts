// src/api/services/bannerService.ts
import apiClient from '../config/apiClient';
import { Banner, BannerResponse, BannerListResponse } from '../types/banner';

const BASE_PATH = '/banners';

export const bannerService = {
  /**
   * Get all banners
   * @returns Promise with an array of banners
   */
  getAllBanners: async (): Promise<Banner[]> => {
    try {
      console.log('Fetching banners from:', `${apiClient.defaults.baseURL}${BASE_PATH}`);
      const response = await apiClient.get<BannerListResponse>(BASE_PATH);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching banners:', error);
      throw error;
    }
  },
  
  /**
   * Get banner by ID
   * @param id - Banner ID
   * @returns Promise with a single banner
   */
  getBannerById: async (id: string): Promise<Banner> => {
    try {
      const response = await apiClient.get<BannerResponse>(`${BASE_PATH}/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching banner with id ${id}:`, error);
      throw error;
    }
  },
  
  /**
   * Get the full image URL for a banner image
   * @param imagePath - The image path from the banner object
   * @returns Full URL to the image
   */
  getImageUrl: (imagePath: string): string => {
    if (!imagePath) return '';
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    return `${baseUrl}/attachments/${imagePath}`;
  }
};

export default bannerService;