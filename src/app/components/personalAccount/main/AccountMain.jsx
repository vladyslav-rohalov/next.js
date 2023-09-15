import { Column } from '@/app/utils/commonStyles';
import AccountSettings from './settings/settings';
import AccountPurchases from './purchases/purchases';
import AccountFavorites from './favorites/favorites';
import AccountReviews from './reviews/reviews';

export default function AccountMain({ value, user }) {
  const { orders } = user;
  return (
    <Column
      component="section"
      sx={{
        width: '70%',
      }}
    >
      {value === 0 && <AccountSettings user={user} />}
      {value === 1 && <AccountPurchases orders={orders} />}
      {value === 2 && <AccountFavorites />}
      {value === 3 && <AccountReviews />}
    </Column>
  );
}
