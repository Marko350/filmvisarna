import style from '../css/Start.module.css';

const Start = () => {
  return ( 
    <div className={`container ${style.startWrapper}`}>
      <h1 className={style.startHeader}>Heading</h1>
      <p>Hej</p>
    </div>
   );
}
 
export default Start;