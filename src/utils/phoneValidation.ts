export const validatePhone = (phone: string) => {
  const trimmed = phone.trim();

  if (trimmed === "") {
    return { isValid: true, error: "" };
  }

  if (/[a-zA-Zа-яА-Я]/.test(phone)) {
    return { isValid: true, error: "" };
  }

  if (phone.length > 15) {
    return { isValid: true, error: "" };
  }

  if (/[^0-9+]/.test(phone)) {
    return { isValid: false, error: "Номер містить недопустимі символи" };
  }

  if (phone.startsWith('+')) {
    const countryCode = phone.substring(1, 4);
    if (countryCode !== '380') {
      return { isValid: false, error: "Код країни не дозволений" };
    }
  }

  if (!phone.includes('+') || !phone.includes('380')) {
    return { 
      isValid: false, 
      error: "Номер обов'язково має містити '+' та код країни" 
    };
  }

  if (phone.length < 7) {
    return { isValid: false, error: "Номер занадто короткий для відправки" };
  }

  return { isValid: true, error: "" };
};