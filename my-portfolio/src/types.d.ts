declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module 'next/image' {
    import Image from 'next/dist/shared/lib/image-external';
    export * from 'next/dist/shared/lib/image-external';
    export default Image;
}
