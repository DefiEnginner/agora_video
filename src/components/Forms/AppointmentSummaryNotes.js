import React from "react";
import { Form, Input, Button } from "antd";
import "./styles.css";

const AppointmentSummaryNotes = () => {
  return (
    <Form>
      <div>
        <div className="form-title">Appointment Summary Notes</div>
      </div>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        Please write your notes, diagnosis etc here. The patient will be able to
        see it later.
      </div>
      <Form.Item
        name="notes"
        rules={[{ required: true, message: "Please enter the notes" }]}
      >
        <Input.TextArea style={{ height: 200 }} />
      </Form.Item>
      <Button style={{ float: "right" }} type="primary">
        Save
      </Button>
    </Form>
  );
};

export default AppointmentSummaryNotes;
