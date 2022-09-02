import { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./component/Avatar";
import Part from "./component/Part";
import PartList from "./component/PartList";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(2);
  const [eyebrows, setEyebrows] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [hat, setHat] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);

  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setMouth(Math.floor(Math.random() * total.hat));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️ CUSTOMIZATION 🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              mouth={mouth}
              eyebrows={eyebrows}
              glasses={glasses}
              hat={hat}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
            />
            <div className="text-center">
              <button className="button" onClick={() => randomize()}>
                Randomize!
              </button>
            </div>
          </div>
        </div>

        <div className="list-wrapper">
          <div className="list-section">
            <h2>Body</h2>
            <PartList path="Body" total={total.body} setSelection={setBody} />
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <PartList
              path="Eyes"
              total={total.eyes}
              setSelection={setEyes}
              top="35px"
            />
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <PartList path="Hair" total={total.hair} setSelection={setHair} />
          </div>
          <div className="list-section">
            <h2>Mouth</h2>
            <PartList
              path="Mouths"
              total={total.mouth}
              setSelection={setMouth}
            />
          </div>
          <div className="list-section">
            <h2>Eyebrows</h2>
            <PartList
              path="Eyebrows"
              total={total.eyebrows}
              setSelection={setEyebrows}
            />
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <PartList
              path="accessories/glasses"
              total={total.glasses}
              setSelection={setGlasses}
            />
          </div>
          <div className="list-section">
            <h2>Hat</h2>
            <PartList
              path="accessories/hats"
              total={total.hat}
              setSelection={setHat}
              to="-15px"
            />
          </div>

          <div className="list-section">
            <h2>Clothing (L1)</h2>
            <PartList
              path="clothes/layer_1"
              total={total.clothing1}
              setSelection={setClothing1}
            />
          </div>
          <div className="list-section">
            <h2>Clothing (L2)</h2>
            <PartList
              path="clothes/layer_2"
              total={total.clothing2}
              setSelection={setClothing2}
            />
          </div>
          <div className="list-section">
            <h2>Clothing (L3)</h2>
            <PartList
              path="clothes/layer_3"
              total={total.clothing3}
              setSelection={setClothing3}
              top="-12px"
            />
          </div>
        </div>
      </div>

      <Part />
    </div>
  );
}

export default App;
