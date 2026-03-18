import 'server-only';

import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

import type { CourseCode } from '@/domain/courseCode';
import type { CurrencyCode } from '@/domain/currencyCode';
import type { Price } from '@/domain/price';
import { isPrice } from '@/domain/price';
import type { School } from '@/domain/school';

const pricesUrl = process.env.PRICES_ENDPOINT;

export const fetchPrice = async (courses: CourseCode[], countryCode: string, provinceCode: string | null, signal?: AbortSignal): Promise<Result<Price>> => {
  try {
    const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses };

    const url = `${pricesUrl}?${createQuerystring(priceQuery)}`;
    const response = await fetch(url, {
      headers: { 'X-API-Version': '2' },
      signal,
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const responseBody: unknown = await response.json();
    if (!isPrice(responseBody)) {
      throw Error('Unexpected response');
    }

    return success(responseBody);
  } catch (err) {
    if (!signal?.aborted) {
      console.error(err);
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};

const createQuerystring = (priceQuery: PriceQuery): string => {
  const urlSearchParams = new URLSearchParams({
    countryCode: priceQuery.countryCode,
    provinceCode: priceQuery.provinceCode ?? '',
  });

  let i = 0;
  for (const c of priceQuery.courses) {
    urlSearchParams.append(`courses[${i++}]`, c);
  }

  if (priceQuery.options) {
    for (const [ key, value ] of Object.entries(priceQuery.options)) {
      if (typeof value === 'string') {
        urlSearchParams.append(`options[${key}`, value);
      }
      if (typeof value === 'number') {
        urlSearchParams.append(`options[${key}`, value.toString());
      }
      if (typeof value === 'boolean') {
        urlSearchParams.append(`options[${key}`, value ? '1' : '0');
      }
    }
  }

  return urlSearchParams.toString();
};

export interface PriceQuery {
  courses: string[];
  countryCode: string;
  provinceCode?: string;
  options?: PriceQueryOptions;
}

interface PriceQueryOptions {
  noShipping?: boolean;
  discountAll?: boolean;
  discount?: Partial<Record<CurrencyCode, number>> & { default: number };
  discountSignature?: string;
  depositOverrides?: Record<string, number>;
  installmentsOverride?: number;
  studentDiscount?: boolean;
  school?: School;
  promoCode?: string;
  dateOverride?: Date;
}
