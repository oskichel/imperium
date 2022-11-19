import { About } from './About';
import st from './IndexPage.module.css';

export const SelectionBlock = () => {
  return (
    <div className={st.selection}>
      <About />
    </div>
  );
};
