import React from "react";
import Button from "../../components/button/button.component";
import "./crew.styles.scss";

const Crew = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-page-heading">
        <h2>Crew</h2>
      </div>
      <div className="crew-container">
        <div className="crew-left">
          <div className="crew-page-title">123 Green ST,'s Crew</div>
          <Button type="main">Add crew member</Button>
        </div>
        <div className="crew-right">
          <div className="crew-info">
            <p>- Add family and close friends to your crew .</p>
            <p>- Crew members can view and participate in photo sharing.</p>
            <p>
              - Set permissions for each person for the right balance of
              privacy.
            </p>
          </div>
          <div className="crew-table-container">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Type</th>
                  <th scope="col">Access</th>
                  <th scope="col">Settings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-name">Rebecca Davis</td>
                  <td>bdavis@domain.tld</td>
                  <td>Homeowner</td>
                  <td>Administrator</td>
                  <td>
                    <span class="material-icons">edit</span>
                    <span class="material-icons">delete</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-name">Rebecca Davis</td>
                  <td>bdavis@domain.tld</td>
                  <td>Homeowner</td>
                  <td>Administrator</td>
                  <td>
                    <span class="material-icons">edit</span>
                    <span class="material-icons">delete</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-name">Rebecca Davis</td>
                  <td>bdavis@domain.tld</td>
                  <td>Homeowner</td>
                  <td>Administrator</td>
                  <td>
                    <span class="material-icons">edit</span>
                    <span class="material-icons">delete</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-name">Rebecca Davis</td>
                  <td>bdavis@domain.tld</td>
                  <td>Homeowner</td>
                  <td>Administrator</td>
                  <td>
                    <span class="material-icons">edit</span>
                    <span class="material-icons">delete</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-name">Rebecca Davis</td>
                  <td>bdavis@domain.tld</td>
                  <td>Homeowner</td>
                  <td>Administrator</td>
                  <td>
                    <span class="material-icons">edit</span>
                    <span class="material-icons">delete</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-name">Rebecca Davis</td>
                  <td>bdavis@domain.tld</td>
                  <td>Homeowner</td>
                  <td>Administrator</td>
                  <td>
                    <span class="material-icons">edit</span>
                    <span class="material-icons">delete</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pagination-container">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="/">
                    <span class="material-icons">chevron_left</span>
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="/">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    <span class="material-icons">chevron_right</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
