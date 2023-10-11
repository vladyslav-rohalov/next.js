// import AccountReviews from '../../../components/personalAccount/main/reviews/reviews';
import { AccountReviewsWithAuth } from '../../../components/personalAccount/main/reviews/reviews';
import { Box } from '@mui/material';

export const metadata = {
  title: 'Profile - Reviews',
  description: `List of user reviews of purchased products`,
};

export default function Reviews() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '70%' },
      }}
    >
      <AccountReviewsWithAuth />
    </Box>
  );
}
