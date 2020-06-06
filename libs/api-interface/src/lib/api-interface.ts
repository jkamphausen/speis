export interface ApiResponse {
  message: string;
}

export const API_URL = '/api/message'

export interface Item {
  name?: string;
  type?: string;
  amount?: string;
  location?: string;
  barcode?: string;
  weight?: number;
  price?: number;
  currency?: string;
  purchaseDate?: string;
  expiryDate?: string;
  producer?: string;
  seller?: string;
}

export interface Food extends Item {
  openingDate?: string;
}
