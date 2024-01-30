export const getFullYear = () => {
  return new Date().getFullYear();
};

export const getFooterCopy = (isIndex) => {
  let msg;

  if (isIndex) {
    msg = "Holberton School";
  } else {
    msg = "Holberton School main dashboard";
  }

  return msg;
};

export const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};
