import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

export const sendEnrollmentEmail = async (enrollmentId: number, code: string, signal?: AbortSignal): Promise<Result> => {
  try {
    const url = `${process.env.ENROLLMENT_ENDPOINT}/${enrollmentId}/email`;

    const response = await fetch(url, {
      method: 'post',
      headers: {
        'X-API-Version': '2',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
      signal,
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    await response.json();

    return success();
  } catch (err) {
    if (!signal?.aborted) {
      console.error(err);
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};
