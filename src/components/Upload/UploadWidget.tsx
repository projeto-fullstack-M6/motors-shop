import { useContext, useEffect, useRef } from "react";
import { AdminContext } from "../../providers/AdminContext";
import { StyledParagraph } from "./style";
import { BsUpload } from "react-icons/bs";

export const UploadWidget: React.FC = () => {
  const { setAllAnnouncementsImages } = useContext(AdminContext);
  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();
  const allImages: string[] = [];
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current?.createUploadWidget(
      {
        cloudName: "db8sktejc",
        uploadPreset: "rtay79sa",
      },
      function (error: any, result: any) {
        const event = result.event;
        if (error) {
          console.log(error);
        }
        if (event === "success") {
          const imageInfo = result.info;
          // const newImage: IImage = {
          //   id: imageInfo.id,
          //   name: imageInfo.original_filename,
          //   url: imageInfo.url,
          // };
          allImages.push(imageInfo.url);
        }
        if (event === "abort") {
          setAllAnnouncementsImages(allImages);
        }
      }
    );
  }, []);

  return (
    <StyledParagraph>
      <BsUpload
        onClick={() => widgetRef.current?.open()}
        cursor={"pointer"}
        size={30}
      />
    </StyledParagraph>
  );
};
