import { atom, useAtom } from 'jotai';

const accountPopupAtom = atom(false);
const numberKeyboardAtom = atom(false);

export const useAccountPopup = () => {
  const [visible, setVisible] = useAtom(accountPopupAtom);
  const [openNumberKeyboard, setOpenNumberKeyboard] = useAtom(numberKeyboardAtom);
  const showAccountPopup = () => {
    setVisible(true);

    setTimeout(() => {
      setOpenNumberKeyboard(true);
    }, 300);
  };
  const hideAccountPopup = () => {
    setOpenNumberKeyboard(false);

    setTimeout(() => {
      setVisible(false);
    }, 300);
  };
  return {
    visible,
    openNumberKeyboard,
    showAccountPopup,
    hideAccountPopup
  };
};
