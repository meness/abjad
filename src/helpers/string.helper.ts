export const calculateType = (num: number) => {
  switch (num) {
    case 0:
      return 'اشرافی';
    case 1:
      return 'عرفانی';
    case 2:
      return 'حادثه‌سار';
    case 3:
      return 'کم درآمد';
    case 4:
      return 'متضرر';
    case 5:
      return 'معمولی';
    case 6:
      return 'عالی';
      default:
        return "خطا"
  }
};
