import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Table, Button, Modal, TextField } from "../../components/elements";
import DowJones from "../../assets/images/dowjones.png";
import CNBC from "../../assets/images/cnbc.png";
import "./ViewModal.css";

const ViewModal = ({ ModalTitle, viewModal, setViewModal }) => {
  // for close modal handler
  const closeHandlerModals = () => {
    setViewModal(false);
  };
  return (
    <>
      <Modal
        show={viewModal}
        setShow={setViewModal}
        className={viewModal === true ? "modaldialog modal-view" : null}
        modalHeaderClassName={viewModal === true ? "d-none" : null}
        modalFooterClassName={"viewFooter"}
        size={"lg"}
        onHide={closeHandlerModals}
        ModalBody={
          <>
            {viewModal ? (
              <>
                <Row>
                  <Col lg={1} md={1} sm={12}>
                    <img src={CNBC} width={40} />
                  </Col>
                  <Col lg={11} md={11} sm={12}>
                    <label className="view-modal-light-label">
                      18-Dec-2020 3:30 PM
                    </label>
                    <br />
                    <label className="view-modal-bold-label">
                      Stock futures little changed after the Dow notches a
                      record close
                    </label>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="view-modal-height-scroll"
                  >
                    <label className="discription-text">
                      Stock futures were mixed in early morning trading
                      Wednesday after the Dow Jones Industrial Average notched a
                      record close the previous day as investors flocked to
                      shares that stand to benefit from an economic recovery.
                      <br />
                      <br />
                      Futures on the blue-chip Dow rose 28 points. S&P 500
                      futures were flat and Nasdaq 100 futures edged 0.2% lower.
                      <br />
                      <br />
                      On Tuesday, while the Dow climbed 200 points to a new
                      high, the tech-focused Nasdaq Composite suffered a
                      sell-off, down 1.3%, amid a rapid rise in Treasury yields.
                      The closely-watched benchmark 10-year Treasury yield was
                      as high as 1.71% Tuesday, triggering selling in
                      growth-oriented technology stocks.
                      <br />
                      <br />
                      Megacap tech stocks underperformed the S&P 500 Tuesday as
                      “investors reconsidered the value of such long-duration
                      assets in the wake of higher rates,” Chris Hussey, a
                      managing director at Goldman Sachs, said in a note.
                      <br />
                      <br />
                      Stock futures were mixed in early morning trading
                      Wednesday after the Dow Jones Industrial Average notched a
                      record close the previous day as investors flocked to
                      shares that stand to benefit from an economic recovery.
                      <br />
                      <br />
                      Futures on the blue-chip Dow rose 28 points. S&P 500
                      futures were flat and Nasdaq 100 futures edged 0.2% lower.
                      <br />
                      <br />
                      On Tuesday, while the Dow climbed 200 points to a new
                      high, the tech-focused Nasdaq Composite suffered a
                      sell-off, down 1.3%, amid a rapid rise in Treasury yields.
                      The closely-watched benchmark 10-year Treasury yield was
                      as high as 1.71% Tuesday, triggering selling in
                      growth-oriented technology stocks.
                      <br />
                      <br />
                      Megacap tech stocks underperformed the S&P 500 Tuesday as
                      “investors reconsidered the value of such long-duration
                      assets in the wake of higher rates,” Chris Hussey, a
                      managing director at Goldman Sachs, said in a note.
                    </label>
                  </Col>
                </Row>
              </>
            ) : null}
          </>
        }
        ModalFooter={
          <>
            {viewModal ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="social-icons-group"
                  >
                    <i className="icon-facebook"></i>

                    <i className="icon-linkedin"></i>

                    <i className="icon-twitter"></i>

                    <i className="icon-youtube "></i>
                    {/* <Facebook size={25} />
                      <Facebook size={25} />
                      <Facebook size={25} /> */}
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

export default ViewModal;
