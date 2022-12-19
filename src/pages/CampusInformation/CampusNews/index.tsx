import React from "react";
import {SYSTEM_LOGO} from "@/constants";

const LostMono: React.FC = () => {
  return (
    <>
      <h1>失物招领</h1>
      <div className="mian-box">
        <table>
          <tr>
            <>
              <td>
                <center>
                  <div className="card" style={{width: 400, height: 300}}>
                    <img src={SYSTEM_LOGO} style={{width: 400, height: 250}}></img>
                    <h3>123</h3>
                  </div>
                </center>
              </td>
            </>
          </tr>
        </table>
      </div>
    </>
  )
};
export default LostMono;
