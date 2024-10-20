import "./Dashboard.css";

// Dashboard.jsx
const Dashboard = () => {
  return (
    <div className="main">
      <div className="navContainer">
        <nav className="navBar">
          <div className="logoContainer">
            <img src="/public/Group.png" alt="group" className="logo" />
          </div>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Search Anything"
              className="searchInput"
            />
            <button className="searchButton">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3541 0.000553316C3.94043 0.0214743 2.59056 0.59363 1.5911 1.59554C0.572324 2.6165 0 4.00108 0 5.44478C0 6.88848 0.572324 8.27307 1.5911 9.29402C2.5152 10.2183 3.74056 10.7782 5.04297 10.8714C6.34537 10.9645 7.6377 10.5847 8.68348 9.80138L12.874 14L13.9717 12.9002L9.77963 8.70008C10.5612 7.65258 10.9403 6.35818 10.8476 5.05362C10.7549 3.74905 10.1966 2.52153 9.27477 1.59554C8.76094 1.08047 8.1492 0.673917 7.47576 0.39995C6.80232 0.125984 6.08086 -0.00982865 5.3541 0.000553316ZM5.48903 1.55605C6.49887 1.57093 7.46314 1.97962 8.1771 2.69533C8.9048 3.42458 9.3136 4.41357 9.3136 5.44478C9.3136 6.476 8.9048 7.46498 8.1771 8.19424C7.44925 8.92334 6.46216 9.33293 5.43293 9.33293C4.4037 9.33293 3.41662 8.92334 2.68877 8.19424C1.96107 7.46498 1.55227 6.476 1.55227 5.44478C1.55227 4.41357 1.96107 3.42458 2.68877 2.69533C3.05576 2.32744 3.49268 2.03706 3.97367 1.84137C4.45466 1.64568 4.96995 1.54866 5.48903 1.55605Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="profileContainer">
            <div className="profileItems">
              <p>Docs</p>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7001 13.6913C19.718 16.5178 20.8518 19.2235 22.8584 21.2183C23.0327 21.3912 23.0856 21.6531 22.9916 21.8804L22.9912 21.8815C22.8964 22.107 22.676 22.2561 22.4284 22.2549M19.7001 13.6913L22.429 22.0549M19.7001 13.6913V13.5968V11.6642C19.7176 10.1275 19.2154 8.63071 18.275 7.41524C17.3984 6.28217 16.1892 5.45625 14.821 5.05095C15.2642 4.42355 15.3572 3.60324 15.0487 2.88438L15.0486 2.88426C14.6962 2.06444 13.8907 1.53333 12.9982 1.53333C12.1057 1.53333 11.3002 2.06444 10.9477 2.88426L10.9477 2.88438C10.6397 3.60199 10.7318 4.42065 11.173 5.04761C9.82501 5.42985 8.62769 6.22584 7.75338 7.32787C6.81219 8.51196 6.30025 9.97972 6.30025 11.4925L6.30025 13.5968L6.30025 13.5973C6.30723 16.4578 5.17063 19.2015 3.14175 21.2183C2.96749 21.3912 2.91459 21.6531 3.00854 21.8804L3.00898 21.8814C3.10373 22.107 3.32419 22.2561 3.57172 22.2549M19.7001 13.6913L10.0221 22.2549M22.4284 22.2549C22.4282 22.2549 22.428 22.2549 22.4278 22.2549L22.429 22.0549M22.4284 22.2549H22.429V22.0549M22.4284 22.2549H15.9781M22.429 22.0549H15.8112M15.9781 22.2549C15.9899 22.1989 16.0002 22.1422 16.0089 22.085L15.8112 22.0549M15.9781 22.2549C15.6832 23.6549 14.4456 24.67 13.0001 24.67C11.5546 24.67 10.3171 23.6549 10.0221 22.2549M15.9781 22.2549H15.8112V22.0549M15.8112 22.0549L10.0221 22.2549M10.0221 22.2549H10.189V22.0549L9.99125 22.0851C9.99999 22.1423 10.0103 22.1989 10.0221 22.2549ZM10.0221 22.2549H3.57172M3.57172 22.2549C3.57195 22.2549 3.57218 22.2549 3.57241 22.2549L3.57118 22.0549V22.2549H3.57172ZM14.7285 22.2549C14.4747 22.9799 13.7867 23.4798 13.0001 23.4798H13C12.2133 23.4798 11.5254 22.9799 11.2716 22.2549H14.7285ZM7.51233 11.4924L7.51233 11.4921C7.51037 9.98893 8.12478 8.55137 9.21241 7.51489L9.21249 7.51481C10.2998 6.47745 11.7643 5.93259 13.2651 6.00474C14.6959 6.09328 16.0376 6.73143 17.0099 7.78408L17.0099 7.78409C17.9834 8.83803 18.5119 10.2253 18.4874 11.6596L18.4873 11.6596V11.663L18.4873 13.5961C18.4873 13.5962 18.4873 13.5963 18.4873 13.5964C18.4786 16.3045 19.3944 18.9297 21.0743 21.0424H4.92542C6.60545 18.9296 7.52131 16.3045 7.51233 13.5964L7.51233 11.4924ZM13.0001 2.75485C13.4119 2.75485 13.7837 3.00277 13.9416 3.38396C14.0986 3.76431 14.012 4.20235 13.7209 4.49448C13.4287 4.7856 12.9906 4.87214 12.6103 4.71506C12.2292 4.5571 11.9813 4.1853 11.9813 3.7736C11.9813 3.21071 12.4372 2.75485 13.0001 2.75485Z"
                  fill="#213F7D"
                  stroke="#213F7D"
                  stroke-width="0.4"
                />
              </svg>
              <img
                src="/public/user-image.png"
                alt="profile"
                className="profile"
              />
              <div className="userName">
                <h5>Adedeji</h5>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.39229 4.0516C3.72823 4.42504 4.27511 4.42192 4.60791 4.0516L7.48291 0.856996C7.81885 0.484336 7.68525 0.181995 7.18447 0.181995H0.815667C0.314887 0.181995 0.183627 0.487456 0.517227 0.856996L3.39229 4.0516Z"
                    fill="#213F7D"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="aside-wrapper">
          <aside>
            <div className="aside active">
              <div className="sideNav">
                <img src="/organization.png" alt="briefCase" />
                <p className="bold">Switch organization</p>
                <svg
                  className="arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0573 3.9938C11.8984 3.15271 13.1595 4.45646 12.3184 5.25489L7.56759 10.0056C7.23127 10.3841 6.64282 10.3841 6.3065 10.0056L1.64002 5.38131C0.841037 4.54022 2.10267 3.27907 2.94322 4.12022L6.937 8.114L11.0573 3.9938Z"
                    fill="#213F7D"
                  />
                </svg>
              </div>
              <div className="sideNav">
                <img src="/dashboard.png" alt="home" />
                <p className="light">Dashboard</p>
              </div>
              <h4>CUSTOMERS</h4>
              <div className="sideNav stick">
                <img src="/users.png" alt="users" />
                <p>Users</p>
              </div>
              <div className="sideNav">
                <img src="/guarantor.png" alt="guarantor" />
                <p className="light">Guarantor</p>
              </div>
              <div className="sideNav">
                <img src="/loan.png" alt="bag" />
                <p className="light">Loans</p>
              </div>
              <div className="sideNav">
                <img src="/decision.png" alt="handshake" />
                <p className="light">Decision Models</p>
              </div>
              <div className="sideNav">
                <img src="/savings.png" alt="piggy bank" />
                <p className="light">Savings</p>
              </div>
              <div className="sideNav">
                <img src="/loanRequest.png" alt="sack" />
                <p className="light">Loan Requests</p>
              </div>
              <div className="sideNav">
                <img src="/whiteList.png" alt="user check" />
                <p className="light">Loans</p>
              </div>
              <div className="sideNav">
                <img src="/karma.png" alt="user times" />
                <p className="light">Karma</p>
              </div>
              <h4>BUSINESSES</h4>
              <div className="sideNav">
                <img src="/loanRequest.png" alt="bag" />
                <p className="light">Loan Products</p>
              </div>
              <div>
                <div className="sideNav">
                  <img src="/organization.png" alt="briefcase" />

                  <p className="light">organization</p>
                </div>
              </div>
              <div className="sideNav">
                <img src="/savingP.png" alt="bag" />
                <p className="light">Savings Products</p>
              </div>
              <div className="sideNav">
                <img src="/fees.png" alt="coins" />
                <p className="light">Fees and Charges</p>
              </div>
              <div className="sideNav">
                <img src="/transactions.png" alt="transactons" />
                <p className="light">Transactions</p>
              </div>
              <div className="sideNav">
                <img src="/services.png" alt="services" />
                <p className="light">Services</p>
              </div>
              <div className="sideNav">
                <img src="/servicesA.png" alt="bag" />
                <p className="light">Service Account</p>
              </div>
              <div className="sideNav">
                <img src="/settlements.png" alt="bag" />
                <p className="light">Settlements</p>
              </div>
              <div className="sideNav">
                <img src="/reports.png" alt="chart bar" />
                <p className="light">Reports</p>
              </div>
              <h4>SETTINGS</h4>
              <div className="sideNav">
                <img src="/preference.png" alt="preference" />
                <p className="light">preferences</p>
              </div>
              <div className="sideNav">
                <img src="/feesP.png" alt="badge percentage" />
                <p className="light">Fees and Pricing</p>
              </div>
              <div className="sideNav">
                <img src="/auditLogs.png" alt="bag" />
                <p className="light">Audit Logs</p>
              </div>

              <div className="logout">
                <div className="sideNav">
                  <svg
                    className="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_87894_107)">
                      <path
                        opacity="0.4"
                        d="M5.625 14H3C2.20435 14 1.44129 13.6839 0.87868 13.1213C0.31607 12.5587 0 11.7956 0 11L0 5C0 4.20435 0.31607 3.44129 0.87868 2.87868C1.44129 2.31607 2.20435 2 3 2H5.625C5.72446 2 5.81984 2.03951 5.89016 2.10983C5.96049 2.18016 6 2.27554 6 2.375V3.625C6 3.72446 5.96049 3.81984 5.89016 3.89017C5.81984 3.96049 5.72446 4 5.625 4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5V11C2 11.2652 2.10536 11.5196 2.29289 11.7071C2.48043 11.8946 2.73478 12 3 12H5.625C5.72446 12 5.81984 12.0395 5.89016 12.1098C5.96049 12.1802 6 12.2755 6 12.375V13.625C6 13.7245 5.96049 13.8198 5.89016 13.8902C5.81984 13.9605 5.72446 14 5.625 14Z"
                        fill="#213F7D"
                      />
                      <path
                        d="M11.0313 2.75934L15.7781 7.46559C15.8485 7.53532 15.9044 7.61831 15.9425 7.70977C15.9807 7.80122 16.0003 7.89932 16.0003 7.9984C16.0003 8.09749 15.9807 8.19559 15.9425 8.28704C15.9044 8.37849 15.8485 8.46148 15.7781 8.53122L11.0281 13.2437C10.8868 13.383 10.6962 13.4607 10.4978 13.4602C10.2994 13.4596 10.1093 13.3807 9.96875 13.2406L9.28438 12.5562C9.21298 12.4844 9.15683 12.3988 9.1193 12.3047C9.08177 12.2107 9.06363 12.11 9.06596 12.0087C9.0683 11.9074 9.09106 11.8077 9.13289 11.7154C9.17472 11.6232 9.23475 11.5403 9.30938 11.4718L11.7344 9.24997H5.75C5.65144 9.25021 5.5538 9.23098 5.4627 9.19338C5.37159 9.15578 5.28881 9.10054 5.21912 9.03085C5.14943 8.96115 5.09419 8.87838 5.05659 8.78727C5.01899 8.69616 4.99976 8.59853 5 8.49997V7.49997C4.99976 7.4014 5.01899 7.30377 5.05659 7.21266C5.09419 7.12155 5.14943 7.03878 5.21912 6.96908C5.28881 6.89939 5.37159 6.84416 5.4627 6.80655C5.5538 6.76895 5.65144 6.74972 5.75 6.74997H11.7344L9.30938 4.52809C9.23516 4.45959 9.17555 4.37681 9.1341 4.28471C9.09266 4.19262 9.07025 4.0931 9.0682 3.99212C9.06616 3.89115 9.08453 3.79081 9.12222 3.69711C9.1599 3.60341 9.21612 3.51828 9.2875 3.44684L9.97188 2.76247C10.1121 2.62179 10.3023 2.54246 10.5009 2.54187C10.6995 2.54129 10.8902 2.61949 11.0313 2.75934Z"
                        fill="#213F7D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_87894_107">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="light">Logout</p>
                </div>
                <p className="version">v1.2.0</p>
              </div>
            </div>
          </aside>
        </div>
        <div className="userSection">
          <h2>Users</h2>
          <div className="card-container">
            <div className="card">
              <div className="stat">
                <img src="/image1.png" alt="users" />
                <p className="card_name">Users</p>
                <h3>2453</h3>
              </div>

              <div className="stat">
                <img src="/image2.png" alt="users" />
                <p className="card_name">Active Users</p>
                <h3>2453</h3>
              </div>

              <div className="stat">
                <img src="image3.png" alt="users" />
                <p className="card_name">Users with Loans</p>
                <h3>12,453</h3>
              </div>

              <div className="stat">
                <img src="image4.png" alt="users" />
                <p className="card_name">Users with Savings</p>
                <h3>102,453</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
