export const validateCardNumber = cardNumber => {
  const re = /^[1-9]\d{15}$/;
  return re.test(String(cardNumber));
};

export const validateEmail = email => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

export function validatePhoneNumber(inputtxt) {
  var phoneno = /^(03|\+923)([0-9]{9})$/;
  return phoneno.test(inputtxt);
}

export const validateAmount = amount => {
  const re = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,})?)$/;
  return re.test(String(amount));
};

export const validateCnic = nicNumber => {
  const re = /^[0-9]\d{12}$/;
  return re.test(String(nicNumber));
};
