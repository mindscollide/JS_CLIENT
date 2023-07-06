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
        keyboard={false}
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
                <Row className="mx-0">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-center mb-4"
                  >
                    <h5 className="request-quote-label">REQUEST FOR QUOTE</h5>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <Row>
                      <Col lg={4} md={4} sm={12}>
                        <Row>
                          <Col lg={12} md={12} sm={12} className="d-flex">
                            <Row>
                              <Col
                                lg={5}
                                md={5}
                                sm={5}
                                // className="d-flex justify-content-end align-items-center "
                              >
                                <span className="modal-title-trade">
                                  Trade Date
                                </span>
                              </Col>
                              <Col
                                lg={7}
                                md={7}
                                sm={7}
                                className="m-0 p-0 d-flex justify-content-start"
                              >
                                <TextField
                                  className="text-field-size-modal"
                                  labelClass="d-none"
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col lg={4} md={4} sm={12}>
                        <Row>
                          <Col lg={12} md={12} sm={12}>
                            <Row>
                              <Col lg={4} md={4} sm={4}>
                                <span className="modal-title-trade d-flex justify-content-start align-items-center">
                                  No. of Days
                                </span>
                              </Col>
                              <Col
                                lg={8}
                                md={8}
                                sm={8}
                                className=" d-flex justify-content-start"
                              >
                                <TextField
                                  className="text-field-size-modal"
                                  labelClass="d-none"
                                  name={"NoOfDays"}
                                  onChange={clientHandler}
                                  value={isRequestModal.NoOfDays}
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col lg={4} md={4} sm={12}>
                        <Row>
                          <Col lg={12} md={12} sm={12}>
                            <Row>
                              <Col
                                lg={7}
                                md={7}
                                sm={7}
                                className="d-flex justify-content-end"
                              >
                                <p className="modal-title-trade m-0 p-0 d-flex justify-content-center align-items-center ">
                                  Settlement Date
                                </p>
                              </Col>
                              <Col lg={5} md={5} sm={5} className="m-0 p-0">
                                <TextField
                                  className="text-field-size-modal"
                                  labelClass="d-none"
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col lg={1} md={1} sm={12}></Col>

                      <Col lg={3} md={3} sm={12}></Col>
                    </Row>
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

                    <Col lg={4} md={4} sm={4} className="mt-3">
                      <Select className="quoteShowModal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-3"
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
                      className="d-flex justify-content-start mt-3"
                    >
                      <label className="position-label">Security Type*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-3">
                      <Select className="quoteShowModal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-3"
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
                      className="d-flex justify-content-start mt-3"
                    >
                      <label className="position-label">Tenor*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-3">
                      <Select className="quoteShowModal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-3"
                    >
                      <label className="position-label">Maturity date</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={2} md={2} sm={2} className="mt-3">
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
                      className="d-flex justify-content-start mt-3"
                    >
                      <label className="position-label">Comment</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        className="text-field-size-modal"
                        name={"Comment"}
                        onChange={clientHandler}
                        value={isRequestModal.Comment}
                        type="text"
                        as={"textarea"}
                        rows="3"
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
                    className="modal-footer-confirm d-flex justify-content-center mt-4"
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
