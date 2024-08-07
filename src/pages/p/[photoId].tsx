import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Carousel from "../../components/Carousel";
import { StaticImageData } from "next/image";

const GallerySection: NextPage<{ currentPhoto: StaticImageData }> = ({
  currentPhoto,
}) => {
  const router = useRouter();
  const { photoId } = router.query;
  let index = Number(photoId);

  const currentPhotoUrl = currentPhoto.src;

  return (
    <>
      <Head>
        <title>Image Gallery</title>
        <meta property="og:image" content={currentPhotoUrl} />
        <meta name="twitter:image" content={currentPhotoUrl} />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  );
};

export default GallerySection;
