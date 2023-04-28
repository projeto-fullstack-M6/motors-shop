declare module "*.png" {
  const content: string;
  export default content;
}

export {};

declare global {
  interface Window {
    cloudinary: any;
  }
}
