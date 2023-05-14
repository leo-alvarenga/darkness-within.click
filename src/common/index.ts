export const paths = {
  HOME: '/',
  TOOLS: {
    root: '/tools',
    CHMOD: '/tools/chmod',
  },
};

export const availableTools = [
  {
    name: 'page.tools.chmod.title',
    description: 'page.tools.chmod.description',
    path: paths.TOOLS.CHMOD,
    icon: 'fa-solid fa-key',
  },
];

export const pathArray = [
  {
    name: 'page.home.title',
    path: paths.HOME,
    icon: 'fa-solid fa-house-chimney',
  },
  {
    name: 'page.tools.title',
    path: paths.TOOLS.root,
    icon: 'fa-solid fa-toolbox',
  },
];

export const personalSiteNotification = {
  title: 'page.home.notification.title',
  icon: 'fa-solid fa-lightbulb',
  redirect: {
    to: 'https://leo-alvarenga.click',
    label: 'page.home.notification.label',
  },
};
