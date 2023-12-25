import foto from "./Sofia.jpeg";
import { Fire } from "./Fireworks";
const Main = () => {
  return (
    <>
      <div className="wrapper">
        <div className="foto">
          <img src={foto} alt="" className="sofia" />
        </div>

        <div className="godfather">
          <h1 className="title">Drogi wujku Sergei</h1>
          <div>
            <p>Mam do ciebie</p>
            <p> ważne pytanie....</p>
          </div>
          <div>
            <p>Zostaniesz moim</p> <p>ojcem chrzestnym?</p>
          </div>
          <p>Sofia</p>
          <Fire />
        </div>
      </div>
    </>
  );
};

export default Main;
