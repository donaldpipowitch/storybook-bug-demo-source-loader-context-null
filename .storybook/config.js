import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

addParameters({
  backgrounds: [
    {
      name: 'transparent',
      value:
        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQoU2P8+vXrfwYkwM3NzYjMZ6SDAmT7QGx0K1EcRBsFABvvH4ERaEIJAAAAAElFTkSuQmCC)',
      default: true
    },
    { name: 'brand', value: '#00378b' }
  ]
});

const loadStories = () => {
  const allExports = [
    // if you want to have a default story:
    // require('./welcome.js')
  ];
  const req = require.context('../stories', true, /\.tsx$/);
  req.keys().forEach((name) => allExports.push(req(name)));
  return allExports;
};

configure(loadStories, module);
