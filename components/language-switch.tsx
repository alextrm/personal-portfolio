import React from 'react';

interface LanguageSwitcherProps {
  setLanguage: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ setLanguage }) => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <label htmlFor="language">Select Language: </label>
      <select id="language" onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
