import { openAlert, setMessageAlert } from '../redux/alert-site';
import { AlertSiteTypes } from '../enums/enums';
import store from '../app/store';

export const RandomKey = (length = 5) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const setAlertError = (error: any, defaultMessage: string = 'Ошибка сохранения') => {
  const message = error?.error?.message || defaultMessage;
  store.dispatch(
    openAlert({
      status: AlertSiteTypes.error,
      go: true
    })
  );
  store.dispatch(setMessageAlert(message));
};

export const getBase64 = (file: any, callBack: any) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    callBack(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
};
