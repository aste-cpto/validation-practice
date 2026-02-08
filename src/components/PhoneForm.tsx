import React, { useState, useMemo } from 'react';
import { TextField, Button, Typography, Alert, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { validatePhone } from '../utils/phoneValidation';

export const PhoneForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [result, setResult] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const randomPrefix = useMemo(() => (Math.random() < 0.5 ? '-390' : '+380'), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validatePhone(phoneNumber);

    if (validation.isValid) {
      setResult({ type: 'success', text: `СМС надіслано на номер ${phoneNumber}` });
    } else {
      setResult({ type: 'error', text: validation.error });
    }
  };

   return (
    <Box className="bg-white xrounded-xl shadow-md w-full">
      <Typography variant="h6" className="font-bold text-gray-800 text-center">
        Вхід за номером
      </Typography>
      
      <form onSubmit={handleSubmit} className="flex flex-col py-[10px] gap-[20px]">
        <TextField
          fullWidth
          size="medium"
          label={`Номер (напр. ${randomPrefix}) XXXXXXXXX`}
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        
        <Button
          fullWidth
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          sx={{ py: 2, textTransform: 'none', fontSize: '1rem'}}
        >
          Надіслати код
        </Button>
      </form>

      {result && (
        <Alert 
          severity={result.type} 
          className="mt-4"
          sx={{ fontSize: '0.85rem' }}
        >
          {result.text}
        </Alert>
      )}
    </Box>
  );
};