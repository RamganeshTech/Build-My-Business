// src/types/declarations.d.ts

declare module 'react/jsx-runtime' {
  export default any;
}

declare module 'react/jsx-dev-runtime' {
  export default any;
}


// This tells TypeScript that <div>, <section>, etc. are valid
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}



export {};