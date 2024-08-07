import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { COLORS } from "src/assets/theme";
import Section from "src/components/Section";
import { useLastViewedPhoto } from "../../utils/useLastViewedPhoto";
import Modal from "../../components/Modal";

const Heading = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 14px;
`;

const GallerySection: NextPage<{ images: StaticImageData[] }> = ({
  images,
}) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  let number = Number(photoId);

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current?.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Head>
        <title>Image Gallery</title>
      </Head>
      <Section
        backgroundPrimaryColor={COLORS.bg1Primary}
        backgroundSecondaryColor={COLORS.bg1Secondary}
        title={`우리의 모습`}
      >
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId ? Number(photoId) : null);
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map((pic, index) => (
            <Link
              key={index}
              href={`/?photoId=${index}`}
              as={`/p/${index}`}
              ref={
                index === Number(lastViewedPhoto) ? lastViewedPhotoRef : null
              }
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Gallery photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={pic.blurDataURL}
                src={pic}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
              />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default GallerySection;
