import localFont from 'next/font/local';

const yekanBakhFont = localFont({
  variable: '--yekan-bakh',
  src: [
    { path: '../../public/assets/fonts/yekan-bakh-variable.ttf', style: 'normal', weight: '400' }]
});

export const uiConfig = {
  fonts: {
    yekanBakh: yekanBakhFont
  }
};
