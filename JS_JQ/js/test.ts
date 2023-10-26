// import { expect, Page } from "@playwright/test";
// import * as helper from '../../fixtures/helper'
 
export default class Gtm {
  page: Page;
  dataLayer: any;
 
  constructor(page: Page) {
    this.page = page;
  }
 
  public async goto(prefix) {
    await this.page.goto(`https://ft1-cm-mst-mny-eu-ce.wsf-e-loreal.com/${prefix}`);
    await this.page.getByRole('button', { name: 'Continue without Accepting' }).or(this.page.getByRole('button', { name: 'استمر دون قبول' })).click();
 
  }
 
  public async clickLocator(locator: string) {
    await this.page.locator(locator).click({
      modifiers: ['Control']
    });
  }
 
 
  public async getDataLayer() {
    // await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(1000);
    this.dataLayer = await helper.getDatalayer(this.page);
 
  }
 
  public async validatePageCategory(pageName: string, brand: string, language: string, country: string, siteTypeLevel: string) {
 
    const pageCategory = this.dataLayer.find(el => el.pageCategory === pageName);
    console.log('----page category');
    console.log(pageCategory);
    expect(pageCategory.brand).toEqual(brand);
    expect(pageCategory.language).toEqual(language);
    expect(pageCategory.country).toEqual(country);
    expect(pageCategory.siteTypeLevel).toEqual(siteTypeLevel);
 
  }
  
  const testArgsconfig = {
    eventName: 'any',
    ecommerce: 'any',
    eventAction: 'any',
    eventCategory: 'any',
    // eventLabel: 'any',
    // product_info: 'any',
    // product_tab: 'any',
    // event_name: 'any',
    module_name: 'any'
  }
 
  public async validateUaevent(config: object) {
 
    const uaEvent = this.dataLayer.find(el => el.event === eventName);
 
    expect(uaEvent.ecommerce).toEqual(ecommerce);
    expect(uaEvent.event).toEqual(eventName);
    expect(uaEvent.eventAction).toEqual(eventAction);
    expect(uaEvent.eventCategory).toEqual(eventCategory);
    expect(uaEvent.eventLabel).toEqual(eventLabel);
    expect(uaEvent.product_info).toEqual(product_info);
    expect(uaEvent.product_tab).toEqual(product_tab);
    expect(uaEvent.event_name).toEqual(event_name);
    expect(uaEvent.module_name).toEqual(module_name);
  }
 
 
 
public async validateMDpageEvent(
  brand: string,
  language: string,
  country: string,
  siteTypeLevel: string,
  pageCategory: string,
  articleCategory: string,
  axes: string,
  factory: string,
  website_type: string,
  breadCrumb: string
) {
 
  const MDPageEvent = this.dataLayer.find(el => el.brand === brand);
 
  expect(MDPageEvent.brand).toEqual(brand);
  expect(MDPageEvent.language).toEqual(language);
  expect(MDPageEvent.country).toEqual(country);
  expect(MDPageEvent.siteTypeLevel).toEqual(siteTypeLevel);
  expect(MDPageEvent.pageCategory).toEqual(pageCategory);
  expect(MDPageEvent.articleCategory).toEqual(articleCategory);
  expect(MDPageEvent.axes).toEqual(axes);
  expect(MDPageEvent.factory).toEqual(factory);
  expect(MDPageEvent.website_type).toEqual(website_type);
  expect(MDPageEvent.breadCrumb).toEqual(breadCrumb);
}}
 
 
const UaEventTst: Object = {
  brand: string,
  language: string,
  country: string,
  siteTypeLevel: string,
  pageCategory: string,
  articleCategory: string,
  axes: string,
  factory: string,
  website_type: string,
  breadCrumb: string
}