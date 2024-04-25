import NavBar from '../../components/NavBar/NavBar';
import style from './landing.module.css';
import Header from '../../components/Header/Header';

const Landing = () => {
    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div className={style.container}>
                <NavBar />
            </div>
        </>
    )
}

export default Landing;