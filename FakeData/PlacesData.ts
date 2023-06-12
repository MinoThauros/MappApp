import { PlaceProp } from "../models/places";

export const places: PlaceProp[] = [
    {
      title: "Place 1",
      imageUri: "http://example.com/image1.jpg",
      address: "Address 1",
      location: { lat: 40.1, lng: -74.1 },
      id: "1" + new Date().toString() + Math.random().toString(),
    },
    {
      title: "Place 2",
      imageUri: "http://example.com/image2.jpg",
      address: "Address 2",
      location: { lat: 40.2, lng: -74.2 },
      id: "2" + new Date().toString() + Math.random().toString(),
    },
    {
      title: "Place 3",
      imageUri: "http://example.com/image3.jpg",
      address: "Address 3",
      location: { lat: 40.3, lng: -74.3 },
      id: "3" + new Date().toString() + Math.random().toString(),
    },
    // Continuing in this manner...
    {
      title: "Place 18",
      imageUri: "http://example.com/image18.jpg",
      address: "Address 18",
      location: { lat: 40.18, lng: -74.18 },
      id: "18" + new Date().toString() + Math.random().toString(),
    },
  ];