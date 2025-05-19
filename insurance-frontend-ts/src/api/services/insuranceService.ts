// Let's create the insurance service
// src/api/services/insuranceService.ts
import apiClient from '../config/apiClient';
import { Insurance, InsuranceResponse, InsuranceListResponse } from '../types/insurance';

// Use the correct API path
const BASE_PATH = '/insurances';

export const insuranceService = {
  /**
   * Get all insurances
   * @returns Promise with an array of insurances
   */
  getAllInsurances: async (): Promise<Insurance[]> => {
    try {
      console.log('Fetching insurances from:', `${apiClient.defaults.baseURL}${BASE_PATH}`);
      const response = await apiClient.get<InsuranceListResponse>(BASE_PATH);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching insurances:', error);
      throw error;
    }
  },
  
  /**
   * Get insurance by ID
   * @param id - Insurance ID
   * @returns Promise with a single insurance
   */
  getInsuranceById: async (id: string): Promise<Insurance> => {
    try {
      const response = await apiClient.get<InsuranceResponse>(`${BASE_PATH}/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching insurance with id ${id}:`, error);
      throw error;
    }
  },
  
  /**
   * Get the full image URL for an insurance image
   * @param imagePath - The image path from the insurance object
   * @returns Full URL to the image
   */
  getImageUrl: (imagePath: string): string => {
    if (!imagePath) return '';
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    return `${baseUrl}/attachments/${imagePath}`;
  }
};

export default insuranceService;