import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Table, Button, Modal, TextField } from "../../components/elements";
import "./SellModal.css";

const SellModal = ({ ModalTitle, modalSell, setSellModal }) => {
  // for date picker
  const [startDate, setStartDate] = useState(new Date());

  // for someOne buy modal states
  const [clientSellModal, setClientSellModal] = useState({
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
  const clientSellHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "Position" && value !== "") {
      let valueCheck = value.replace(/[^a-zA-Z ]/g, "");
      if (valueCheck !== "") {
        setClientSellModal({
          ...clientSellModal,
          Position: valueCheck.trimStart(),
        });
      }
    } else if (name === "Position" && value === "") {
      setClientSellModal({
        ...clientSellModal,
        Position: "",
      });
    }

    if (name === "SecurityType" && value !== "") {
      let valueCheck = value.replace(/[^a-zA-Z ]/g, "");
      if (valueCheck !== "") {
        setClientSellModal({
          ...clientSellModal,
          SecurityType: valueCheck.trimStart(),
        });
      }
    } else if (name === "SecurityType" && value === "") {
      setClientSellModal({
        ...clientSellModal,
        SecurityType: "",
      });
    }

    if (name === "Amount" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setClientSellModal({
          ...clientSellModal,
          Amount: valueCheck.trimStart(),
        });
      }
    } else if (name === "Amount" && value === "") {
      setClientSellModal({
        ...clientSellModal,
        Amount: "",
      });
    }

    if (name === "Tenor" && value !== "") {
      let valueCheck = value.replace(/[^a-z0-9]/gi, "");
      if (valueCheck !== "") {
        setClientSellModal({
          ...clientSellModal,
          Tenor: valueCheck.trimStart(),
        });
      }
    } else if (name === "Tenor" && value === "") {
      setClientSellModal({
        ...clientSellModal,
        Tenor: "",
      });
    }

    if (name === "NoOfDays" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setClientSellModal({
          ...clientSellModal,
          NoOfDays: valueCheck.trimStart(),
        });
      }
    } else if (name === "NoOfDays" && value === "") {
      setClientSellModal({
        ...clientSellModal,
        NoOfDays: "",
      });
    }

    if (name === "Comment" && value !== "") {
      let valueCheck = value.replace(/[^a-z0-9]/gi, "");
      if (valueCheck !== "") {
        setClientSellModal({
          ...clientSellModal,
          Comment: valueCheck.trimStart(),
        });
      }
    } else if (name === "Comment" && value === "") {
      setClientSellModal({
        ...clientSellModal,
        Comment: "",
      });
    }
  };

  // for close modal handler
  const closeSellModals = () => {
    setSellModal(false);
  };

  // for datePicker handler
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Modal
        show={modalSell}
        setShow={setSellModal}
        className={"modaldialog modal-sell-styles"}
        modalHeaderClassName={"header-Sell-Modal-close-btn"}
        modalFooterClassName={"showSellFooter"}
        size="lg"
        onHide={closeSellModals}
        ModalBody={
          <>
            {modalSell ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-start"
                  >
                    <label className="buy-quote-label">SOMEONE SELL</label>
                  </Col>
                </Row>

                <div className="heading-paper">
                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="Sell-position-label">Position*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        name="Position"
                        onChange={clientSellHandler}
                        value={clientSellModal.Position}
                        className="text-field-size-modal-sell"
                      />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="Sell-position-label">
                        Security Type*
                      </label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        name="SecurityType"
                        onChange={clientSellHandler}
                        value={clientSellModal.SecurityType}
                        className="text-field-size-modal-sell"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="Sell-position-label">
                        Amount (PKR)*
                      </label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        name="Amount"
                        onChange={clientSellHandler}
                        value={clientSellModal.Amount}
                        className="text-field-size-modal-sell"
                      />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="Sell-position-label">Tenor*</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        name="Tenor"
                        onChange={clientSellHandler}
                        value={clientSellModal.Tenor}
                        className="text-field-size-modal-sell"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="Sell-position-label">Issue Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-4">
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
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="Sell-position-label">
                        Maturity date
                      </label>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mt-4">
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
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="Sell-position-label">Trade Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-4">
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
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="Sell-position-label">No. of Days</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        name="NoOfDays"
                        onChange={clientSellHandler}
                        value={clientSellModal.NoOfDays}
                        className="text-field-size-modal"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="Sell-position-label">
                        Settlement Date
                      </label>
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
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="Sell-position-label">Comment</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal-sell" />
                    </Col>
                  </Row>
                </div>
              </>
            ) : null}
          </>
        }
      />
    </>
  );
};

export default SellModal;
