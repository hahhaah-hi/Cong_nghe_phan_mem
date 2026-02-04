import React from "react";
import EnterpriseTopNav from "./EnterpriseTopNav";
import "./EnterpriseShell.css";

type Props = { children: React.ReactNode; brand?: string };

export default function EnterpriseShell({ children, brand = "Labodc" }: Props) {
  return (
    <div className="ent">
      <div className="ent__wrap">
        <EnterpriseTopNav />
        <div className="ent__brand">{brand}</div>
        {children}
      </div>
    </div>
  );
}
