export const getCalculationsHistory = () =>
  JSON.parse(localStorage.getItem('history')) ?? [];

export const setCalculationsHistory = (history) => {
  localStorage.setItem(
    'history',
    JSON.stringify(history, (key, value) => {
      if (Number.isNaN(value.result)) {
        return { ...value, result: 'NaN' };
      }
      switch (value.result) {
        case Infinity: {
          return { ...value, result: 'Infinity' };
        }
        default: {
          return value;
        }
      }
    })
  );
};

export const getTheme = () => localStorage.getItem('theme') ?? 'light';
export const setTheme = (currentTheme) =>
  localStorage.setItem('theme', currentTheme);
