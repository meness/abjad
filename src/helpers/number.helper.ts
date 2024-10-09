export const calculateAbjad = (name: string) => {
  const abjadMap: { [key: string]: number } = {
    ا: 1,
    آ: 1,
    ب: 2,
    ج: 3,
    د: 4,
    ه: 5,
    و: 6,
    ز: 7,
    ح: 8,
    ط: 9,
    ی: 10,
    ک: 20,
    ل: 30,
    م: 40,
    ن: 50,
    س: 60,
    ع: 70,
    ف: 80,
    ص: 90,
    ق: 100,
    ر: 200,
    ش: 300,
    ت: 400,
    ث: 500,
    خ: 600,
    ذ: 700,
    ض: 800,
    ظ: 900,
    غ: 1000
  };

  // Remove spaces and convert to lowercase for consistency
  const cleanName = name.replace(/\s+/g, '').toLowerCase();

  let total = 0;

  // Calculate the Abjad value for each letter in the name
  for (const char of cleanName) {
    if (abjadMap[char]) {
      total += abjadMap[char];
    } else {
      console.warn(`کاراتر ${char} احتمالا به اشتباه در متد ابجد تعریف نشده است.`);
    }
  }

  return total;
};

export const calculateXTypeNum = (num: number) => {
  const decimal = num - Math.floor(num);

  if (decimal === 0) {
    return 0;
  } else if (decimal >= 0.7 && decimal < 0.8) {
    return 1;
  } else if (decimal >= 0.2 && decimal < 0.3) {
    return 2;
  } else if (decimal >= 0.5 && decimal < 0.6) {
    return 3;
  } else {
    return -1;
  }
};

export const calculateYTypeNum = (num: number) => {
  const decimal = num - Math.floor(num);

  if (decimal >= 0.3 && decimal < 0.4) {
    return 4;
  } else if (decimal === 0) {
    return 5;
  } else if (decimal >= 0.6 && decimal < 0.7) {
    return 6;
  } else {
    return -1;
  }
};

export const formatNum = (num: number) => {
  return new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 2, minimumFractionDigits: 0 }).format(num);
};
