import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

import type { Enrollment } from '@/domain/enrollment';
import { isRawEnrollment } from '@/domain/enrollment';

const enrollmentsUrl = process.env.ENROLLMENT_ENDPOINT;

export const fetchEnrollment = async (id: number, code: string, controller?: AbortController): Promise<Result<Enrollment>> => {
  try {
    const url = `${enrollmentsUrl}/${id}?code=${encodeURIComponent(code)}`;

    const response = await fetch(url, {
      signal: controller?.signal,
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const responseBody: unknown = await response.json();
    if (!isRawEnrollment(responseBody)) {
      return failure(Error('Unexpected response'));
    }

    return success({
      ...responseBody,
      transactionTime: responseBody.transactionTime === null ? null : new Date(responseBody.transactionTime),
      paymentDate: new Date(responseBody.paymentDate),
    });
  } catch (err) {
    if (!controller?.signal.aborted) {
      console.error(err);
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};
