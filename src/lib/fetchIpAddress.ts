import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

const url = 'https://api64.ipify.org/?format=json';

export const fetchIpAddress = async (controller?: AbortController): Promise<Result<string>> => {
  try {
    const response = await fetch(url, {
      signal: controller?.signal,
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json() as unknown;
    if (!isApiResponse(json)) {
      throw Error('Unexpected response');
    }

    return success(json.ip);

  } catch (err: unknown) {
    if (!controller?.signal.aborted) {
      console.error(err);
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};

interface ApiResponse {
  ip: string;
}

const isApiResponse = (obj: unknown): obj is ApiResponse => {
  return typeof obj === 'object' && obj !== null &&
    'ip' in obj && typeof obj.ip === 'string';
};
