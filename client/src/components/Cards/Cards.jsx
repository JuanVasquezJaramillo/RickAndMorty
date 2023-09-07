import Card from '../Card/Card';
import style from './cards.module.css';

const Cards = ({ characters }) => {
    return (
        <div className={style.contenedor}>
            {
                characters?.map(({ id, name, status, species, gender, origin, image }) => {
                    return <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin.name}
                        image={image}
                    />
                })
            }
        </div>);
}
export default Cards;
