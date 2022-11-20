import { MainCarousel } from './Carousels/MainCarousel';
import { ChoiceCarousel } from './Carousels/ChoiceCarousel';
import { cardsData } from './mockDatas/cardsData';
import { sticksData } from './mockDatas/sticksData';
import { SelectionBlock } from './SelectionBlock/SelectionBlock';
import { SaleBlock } from './SaleBlock/SaleBlock';



export const IndexPage = () => {
  return (
    <div>
      <MainCarousel cards={cardsData}/>
      <ChoiceCarousel sticksData={sticksData}/>
      <SelectionBlock />
      <SaleBlock />
    </div>
  );
};
