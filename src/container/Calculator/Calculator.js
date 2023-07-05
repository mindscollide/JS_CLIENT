import React, { useState } from "react";
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import { Collapse, Divider, Select } from "antd";
import DatePicker from "react-datepicker";
import { Table, Button, Accordian, TextField } from "../../components/elements";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const { Panel } = Collapse;
  const [startDate, setStartDate] = useState(new Date());

  //for yield to price state FOR TBILL
  const [yieldPriceState, setYieldPriceState] = useState({
    SelectBond: "",
    Price: "",
    LifeRemaning: "",
    Pvbp: "",
    PurchasedYield: "",
    Approximate: "",
    Tenor: "",
    YieldToMaturity: "",
  });

  //for price to yield state FOR TBILL
  const [priceYieldState, setPriceYieldState] = useState({
    SelectBond: "",
    YieldMaturity: "",
    Settlement: "",
    Price: "",
    LifeRemaning: "",
    MaturityDate: "",
    Pvbp: "",
    PurchasedYield: "",
    ApproximatePrice: "",
    Tenor: "",
  });

  // for yield to price state FOR PIB
  const [pibPriceState, setPibPriceState] = useState({
    ApproximatePriceChange: "",
    Frequency: "",
    PricePIB: "",
    LifeRemaningPIB: "",
    CouponRatePIB: "",
    PvbpPIB: "",
    TenorPIB: "",
    DurationPIB: "",
    DayCountPIB: "",
    MDurationPIB: "",
    YieldMaturityPIB: "",
    EffectiveDuration: "",
    ApproximatePricePIB: "",
  });

  //FOR price to yield state FOR PIB
  const [pibYieldState, setPibYieldState] = useState({
    FrequencyYield: "",
    YieldMaturityYield: "",
    LifeRemaningYield: "",
    CouponRateYield: "",
    PvbpYield: "",
    TenorYield: "",
    DurationYield: "",
    DayCountYield: "",
    MDurationYield: "",
    PriceYield: "",
    EffectiveDurationYield: "",
    ApproximateYield: "",
  });

  //for client state yield to price TBILL handler
  const clientCalculatorHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "Price" && value !== "") {
      let valueCheck = value.replace(/[^\d.]/g, "");
      if (valueCheck !== "") {
        setYieldPriceState({
          ...yieldPriceState,
          Price: valueCheck.trimStart(),
        });
      }
    } else if (name === "Price" && value === "") {
      setYieldPriceState({
        ...yieldPriceState,
        Price: "",
      });
    }

    if (name === "LifeRemaning" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setYieldPriceState({
          ...yieldPriceState,
          LifeRemaning: valueCheck.trimStart(),
        });
      }
    } else if (name === "LifeRemaning" && value === "") {
      setYieldPriceState({
        ...yieldPriceState,
        LifeRemaning: "",
      });
    }

    if (name === "Pvbp" && value !== "") {
      let valueCheck = value.replace(/[^\d.]/g, "");
      if (valueCheck !== "") {
        setYieldPriceState({
          ...yieldPriceState,
          Pvbp: valueCheck.trimStart(),
        });
      }
    } else if (name === "Pvbp" && value === "") {
      setYieldPriceState({
        ...yieldPriceState,
        Pvbp: "",
      });
    }

    if (name === "PurchasedYield" && value !== "") {
      let valueCheck = value.replace(/[^\d.]/g, "");
      if (valueCheck !== "") {
        setYieldPriceState({
          ...yieldPriceState,
          PurchasedYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "PurchasedYield" && value === "") {
      setYieldPriceState({
        ...yieldPriceState,
        PurchasedYield: "",
      });
    }

    if (name === "Approximate" && value !== "") {
      let valueCheck = value.replace(/[^\d.-]/g, "");
      if (valueCheck !== "") {
        setYieldPriceState({
          ...yieldPriceState,
          Approximate: valueCheck.trimStart(),
        });
      }
    } else if (name === "Approximate" && value === "") {
      setYieldPriceState({
        ...yieldPriceState,
        Approximate: "",
      });
    }

    if (name === "Tenor" && value !== "") {
      let valueCheck = value.replace(/[^a-z0-9]/gi, "");
      if (valueCheck !== "") {
        setYieldPriceState({
          ...yieldPriceState,
          Tenor: valueCheck.trimStart(),
        });
      }
    } else if (name === "Tenor" && value === "") {
      setYieldPriceState({
        ...yieldPriceState,
        Tenor: "",
      });
    }

    if (name === "YieldToMaturity" && value !== "") {
      let valueCheck = value.replace(/[^\d.]/g, "");
      if (valueCheck !== "") {
        setYieldPriceState({
          ...yieldPriceState,
          YieldToMaturity: valueCheck.trimStart(),
        });
      }
    } else if (name === "YieldToMaturity" && value === "") {
      setYieldPriceState({
        ...yieldPriceState,
        YieldToMaturity: "",
      });
    }
  };

  //for client state price to yield TBILL handler
  const clientPriceToYieldHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "YieldMaturity" && value !== "") {
      let valueCheck = value.replace(/[^\d.]/g, "");
      if (valueCheck !== "") {
        setPriceYieldState({
          ...priceYieldState,
          YieldMaturity: valueCheck.trimStart(),
        });
      }
    } else if (name === "YieldMaturity" && value === "") {
      setPriceYieldState({
        ...priceYieldState,
        YieldMaturity: "",
      });
    }

    if (name === "Price" && value !== "") {
      let valueCheck = value.replace(/[^\d.]/g, "");
      if (valueCheck !== "") {
        setPriceYieldState({
          ...priceYieldState,
          Price: valueCheck.trimStart(),
        });
      }
    } else if (name === "Price" && value === "") {
      setPriceYieldState({
        ...priceYieldState,
        Price: "",
      });
    }

    if (name === "LifeRemaning" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPriceYieldState({
          ...priceYieldState,
          LifeRemaning: valueCheck.trimStart(),
        });
      }
    } else if (name === "LifeRemaning" && value === "") {
      setPriceYieldState({
        ...priceYieldState,
        LifeRemaning: "",
      });
    }

    if (name === "Pvbp" && value !== "") {
      let valueCheck = value.replace(/[^\d.]/g, "");
      if (valueCheck !== "") {
        setPriceYieldState({
          ...priceYieldState,
          Pvbp: valueCheck.trimStart(),
        });
      }
    } else if (name === "Pvbp" && value === "") {
      setPriceYieldState({
        ...priceYieldState,
        Pvbp: "",
      });
    }

    if (name === "PurchasedYield" && value !== "") {
      let valueCheck = value.replace(/[^\d.]/g, "");
      if (valueCheck !== "") {
        setPriceYieldState({
          ...priceYieldState,
          PurchasedYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "PurchasedYield" && value === "") {
      setPriceYieldState({
        ...priceYieldState,
        PurchasedYield: "",
      });
    }

    if (name === "ApproximatePrice" && value !== "") {
      let valueCheck = value.replace(/[^\d.-]/g, "");
      if (valueCheck !== "") {
        setPriceYieldState({
          ...priceYieldState,
          ApproximatePrice: valueCheck.trimStart(),
        });
      }
    } else if (name === "ApproximatePrice" && value === "") {
      setPriceYieldState({
        ...priceYieldState,
        ApproximatePrice: "",
      });
    }

    if (name === "Tenor" && value !== "") {
      let valueCheck = value.replace(/[^a-z0-9]/gi, "");
      if (valueCheck !== "") {
        setPriceYieldState({
          ...priceYieldState,
          Tenor: valueCheck.trimStart(),
        });
      }
    } else if (name === "Tenor" && value === "") {
      setPriceYieldState({
        ...priceYieldState,
        Tenor: "",
      });
    }
  };

  //for client state yield to price PIB handler
  const clientPibYieldHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "PricePIB" && value !== "") {
      let valueCheck = value.replace(/[^\d.]/g, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          PricePIB: valueCheck.trimStart(),
        });
      }
    } else if (name === "PricePIB" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        PricePIB: "",
      });
    }

    if (name === "LifeRemaningPIB" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          LifeRemaningPIB: valueCheck.trimStart(),
        });
      }
    } else if (name === "LifeRemaningPIB" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        LifeRemaningPIB: "",
      });
    }

    if (name === "CouponRatePIB" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          CouponRatePIB: valueCheck.trimStart(),
        });
      }
    } else if (name === "CouponRatePIB" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        CouponRatePIB: "",
      });
    }

    if (name === "PvbpPIB" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          PvbpPIB: valueCheck.trimStart(),
        });
      }
    } else if (name === "PvbpPIB" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        PvbpPIB: "",
      });
    }

    if (name === "TenorPIB" && value !== "") {
      let valueCheck = value.replace(/[^a-z0-9]/gi, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          TenorPIB: valueCheck.trimStart(),
        });
      }
    } else if (name === "TenorPIB" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        TenorPIB: "",
      });
    }

    if (name === "DurationPIB" && value !== "") {
      let valueCheck = value.replace(/[^\d.]/g, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          DurationPIB: valueCheck.trimStart(),
        });
      }
    } else if (name === "DurationPIB" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        DurationPIB: "",
      });
    }

    if (name === "MDurationPIB" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          MDurationPIB: valueCheck.trimStart(),
        });
      }
    } else if (name === "MDurationPIB" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        MDurationPIB: "",
      });
    }

    if (name === "PricePIB" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          PricePIB: valueCheck.trimStart(),
        });
      }
    } else if (name === "PricePIB" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        PricePIB: "",
      });
    }

    if (name === "YieldMaturityPIB" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          YieldMaturityPIB: valueCheck.trimStart(),
        });
      }
    } else if (name === "YieldMaturityPIB" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        YieldMaturityPIB: "",
      });
    }

    if (name === "EffectiveDuration" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          EffectiveDuration: valueCheck.trimStart(),
        });
      }
    } else if (name === "EffectiveDuration" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        EffectiveDuration: "",
      });
    }

    if (name === "ApproximatePricePIB" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibPriceState({
          ...pibPriceState,
          ApproximatePricePIB: valueCheck.trimStart(),
        });
      }
    } else if (name === "ApproximatePricePIB" && value === "") {
      setPibPriceState({
        ...pibPriceState,
        ApproximatePricePIB: "",
      });
    }
  };

  // for client state price to yield PIB handler
  const clientPibPriceHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "YieldMaturityYield" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldState({
          ...pibYieldState,
          YieldMaturityYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "YieldMaturityYield" && value === "") {
      setPibYieldState({
        ...pibYieldState,
        YieldMaturityYield: "",
      });
    }

    if (name === "LifeRemaningYield" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldState({
          ...pibYieldState,
          LifeRemaningYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "LifeRemaningYield" && value === "") {
      setPibYieldState({
        ...pibYieldState,
        LifeRemaningYield: "",
      });
    }

    if (name === "CouponRateYield" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldState({
          ...pibYieldState,
          CouponRateYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "CouponRateYield" && value === "") {
      setPibYieldState({
        ...pibYieldState,
        CouponRateYield: "",
      });
    }

    if (name === "PvbpYield" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldState({
          ...pibYieldState,
          PvbpYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "PvbpYield" && value === "") {
      setPibYieldState({
        ...pibYieldState,
        PvbpYield: "",
      });
    }

    if (name === "TenorYield" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldState({
          ...pibYieldState,
          TenorYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "TenorYield" && value === "") {
      setPibYieldState({
        ...pibYieldState,
        TenorYield: "",
      });
    }

    if (name === "DurationYield" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldState({
          ...pibYieldState,
          DurationYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "DurationYield" && value === "") {
      setPibYieldState({
        ...pibYieldState,
        DurationYield: "",
      });
    }

    if (name === "MDurationYield" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldState({
          ...pibYieldState,
          MDurationYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "MDurationYield" && value === "") {
      setPibYieldState({
        ...pibYieldState,
        MDurationYield: "",
      });
    }

    if (name === "PriceYield" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldState({
          ...pibYieldState,
          PriceYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "PriceYield" && value === "") {
      setPibYieldState({
        ...pibYieldState,
        PriceYield: "",
      });
    }

    if (name === "EffectiveDurationYield" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldState({
          ...pibYieldState,
          EffectiveDurationYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "EffectiveDurationYield" && value === "") {
      setPibYieldState({
        ...pibYieldState,
        EffectiveDurationYield: "",
      });
    }

    if (name === "ApproximateYield" && value !== "") {
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldState({
          ...pibYieldState,
          ApproximateYield: valueCheck.trimStart(),
        });
      }
    } else if (name === "ApproximateYield" && value === "") {
      setPibYieldState({
        ...pibYieldState,
        ApproximateYield: "",
      });
    }
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <section className={styles["ContainerSection"]}>
        <Row>
          <Col lg={12} md={12} sm={12}>
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
                  <Row>
                    <Col lg={12} md={12} sm={12}>
                      <h1 className={styles["heading-price"]}>
                        Yield To Price
                      </h1>
                    </Col>
                  </Row>

                  <span className={styles["heading-paper"]}>
                    <Row>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Select Bond
                            </label>
                          </Col>

                          <Col
                            lg={9}
                            md={9}
                            sm={12}
                            className="d-flex justify-content-start"
                          >
                            <Select
                              className={styles["select-field-calculator"]}
                              value="TBill3M15122022"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} sm={6} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Price
                            </label>
                          </Col>
                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="99.7805"
                              name="Price"
                              onChange={clientCalculatorHandler}
                              value={yieldPriceState.Price}
                              labelClass="d-none"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Settlement Date
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              className={styles["alltextfields-calculator"]}
                              placeholder={"Select Date"}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} sm={6} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Life Remaning
                            </label>
                          </Col>
                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="5"
                              name="LifeRemaning"
                              onChange={clientCalculatorHandler}
                              value={yieldPriceState.LifeRemaning}
                              labelClass="d-none"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Maturity Date
                            </label>
                          </Col>

                          <Col xs={12} sm={9} md={9} lg={9}>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              className={styles["alltextfields-calculator"]}
                              placeholder={"Select Date"}
                            />
                          </Col>
                        </Row>
                      </Col>

                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              PVBP
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="0.00014"
                              labelClass="d-none"
                              name="Pvbp"
                              onChange={clientCalculatorHandler}
                              value={yieldPriceState.Pvbp}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-4">
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Purchased Yield %
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="0.00014"
                              name="PurchasedYield"
                              labelClass="d-none"
                              onChange={clientCalculatorHandler}
                              value={yieldPriceState.PurchasedYield}
                            />
                          </Col>
                        </Row>
                      </Col>

                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Approximate Price Change
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="-0.02011"
                              name="Approximate"
                              labelClass="d-none"
                              onChange={clientCalculatorHandler}
                              value={yieldPriceState.Approximate}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12} className="mt-3">
                            <label className={styles["yield-to-price-labels"]}>
                              Tenor
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12} className="mt-3">
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="3 Months"
                              name="Tenor"
                              labelClass="d-none"
                              onChange={clientCalculatorHandler}
                              value={yieldPriceState.Tenor}
                            />
                          </Col>
                        </Row>
                      </Col>

                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12} className="mt-3">
                            <label className={styles["yield-to-price-labels"]}>
                              Yield To Maturity %
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12} className="mt-3">
                            <TextField
                              placeholder="6.06"
                              className={styles["alltextfields-calculator"]}
                              name="YieldToMaturity"
                              labelClass="d-none"
                              onChange={clientCalculatorHandler}
                              value={yieldPriceState.YieldToMaturity}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <Col
                        lg={5}
                        md={5}
                        sm={5}
                        className="d-flex justify-content-center m-0 p-0"
                      >
                        <p className={styles["interpolated-text"]}>
                          Interpolated PKRV Rates = 16.06
                        </p>
                      </Col>
                    </Row>
                  </span>

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
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Select Bond
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <Select
                              className={styles["select-field-calculator"]}
                              value="TBill3M15122022"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} sm={6} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Yield To Maturity %
                            </label>
                          </Col>
                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="6.06"
                              labelClass="d-none"
                              name="YieldMaturity"
                              onChange={clientPriceToYieldHandler}
                              value={priceYieldState.YieldMaturity}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12} className="">
                            <label className={styles["yield-to-price-labels"]}>
                              Settlement Date
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              className={styles["alltextfields-calculator"]}
                              placeholder={"Select Date"}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} sm={6} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Price
                            </label>
                          </Col>
                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="99.7805"
                              labelClass="d-none"
                              name="Price"
                              onChange={clientPriceToYieldHandler}
                              value={priceYieldState.Price}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Life Remaning
                            </label>
                          </Col>

                          <Col xs={12} sm={9} md={9} lg={9}>
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="5"
                              labelClass="d-none"
                              name="LifeRemaning"
                              onChange={clientPriceToYieldHandler}
                              value={priceYieldState.LifeRemaning}
                            />
                          </Col>
                        </Row>
                      </Col>

                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12} className="text-end">
                            <label className={styles["yield-to-price-labels"]}>
                              Maturity Date
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              labelClass="d-none"
                              className={styles["alltextfields-calculator"]}
                              placeholder={"Select Date"}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              PVBP
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="15.9999"
                              name="Pvbp"
                              labelClass="d-none"
                              onChange={clientPriceToYieldHandler}
                              value={priceYieldState.Pvbp}
                            />
                          </Col>
                        </Row>
                      </Col>

                      <Col xs={12} sm={12} md={6} lg={6} className="text-end">
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Purchased Yield %
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              className={styles["alltextfields-calculator"]}
                              placeholder="15.9999"
                              name="PurchasedYield"
                              labelClass="d-none"
                              onChange={clientPriceToYieldHandler}
                              value={priceYieldState.PurchasedYield}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col xs={12} sm={12} md={6} lg={6} className="text-end">
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Approximate Price Change
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              placeholder="-0.20303"
                              className={styles["alltextfields-calculator"]}
                              name="ApproximatePrice"
                              labelClass="d-none"
                              onChange={clientPriceToYieldHandler}
                              value={priceYieldState.ApproximatePrice}
                            />
                          </Col>
                        </Row>
                      </Col>

                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col xs={12} sm={12} md={6} lg={6} className="text-end">
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Tenor
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              placeholder="3 month"
                              className={styles["alltextfields-calculator"]}
                              name="Tenor"
                              labelClass="d-none"
                              onChange={clientPriceToYieldHandler}
                              value={priceYieldState.Tenor}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className="mt-3 mb-4">
                      <Col xs={12} sm={12} md={6} lg={6} className="text-end">
                        <Row>
                          <Col lg={3} md={3} sm={12}>
                            <label className={styles["yield-to-price-labels"]}>
                              Price
                            </label>
                          </Col>

                          <Col lg={9} md={9} sm={12}>
                            <TextField
                              value="6.06"
                              className={styles["alltextfields-calculator"]}
                              labelClass="d-none"
                            />
                          </Col>
                        </Row>
                      </Col>

                      <Col xs={12} sm={12} md={6} lg={6} className="text-end" />
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
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col lg={3} md={3} sm={12} className="mt-3">
                          <label className={styles["yield-to-price-labels"]}>
                            Approximate Price Change
                          </label>
                        </Col>

                        <Col lg={9} md={9} sm={12} className="mt-3">
                          <Select
                            className={styles["select-field-calculator"]}
                            value="PIB3M15122022"
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col lg={3} md={3} sm={12} className="mt-3">
                          <label className={styles["yield-to-price-labels"]}>
                            Frequency
                          </label>
                        </Col>

                        <Col
                          lg={9}
                          md={9}
                          sm={12}
                          className="d-flex justify-content-start mt-3"
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
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Settlement Date
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            labelClass="d-none"
                            className={styles["alltextfields-calculator"]}
                            placeholder={"Select Date"}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>Price</label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            className={styles["alltextfields-calculator"]}
                            placeholder="93.7443"
                            labelClass="d-none"
                            name="PricePIB"
                            onChange={clientPibYieldHandler}
                            value={pibPriceState.PricePIB}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Maturity Date
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className={styles["alltextfields-calculator"]}
                            placeholder={"Select Date"}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Life Remaning
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            className={styles["alltextfields-calculator"]}
                            placeholder="253"
                            labelClass="d-none"
                            name="LifeRemaningPIB"
                            onChange={clientPibYieldHandler}
                            value={pibPriceState.LifeRemaningPIB}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Coupon Rate %
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="7"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="CouponRatePIB"
                            onChange={clientPibYieldHandler}
                            value={pibPriceState.CouponRatePIB}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>PVBP</label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="0.06"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="PvbpPIB"
                            onChange={clientPibYieldHandler}
                            value={pibPriceState.PvbpPIB}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>Tenor</label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="3 Years"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="TenorPIB"
                            onChange={clientPibYieldHandler}
                            value={pibPriceState.TenorPIB}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Duration
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="0.67821"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="DurationPIB"
                            onChange={clientPibYieldHandler}
                            value={pibPriceState.DurationPIB}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Day Count
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <Select
                            className={styles["select-field-calculator"]}
                            value="Actual/365"
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            M Duration
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="0.67821"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="MDurationPIB"
                            onChange={clientPibYieldHandler}
                            value={pibPriceState.MDurationPIB}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Yield To Maturity %
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="16.8462"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="YieldMaturityPIB"
                            onChange={clientPibYieldHandler}
                            value={pibPriceState.YieldMaturityPIB}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Effective Duration
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="44.66548"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="EffectiveDuration"
                            onChange={clientPibYieldHandler}
                            value={pibPriceState.EffectiveDuration}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-4 mb-4">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col
                          xs={12}
                          sm={10}
                          md={10}
                          lg={10}
                          className="m-0 p-0"
                        >
                          <p className={styles["interpolated-text-bottom"]}>
                            Interpolated PKRV Rates = 16.06
                          </p>
                        </Col>
                        <Col xs={12} sm={2} md={2} lg={2} />
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6} className="text-end">
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Approximate Price Change
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="44.66548"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="ApproximatePricePIB"
                            onChange={clientPibYieldHandler}
                            value={pibPriceState.ApproximatePricePIB}
                          />
                        </Col>
                      </Row>
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
                  <Row className="mt-3">
                    <Col xs={12} sm={12} md={6} lg={6} className="text-end">
                      <Row>
                        <Col lg={3} md={3} sm={12}>
                          <label className={styles["yield-to-price-labels"]}>
                            Select Bond
                          </label>
                        </Col>

                        <Col lg={9} md={9} sm={12}>
                          <Select
                            className={styles["select-field-calculator"]}
                            value="PIB3M15122022"
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6} className="text-end">
                      <Row>
                        <Col lg={3} md={3} sm={12}>
                          <label className={styles["yield-to-price-labels"]}>
                            Frequency
                          </label>
                        </Col>

                        <Col
                          lg={9}
                          md={9}
                          sm={12}
                          className="d-flex justify-content-start"
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
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Settlement Date
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className={styles["alltextfields-calculator"]}
                            placeholder={"Select Date"}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Yield To Maturity %
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            className={styles["alltextfields-calculator"]}
                            placeholder="93.7443"
                            labelClass="d-none"
                            name="YieldMaturityYield"
                            value={pibYieldState.YieldMaturityYield}
                            onChange={clientPibPriceHandler}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Maturity Date
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className={styles["alltextfields-calculator"]}
                            placeholder={"Select Date"}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Life Remaning
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            className={styles["alltextfields-calculator"]}
                            placeholder="253"
                            labelClass="d-none"
                            name="LifeRemaningYield"
                            value={pibYieldState.LifeRemaningYield}
                            onChange={clientPibPriceHandler}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Coupon Rate %
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="7"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="CouponRateYield"
                            value={pibYieldState.CouponRateYield}
                            onChange={clientPibPriceHandler}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>PVBP</label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="0.06"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="PvbpYield"
                            value={pibYieldState.PvbpYield}
                            onChange={clientPibPriceHandler}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>Tenor</label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="3 Years"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="TenorYield"
                            value={pibYieldState.TenorYield}
                            onChange={clientPibPriceHandler}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Duration
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="0.67821"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="DurationYield"
                            value={pibYieldState.DurationYield}
                            onChange={clientPibPriceHandler}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Day Count
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <Select
                            className={styles["select-field-calculator"]}
                            value="Actual/365"
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            M Duration
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="0.67821"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="MDurationYield"
                            value={pibYieldState.MDurationYield}
                            onChange={clientPibPriceHandler}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>Price</label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="16.8462"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="PriceYield"
                            value={pibYieldState.PriceYield}
                            onChange={clientPibPriceHandler}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Effective Duration
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="44.66548"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="EffectiveDurationYield"
                            value={pibYieldState.EffectiveDurationYield}
                            onChange={clientPibPriceHandler}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="mt-3 mb-4">
                    <Col xs={12} sm={12} md={6} lg={6} className="text-center">
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={12}></Col>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>
                      <Row>
                        <Col xs={12} sm={3} md={3} lg={3}>
                          <label className={styles["PIB-labels"]}>
                            Approximate Price Change
                          </label>
                        </Col>

                        <Col xs={12} sm={9} md={9} lg={9}>
                          <TextField
                            placeholder="44.66548"
                            className={styles["alltextfields-calculator"]}
                            labelClass="d-none"
                            name="ApproximateYield"
                            value={pibYieldState.ApproximateYield}
                            onChange={clientPibPriceHandler}
                          />
                        </Col>
                      </Row>
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
      </section>
    </>
  );
};

export default Calculator;
