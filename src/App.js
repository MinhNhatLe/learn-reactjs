import { useEffect } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import productApi from "./api/productApi";
import AlbumFeature from "./features/Ablum/components";
import TodoFeature from "./features/Todo";
import Demo from "./features/demo";
import logo from "./logo.svg";
import CounterFeature from "./features/Counter";


function App() {

  useEffect(() => {
    const fetchProducts = async () => {

      // này muốn lấy 10 thằng thì truyền params tham số vào getAll còn không thì thôi
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

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

      <p>
        <Link to="/todos">Todo1</Link>
      </p>
      <p>
        <Link to="/albums">Albums1</Link>
      </p>
      <p>
        <NavLink to="/todos">Todo2</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums2</NavLink>
      </p>
      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>

      <hr />
      <CounterFeature />
      <hr />
      hello bà gia
      <Demo />
    </div >
  );
}

export default App;
