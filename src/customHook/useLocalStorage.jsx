export const useLocalStorage = (key = "key") => {
  const saveToLocalStorage = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const loadFromLocalStorage = () => {
    const stored = localStorage.getItem(key);
    const data = stored ? JSON.parse(stored) : [];
    return data;
  };

  return { saveToLocalStorage, loadFromLocalStorage };
};
