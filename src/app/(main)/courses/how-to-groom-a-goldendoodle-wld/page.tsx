import { GoldendoodleCourse } from '../how-to-groom-a-goldendoodle';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export { metadata } from '../how-to-groom-a-goldendoodle';

const GoldendoodleCoursePage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice([ 'gd' ], countryCode, provinceCode);

  const price = priceResult.success
    ? priceResult.value.currency.symbol + formatPrice(priceResult.value.plans.full.total)
    : undefined;

  return <GoldendoodleCourse price={price} wld />;
};

export default GoldendoodleCoursePage;
