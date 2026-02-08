import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

export const Disclaimer = () => (
  <Alert severity="info" className="mt-10 bg-blue-50/50">
    <AlertTitle>Увага: Тестове середовище</AlertTitle>
    Цей сайт не надсилає реальні СМС і не зберігає введені дані. 
    Використовуйте її виключно для практики тестування.
  </Alert>
);