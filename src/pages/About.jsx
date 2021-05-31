import heroImg from '../assets/about-hero.jpg';
import projectorImg from '../assets/about-img.jpg';
import cinemaImg from '../assets/about-img(3).jpg';
import styles from '../css/About.module.css';

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.hero}>
                <img src={heroImg} alt="Tickets" className={styles.heroImg} />
            </div>
            <div className="container">
                <h1>Om oss</h1>
                <div className="company">
                    <h2>Vårt företag</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloribus ipsam quia voluptate ad ab voluptatum, voluptas quam dignissimos laborum minus iure odio architecto numquam accusamus reprehenderit quibusdam sit cumque quis inventore quo dolor! Deserunt ducimus, cupiditate dolorum optio velit nihil dolores vero modi vitae, id doloribus minima facere, iure earum temporibus. Quaerat rerum odio numquam atque, repudiandae corporis ut error ipsum magnam laboriosam voluptatem.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores culpa deserunt, nihil mollitia odit distinctio repudiandae corrupti sunt id ullam nobis incidunt saepe nemo consequuntur, alias voluptates, possimus error quibusdam.</p>
                </div>
                <div className={styles.history}>
                    <h2>Vår historia</h2>
                    <img src={projectorImg} alt="Projector" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet optio, consequatur natus consectetur dolores animi quaerat quia tenetur unde rerum accusamus perspiciatis reprehenderit iure culpa atque cum voluptates sed maiores porro impedit, neque iste ipsum? Fuga expedita, ad nulla quibusdam nam voluptates laudantium facilis, repudiandae in, sed hic voluptatum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est quisquam sunt? Ipsum doloribus inventore in, iste corporis velit aut quas quod ratione fugiat facere perferendis, officia soluta obcaecati corrupti ipsam itaque praesentium consequuntur cum. Expedita fugit ullam veritatis? Explicabo, est porro neque nostrum reiciendis distinctio nobis corrupti voluptatum sapiente?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae itaque, deleniti esse suscipit saepe voluptatibus vero vel exercitationem accusantium error, aspernatur nobis. Quibusdam, officiis illum. Libero quasi dolorum tempore ex.</p>
                </div>
                <div className={styles.vision}>
                    <h2>Vår vision</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi blanditiis ipsa illum deserunt sequi enim necessitatibus quidem distinctio dolor.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, exercitationem nulla, sint maiores fugit doloribus optio totam dignissimos impedit asperiores recusandae reiciendis perspiciatis? Saepe veniam, quas temporibus ipsum blanditiis odit quia. Qui deserunt consectetur, nam iusto itaque quasi. Optio beatae nihil suscipit quos ullam amet, aliquam officiis repellendus magnam nesciunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, adipisci. Ipsa et repellat corrupti similique officiis animi praesentium consectetur numquam eveniet reprehenderit nam perspiciatis eos suscipit, blanditiis iste hic maxime.</p>
                    <img src={cinemaImg} alt="People at the movies" />
                </div>
                <div className={styles.contact}>
                    <h2>Kontakt</h2>
                    <p>Ipsumgatan 34, Malmö</p>
                    <p>010-12 34 56</p>
                    <p>info@filmvisarna.com</p>
                </div>
            </div>
        </div>
    )
}

export default About;