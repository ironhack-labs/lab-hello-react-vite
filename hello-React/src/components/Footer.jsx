import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

function Footer() {
    return (
        <div className="footer">
            <div>
                <img src={icon1} alt="icon 1" />
                <section>
                    <h3>Declarative</h3>
                    <p>React makes it<br></br> painless to create<br></br> interactive UIs.</p>
                </section>
            </div>
            <div>
                <img src={icon2} alt="icon 2" />
                <section>
                    <h3>Components</h3>
                    <p>Build encapsulated<br></br>components that <br></br> manage their state.</p>
                </section>
            </div>
            <div>
                <img src={icon3} alt="icon 3" />
                <section>
                    <h3>Single-Way</h3>
                    <p>A set of immutable<br></br>values are passed to<br></br>the components.</p>
                </section>
            </div>
            <div>
                <img src={icon4} alt="icon " />
                <section>
                    <h3>JSX</h3>
                    <p>Statically-typed,<br></br>designed to run on<br></br>modern browsers.</p>
                </section>
            </div>
        </div>
    );
}

export default Footer;