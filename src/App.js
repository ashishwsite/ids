
import React,{useEffect,useState} from "react";
import Foote from "./components/Foote";
import DataDis from "./components/DataDis";
function App() {
  const [title, setTitle] = useState("Home");
  const [disStatus, setdis] = useState("flex");
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 520) {
        setTitle("NewReader");
        setdis("none");
      } else {
        setTitle("Home");
        setdis("flex");
        // Set a default title for larger screens (optional)
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function: Remove the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
   <h2  style={{textAlign:'center',backgroundColor:'black',color:'white'}}>DashBoard-IDS</h2>
   <div className="tablehead">
   <table className="table" style={{color:''}}>
  <thead>
    <tr style={{
  fontFamily:'Gill Sans Gill Sans MT Calibri Trebuchet MS sans-serif',
  fontSize : '600',
  fontStyle: "initial",
  fontWeight:'500',
  color: "black"
    }}>
      <th className="col-1">SN.</th>
      <th className="col-2">Time</th>
      <th className="col-2">Network_Id</th>
      <th className="col-4">User_Detail</th>
      <th className="col-3">Action</th>
    </tr>
  </thead>
  </table>
   </div>
   <DataDis/>
   <div style={{ display:'flex',justifyContent:'center'}}>
   <button className="btnload"
          style={{
            width: "200px",
            fontSize:"larger",
            height: "50px",
            textAlign: "center",
            backgroundColor: "blueviolet",
          }}
        >
          Load More    &darr;
        </button>
   </div>
   
   <Foote/> 
    </>
  );
}

export default App;
