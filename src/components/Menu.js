import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
          <img
            src="dist/img/magetan.png"
            alt="Siskaperbapo"
            className="brand-image img-circle elevation-3"
            // style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">SISKAPERBAPO</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link to="/profile" className="d-block">
                Alexander Pierce
              </Link>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/update-harga" className="nav-link">
                  <i className="nav-icon fas fa-money-check-alt" />
                  <p>Update Harga</p>
                </Link>
              </li>

              <li className="nav-header">Data Master</li>
              <li className="nav-item">
                <Link to="/data-bahan-pokok" className="nav-link">
                  <i className="nav-icon fas fa-database" />
                  <p>Data Bahan Pokok</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/data-pasar" className="nav-link">
                  <i className="nav-icon fas fa-database" />
                  <p>Data Pasar</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/data-kategori" className="nav-link">
                  <i className="nav-icon fas fa-database" />
                  <p>Data Kategori</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/data-satuan" className="nav-link">
                  <i className="nav-icon fas fa-database" />
                  <p>Data Satuan</p>
                </Link>
              </li>

              <li className="nav-header">Akun</li>
              <li className="nav-item">
                <Link to="/data-pengguna" className="nav-link">
                  <i className="nav-icon fas fa-id-card" />
                  <p>Data Pengguna</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pengaturan-akun" className="nav-link">
                  <i className="nav-icon fas fa-user-cog" />
                  <p>Pengaturan Akun</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="keluar" className="nav-link">
                  <i className="nav-icon fas fa-sign-out-alt" />
                  <p>Keluar</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}
