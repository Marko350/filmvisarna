import heroImg from '../assets/about-hero.jpg';
import projectorImg from '../assets/about-img.jpg';
import cinemaImg from '../assets/about-img(3).jpg';
import styles from '../css/About.module.css';

function About() {
    return (
        <div className={styles.about}>
            <div className="container">
                <h1>Om oss</h1>
                <img src={heroImg} alt="Tickets" className={styles.heroImg} />
                <div className="company">
                    <h2>Vårt företag</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloribus ipsam quia voluptate ad ab voluptatum, voluptas quam dignissimos laborum minus iure odio architecto numquam accusamus reprehenderit quibusdam sit cumque quis inventore quo dolor! Deserunt ducimus, cupiditate dolorum optio velit nihil dolores vero modi vitae, id doloribus minima facere, iure earum temporibus. Quaerat rerum odio numquam atque, repudiandae corporis ut error ipsum magnam laboriosam voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo, hic beatae amet maiores, blanditiis fugiat sit modi voluptas id magnam incidunt repudiandae libero eveniet dicta atque ex ratione maxime?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores culpa deserunt, nihil mollitia odit distinctio repudiandae corrupti sunt id ullam nobis incidunt saepe nemo consequuntur, alias voluptates, possimus error quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ea laudantium sequi fugiat soluta laborum tempora dolorum tempore in tenetur dolor, aliquam enim! Aperiam, corporis fuga beatae asperiores sint voluptatem.</p>
                </div>
                <div className={styles.history}>
                    <h2>Vår historia</h2>
                    <p><img src={projectorImg} alt="Projector" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet optio, consequatur natus consectetur dolores animi quaerat quia tenetur unde rerum accusamus perspiciatis reprehenderit iure culpa atque cum voluptates sed maiores porro impedit, neque iste ipsum? Fuga expedita, ad nulla quibusdam nam voluptates laudantium facilis, repudiandae in, sed hic voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eaque explicabo illum quis, adipisci praesentium impedit cupiditate expedita iusto sit possimus dolor ipsa consequuntur? Fuga odio adipisci aspernatur ducimus! Nisi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est quisquam sunt? Ipsum doloribus inventore in, iste corporis velit aut quas quod ratione fugiat facere perferendis, officia soluta obcaecati corrupti ipsam itaque praesentium consequuntur cum. Expedita fugit ullam veritatis? Explicabo, est porro neque nostrum reiciendis distinctio nobis corrupti voluptatum sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nesciunt consectetur rerum est aperiam delectus, repudiandae rem nobis repellendus ipsa pariatur quod numquam, natus eos inventore. Voluptatum ducimus dignissimos adipisci?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae itaque, deleniti esse suscipit saepe voluptatibus vero vel exercitationem accusantium error, aspernatur nobis. Quibusdam, officiis illum. Libero quasi dolorum tempore ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum inventore ea, quisquam amet dolores quo cum molestiae dignissimos sint repellat repellendus corporis pariatur illum qui, repudiandae voluptas ad culpa?</p>
                </div>
                <div className={styles.vision}>
                    <h2>Vår vision</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi blanditiis ipsa illum deserunt sequi enim necessitatibus quidem distinctio dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis ea, quis excepturi non, aperiam eligendi laboriosam consectetur dolorem ex, rerum expedita. Amet cupiditate veniam praesentium eveniet assumenda quo consequuntur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, exercitationem nulla, sint maiores fugit doloribus optio totam dignissimos impedit asperiores recusandae reiciendis perspiciatis? Saepe veniam, quas temporibus ipsum blanditiis odit quia. Qui deserunt consectetur, nam iusto itaque quasi. Optio beatae nihil suscipit quos ullam amet, aliquam officiis repellendus magnam nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum commodi, temporibus eaque dolorum architecto iure quas corporis. Ut repudiandae cumque dicta expedita iusto ex voluptates neque eveniet quo unde.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, adipisci. Ipsa et repellat corrupti similique officiis animi praesentium consectetur numquam eveniet reprehenderit nam perspiciatis eos suscipit, blanditiis iste hic maxime. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={styles.imgAndContact}>
                    <img src={cinemaImg} alt="People at the movies" />
                    <div className={styles.contact}>
                        <h2>Kontakt</h2>
                        <a href="https://www.google.se/maps/@55.5960224,13.0153738,14z">Ipsumgatan 34, Malmö</a>
                        <a href="tel: 010-123456">010-12 34 56</a>
                        <a href="mailto: info@filmvisarna.com">info@filmvisarna.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;