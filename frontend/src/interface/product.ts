import {ReactNode} from 'react'

export interface Product {
  title: string;
  slug: string;
  image: string;
  category: string;
  color:String,
  brand: string;
  prevPrice: number;
  newPrice:number;
  countInStock: number;
  description: string;
  rating: number;
  numReviews: number;
}

export interface ThemeProvider {
  children:ReactNode;
}