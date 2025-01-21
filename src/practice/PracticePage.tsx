import { FC } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useVocabularyStore from "src/store/store";
import { FlipCard } from "./components/FlipCard/FlipCard";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./slider.module.css";

export const PracticePage: FC = () => {
  const { vocabulary } = useVocabularyStore();

  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        cssMode={true}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        navigation
      >
        {vocabulary.map(({ id, word, definition }) => (
          <SwiperSlide className={styles.slide} key={id}>
            <FlipCard word={word} definition={definition} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
