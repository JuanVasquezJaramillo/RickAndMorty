import NavBar from '../../components/NavBar/NavBar';
import style from './landing.module.css';
import Header from '../../components/Header/Header';
import ManualParallax from '../../components/ManualParallax/ManualParallax';

const Landing = () => {
    return (
        <>
            <div>
                <div>
                    <Header></Header>
                </div>
                <div className={style.container}>
                    <NavBar />
                </div>
            </div>
            <div>
                <div>
                    <ManualParallax />
                </div>
            </div>
        </>
    )
}

export default Landing;