import Image from "next/image";
import { COLORS } from "src/assets/theme";
import Section from "src/components/Section";
import { STUDIO_PICS } from "../../assets/images";

const GallerySection = () => {
  return (
    <Section
      backgroundPrimaryColor={COLORS.bg1Primary}
      backgroundSecondaryColor={COLORS.bg1Secondary}
      title={`우리의 모습`}
    >
      <div className="columns-1 gap-4">
        {STUDIO_PICS.map((pic, index) => (
          <div className="after:content group relative mb-5 block w-full cursor-auto after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
            <Image
              alt="Gallery photo"
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
              placeholder="blur"
              blurDataURL={pic.blurDataURL}
              src={pic}
              quality={100}
              // width={720}
              // height={480}
              sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default GallerySection;
