// src/api/services/suitInsuranceService.ts
import apiClient from '../config/apiClient';
import { SuitInsurance, SuitInsuranceCreateRequest, SuitInsuranceResponse, SuitInsuranceListResponse } from '../types/suitInsurance';

const BASE_PATH = '/suit-insurances';

export const suitInsuranceService = {
  /**
   * Get all suit insurances
   * @returns Promise with an array of suit insurances
   */
  getAllSuitInsurances: async (): Promise<SuitInsurance[]> => {
    try {
      const response = await apiClient.get<SuitInsuranceListResponse>(BASE_PATH);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching suit insurances:', error);
      throw error;
    }
  },
  
  /**
   * Get suit insurance by ID
   * @param id - Suit insurance ID
   * @returns Promise with a single suit insurance
   */
  getSuitInsuranceById: async (id: string): Promise<SuitInsurance> => {
    try {
      const response = await apiClient.get<SuitInsuranceResponse>(`${BASE_PATH}/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching suit insurance with id ${id}:`, error);
      throw error;
    }
  },
  
  /**
   * Create a new suit insurance with image upload
   * @param suitInsurance - Suit insurance data
   * @returns Promise with the created suit insurance
   */
  createSuitInsurance: async (suitInsurance: SuitInsuranceCreateRequest): Promise<SuitInsurance> => {
    try {
      // Create FormData for multipart/form-data request
      const formData = new FormData();
      
      // Add text fields
      formData.append('title', suitInsurance.title);
      formData.append('effectiveFrom', suitInsurance.effectiveFrom);
      formData.append('effectiveTo', suitInsurance.effectiveTo);
      formData.append('status', suitInsurance.status);
      formData.append('titleTh', suitInsurance.titleTh);
      formData.append('titleEn', suitInsurance.titleEn);
      
      // Add file
      formData.append('image', suitInsurance.image);
      
      // Send request with FormData
      const response = await apiClient.post<SuitInsuranceResponse>(
        BASE_PATH, 
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      return response.data.data;
    } catch (error) {
      console.error('Error creating suit insurance:', error);
      throw error;
    }
  },
  
  /**
   * Update an existing suit insurance with image upload
   * @param id - Suit insurance ID
   * @param suitInsurance - Suit insurance data
   * @returns Promise with the updated suit insurance
   */
  updateSuitInsurance: async (id: string, suitInsurance: Partial<SuitInsuranceCreateRequest>): Promise<SuitInsurance> => {
    try {
      // Create FormData for multipart/form-data request
      const formData = new FormData();
      
      // Add text fields if provided
      if (suitInsurance.title) formData.append('title', suitInsurance.title);
      if (suitInsurance.effectiveFrom) formData.append('effectiveFrom', suitInsurance.effectiveFrom);
      if (suitInsurance.effectiveTo) formData.append('effectiveTo', suitInsurance.effectiveTo);
      if (suitInsurance.status) formData.append('status', suitInsurance.status);
      if (suitInsurance.titleTh) formData.append('titleTh', suitInsurance.titleTh);
      if (suitInsurance.titleEn) formData.append('titleEn', suitInsurance.titleEn);
      
      // Add file if provided
      if (suitInsurance.image) formData.append('image', suitInsurance.image);
      
      // Send request with FormData
      const response = await apiClient.put<SuitInsuranceResponse>(
        `${BASE_PATH}/${id}`, 
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      return response.data.data;
    } catch (error) {
      console.error(`Error updating suit insurance with id ${id}:`, error);
      throw error;
    }
  },
  
  /**
   * Delete a suit insurance
   * @param id - Suit insurance ID
   * @returns Promise that resolves when deletion is complete
   */
  deleteSuitInsurance: async (id: string): Promise<void> => {
    try {
      await apiClient.delete(`${BASE_PATH}/${id}`);
    } catch (error) {
      console.error(`Error deleting suit insurance with id ${id}:`, error);
      throw error;
    }
  },
  
  /**
   * Get the full image URL for a suit insurance image
   * @param imagePath - The image path from the suit insurance object
   * @returns Full URL to the image
   */
  getImageUrl: (imagePath: string): string => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    return `${baseUrl}/attachments/${imagePath}`;
  }
};

export default suitInsuranceService;