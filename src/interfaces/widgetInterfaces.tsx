export interface IImage {
  id: string;
  name: string;
  url: string;
}

export interface IUploadResult {
  info: {
    public_id: string;
    original_filename: string;
    url: string;
  };
}
