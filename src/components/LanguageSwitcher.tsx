'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    if (!pathname) return;

    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace the locale segment
    const newPathname = segments.join('/');

    router.push(newPathname);
  };

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'de', name: 'DE', flag: '🇩🇪' },
  ];

  return (
    <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
      <Globe className="w-4 h-4 text-white" />
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-transparent border border-white/30 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="text-black">
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
