import { MainCarousel } from './MainCarousel';
import { cardsData } from './mockDatas/cardsData';
import { sticksData } from './mockDatas/sticksData';
import { ChoiceCarousel } from './ChoiceCarousel/ChoiceCarousel';
import { SelectionBlock } from './SelectionBlock';
import { SaleBlock } from './SaleBlock';



export const IndexPage = () => {
  return (
    <div>
      <MainCarousel cardsData={cardsData}/>
      <ChoiceCarousel sticksData={sticksData}/>
      <SelectionBlock />
      <SaleBlock />
    </div>
  );
};
