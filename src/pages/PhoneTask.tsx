import { Stack, Box } from '@mui/material';
import { PhoneForm } from '../components/PhoneForm';
import { Disclaimer } from '../components/Disclaimer';

export const PhoneTask = () => (
  <Box sx={{ width: '100%', maxWidth: 400 }}>
    <Stack spacing={3}> 
      <PhoneForm />
      <Disclaimer />
    </Stack>
  </Box>
);