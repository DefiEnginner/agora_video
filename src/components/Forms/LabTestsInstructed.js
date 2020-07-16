import React from "react";
import { Form, Input, Button } from "antd";
import "./styles.css";

const LabTestsInstructed = () => {
  return (
    <Form>
      <div>
        <div className="form-title">Lab tests instructed</div>
      </div>
      <div style={{ marginTop: 5, marginBottom: 5 }}>Test to get</div>
      <Form.Item
        name="test-to-get"
        rules={[{ required: true, message: "Please enter the test to get" }]}
      >
        <Input />
      </Form.Item>

      <div style={{ marginTop: 5, marginBottom: 5 }}>
        Tests instructions/notes
      </div>
      <Form.Item
        name="tests-instructions"
        rules={[
          {
            required: true,
            message: "Please enter the tests instructions/notes",
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

export default LabTestsInstructed;
