export const ValidateEmail = (mail) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(mailFormat)) {
    return true;
  }
  return false;
};

export const ValidatePhone = (phone) => {
  const phoneFormat = /^\d{10}$/;
  if (phone.match(phoneFormat)) {
    return true;
  }
  return false;
};
