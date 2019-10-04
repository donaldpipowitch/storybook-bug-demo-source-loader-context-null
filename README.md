Run `$ yarn && yarn storybook` and visit `http://localhost:58413/?path=/story/components-mycomponent--test`.

This throws:

```
Uncaught TypeError: Cannot read property 'id' of null
    at getLocation (preview.js:18)
    at sendEvent (preview.js:24)
    at decorated (preview.js:60)
    at useSomeData (use-some-data.tsx:34)
    at MyComponent (my-component.tsx:26)
    at renderWithHooks (react-dom.development.js:15105)
    at mountIndeterminateComponent (react-dom.development.js:17339)
    at beginWork$1 (react-dom.development.js:18483)
    at HTMLUnknownElement.callCallback (react-dom.development.js:348)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:398)
```
