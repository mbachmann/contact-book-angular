/**
 * API for Contact App
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: @springdoc.version@
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AddressType } from './addressType';


export interface Address { 
    id?: number;
    addressType?: AddressType;
    street?: string;
    additional?: string;
    postalCode?: string;
    city?: string;
    country?: string;
    defaultAddress?: boolean;
}

