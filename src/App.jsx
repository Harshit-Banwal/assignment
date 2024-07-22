import React from 'react';
import { Col, Row } from 'antd';
import { Button, Select, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12 text-center">
            <h5 className=" pt-5">Contact Us</h5>
            <h1 className="pb-2">Make an Appointment</h1>
            <Form
              className="form"
              name="basic"
              wrapperCol={{
                // offset: 4,
                span: 24,
              }}
              style={{
                maxWidth: 1000,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="text-center w-auto">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Full name!',
                        },
                      ]}
                    >
                      <Input placeholder="Full Name *" />
                    </Form.Item>
                  </div>

                  <div className="col-md-6 col-12">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your email!',
                        },
                      ]}
                    >
                      <Input placeholder="Email *" />
                    </Form.Item>
                  </div>

                  <div className="col-md-6 col-12">
                    <Form.Item>
                      <Select placeholder="Please Select">
                        <Select.Option value="demo">Demo</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-6 col-12">
                    <Form.Item>
                      <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </div>

                <Form.Item
                  wrapperCol={{
                    // offset: 2,
                    span: 24,
                  }}
                  name="TextArea"
                  rules={[
                    {
                      required: true,
                      message: 'Please input!',
                    },
                  ]}
                >
                  <Input.TextArea placeholder="Message" />
                </Form.Item>
              </div>

              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 24,
                }}
              >
                <Button type="primary button w-65 py-4" htmlType="submit">
                  Book Appointment
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="col-md-4 col-12">col-4</div>
        </div>
      </div>
    </>
  );
}

export default App;
