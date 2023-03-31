import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Table, Button, Modal, TextField } from "../../components/elements";
import {
  ChevronDown,
  CaretDownFill,
  ListUl,
  Facebook,
} from "react-bootstrap-icons";
import DowJones from "../../assets/images/dowjones.png";
import CNBC from "../../assets/images/cnbc.png";
import { Select } from "antd";
import Tresmark from "../../assets/images/tresmark.png";
import "./Client.css";

const Client = () => {
  const [show, setShow] = useState(false);

  //view modal for client
  const [viewModal, setViewModal] = useState(false);

  //for buy modal for client
  const [buyModal, setBuyModal] = useState(false);

  //for sell modal for client
  const [sellModal, setSellModal] = useState(false);

  // Filter Options
  const tableFilterOptions = [
    { className: "filter-color", label: "Recent Quotes", value: 1 },
    { className: "filter-color", label: "PKRV Derived bond", value: 2 },
    { className: "filter-color", label: "News", value: 3 },
  ];

  // data for columns for first table
  const columns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "130px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
        {
          text: "10-10-2022",
          value: "2",
        },
        {
          text: "09-10-2022",
          value: "3",
        },
        {
          text: "07-10-2022",
          value: "4",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Maturity</label>,
      dataIndex: "maturity",
      key: "maturity",
      width: "110px",
      ellipsis: true,
      render: (text) => <label className="maturity-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
        {
          text: "10-10-2022",
          value: "2",
        },
        {
          text: "09-10-2022",
          value: "3",
        },
        {
          text: "07-10-2022",
          value: "4",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Tenor</label>,
      dataIndex: "tenor",
      key: "tenor",
      align: "center",
      ellipsis: true,
      filters: [
        {
          text: "1Y",
          value: "1",
        },
        {
          text: "6M",
          value: "2",
        },
        {
          text: "3M",
          value: "3",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Bid</label>,
      dataIndex: "bid",
      key: "bid",
      ellipsis: true,
      render: (text) => (
        <Button
          text={text}
          onClick={openBuyModal}
          className="bid-text-button"
        />
      ),
    },
    {
      title: <label className="table-all-title">Offer</label>,
      dataIndex: "offer",
      key: "offer",
      render: (text) => (
        <Button
          text={text}
          onClick={openSellModal}
          className="offer-text-button"
        />
      ),
    },
    {
      title: <label className="table-all-title">DTM</label>,
      dataIndex: "dtm",
      key: "dtm",
      ellipsis: true,
      filters: [
        {
          text: "119",
          value: "1",
        },
        {
          text: "20",
          value: "2",
        },
        {
          text: "21",
          value: "3",
        },
        {
          text: "35",
          value: "3",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
  ];

  // data for columns for second table
  const columnsTwo = [
    {
      title: <label className="bottom-table-header">TXN ID</label>,
      dataIndex: "txnid",
      key: "txnid",
      width: "90px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Bank</label>,
      dataIndex: "bank",
      key: "bank",
      width: "70px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "JS-BANK",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Position</label>,
      dataIndex: "position",
      key: "position",
      width: "90px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "BUY",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Security Type</label>,
      dataIndex: "securitytype",
      key: "securitytype",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "TBILLS",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Amount</label>,
      dataIndex: "amount",
      key: "amount",
      width: "85px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "1,000,000",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Rate</label>,
      dataIndex: "rate",
      key: "rate",
      width: "70px",
      ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Tenor</label>,
      dataIndex: "tenor",
      key: "tenor",
      width: "70px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "3M",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "70px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "3M",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Maturity Date</label>,
      dataIndex: "maturitydate",
      key: "maturitydate",
      width: "90px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "3M",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Trade Date</label>,
      dataIndex: "tradedate",
      key: "tradedate",
      width: "85px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "21-03-2023",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">No of Days</label>,
      dataIndex: "noofdays",
      key: "noofdays",
      width: "90px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "0",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Settlement Date</label>,
      dataIndex: "settlement",
      key: "settlement",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "21-03-2023",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Status</label>,
      dataIndex: "status",
      key: "status",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "Rejected",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Action</label>,
      dataIndex: "action",
      key: "action",
      width: "60px",
      // ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Comment</label>,
      dataIndex: "comment",
      key: "comment",
      width: "70px",
      // ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Chat</label>,
      dataIndex: "chat",
      key: "chat",
      width: "70px",
      // ellipsis: true,
    },
  ];

  // data for rows for first table
  const data = [
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: "1Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: "3m",
      bid: 232,
      offer: 15.43,
      dtm: "ewew",
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: "2m",
      bid: 232,
      offer: 15.43,
      dtm: "ewew",
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
    },
  ];

  // data for rows second table
  const dataTwo = [
    {
      txnid: "21-03-2023/4c18",
      bank: "JS Bank",
      position: "Buy",
      securitytype: "Tbills",
      amount: "1,000,000",
      tenor: "3m",
      tradedate: "21-03-2023",
      noofdays: "0",
      settlement: "21-03-2023",
      status: "Rejected",
    },
  ];

  //open modal
  const openModalHandler = async () => {
    setShow(true);
  };

  //open view modal
  const openViewModal = async () => {
    setViewModal(true);
  };

  //open buy modal
  const openBuyModal = async () => {
    setBuyModal(true);
  };

  //Open sell modal
  const openSellModal = async () => {
    setSellModal(true);
  };

  return (
    <>
      <Container fluid className="table-content-div">
        <Row className="remove-gutterx-space">
          <Col lg={6} md={6} sm={6}>
            <div className="card-box">
              <Row className="mt-2">
                <Col lg={8} md={8} sm={8}>
                  <Select
                    options={tableFilterOptions}
                    defaultValue={tableFilterOptions[0]}
                    className="tableFilter"
                  />
                </Col>

                <Col lg={4} md={4} sm={4} className="upper-3m-colum">
                  <Button
                    text="3M"
                    className="upper-3m-button"
                    onClick={openModalHandler}
                  />
                  <Button text="6M" className="upper-3m-button" />
                  <Button text="1Y" className="upper-3m-button" />
                </Col>
              </Row>
              <div className="upper-div-button">
                <Button text="Tbills" className="table-upper-tbill-button" />
                <Button text="PIBs" className="table-upper-PIB-button" />
                <Button
                  text="PIB Floater"
                  className="table-upper-Floater-button"
                />
                <Button text="SUKUK" className="table-upper-SUKUK-button" />
              </div>
              <Table
                column={columns}
                rows={data}
                className="inside-table"
                pagination={false}
              />
            </div>
          </Col>

          <Col lg={6} md={6} sm={6}>
            <div className="second-row">
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <Select
                    options={tableFilterOptions}
                    defaultValue={tableFilterOptions[2]}
                    className="NewsFilter"
                  />
                  {/* <label>News</label> */}
                </Col>
              </Row>

              <div className="News-div-scroll">
                <Row className="latest-date-row">
                  <Col lg={12} md={12} sm={12}>
                    <label className="latest-date">6-12-2022</label>
                  </Col>
                </Row>

                <Row className="text-border-bottom">
                  <Col lg={12} md={12} sm={12} className="dowjones-columns">
                    <label className="date-dj-jone">11:48</label>
                    <img src={DowJones} width={40} onClick={openViewModal} />
                    <label className="dj-jones-text">
                      DJ Interbank Foreign Exchange Rates At 01:50 EST / 0650
                      GMT
                    </label>
                  </Col>
                </Row>

                <Row className="text-border-bottom">
                  <Col lg={12} md={12} sm={12} className="dowjones-columns">
                    <label className="date-dj-jone">11:48</label>
                    <img src={CNBC} width={40} />
                    <label className="dj-jones-text">
                      Russian oil Cap will work, EU ministers insist, despite
                      kermlin opposition and
                    </label>
                  </Col>
                </Row>

                <Row className="text-border-bottom">
                  <Col lg={12} md={12} sm={12} className="dowjones-columns">
                    <label className="date-dj-jone">11:48</label>
                    <img src={Tresmark} width={40} />
                    <label className="dj-jones-text">
                      DJ Interbank Foreign Exchange Rates At 01:50 EST / 0650
                      GMT
                    </label>
                  </Col>
                </Row>

                <Row className="latest-date-row">
                  <Col lg={12} md={12} sm={12}>
                    <label className="latest-date">5-12-2022</label>
                  </Col>
                </Row>

                <Row className="text-border-bottom">
                  <Col lg={12} md={12} sm={12} className="dowjones-columns">
                    <label className="date-dj-jone">11:48</label>
                    <img src={DowJones} width={40} />
                    <label className="dj-jones-text">
                      DJ Interbank Foreign Exchange Rates At 01:50 EST / 0650
                      GMT
                    </label>
                  </Col>
                </Row>

                <Row className="text-border-bottom">
                  <Col lg={12} md={12} sm={12} className="dowjones-columns">
                    <label className="date-dj-jone">11:48</label>
                    <img src={CNBC} width={40} />
                    <label className="dj-jones-text">
                      Russian oil Cap will work, EU ministers insist, despite
                      kermlin opposition and
                    </label>
                  </Col>
                </Row>

                <Row className="text-border-bottom">
                  <Col lg={12} md={12} sm={12} className="dowjones-columns">
                    <label className="date-dj-jone">11:48</label>
                    <img src={CNBC} width={40} />
                    <label className="dj-jones-text">
                      Russian oil Cap will work, EU ministers insist, despite
                      kermlin opposition and
                    </label>
                  </Col>
                </Row>

                <Row className="text-border-bottom">
                  <Col lg={12} md={12} sm={12} className="dowjones-columns">
                    <label className="date-dj-jone">11:48</label>
                    <img src={Tresmark} width={40} />
                    <label className="dj-jones-text">
                      DJ Interbank Foreign Exchange Rates At 01:50 EST / 0650
                      GMT
                    </label>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bottom-table-container">
        <div className="bottom-container-div">
          <Row className="mt-3">
            <Col lg={2} md={2} sm={2}>
              <label className="txn-summary">TXN Summary</label>
            </Col>
            <Col lg={10} md={10} sm={10} className="bottom-table-buttons">
              <Button text="RFQ" icon={<ListUl />} className="rfq-bttom-btn" />
              <Button text="Export" className="export-bttom-btn" />
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} className="features-table">
              <Table
                column={columnsTwo}
                rows={dataTwo}
                className="bottom-inside-table"
                pagination={false}
              />
            </Col>
          </Row>
        </div>
      </Container>

      <Modal
        show={show || viewModal || buyModal || sellModal}
        setShow={() => {
          setShow();
          setViewModal();
          setBuyModal();
          setSellModal();
        }}
        modalHeaderClassName={
          viewModal === true ? "d-none" : "header-Video-Modal-close-btn"
        }
        modalFooterClassName={viewModal === true ? "viewFooter" : "showFooter"}
        className={
          viewModal === true
            ? "modaldialog modal-view"
            : "modaldialog modal-styles"
        }
        size={show === true ? "lg" : "lg"}
        onHide={() => {
          setShow(false);
          setViewModal(false);
          setBuyModal(false);
          setSellModal(false);
        }}
        ModalBody={
          <>
            {show ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-center"
                  >
                    <label className="request-quote-label">
                      REQUEST FOR QUOTE
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} sm={12} className="text-field">
                    <label className="modal-title-trade">Trade Date</label>

                    <TextField className="text-field-size-modal" />

                    <label className="modal-title-trade">No. of Days</label>

                    <TextField className="text-field-size-modal" />

                    <label className="modal-title-trade">Settlement Date</label>

                    <TextField className="text-field-size-modal" />
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

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Coupon Rate</label>
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
                      <label className="position-label">Security Type*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
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

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
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
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Comment</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>
                </div>
              </>
            ) : viewModal ? (
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
            ) : buyModal ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-start"
                  >
                    <label className="buy-quote-label">SOMEONE BUY</label>
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

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Security Type*</label>
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
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Tenor*</label>
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
                      <label className="position-label">Issue Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
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
                      <label className="position-label">Trade Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">No. of Days</label>
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
                      <label className="position-label">Settlement Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Comment</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>
                </div>
              </>
            ) : sellModal ? (
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
                      <label className="position-label">Position*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Security Type*</label>
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
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Tenor*</label>
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
                      <label className="position-label">Issue Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
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
                      <label className="position-label">Trade Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">No. of Days</label>
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
                      <label className="position-label">Settlement Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Comment</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>
                </div>
              </>
            ) : null}
          </>
        }
        ModalFooter={
          <>
            {show ? (
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
            ) : viewModal ? (
              <>
                <Row>
                  <Col lg={12} md={12} sm={12} xs={12} className="social-icons-group text-right">
                      <a
                        href="#"
                        target="_blank"
                        className="d-inline-block social-link"
                      >
                        <i className="icon-facebook"></i>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="d-inline-block social-link"
                      >
                        <i className="icon-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="d-inline-block social-link"
                      >
                        <i className="icon-twitter"></i>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="d-inline-block social-link"
                      >
                        <i className="icon-youtube "></i>
                      </a>
                    {/* <Facebook size={25} />
                    <Facebook size={25} />
                    <Facebook size={25} /> */}
                  </Col>
                </Row>
              </>
            ) : buyModal ? (
              <>
                <Row className="showRow-top-line">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="buy-modal-footer-confirm"
                  >
                    <Button text="Confirm" className="conifrm-btn" />
                  </Col>
                </Row>
              </>
            ) : sellModal ? (
              <>
                <Row className="showRow-top-line">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="buy-modal-footer-confirm"
                  >
                    <Button text="Confirm" className="conifrm-btn" />
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

export default Client;
