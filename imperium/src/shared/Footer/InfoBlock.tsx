import st from './Footer.module.css';

export type InfoBlockProps = {
  title: string;
  info: string;
  isPhone?: boolean;
  isEmail?: boolean;
}

export const InfoBlock = ({title, info, isPhone=false, isEmail=false}: InfoBlockProps) => {
  return (
    <div className={st.infoBlock}>
      <div className={st.infoBlock_title}>{title}</div>
      {!isEmail && !isPhone && (
        <div className={st.infoBlock_info}>{info}</div>
      )}
      {isEmail && (<a className={st.infoBlock_info} href={`mailto:${info}`}>{info}</a>)}
      {isPhone && (<a className={st.infoBlock_info} href={`tel:${info}`}>{info}</a>)}
    </div>
  );
};