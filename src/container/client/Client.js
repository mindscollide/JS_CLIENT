import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Table, Button, Modal, TextField } from "../../components/elements";
import {
  ChevronDown,
  CaretDownFill,
  ListUl,
  ChatDots,
  Facebook,
} from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import DowJones from "../../assets/images/dowjones.png";
import CNBC from "../../assets/images/cnbc.png";
import PDF from "../../assets/images/pdf.png";
import Excel from "../../assets/images/excel.png";

import { Select } from "antd";
import RequestModal from "../RequestModal/RequestModal";
import ViewModal from "../ViewModal/ViewModal";
import BuyModal from "../BuyModal/BuyModal";
import SellModal from "../SellModal/SellModal";
import Tresmark from "../../assets/images/tresmark.png";
import "./Client.css";

const Client = () => {
  const [show, setShow] = useState(false);
  const [editFlag, setEditFlag] = useState(false);

  // for date picker
  const [startDate, setStartDate] = useState(new Date());

  // request quote modal
  const [requestQuoteModal, setRequestQuoteModal] = useState(false);

  //view modal for client
  const [viewClientModal, setViewClientModal] = useState(false);

  //for buy modal for client
  const [buyClientModal, setBuyClientModal] = useState(false);

  //for sell modal for client
  const [sellClientModal, setSellClientModal] = useState(false);

  //for left table option state
  const [currentTable, setCurrentTable] = useState(1);

  //for right table option state
  const [currentRightTable, setCurrentRightTable] = useState(3);

  //for LEFT columns states in table
  const [isTbills, setIsTbills] = useState(true);
  const [isPib, setIsPib] = useState(false);
  const [isPibFloater, setIsPibFloater] = useState(false);
  const [isSukuk, setIsSukuk] = useState(false);

  // for RIGHT columns states
  const [isRightTbills, setIsRightTbills] = useState(true);
  const [isRightPib, setIsRightPib] = useState(false);
  const [isPibRightFloater, setIsPibRightFloater] = useState(false);
  const [isRightSukuk, setIsRightSukuk] = useState(false);

  //for client state handler
  // const clientHandler = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   if (name === "NoOfDays" && value !== "") {
  //     let valueCheck = value.replace(/[^\d]/g, "");
  //     if (valueCheck !== "") {
  //       setIsRequestModal({
  //         ...isRequestModal,
  //         NoOfDays: valueCheck.trimStart(),
  //       });
  //     }
  //   } else if (name === "NoOfDays" && value === "") {
  //     setIsRequestModal({
  //       ...isRequestModal,
  //       NoOfDays: "",
  //     });
  //   }

  //   if (name === "AmountPKR" && value !== "") {
  //     let valueCheck = value.replace(/[^\d]/g, "");
  //     if (valueCheck !== "") {
  //       setIsRequestModal({
  //         ...isRequestModal,
  //         AmountPKR: valueCheck.trimStart(),
  //       });
  //     }
  //   } else if (name === "AmountPKR" && value === "") {
  //     setIsRequestModal({
  //       ...isRequestModal,
  //       AmountPKR: "",
  //     });
  //   }

  //   if (name === "CouponRate" && value !== "") {
  //     let valueCheck = value.replace(/[^\d]/g, "");
  //     if (valueCheck !== "") {
  //       setIsRequestModal({
  //         ...isRequestModal,
  //         CouponRate: valueCheck.trimStart(),
  //       });
  //     }
  //   } else if (name === "CouponRate" && value === "") {
  //     setIsRequestModal({
  //       ...isRequestModal,
  //       CouponRate: "",
  //     });
  //   }

  //   if (name === "Comment" && value !== "") {
  //     let valueCheck = value.replace(/[^\d]/g, "");
  //     if (valueCheck !== "") {
  //       setIsRequestModal({
  //         ...isRequestModal,
  //         Comment: valueCheck.trimStart(),
  //       });
  //     }
  //   } else if (name === "Comment" && value === "") {
  //     setIsRequestModal({
  //       ...isRequestModal,
  //       Comment: "",
  //     });
  //   }
  // };

  // for bottom button export file toggle
  const [isExport, setIsExport] = useState(false);

  // fro another recent quote select panel
  const [isRecent, setIsRecent] = useState(true);

  // for another PKRV select panel
  const [isPkrv, setIsPkrv] = useState(false);

  // data for rows for first table
  const data = [
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: "1Y",
      bid: 15.85,
      offer: 15.72,
      dtm: "ewew",
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: "3m",
      bid: 15.32,
      offer: 15.43,
      dtm: "ewew",
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: "3m",
      bid: 15.22,
      offer: 15.43,
      dtm: "ewew",
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "6m",
      bid: 15.52,
      offer: 15.72,
      dtm: "ewew",
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      bid: 15.72,
      offer: 15.72,
      dtm: "ewew",
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      bid: 15.72,
      offer: 15.72,
      dtm: "ewew",
    },
  ];

  // data for rows for first table
  const Pibdata = [
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: "2Y",
      bid: 15.42,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: "3Y",
      bid: 15.32,
      offer: 15.43,
      dtm: "ewew",
      Coupon: 16,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: "5Y",
      bid: 15.82,
      offer: 15.43,
      dtm: "ewew",
      Coupon: 16,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "10Y",
      bid: 15.32,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "2Y",
      bid: 15.52,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "3Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
    },
  ];

  // data for rows for first table
  const PibFloaterdata = [
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: "1Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
      frequency: 2,
      bidspread: 20,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: "3Y",
      bid: 232,
      offer: 15.43,
      dtm: "ewew",
      Coupon: 16,
      frequency: 4,
      bidspread: 20,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: "2Y",
      bid: 232,
      offer: 15.43,
      dtm: "ewew",
      Coupon: 16,
      frequency: 4,
      bidspread: 20,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "2Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
      frequency: 2,
      bidspread: 25,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "10Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
      frequency: 2,
      bidspread: 25,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "5Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
      frequency: 2,
      bidspread: 25,
    },
  ];

  // for Tbills filter data
  const [filteredData, setFilteredData] = useState(data);

  // for Pib filter data
  const [pibFilter, setPibFilter] = useState(Pibdata);

  // for pib floater filter data
  const [pibFloaterFilter, setIsPibFloaterFilter] = useState(PibFloaterdata);

  // for tbills filter handler
  const handleFilter = (tenor) => {
    // console.log(tenor, "filteredfiltered");
    // console.log(data, "filteredfiltered");
    const filtered = data.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase()
    );
    // console.log(filtered, "filteredfiltered");
    setFilteredData(filtered);
  };

  // for pib filter handler
  const pibHandleFilter = (tenor) => {
    const filtered = Pibdata.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase()
    );
    setPibFilter(filtered);
  };

  // for pib Floater filter handler
  const pibFloaterHandleFilter = (tenor) => {
    const filtered = PibFloaterdata.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase()
    );
    setIsPibFloaterFilter(filtered);
  };

  // for Tbills right filter
  const [rightFilter, setRightFilter] = useState(data);

  //for pib right filter
  const [rightPibFilter, setRightPibFilter] = useState(Pibdata);

  //for pib floater filter data
  const [rightFloaterFilter, setRightFloaterFilter] = useState(PibFloaterdata);

  // for tbills right filter handler
  const handleRightFilter = (tenor) => {
    const filtered = data.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase()
    );
    setRightFilter(filtered);
  };

  // for pib right filter handler
  const pibRightHandleFilter = (tenor) => {
    const filtered = Pibdata.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase()
    );
    setRightPibFilter(filtered);
  };

  // for pib right Floater filter handler
  const pibRightFloaterHandleFilter = (tenor) => {
    const filtered = PibFloaterdata.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase()
    );
    setRightFloaterFilter(filtered);
  };

  // data for PKRV panel table columns for table
  const PkrvPanelcolumns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "125px",
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
      width: "100px",
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
      title: <label className="table-all-title">Instrument</label>,
      dataIndex: "instrument",
      key: "instrument",
      width: "90px",
      ellipsis: true,
    },
    {
      title: <label className="table-all-title">PKRV</label>,
      dataIndex: "pkrv",
      key: "pkrv",
      width: "50px",
    },
    {
      title: <label className="table-all-title">RFQ</label>,
      dataIndex: "rfq",
      key: "rfq",
      width: "79px",
      ellipsis: true,
      render: (text) => (
        <Button
          // icon={content}
          text={text}
          onClick={openModalHandler}
          className="offer-text-button"
        />
      ),
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
    {
      title: <label className="table-all-title">DTM</label>,
      dataIndex: "dtm",
      key: "dtm",
      width: "70px",
      filters: [
        {
          text: "3m",
          value: "1",
        },
        {
          text: "6m",
          value: "2",
        },
        {
          text: "1Y",
          value: "3",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Coupon</label>,
      dataIndex: "Coupon",
      key: "Coupon",
      width: "60px",
    },
    {
      title: (
        <label className="table-all-title">
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center"
            >
              <span>Coupon</span>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <span>Frequency</span>
            </Col>
          </Row>
        </label>
      ),
      dataIndex: "couponfrequency",
      key: "couponfrequency",
      width: "85px",
    },
    {
      title: (
        <label className="table-all-title">
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center"
            >
              <span>Bid</span>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <span>Spread</span>
            </Col>
          </Row>
        </label>
      ),
      dataIndex: "bidspread",
      key: "bidspread",
      width: "55px",
    },
    {
      title: (
        <label className="table-all-title">
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center"
            >
              <span>Offer </span>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <span>Spread</span>
            </Col>
          </Row>
        </label>
      ),
      dataIndex: "offerspread",
      key: "offerspread",
      width: "80px",
    },
  ];

  // data for rows for first table
  const PkrvPaneldata = [
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: "1Y",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: "3m",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: "2m",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
  ];

  // Filter Options for left table
  const tableFilterOptions = [
    { className: "filter-color", label: "Recent Quotes", value: 1 },
    {
      className: "filter-color",
      label: "PKRV Derived bond",
      value: 2,
      // onClick: {openPkrvPanel},
      // onClick: { openPkrvPanel },
    },
    { className: "filter-color", label: "News", value: 3 },
  ];

  //filter options for right table
  const rightTableOption = [
    { className: "filter-color", label: "Recent Quotes", value: 1 },
    {
      className: "filter-color",
      label: "PKRV Derived bond",
      value: 2,
      // onClick: {openPkrvPanel},
      // onClick: { openPkrvPanel },
    },
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
      width: "100px",
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
      width: "100px",
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
      width: "100px",
      render: (text) => (
        <Button
          text={text}
          onClick={openSellModal}
          className="offer-text-button-Recent-quotes"
        />
      ),
    },
    {
      title: <label className="table-all-title">DTM</label>,
      dataIndex: "dtm",
      key: "dtm",
      width: "100px",
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

  // data for Pib table columns for first table
  const Pibcolumns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "150px",
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
      width: "150px",
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
      width: "100px",
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
      width: "80px",
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
      width: "70px",
      render: (text) => (
        <Button
          text={text}
          onClick={openSellModal}
          className="offer-text-button-Recent-quotes"
        />
      ),
    },
    {
      title: <label className="table-all-title">DTM</label>,
      dataIndex: "dtm",
      key: "dtm",
      width: "80px",
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
    {
      title: <label className="table-all-title">Coupon</label>,
      dataIndex: "Coupon",
      width: "70px",
      key: "Coupon",
    },
  ];

  // data for PibFloater table columns for first table
  const PibFloatercolumns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "150px",
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
      width: "150px",
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
      width: "100px",
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
      width: "100px",
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
      width: "100px",
      render: (text) => (
        <Button
          text={text}
          onClick={openSellModal}
          className="offer-text-button-Recent-quotes"
        />
      ),
    },
    {
      title: <label className="table-all-title">DTM</label>,
      dataIndex: "dtm",
      key: "dtm",
      width: "100px",
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
    {
      title: <label className="table-all-title">Coupon</label>,
      dataIndex: "Coupon",
      key: "Coupon",
      width: "100px",
    },
    {
      title: <label className="table-all-title">Frequency</label>,
      dataIndex: "frequency",
      key: "frequency",
      width: "100px",
    },
    {
      title: <label className="table-all-title">Bid Spread</label>,
      dataIndex: "bidspread",
      key: "bidspread",
      width: "100px",
    },
  ];

  // data for columns for second table
  const columnsTwo = [
    {
      title: (
        <label className="bottom-table-header">
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center m-2"
            >
              <span>TXN ID</span>
            </Col>
          </Row>
        </label>
      ),
      dataIndex: "txnid",
      key: "txnid",
      width: "110px",
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
      title: (
        <label className="bottom-table-header">
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center m-2"
            >
              <span>Bank</span>
            </Col>
          </Row>
        </label>
      ),
      dataIndex: "bank",
      key: "bank",
      width: "75px",
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
      width: "78px",
      ellipsis: true,
      render: (text) => <label>{text}</label>,
      filters: [
        {
          text: "BUY",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: (
        <label className="bottom-table-header">
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center"
            >
              <span>Security</span>
            </Col>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center"
            >
              <span>Type</span>
            </Col>
          </Row>
        </label>
      ),
      dataIndex: "securitytype",
      key: "securitytype",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label>{text}</label>,
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
      width: "80px",
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
      width: "60px",
      ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Tenor</label>,
      dataIndex: "tenor",
      key: "tenor",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label>{text}</label>,
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
      width: "100px",
      // ellipsis: true,
      render: (text) => <label>{text}</label>,
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
      width: "120px",
      // ellipsis: true,
      render: (text) => <label>{text}</label>,
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
      width: "100px",
      // ellipsis: true,
      render: (text) => <label>{text}</label>,
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
      width: "70px",
      // ellipsis: true,
      render: (text) => <label>{text}</label>,
      filters: [
        {
          text: "0",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: (
        <label className="bottom-table-header">
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center"
            >
              <span>Settlement</span>
            </Col>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center"
            >
              <span>Date</span>
            </Col>
          </Row>
        </label>
      ),
      dataIndex: "settlement",
      key: "settlement",
      width: "110px",
      // ellipsis: true,
      render: (text) => <label>{text}</label>,
      filters: [
        {
          text: "21-03-2023",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: (
        <label className="bottom-table-header">
          {" "}
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center m-2"
            >
              <span>Status</span>
            </Col>
          </Row>
        </label>
      ),
      dataIndex: "status",
      key: "status",
      width: "87px",
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
      title: (
        <label className="bottom-table-header">
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center m-2"
            >
              <span>Action</span>
            </Col>
          </Row>
        </label>
      ),
      dataIndex: "action",
      key: "action",
      width: "90px",
      // ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Comment</label>,
      dataIndex: "comment",
      key: "comment",
      width: "80px",
      // ellipsis: true,
    },
    {
      title: (
        <label className="bottom-table-header">
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex justify-content-center"
            >
              <span>Chat</span>
            </Col>
          </Row>
        </label>
      ),
      dataIndex: "chat",
      key: "chat",
      width: "65px",
      render: (text) => (
        <Button text={text} className="chatIcon-inBotton-table" />
      ),
      // ellipsis: true,
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
      status: <span className="rejected-status">Rejected</span>,
      chat: <i className={"icon-chat2"}></i>,
    },
  ];

  //open modal
  const openModalHandler = async () => {
    setRequestQuoteModal(true);
  };

  //open view modal
  const openViewModal = async () => {
    setViewClientModal(true);
  };

  //open buy modal
  const openBuyModal = async () => {
    setBuyClientModal(true);
  };

  //Open sell modal
  const openSellModal = async () => {
    setSellClientModal(true);
  };

  //open another Tbill table
  const openTbillTable = () => {
    setIsTbills(true);
    setIsPib(false);
    setIsPibFloater(false);
    setIsSukuk(false);
  };

  //open right tabe Tbill
  const openRightTbill = () => {
    setIsRightTbills(true);
    setIsRightPib(false);
    setIsPibRightFloater(false);
    setIsRightSukuk(false);
  };

  //open another Pib table
  const openPibTable = () => {
    setIsPib(true);
    setIsTbills(false);
    setIsPibFloater(false);
    setIsSukuk(false);
  };

  //open right pib table
  const openRightPib = () => {
    setIsRightPib(true);
    setIsRightTbills(false);
    setIsPibRightFloater(false);
    setIsRightSukuk(false);
  };

  //open another PibFoater table
  const openPibFloaterTable = () => {
    setIsPibFloater(true);
    setIsPib(false);
    setIsTbills(false);
    setIsSukuk(false);
  };

  //open right pibfloater table
  const openRightFloater = () => {
    setIsPibRightFloater(true);
    setIsRightPib(false);
    setIsRightTbills(false);
    setIsRightSukuk(false);
  };

  //open sukuk table
  const openSukukTable = () => {
    setIsSukuk(true);
    setIsPibFloater(false);
    setIsPib(false);
    setIsTbills(false);
  };

  //open right sukuk table
  const openRightSukuk = () => {
    setIsRightSukuk(true);
    setIsPibRightFloater(false);
    setIsRightPib(false);
    setIsRightTbills(false);
  };

  //for left table onchange handler
  const panelHandler = (e) => {
    console.log(e, "change Handler");
    setCurrentTable(e);
  };

  // for right table onchange handler
  const panelRightHandler = (e) => {
    setCurrentRightTable(e);
  };

  // for close modal handler
  const closeHandlerModals = () => {
    setShow(false);
  };

  // for datePicker handler
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  //on Clicking on screen making a state false
  useEffect(() => {
    console.log("click");
    window.addEventListener("click", function (e) {
      console.log("eeeeeeeee", e.target.className);
      var clsname = e.target.className;
      let arr = clsname && clsname.split("_");
      console.log("click", typeof arr);
      console.log("click", arr != "");
      console.log("click", arr.length);
      if (arr != undefined && arr.length > 0) {
        if (arr[1] === "export-bttom-btn " && arr[1] === "btn-primary") {
          console.log("click", arr);
          setIsExport(false);
        } else {
          console.log("clickclick", arr);
          setIsExport(false);
          setIsExport(true);
        }
      }
    });
  }, []);

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
                    onChange={panelHandler}
                    // onClick={openPkrvPanel}
                  />
                </Col>

                {currentTable === 1 ? (
                  <>
                    {isTbills ? (
                      <>
                        <Col lg={4} md={4} sm={4} className="upper-3m-colum">
                          <Button
                            text="3M"
                            onClick={() => handleFilter("3M")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="6M"
                            onClick={() => handleFilter("6M")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="1Y"
                            onClick={() => handleFilter("1Y")}
                            className="upper-3m-button"
                          />
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col lg={4} md={4} sm={4} className="upper-3m-colum">
                          <Button
                            text="2Y"
                            onClick={() => pibHandleFilter("2Y")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="3Y"
                            onClick={() => pibHandleFilter("3Y")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="5Y"
                            onClick={() => pibHandleFilter("5Y")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="10Y"
                            onClick={() => pibHandleFilter("10Y")}
                            className="upper-3m-button"
                          />
                        </Col>
                      </>
                    )}
                  </>
                ) : currentTable === 2 ? (
                  <>
                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        placeholder="search"
                        className="pkrv-search-textfield"
                      />
                    </Col>
                  </>
                ) : currentTable === 3 ? (
                  <>
                    <div className="second-row">
                      <div className="News-div-scroll">
                        <Row className="latest-date-row">
                          <Col lg={12} md={12} sm={12}>
                            <label className="latest-date">6-12-2022</label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img
                              src={DowJones}
                              width={40}
                              onClick={openViewModal}
                            />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={Tresmark} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="latest-date-row">
                          <Col lg={12} md={12} sm={12}>
                            <label className="latest-date">5-12-2022</label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={DowJones} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={Tresmark} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </>
                ) : null}
              </Row>

              {/* current table 1 2 3 ye sb filters ma set ki hoe hain hm yaha condition laga kr match krraha */}
              {currentTable === 1 ? (
                <>
                  <div className="upper-div-button">
                    <Button
                      text="Tbills"
                      className={
                        isTbills
                          ? "table-upper-tbill-button-active"
                          : "table-upper-tbill-button-notActive"
                      }
                      onClick={openTbillTable}
                    />
                    <Button
                      text="PIBs"
                      className="table-upper-PIB-button"
                      onClick={openPibTable}
                    />
                    <Button
                      text="PIB Floater"
                      className="table-upper-Floater-button"
                      onClick={openPibFloaterTable}
                    />
                    <Button
                      text="SUKUK"
                      className="table-upper-SUKUK-button"
                      onClick={openSukukTable}
                    />
                  </div>
                </>
              ) : null}

              {currentTable === 1 ? (
                <>
                  {isTbills ? (
                    <>
                      <Table
                        // dataSource={filteredData}
                        column={columns}
                        rows={filteredData}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isPib ? (
                    <>
                      <Table
                        column={Pibcolumns}
                        rows={pibFilter}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isPibFloater ? (
                    <>
                      <Table
                        column={PibFloatercolumns}
                        rows={pibFloaterFilter}
                        scroll={{ x: "max-content" }}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isSukuk ? (
                    <>
                      <Table
                        column={columns}
                        rows={data}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : null}
                </>
              ) : currentTable === 2 ? (
                <>
                  <Table
                    column={PkrvPanelcolumns}
                    rows={PkrvPaneldata}
                    className="inside-pkrv-table"
                    pagination={false}
                  />
                </>
              ) : null}
            </div>
          </Col>

          <Col lg={6} md={6} sm={6}>
            <div className="card-box">
              <Row className="mt-2">
                <Col lg={8} md={8} sm={8}>
                  <Select
                    options={rightTableOption}
                    defaultValue={rightTableOption[2]}
                    className="tableFilter"
                    onChange={panelRightHandler}
                    // onClick={openPkrvPanel}
                  />
                </Col>

                {currentRightTable === 1 ? (
                  <>
                    {isRightTbills ? (
                      <>
                        <Col lg={4} md={4} sm={4} className="upper-3m-colum">
                          <Button
                            text="3M"
                            onClick={() => handleRightFilter("3M")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="6M"
                            onClick={() => handleRightFilter("6M")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="1Y"
                            onClick={() => handleRightFilter("1Y")}
                            className="upper-3m-button"
                          />
                        </Col>
                      </>
                    ) : isPibRightFloater ? (
                      <>
                        <Col lg={4} md={4} sm={4} className="upper-3m-colum">
                          <Button
                            text="2Y"
                            onClick={() => pibRightFloaterHandleFilter("2Y")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="3Y"
                            onClick={() => pibRightFloaterHandleFilter("3Y")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="5Y"
                            onClick={() => pibRightFloaterHandleFilter("5Y")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="10Y"
                            onClick={() => pibRightFloaterHandleFilter("10Y")}
                            className="upper-3m-button"
                          />
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col lg={4} md={4} sm={4} className="upper-3m-colum">
                          <Button
                            text="2Y"
                            onClick={() => pibRightHandleFilter("2Y")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="3Y"
                            onClick={() => pibRightHandleFilter("3Y")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="5Y"
                            onClick={() => pibRightHandleFilter("5Y")}
                            className="upper-3m-button"
                          />
                          <Button
                            text="10Y"
                            onClick={() => pibRightHandleFilter("10Y")}
                            className="upper-3m-button"
                          />
                        </Col>
                      </>
                    )}
                  </>
                ) : currentRightTable === 2 ? (
                  <>
                    <Col lg={4} md={4} sm={4}>
                      <TextField
                        placeholder="search"
                        className="pkrv-search-textfield"
                      />
                    </Col>
                  </>
                ) : currentRightTable === 3 ? (
                  <>
                    <div className="second-row">
                      <div className="News-div-scroll">
                        <Row className="latest-date-row">
                          <Col lg={12} md={12} sm={12}>
                            <label className="latest-date">6-12-2022</label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img
                              src={DowJones}
                              width={40}
                              onClick={openViewModal}
                            />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={Tresmark} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="latest-date-row">
                          <Col lg={12} md={12} sm={12}>
                            <label className="latest-date">5-12-2022</label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={DowJones} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={Tresmark} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </>
                ) : null}
              </Row>

              {/* current table 1 2 3 ye sb filters ma set ki hoe hain hm yaha condition laga kr match krraha */}
              {currentRightTable === 1 ? (
                <>
                  <div className="upper-div-button">
                    <Button
                      text="Tbills"
                      className={
                        isRightTbills
                          ? "table-upper-tbill-button-active"
                          : "table-upper-tbill-button-notActive"
                      }
                      onClick={openRightTbill}
                    />
                    <Button
                      text="PIBs"
                      className="table-upper-PIB-button"
                      onClick={openRightPib}
                    />
                    <Button
                      text="PIB Floater"
                      className="table-upper-Floater-button"
                      onClick={openRightFloater}
                    />
                    <Button
                      text="SUKUK"
                      className="table-upper-SUKUK-button"
                      onClick={openRightSukuk}
                    />
                  </div>
                </>
              ) : null}

              {currentRightTable === 1 ? (
                <>
                  {isRightTbills ? (
                    <>
                      <Table
                        column={columns}
                        rows={rightFilter}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isRightPib ? (
                    <>
                      <Table
                        column={Pibcolumns}
                        rows={rightPibFilter}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isPibRightFloater ? (
                    <>
                      <Table
                        column={PibFloatercolumns}
                        rows={rightFloaterFilter}
                        scroll={{ x: "max-content" }}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isRightSukuk ? (
                    <>
                      <Table
                        column={columns}
                        rows={data}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : null}
                </>
              ) : currentRightTable === 2 ? (
                <>
                  <Table
                    column={PkrvPanelcolumns}
                    rows={PkrvPaneldata}
                    className="inside-pkrv-table"
                    pagination={false}
                  />
                </>
              ) : null}
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
              <Button
                text="RFQ"
                icon={<i className="icon-list bottom-rfq-list-icon"></i>}
                className="rfq-bttom-btn"
                onClick={openModalHandler}
              />

              <Button
                text="Export"
                className="export-bttom-btn"
                // onClick={() => setIsExport(true)}
              />

              {isExport ? (
                <>
                  <div className="bottom-div">
                    <img src={PDF} alt="pdf" height={25} />
                    <img src={Excel} alt="Excel" height={25} />
                    <span className="col">
                      <i className="icon-email2 fs-4 cursor-pointer"></i>
                    </span>
                    <span className="col">
                      <i className="icon-screen fs-4 cursor-pointer"></i>
                    </span>
                  </div>
                </>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} className="features-table">
              <Table
                column={columnsTwo}
                rows={dataTwo}
                // scroll={{ x: "max-content" }}
                // scroll={{ x: 400 }}
                className="bottom-inside-table"
                pagination={false}
              />
            </Col>
          </Row>
        </div>
      </Container>

      {buyClientModal ? (
        <BuyModal
          modalBuy={buyClientModal}
          setBuyModal={setBuyClientModal}
          editFlag={editFlag}
          setEditFlag={setEditFlag}
        />
      ) : null}

      {sellClientModal ? (
        <SellModal
          modalSell={sellClientModal}
          setSellModal={setSellClientModal}
          editFlag={editFlag}
          setEditFlag={setEditFlag}
        />
      ) : null}

      {viewClientModal ? (
        <ViewModal
          viewModal={viewClientModal}
          setViewModal={setViewClientModal}
        />
      ) : null}

      {requestQuoteModal ? (
        <RequestModal
          modalRequest={requestQuoteModal}
          setModalRequest={setRequestQuoteModal}
        />
      ) : null}

      {/* <Modal
        show={show}
        setShow={() => {
          setShow();
        }}
        // backdrop={true}
        modalHeaderClassName={"header-Video-Modal-close-btn"}
        modalFooterClassName={"showFooter"}
        className={"modaldialog modal-styles"}
        size={show === true ? "lg" : "lg"}
        onHide={closeHandlerModals}
        ModalBody={
          <>
            {show ? (
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
            ) : null}
          </>
        }
      /> */}
    </>
  );
};

export default Client;
