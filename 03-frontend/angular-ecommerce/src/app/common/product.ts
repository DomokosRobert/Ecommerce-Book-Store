import { LocationChangeEvent } from "@angular/common";

export class Product {
    id: string;
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl: string;
    active: boolean;
    unitsInStock: Date;
    dateCreated: Date;
    lastUpdated: Date;
}
