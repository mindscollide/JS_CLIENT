import React, { Fragment, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Select } from "antd";
import { Button, Modal, TextField } from "../../components/elements";
import "./RequestModal.css";

const RequestModal = ({ modalRequest, setModalRequest }) => {
  // for Request quote states
  const [isRequestModal, setIsRequestModal] = useState({
    TradeDate: "",
    NoOfDays: "",
    settlementDays: "",
    Position: "",
    CouponRate: "",
    SecuritType: "",
    issuedate: "",
    Tenor: "",
    MaturiityDate: "",
    AmountPKR: "",
    Comment: "",
  });

  //for client state handler
  const clientHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "NoOfDays" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setIsRequestModal({
          ...isRequestModal,
          NoOfDays: valueCheck.trimStart(),
        });
      }
    } else if (name === "NoOfDays" && value === "") {
      setIsRequestModal({
        ...isRequestModal,
        NoOfDays: "",
      });
    }

    if (name === "AmountPKR" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setIsRequestModal({
          ...isRequestModal,
          AmountPKR: valueCheck.trimStart(),
        });
      }
    } else if (name === "AmountPKR" && value === "") {
      setIsRequestModal({
        ...isRequestModal,
        AmountPKR: "",
      });
    }

    if (name === "CouponRate" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setIsRequestModal({
          ...isRequestModal,
          CouponRate: valueCheck.trimStart(),
        });
      }
    } else if (name === "CouponRate" && value === "") {
      setIsRequestModal({
        ...isRequestModal,
        CouponRate: "",
      });
    }

    if (name === "Comment" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setIsRequestModal({
          ...isRequestModal,
          Comment: valueCheck.trimStart(),
        });
      }
    } else if (name === "Comment" && value === "") {
      setIsRequestModal({
        ...isRequestModal,
        Comment: "",
      });
    }
  };

  // for close modal handler
  const closeHandlerModals = () => {
    setModalRequest(false);
  };
  return (
    <Fragment>
      <Modal
        show={modalRequest}
        setShow={setModalRequest}
        backdrop="static"
        // backdrop={true}
        modalHeaderClassName={"header-Video-Modal-close-btn"}
        modalFooterClassName={"showFooter"}
        className={"modaldialog modal-styles"}
        size={modalRequest === true ? "lg" : "lg"}
        onHide={closeHandlerModals}
        ModalBody={
          <>
            {modalRequest ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-center mb-4"
                  >
                    <label className="request-quote-label">
                      REQUEST FOR QUOTE
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} sm={12} className="text-field">
                    <Row>
                      <Col lg={1} md={1} sm={12}>
                        <label className="modal-title-trade">Trade Date</label>
                      </Col>

                      <Col lg={3} md={3} sm={12}>
                        <TextField
                          className="text-field-size-modal"
                          labelClass="d-none"
                        />
                      </Col>

                      <Col lg={1} md={1} sm={12}>
                        <label className="modal-title-trade">No. of Days</label>
                      </Col>

                      <Col lg={3} md={3} sm={12}>
                        <TextField
                          className="text-field-size-modal"
                          labelClass="d-none"
                          name={"NoOfDays"}
                          onChange={clientHandler}
                          value={isRequestModal.NoOfDays}
                        />
                      </Col>

                      <Col lg={1} md={1} sm={12}>
                        <label className="modal-title-trade">
                          Settlement Date
                        </label>
                      </Col>

                      <Col lg={3} md={3} sm={12}>
                        <TextField
                          className="text-field-size-modal"
                          labelClass="d-none"
                        />
                      </Col>
                    </Row>
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
                      <label className="position-label">Position*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-4">
                      <Select className="quoteShowModal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Coupon Rate</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        className="text-field-size-modal"
                        name={"CouponRate"}
                        onChange={clientHandler}
                        value={isRequestModal.CouponRate}
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
                      <label className="position-label">Security Type*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-4">
                      <Select className="quoteShowModal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Issue date</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Tenor*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-4">
                      <Select className="quoteShowModal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Maturity date</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Amount (PKR)*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        className="text-field-size-modal"
                        name={"AmountPKR"}
                        onChange={clientHandler}
                        value={isRequestModal.AmountPKR}
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
                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        className="text-field-size-modal"
                        name={"Comment"}
                        onChange={clientHandler}
                        value={isRequestModal.Comment}
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
            {modalRequest ? (
              <>
                <Row className="showRow-top-line">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="modal-footer-confirm"
                  >
                    <Button text="Confirm" className="conifrm-btn" />
                  </Col>
                </Row>
              </>
            ) : null}
          </>
        }
      />
    </Fragment>
  );
};

export default RequestModal;
