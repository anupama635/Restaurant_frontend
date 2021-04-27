import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const Sidebardata = [
  {
    title: 'Orders',
    path: '/Orders',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Today's Order",
        path: '/order/today',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All Orders',
        path: '/order/all',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Menu',
    path: '/menu',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Category',
        path: '/menu/category',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Sub Category',
        path: '/menu/subcategory',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Product',
        path: '/menu/product',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  
];