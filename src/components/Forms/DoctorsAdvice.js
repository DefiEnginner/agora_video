import React from "react";
import { Form, Input, Button } from "antd";
import "./styles.css";

const DoctorsAdvice = () => {
  return (
    <Form>
      <div>
        <div className="form-title">Doctor's advice</div>
      </div>
      <div style={{ marginTop: 5, marginBottom: 5 }}>Type</div>
      <Form.Item
        name="type"
        rules={[{ required: true, message: "Please enter the type" }]}
      >
        <Input />
      </Form.Item>

      <div style={{ marginTop: 5, marginBottom: 5 }}>
        Advice/Notes/Instructions
      </div>
      <Form.Item
        name="advice-notes-instructions"
        rules={[
          {
            required: true,
            message: "Please enter the advice/notes/instructions",
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

export default DoctorsAdvice;
