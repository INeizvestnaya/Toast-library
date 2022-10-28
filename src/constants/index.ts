export enum ToastVariants {
  info = 'info',
  error = 'error',
  success = 'success',
  warning = 'warning',
}

export enum TextColors {
  black = 'black',
  white = 'white',
}

export enum PositionTypes {
  topLeft = 'topLeft',
  topMiddle = 'topMiddle',
  topRight = 'topRight',
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomRight',
}

export const Spaces = [0, 10, 20, 30, 40] as const;

export enum AnimationTypes {
  fromLeft = 'fromLeft',
  fromRight = 'fromRight',
  fromTop = 'fromTop',
  fromBottom = 'fromBottom',
}

export const Positions = {
  topLeft: `
    top: 0;
    left: 0;
  `,
  topMiddle: `
    top: 0;
    left: 50%;
    margin-left: -175px;
  `,
  topRight: `
    top: 0;
    right: 0;
  `,
  bottomLeft: `
    bottom: 0;
    left: 0;
  `,
  bottomRight: `
    bottom: 0;
    right: 0;
  `,
};
