# Toast library

## Available at npm

https://www.npmjs.com/package/ilona-toast-lib

## Toast props
- label
- variant: success (default), error, warning, info
- color: any color or default if not specified

## Toast container props
- list of the toasts and delete toast function, returned by createToast()
- position of the toast: topLeft, topMiddle, topRight, bottomRight (default), bottomLeft
- spaces: 0, 10 (default), 20, 30, 40
- animation: fromLeft, fromRight, fromTop, fromBottom or no animation by default
- deleteTime: any number af seconds when a toast will be deleted
