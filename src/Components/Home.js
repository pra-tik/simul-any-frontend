import React from "react";
import "../index.css";
import Navbar from "./navbar";
import Footbar from "./footer";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const allScenarios = [
  '{"world":"Nerwork","Experiment": "IP","Exp_id": "1234","Description": "IP Addressing","subscribed":"true"}',
  '{"world":"Speech To Text","Experiment": "Interview Lab","Exp_id": "1235","Description": "Interview Lab","subscribed":"false"}',
];

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div style={{ padding: 10 }}>
        <Card style={{ width: "100%", padding: 10 }}>
        Hello,{" "}
          {localStorage.getItem("user") == undefined ? (
            <>{navigate("/")}</>
          ) : (
            <>{JSON.parse(localStorage.getItem("user")).name
            }</>
          )}
          <br />
          <center>
            <div style={{ width: "50%" }} className="row">
              <Card
                className="col"
                style={{ margin: 10, padding: 20, width: "50%" }}
              >
                <div
                  class="w-100 hover-shadow"
                  data-mdb-ripple-color="light"
                  style={{ margin: "10px", borderColor: "white", width: "45%" }}
                >
                  <span class="align-middle">Experiment</span>
                </div>
                <button
                  style={{ margin: 1 }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                >
                  My Labs
                </button>
              </Card>
              <Card
                className="col"
                style={{ margin: 10, padding: 20, width: "50%" }}
              >
                <div
                  class="w-100 hover-shadow"
                  data-mdb-ripple-color="light"
                  style={{ margin: "10px", borderColor: "white", width: "45%" }}
                >
                  <span class="align-middle">Classroom</span>
                </div>
                <button
                  style={{ margin: 1 }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                >
                  My Classes
                </button>
                <button
                  style={{ margin: 1 }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                >
                  Hosted Classes
                </button>
                <button
                  style={{ margin: 1 }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                >
                  Join
                </button>
                <button
                  style={{ margin: 1 }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                >
                  Host
                </button>
              </Card>
            </div>
            <div style={{ width: "50%" }} className="row">
              <Card
                className="col"
                style={{ margin: 10, padding: 20, width: "50%" }}
              >
                <div
                  class="w-100 hover-shadow"
                  data-mdb-ripple-color="light"
                  style={{ margin: "10px", borderColor: "white", width: "45%" }}
                >
                  <span class="align-middle">Market</span>
                </div>
                <button
                  style={{ margin: 1 }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-target="#scenarioModel"
                  data-bs-toggle="modal"
                >
                  Scenario
                </button>
                <button
                  style={{ margin: 1 }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                >
                  Assets/Actions
                </button>
              </Card>
              <Card
                className="col"
                style={{ margin: 10, padding: 20, width: "50%" }}
              >
                <div
                  class="w-100 hover-shadow"
                  data-mdb-ripple-color="light"
                  style={{ margin: "10px", borderColor: "white", width: "45%" }}
                >
                  <span class="align-middle">Development</span>
                </div>
                <button
                  style={{ margin: 1 }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                >
                  Scenarios
                </button>
                <button
                  style={{ margin: 1 }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                >
                  Assets
                </button>
                <button
                  style={{ margin: 1 }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                >
                  Actions
                </button>
              </Card>
            </div>
          </center>
        </Card>

        <div
          class="modal fade"
          id="scenarioModel"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  MarketPlace - Scenarios
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <Card style={{ margin: 10, padding: 20 }}>
                  <p>Scenarios subscribed will get added in My Labs</p>
                  <table class="table table-hover">
                    <tr class="table-light">
                      <td class="table-primary">#id</td>
                      <td class="table-primary">World</td>
                      <td class="table-primary">Experiment</td>
                      <td class="ttable-primary">Description</td>
                      <td class="table-primary">subscribed</td>
                    </tr>

                    {allScenarios.map((assestItem) => (
                      <>
                        {
                          <tr>
                            <td class="table-primary">
                              {JSON.parse(assestItem).Exp_id}
                            </td>
                            <td class="table-primary">
                              {JSON.parse(assestItem).world}
                            </td>
                            <td class="table-primary">
                              {JSON.parse(assestItem).Experiment}
                            </td>
                            <td class="ttable-primary">
                              {JSON.parse(assestItem).Description}
                            </td>
                            <td class="table-primary">
                              {JSON.parse(assestItem).subscribed == "true" ? (
                                <>
                                  <button
                                    style={{
                                      "font-size": "10px",
                                      width: "100px",
                                      "background-color": "green",
                                    }}
                                    class="btn btn-secondary btn-lg"
                                  >
                                    Subscribe{" "}
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    style={{
                                      "font-size": "10px",
                                      width: "100px",
                                    }}
                                    class="btn btn-secondary btn-lg"
                                    disabled
                                  >
                                    Subscribed
                                  </button>
                                </>
                              )}
                            </td>
                          </tr>
                        }
                      </>
                    ))}
                  </table>
                </Card>
              </div>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footbar />
    </>
  );
};

export default Home;
