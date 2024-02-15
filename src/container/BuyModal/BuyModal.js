import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Table, Button, Modal, TextField } from "../../components/elements";
import "./BuyModal.css";

const BuyModal = ({ ModalTitle, modalBuy, setBuyModal }) => {
  // for date picker
  const [startDate, setStartDate] = useState(new Date());

  // for someOne buy modal states
  const [clientBuyModal, setClientBuyModal] = useState({
    Position: "",
    SecurityType: "",
    Amount: "",
    Tenor: "",
    IssueDate: "",
    MaturityDate: "",
    TradeDate: "",
    NoOfDays: "",
    SettlementDate: "",
    Comment: "",
  });

  //for client state handler
  const clientHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "Position" && value !== "") {
      let valueCheck = value.replace(/[^a-zA-Z ]/g, "");
      if (valueCheck !== "") {
        setClientBuyModal({
          ...clientBuyModal,
          Position: valueCheck.trimStart(),
        });
      }
    } else if (name === "Position" && value === "") {
      setClientBuyModal({
        ...clientBuyModal,
        Position: "",
      });
    }

    if (name === "SecurityType" && value !== "") {
      let valueCheck = value.replace(/[^a-zA-Z ]/g, "");
      if (valueCheck !== "") {
        setClientBuyModal({
          ...clientBuyModal,
          SecurityType: valueCheck.trimStart(),
        });
      }
    } else if (name === "SecurityType" && value === "") {
      setClientBuyModal({
        ...clientBuyModal,
        SecurityType: "",
      });
    }

    if (name === "Amount" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setClientBuyModal({
          ...clientBuyModal,
          Amount: valueCheck.trimStart(),
        });
      }
    } else if (name === "Amount" && value === "") {
      setClientBuyModal({
        ...clientBuyModal,
        Amount: "",
      });
    }

    if (name === "Tenor" && value !== "") {
      let valueCheck = value.replace(/[^a-z0-9]/gi, "");
      if (valueCheck !== "") {
        setClientBuyModal({
          ...clientBuyModal,
          Tenor: valueCheck.trimStart(),
        });
      }
    } else if (name === "Tenor" && value === "") {
      setClientBuyModal({
        ...clientBuyModal,
        Tenor: "",
      });
    }

    if (name === "NoOfDays" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setClientBuyModal({
          ...clientBuyModal,
          NoOfDays: valueCheck.trimStart(),
        });
      }
    } else if (name === "NoOfDays" && value === "") {
      setClientBuyModal({
        ...clientBuyModal,
        NoOfDays: "",
      });
    }

    if (name === "Comment" && value !== "") {
      let valueCheck = value.replace(/[^a-z0-9]/gi, "");
      if (valueCheck !== "") {
        setClientBuyModal({
          ...clientBuyModal,
          Comment: valueCheck.trimStart(),
        });
      }
    } else if (name === "Comment" && value === "") {
      setClientBuyModal({
        ...clientBuyModal,
        Comment: "",
      });
    }
  };

  // for close modal handler
  const closeHandlerModals = () => {
    setBuyModal(false);
  };

  // for datePicker handler
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Modal
        show={modalBuy}
        setShow={setBuyModal}
        backdrop="static"
        className={"modaldialog modal-styles"}
        modalHeaderClassName={"header-Video-Modal-close-btn"}
        modalFooterClassName={"showFooter"}
        size="lg"
        onHide={closeHandlerModals}
        ModalBody={
          <>
            {modalBuy ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-start"
                  >
                    <label className="buy-quote-label">GUL AHMED BUY</label>
                  </Col>
                </Row>

                <div className="heading-paper">
                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-3"
                    >
                      <label className="position-label">Position*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        onChange={clientHandler}
                        name="Position"
                        value={clientBuyModal.Position}
                        className="text-field-size-modal"
                      />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start  mt-3"
                    >
                      <label className="position-label">Security Type*</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        name="SecurityType"
                        onChange={clientHandler}
                        value={clientBuyModal.SecurityType}
                        className="text-field-size-modal"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={2} md={2} sm={2} className=" mt-3">
                      <label className="position-label">Amount (PKR)*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        className="text-field-size-modal"
                        name="Amount"
                        onChange={clientHandler}
                        value={clientBuyModal.Amount}
                      />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-3"
                    >
                      <label className="position-label">Tenor*</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        className="text-field-size-modal"
                        name="Tenor"
                        onChange={clientHandler}
                        value={clientBuyModal.Tenor}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-3"
                    >
                      <label className="position-label">Issue Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-3">
                      {/* <TextField className="text-field-size-modal" /> */}

                      <DatePicker
                        name="IssueDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="datePicker-Client"
                        placeholder={"Select Date"}
                      />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-3"
                    >
                      <label className="position-label">Maturity date</label>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mt-3">
                      <DatePicker
                        name="MaturityDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="datePicker-Client"
                        placeholder={"Select Date"}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-3"
                    >
                      <label className="position-label">Trade Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-3">
                      <DatePicker
                        name="TradeDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="datePicker-Client"
                        placeholder={"Select Date"}
                      />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-3"
                    >
                      <label className="position-label">No. of Days</label>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mt-3">
                      <TextField
                        name="NoOfDays"
                        labelClass="d-none"
                        onChange={clientHandler}
                        value={clientBuyModal.NoOfDays}
                        className="text-field-size-modal"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={2} md={2} sm={2} className="mt-3">
                      <label className="position-label">Settlement Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-4">
                      <DatePicker
                        name="SettlementDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="datePicker-Client"
                        placeholder={"Select Date"}
                      />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Comment</label>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mt-4">
                      <TextField
                        name="Comment"
                        onChange={clientHandler}
                        value={clientBuyModal.Comment}
                        type="text"
                        as={"textarea"}
                        labelClass="d-none"
                        rows="1"
                      />
                    </Col>
                  </Row>
                </div>
              </>
            ) : null}
          </>
        }
        ModalFooter={
          <>
            {modalBuy ? (
              <>
                <Row className="d-flex m-0 p-0 justify-content-end  mb-3">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="buy-modal-footer-confirm"
                  >
                    <Button text="Confirm" className="conifrm-btn-Buy-Modal" />
                  </Col>
                </Row>
              </>
            ) : null}
          </>
        }
      />
    </>
  );
};

export default BuyModal;
