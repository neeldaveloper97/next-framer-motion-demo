"use client";

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function LanguageToggleButton() {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.split('/').slice(2).join('/');
  const locale = pathname.split('/')[1] || 'en';

  const changeLocale = (newLocale) => {
    router.push(`/${newLocale}/${currentPath}`);
  };

  return (
    <button onClick={() => changeLocale(locale === "en" ? "cz" : "en")} className='bg-blue-500 text-white px-4 rounded-md py-1 z-[999]'>
      {locale === "en" ? "Chez" : "English"}
    </button>
  );
}
