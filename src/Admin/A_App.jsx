import React, { useState, useEffect } from "react";

// Components
import A_Home from "./pages/A_Home";
import A_ShowCase from "./pages/A_ShowCase";
import A_ShowTiktok from "./pages/A_ShowTiktok";
import A_Tools from "./pages/A_Tools";
import A_Members from "./pages/A_Members";

const A_App = ({ showComp }) => {
  const [selectComp, setSelectComp] = useState("Admin-Home");

  // อัปเดตค่า selectComp เมื่อ showComp เปลี่ยน
  useEffect(() => {
    if (showComp) {
      setSelectComp(showComp);
    }
  }, [showComp]);
  
  return (
    <article className="select-comp-container col-md-10">
      {selectComp === "Admin-Home" && <A_Home />}
      {selectComp === "Admin-ShowFiles" && <A_ShowCase />}
      {selectComp === "Admin-ShowTiktok" && <A_ShowTiktok />}
      {selectComp === "Admin-Tools" && <A_Tools />}
      {selectComp === "Admin-Members" && <A_Members />}
    </article>
  );
};

export default A_App;
