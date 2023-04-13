import { Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumFeature from "./features/Ablum/components";
import TodoFeature from "./features/Todo";
import logo from "./logo.svg";


function App() {
  const student = {
    name: "Nhật",
  };
  const age = 21;
  const isMale = true;
  const colorList = ["red", "blue", "green"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Xin chào mọi người!</p>

        {/* Cách render cho object và chuỗi bình thường  */}
        <p>
          Tôi là {student.name} và tôi {age} tuổi và tôi yêu bà bé THÚI
        </p>

        {/* Cách render cho loại true / false */}
        <p>Cách 1 (dùng trong trường hợp ngắn): {isMale ? "Nam" : "Nữ"}</p>

        <p>
          Cách 2 (dùng trong trường hợp ngắn): {isMale ? <p>Nam</p> : <p>Nữ</p>}
        </p>

        <p>
          Dùng trong trường hợp dài và phức tạp
          {isMale && <p>... </p>}
          {!isMale && <p>... </p>}
        </p>

        <p>
          Dùng trong trường hợp dài và phức tạp nhưng ngon hơn
          {isMale && (
            // dùng <div> <> <React.Gragment> cái nào cũng được
            <div>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
          )}
        </p>

        {/* Cách render cho array dùng map */}
        <ul>
          {colorList.map((color) => (
            <li key={color} style={{ color }}>
              {color}
            </li>
          ))}
        </ul>

      </header>
      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>

    </div>
  );
}

export default App;
