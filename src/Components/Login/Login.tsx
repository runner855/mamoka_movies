import React, { useEffect } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import "../Login/Login.css";
import LoginCall from "../../Api/LoginCall";
import { LoginProps, UserData } from "../../Types/AppTypes";

type FieldType = {
  username?: string;
  password?: string;
  grant_type?: string;
};

const user: any = {
  username: "dariomilani855@gmail.com",
  password: "manchestercity",
  grant_type: "password",
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  LoginCall.get(``, user).then((res) => console.log(res));

  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const Login = ({ username, password, grant_type }: FieldType) => (
  <div>
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
