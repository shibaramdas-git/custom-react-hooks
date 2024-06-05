import "./App.css";
import useFetch from "./useFetch";

function App() {
  //.....................................................................WOW............
  const data = useFetch("http://dummyjson.com/users");
  const allusers = data.users;
  console.log(allusers);
  // const data2 = useFetch("https://dummyjson.com/carts");
  // const cartdata = data2.carts;
  // console.log(cartdata);
  return (
    <>
      <div>
        <h1>Hello useFetch custom hook</h1>
        <div className="cont">
          <table>
            <tr>
              <td>ID</td>
              <td>First name</td>
            </tr>
            {allusers &&
              allusers.map((user) => (
                <>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                  </tr>
                </>
              ))}
          </table>
          {/* <table>
            <tr>
              <td>ID</td>
              <td>Product</td>
              <td>Price</td>
            </tr>
            {cartdata &&
              cartdata.map((prod) => (
                <>
                  <tr>
                    <td>{prod.id}</td>
                    <td>{prod.title}</td>
                    <td>{prod.price} Rs</td>
                  </tr>
                </>
              ))}
          </table> */}
        </div>
      </div>
    </>
  );
}

export default App;
