import React, { useState, useEffect } from "react";
import "./tabs.css";
const Tabs = () => {
  const [show, setShow] = useState(true);
  const [handle, setHandle] = useState(false);
  const [test, setTest] = useState("none");
  const [code, setCode] = useState(`[
  {
    "owner": "{username}",
    "id": "{wobble_id}",
    "created": "{timestamp}",
    "modified": "{timestamp}"
  },
  {
    "owner": "{username}",
    "id": "{wobble_id}",
    "created": "{timestamp}",
    "modified": "{timestamp}"
  }
],[
  {
    "owner": "{username}",
    "id": "{wobble_id}",
    "created": "{timestamp}",
    "modified": "{timestamp}"
  },
  {
    "owner": "{username}",
    "id": "{wobble_id}",
    "created": "{timestamp}",
    "modified": "{timestamp}"
  }
]`);
  const callme = () => {
    if (window.innerWidth <= 768 && window.innerWidth <= 768) {
      setHandle(true);
    } else {
      setHandle(false);
    }
  };
  window.addEventListener("resize", callme);
  const showSidebar = async () => {
    setShow(true);
  };

  const [url, setUrl] = useState(`wobbles/v1/{username}fjdjhjdfhgj`);

  const [error, setError] = useState(
    `  Line 121:19:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid`
  );
  return (
    <div class="wrapper">
      {show ? (
        <nav id="sidebar">
          <div class="sidebar-header d-flex justify-content-between">
            <h3>Stripe Api</h3>
            <span
              className="close"
              style={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "30px",
              }}
              onClick={() => setShow(false)}
            >
              X
            </span>
          </div>

          <ul class="list-unstyled components">
            <p>Dummy Heading</p>
            <li class="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                Home
              </a>
              <ul
                class="collapse list-unstyled"
                id="homeSubmenu"
                onClick={handle ? () => setShow(false) : null}
              >
                <li>
                  <a href="#apiref">API References</a>
                </li>
                <li>
                  <a href="#authentication">Authentication</a>
                </li>
                <li>
                  <a href="#last">Home 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                Pages
              </a>
              <ul
                class="collapse list-unstyled"
                id="pageSubmenu"
                onClick={() => setShow(false)}
              >
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <a href="#">Page 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      ) : null}

      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid " onClick={showSidebar}>
            <button type="button" id="sidebarCollapse" class="btn btn-info">
              <i class="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
            </button>
            <h3>Rentalmoose Sass Api documentation</h3>

            {/* <button
              class="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-align-justify"></i>
            </button> */}

            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </nav>

        {/* 1st section */}

        <div className="row mt-5" id="apiref">
          <div className="documentation col-xl-6 col-lg-6 ">
            <h1>API Reference</h1>
            <p>
              Welcome to coolcorp biz! This is our API documentation. This
              documentation is generated from normal Markdown files using
              docbox, so it can use Markdown syntax, like bold, emphasis,
              strikethrough, code, and more.
            </p>
            <h6>URL</h6>
            <p>Text for URL</p>
            <h6>Json Response</h6>
            <p>Text for Json Response</p>
            <p>
              Welcome to coolcorp biz! This is our API documentation. This
              documentation is generated from normal Markdown files using
              docbox, so it can use Markdown syntax, like bold, emphasis,
              strikethrough, code, and more.
            </p>
            <h6>Errors</h6>
            <p>Text for Errors</p>
          </div>
          <div className="boxes col-xl-6 col-lg-6 col-12">
            <div
              className="box1"
              style={{
                overflow: "auto",
              }}
            >
              <strong>URL</strong>
              <div className="url-box" style={{ overflow: "auto" }}>
                <span className="url-text">Get</span>
                <span className="url" style={{ margin: "0px 10px" }}>
                  {url}
                </span>
              </div>
            </div>
            <div className="box2">
              <strong>HTTP Response</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "500px",
                  }}
                >
                  <code className="language-JSON text-white">{code}</code>
                </pre>
              </div>
            </div>
            <div className="box3">
              <strong>Errors</strong>
              <div
                className="error-box  p-3"
                style={{ overflow: "auto", backgroundColor: "#6e6c68" }}
              >
                <p
                  className="request text-center text-white"
                  style={{ fontWeight: "600" }}
                >
                  Error
                </p>
                <span className="error-text ">{error}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd Section */}

        <div className="row mt-5" id="authentication">
          <div className="documentation col-xl-6 col-lg-6 ">
            <h1>Authentication</h1>
            <p>
              Welcome to coolcorp biz! This is our API documentation. This
              documentation is generated from normal Markdown files using
              docbox, so it can use Markdown syntax, like bold, emphasis,
              strikethrough, code, and more.
            </p>
            <h6>URL</h6>
            <p>Text for URL</p>
            <h6>Json Response</h6>
            <p>Text for Json Response</p>
            <p>
              Welcome to coolcorp biz! This is our API documentation. This
              documentation is generated from normal Markdown files using
              docbox, so it can use Markdown syntax, like bold, emphasis,
              strikethrough, code, and more.
            </p>
            <h6>Errors</h6>
            <p>Text for Errors</p>
            <div style={{ overflow: "auto" }}>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Row</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Clark</td>
                    <td>Kent</td>
                    <td>clarkkent@mail.com</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>John</td>
                    <td>Carter</td>
                    <td>johncarter@mail.com</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Peter</td>
                    <td>Parker</td>
                    <td>peterparker@mail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="boxes col-xl-6 col-lg-6 col-12">
            <div
              className="box1"
              style={{
                overflow: "auto",
              }}
            >
              <strong>URL</strong>
              <div className="url-box" style={{ overflow: "auto" }}>
                <span className="url-text">Get</span>
                <span className="url" style={{ margin: "0px 10px" }}>
                  {url}
                </span>
              </div>
            </div>
            <div className="box2">
              <strong>HTTP Response</strong>
              <div className="json-response">
                <pre
                  style={{
                    overflow: "auto",
                    height: "500px",
                  }}
                >
                  <code className="language-JSON text-white">{code}</code>
                </pre>
              </div>
            </div>
            <div className="box3">
              <strong>Errors</strong>
              <div
                className="error-box  p-3"
                style={{ overflow: "auto", backgroundColor: "#6e6c68" }}
              >
                <p
                  className="request text-center text-white"
                  style={{ fontWeight: "600" }}
                >
                  Error
                </p>
                <span className="error-text ">{error}</span>
              </div>
            </div>
          </div>
        </div>
        {/* end of 2nd section */}
      </div>
    </div>
  );
};

export default Tabs;
