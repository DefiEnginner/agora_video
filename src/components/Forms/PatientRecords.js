import React from "react";
import { Form, Col, Row } from "antd";
import "./styles.css";

const PatientRecords = (props) => {
  const fields = [
    {
      key: "firstName",
      fieldName: "first name",
    },
    {
      key: "lastName",
      fieldName: "surname",
    },
    {
      key: "age",
      fieldName: "age",
    },
    {
      key: "gender",
      fieldName: "gender",
    },
    {
      key: "height",
      fieldName: "height",
    },
    {
      key: "weight",
      fieldName: "weight",
    },
    {
      key: "allgeries",
      fieldName: "allgeries",
    },
    {
      key: "currentConditions",
      fieldName: "Current Conditions",
    },
    {
      key: "personalHabits",
      fieldName: "Personal Habits",
    },
    {
      key: "pastSurgeries",
      fieldName: "Past Surgeries",
    },
    {
      key: "familyIllnessHistory",
      fieldName: "Family Illness History",
    },
  ];
  return (
    <Form>
      <Row>
        <div className="form-title">Patient Records</div>
      </Row>
      {[0, 1, 2].map((i) => (
        <Row className="form-line" key={i}>
          <Col span={12}>
            <div className="form-field">{fields[i * 2].fieldName}</div>
            <div className="form-field-value">{props[fields[i * 2].key]}</div>
          </Col>
          <Col span={12}>
            <div className="form-field">{fields[i * 2 + 1].fieldName}</div>
            <div className="form-field-value">
              {props[fields[i * 2 + 1].key]}
            </div>
          </Col>
        </Row>
      ))}
      {[6, 7, 8, 9, 10].map((i) => (
        <div className="form-line" key={i}>
          <div className="form-field">{fields[i].fieldName}</div>
          <div className="form-field-value">{props[fields[i].key]}</div>
        </div>
      ))}
    </Form>
  );
};

PatientRecords.defaultProps = {
  firstName: "John",
  lastName: "Smith",
  age: 36,
  gender: "Male",
  height: 174,
  weight: 76,
  allgeries: "Peanuts, Hayfever",
  currentConditions: "Type 1 Diabetes",
  personalHabits: "Smoking",
  previousConditions:
    "Kidney Stones (2014), Broken Arm (2009), Strep Throat (2002)",
  pastSurgeries: "Appendix removed (2012)",
  familyIllnessHistory:
    "Cancer (Maternal Grandmother), Heart Attack (Paternal Grandfather), Diabetes (Mother and Sister)",
};

export default PatientRecords;
