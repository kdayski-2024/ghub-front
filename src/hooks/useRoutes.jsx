const useRoutes = () => {
  const header = [{ label: 'Main', path: '/' }];
  const burger = [
    {
      label: 'Main',
      path: '/',
    },
  ];
  const media = [
    { label: 'DeBank', path: 'https://debank.com/official-account/111827' },
    { label: 'Telegram', path: 'https://t.me/tymioapp' },
    { label: 'Twitter', path: 'https://twitter.com/TYMIOapp' },
    { type: 'mail', label: 'info@Tymio.com', path: 'mailto:info@Tymio.com' },
  ];
  const footer = [{ label: 'Main', path: '/' }];

  const allRoutes = [...header, ...media, ...burger, ...footer];

  return {
    header,
    media,
    burger,
    footer,
    allRoutes,
  };
};

export default useRoutes;
