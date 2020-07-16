import React from "react";
import { Form, Input, Button } from "antd";
import "./styles.css";

const PrescriptionItems = () => {
  return (
    <Form>
      <div>
        <div className="form-title">Prescription Items</div>
      </div>
      <div style={{ marginTop: 5, marginBottom: 5 }}>
        Medication & Brand name
      </div>
      <Form.Item
        name="medication-brand-name"
        rules={[{ required: true, message: "Please enter the brand name" }]}
      >
        <Input />
      </Form.Item>

      <div style={{ marginTop: 5, marginBottom: 5 }}>
        Instructions/Dosage/Notes
      </div>
      <Form.Item
        name="instructions"
        rules={[
          {
            required: true,
            message: "Please enter the instructions/dosage/notes",
          },
        ]}
      >
        <Input.TextArea style={{ height: 200 }} />
      </Form.Item>

      <Button
        style={{
          width: 150,
          display: "block",
          float: "right",
        }}
        type="primary"
      >
        Add Another
      </Button>
      <br />
      <br />
      <Button style={{ display: "block", float: "right" }} type="primary">
        Save
      </Button>
    </Form>
  );
};

export default PrescriptionItems;
