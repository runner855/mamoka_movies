import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import LoginCall from "../../Api/LoginCall";
import "../Login/Login.css";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const user = {
  username: "dariomilani855@gmail.com",
  password: "manchestercity",
  grant_type: "password",
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  LoginCall.post(``, user).then((response) => console.log(response));
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("wrong credentials!!:", errorInfo);
};

export const Login = () => (
  <div className="form_container">
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);
