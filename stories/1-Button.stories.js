import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add(
    'Text',
    () => <Button>Hello Button</Button>
  )
  .add(
    'Emoji',
    () => (
      <Button>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    ),
    { a11y: { element: '#unknown-id' }}
  );