import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="main-footer">
        <strong>
          Copyright © 2020{"{"}" "{"}"}
          <a href="https://kominfo.magetan.go.id/">Diskominfo Kab.Magetan</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.3
        </div>
      </footer>
    </div>
  );
}
