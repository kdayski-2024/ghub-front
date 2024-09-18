import React from 'react';

import * as TymioUI from '../../../components';

const Menus = () => {
  const menu = [
    {
      title: 'Products',
      submenu: [
        {
          title: 'submenu 1',
        },
        {
          title: 'submenu 2',
        },
      ],
    },
    {
      title: 'Developers',
      submenu: [
        {
          title: 'submenu 1',
        },
        {
          title: 'submenu 2',
        },
      ],
    },
    {
      title: 'Governance',
      submenu: [
        {
          title: 'submenu 1',
        },
        {
          title: 'submenu 2',
        },
      ],
    },
    {
      title: 'About',
      submenu: [
        {
          title: 'submenu 1',
        },
        {
          title: 'submenu 2',
        },
      ],
    },
  ];

  const columns = menu.length * 2;

  return (
    <TymioUI.Grid columns={columns} gap={'12px'}>
      {menu.map(({ title, submenu }, key) => (
        <TymioUI.GridElem position="relative" column={'span 2'} key={key}>
          <TymioUI.Menu title={title} submenu={submenu} />
        </TymioUI.GridElem>
      ))}
    </TymioUI.Grid>
  );
};

export default Menus;
