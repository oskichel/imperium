import st from './SelectionBlock.module.css';

export type CompanyCardProps = {
  title: string;
  text: string;
  img: string;
}

export const CompanyCard = ({title, text, img}:CompanyCardProps) => {
  return (
    <div className={st.company_card}>
      <h4 className={st.card_title}>{title}</h4>
      <p className={st.card_text}>{text}</p>
      <img className={st.card_img} src={img} alt={title}/>
    </div>
  );
};