/**
 * Reusable Form Validation Utilities
 */

export function validatePhone(phone) {
  if (!phone) return false;
  // Clean non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  return cleanPhone.length >= 10 && cleanPhone.length <= 13;
}

export function validateEmail(email) {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateRequired(value) {
  return typeof value === 'string' ? value.trim().length > 0 : Boolean(value);
}
