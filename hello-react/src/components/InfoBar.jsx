import code from "../assets/codescreen.png";
import gear from "../assets/gearscreen.png";
import home from "../assets/homescreen.png";
import setting from "../assets/settings.png";

function InfoBar() {
  return (
      <div id="info" className="flex justify-evenly items-center my-40">
        <div
          className="flex flex-col w-40 justify-items-start text-left"
          id="declarative"
        >
          <img className="mb-1 w-24 h-24" src={setting} alt="" />
          <h4 className="h-10 font-bold text-neutral-800 text-2xl">
            Declarative
          </h4>
          <p className="h-10 text-sm text-neutral-400">
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div
          className="flex flex-col w-40 justify-items-start text-left"
          id="components"
        >
          <img className="infobar-img" src={home} alt="" />
          <h4 className="h-10 font-bold text-neutral-800 text-2xl">
            Components
          </h4>
          <p className="h-10 text-sm text-neutral-400">
            Build encapsulated components that manage their state.
          </p>
        </div>
        <div
          className="flex flex-col w-40 justify-items-start text-left"
          id="single-way"
        >
          <img className="mb-1 w-24 h-24" src={gear} alt="" />
          <h4 className="h-10 font-bold text-neutral-800 text-2xl">
            Single-Way
          </h4>
          <p className="h-10 text-sm text-neutral-400">
            A set of immutable values are passed to the components.
          </p>
        </div>
        <div
          className="flex flex-col w-40 justify-items-start text-left"
          id="jsx"
        >
          <img className="mb-1 w-24 h-24" src={code} alt="" />
          <h4 className="h-10 font-bold text-neutral-800 text-2xl">JSX</h4>
          <p className="h-10 text-sm text-neutral-400">
            Statically-typed, designed to run on modern browsers.
          </p>
        </div>
      </div>
  );
}

export default InfoBar;
