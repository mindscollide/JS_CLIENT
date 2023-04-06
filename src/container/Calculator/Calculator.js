import React from "react";
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import { Collapse, Divider, Select } from "antd";
import { Table, Button, Accordian, TextField } from "../../components/elements";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const { Panel } = Collapse;
  return (
    <>
      <Container fluid>
        <Row className="mt-3">
          <Col lg={11} md={11} sm={11}>
            <Collapse
              size="small"
              expandIcon={false}
              className={styles["accodion-header-title"]}
            >
              <Panel
                showArrow={false}
                header={
                  <label className={styles["panel-header-text"]}>
                    TBill Calculator
                  </label>
                }
                key="1"
              >
                <>
                  <div>
                    <h1 className={styles["heading-price"]}>Yield To Price</h1>
                  </div>

                  <div className={styles["heading-paper"]}>
                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-4"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Select Bond
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5} className="mt-3">
                        <Select className={styles["select-field-calculator"]} />
                      </Col>

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Price
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Settlement Date
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Life Remaning
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center  mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Maturity Date
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          PVBP
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Purchased Yield %
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Approximate Price Change
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Tenor
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end  mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Yield To Maturity %
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col
                        lg={5}
                        md={5}
                        sm={5}
                        className="d-flex justify-content-start"
                      >
                        <p className={styles["interpolated-text"]}>
                          Interpolated PKRV Rates = 16.06
                        </p>
                      </Col>
                      <Col lg={7} md={7} sm={7} />
                    </Row>
                  </div>

                  <div>
                    <Row className={styles["bottom-row-background"]}>
                      <Col
                        lg={6}
                        md={6}
                        sm={6}
                        className="d-flex justify-content-end"
                      >
                        <Button
                          text="Calculate"
                          className={styles["calculate-btn"]}
                        />
                      </Col>
                      <Col
                        lg={6}
                        md={6}
                        sm={6}
                        className="d-flex justify-content-start"
                      >
                        <Button text="Reset" className={styles["reset-btn"]} />
                      </Col>
                    </Row>
                  </div>

                  <div>
                    <h1 className={styles["heading-price-to-yield"]}>
                      Price To Yield
                    </h1>
                  </div>

                  <div className={styles["heading-paper"]}>
                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-4"
                      >
                        <label className={styles["slect-bond-p-to-y"]}>
                          Select Bond
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5} className="mt-3">
                        <Select className={styles["select-field-calculator"]} />
                      </Col>
                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Yield To Maturity %
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Settlement Date
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Price
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Life Remaning
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={2} md={2} sm={2} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Maturity Date
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          PVBP
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={2} md={2} sm={2} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Purchased Yield %
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Approximate Price Change
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={2} md={2} sm={2} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Tenor
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Price
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      <Col lg={6} md={6} sm={6} />
                    </Row>
                  </div>

                  <div>
                    <Row className={styles["bottom-row-background"]}>
                      <Col
                        lg={6}
                        md={6}
                        sm={6}
                        className="d-flex justify-content-end"
                      >
                        <Button
                          text="Calculate"
                          className={styles["calculate-btn"]}
                        />
                      </Col>
                      <Col
                        lg={6}
                        md={6}
                        sm={6}
                        className="d-flex justify-content-start"
                      >
                        <Button text="Reset" className={styles["reset-btn"]} />
                      </Col>
                    </Row>
                  </div>
                </>
              </Panel>
            </Collapse>

            <Collapse
              size="small"
              showArrow={false}
              expandIcon={false}
              className={styles["accodion-header-title-two"]}
            >
              <Panel
                showArrow={false}
                header={
                  <label className={styles["panel-header-text"]}>
                    PIB Calculator
                  </label>
                }
                key="1"
              >
                <div>
                  <h1 className={styles["heading-price"]}>Yield To Price</h1>
                </div>

                <div className={styles["heading-paper"]}>
                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>
                        Select Bond
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-3">
                      <Select className={styles["select-field-calculator"]} />
                    </Col>
                    {/* <Col lg={2} md={2} sm={2} /> */}

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Frequency</label>
                    </Col>
                    <Col
                      lg={5}
                      md={5}
                      sm={5}
                      className="d-flex justify-content-start mt-4"
                    >
                      <Form>
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Quarterly`}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Semi Annually`}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Annally`}
                        />
                      </Form>
                      {/* <TextField
                            className={styles["alltextfields-calculator"]}
                          /> */}
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Settlement Date
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Price</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Maturity Date
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Life Remaning
                      </label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Coupon Rate %
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>PVBP</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Tenor</label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Duration</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Day Count</label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-3">
                      <Select className={styles["select-field-calculator"]} />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>M Duration</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Yield To Maturity %
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Effective Duration
                      </label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex justify-content-start mt-3"
                    >
                      <p className={styles["interpolated-text-bottom"]}>
                        Interpolated PKRV Rates = 16.06
                      </p>
                    </Col>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Approximate Price Change
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>
                </div>

                <div>
                  <Row className={styles["bottom-row-background"]}>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex justify-content-end"
                    >
                      <Button
                        text="Calculate"
                        className={styles["calculate-btn"]}
                      />
                    </Col>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex justify-content-start"
                    >
                      <Button text="Reset" className={styles["reset-btn"]} />
                    </Col>
                  </Row>
                </div>

                <div>
                  <h1 className={styles["heading-price-to-yield"]}>
                    Price To Yield
                  </h1>
                </div>

                <div className={styles["heading-paper"]}>
                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>
                        Select Bond
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-3">
                      <Select className={styles["select-field-calculator"]} />
                    </Col>
                    {/* <Col lg={2} md={2} sm={2} /> */}

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Frequency</label>
                    </Col>
                    <Col
                      lg={5}
                      md={5}
                      sm={5}
                      className="d-flex justify-content-start mt-4"
                    >
                      <Form>
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Quarterly`}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Semi Annually`}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Annally`}
                        />
                      </Form>
                      {/* <TextField
                            className={styles["alltextfields-calculator"]}
                          /> */}
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Settlement Date
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Yield To Maturity %
                      </label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Maturity Date
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Life Remaning
                      </label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Coupon Rate %
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>PVBP</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Tenor</label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Duration</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Day Count</label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-3">
                      <Select className={styles["select-field-calculator"]} />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>M Duration</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Price</label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Effective Duration
                      </label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6} md={6} sm={6}></Col>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Approximate Price Change
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>
                </div>

                <div>
                  <Row className={styles["bottom-row-background"]}>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex justify-content-end"
                    >
                      <Button
                        text="Calculate"
                        className={styles["calculate-btn"]}
                      />
                    </Col>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex justify-content-start"
                    >
                      <Button text="Reset" className={styles["reset-btn"]} />
                    </Col>
                  </Row>
                </div>
              </Panel>
            </Collapse>
          </Col>
          <Col lg={1} md={1} sm={1} />
        </Row>
      </Container>
    </>
  );
};

export default Calculator;
