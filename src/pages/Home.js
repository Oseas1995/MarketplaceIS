import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand">E-Commerce </a>
          <form class="d-flex" role="search">
            <Link to="/login">
              <button type="button" class="btn btn-secondary btn-sm">
                Ingresar
              </button>
            </Link>

            <button type="button" class="btn btn-secondary btn-sm">
              Whish List
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Home;
