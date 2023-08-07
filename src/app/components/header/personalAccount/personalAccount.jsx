import { IconButton } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function PersonalAccount({ onOpenAccountModal }) {
  return (
    <IconButton
      color="inherit"
      aria-label="personal account"
      sx={{ display: { xs: 'none', sm: 'flex' } }}
      onClick={onOpenAccountModal}
    >
      <AccountCircleOutlinedIcon sx={{ fontSize: 40 }} />
    </IconButton>
  );
}