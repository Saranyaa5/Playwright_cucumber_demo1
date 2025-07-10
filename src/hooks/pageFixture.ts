import { Page } from '@playwright/test';
import { Logger } from 'winston';
import HeaderPage from '../pages/headerPage';  // Use default import
import LoginPage from '../pages/loginPage';    // Use default import
import AddToCartPage from '../pages/AddToCartPage';

export const pageFixture = {
    page: undefined as Page | undefined,  // Remove @ts-ignore and make it optional
    logger: undefined as Logger | undefined,
    headerPage: undefined as HeaderPage | undefined,
    loginPage: undefined as LoginPage | undefined,
    AddToCartPage:undefined as AddToCartPage | undefined
}