import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd'

const { Option } = Select

interface DataNodeType {
    value: string
    label: string
    children?: DataNodeType[]
}

export const RegisterForm = () => {
    const [form] = Form.useForm()

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }

    const prefixSelector = (
        <Form.Item
            name='prefix'
            noStyle
        >
            <Select style={{ width: 70 }}>
                <Option value='86'>+86</Option>
                <Option value='87'>+87</Option>
            </Select>
        </Form.Item>
    )

    return (
        <Form
            form={form}
            name='register'
            onFinish={onFinish}
            initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
            style={{ maxWidth: 600 }}
            scrollToFirstError
        >
            <Form.Item
                name='email'
                label='E-mail'
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!'
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!'
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name='password'
                label='Password'
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    }
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name='confirm'
                label='Confirm Password'
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!'
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'))
                        }
                    })
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name='nickname'
                label='Nickname'
                tooltip='What do you want others to call you?'
                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name='phone'
                label='Phone Number'
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{ width: '100%' }}
                />
            </Form.Item>

            <Form.Item
                name='gender'
                label='Gender'
                rules={[{ required: true, message: 'Please select gender!' }]}
            >
                <Select placeholder='select your gender'>
                    <Option value='male'>Male</Option>
                    <Option value='female'>Female</Option>
                    <Option value='other'>Other</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label='Captcha'
                extra='We must make sure that your are a human.'
            >
                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item
                            name='captcha'
                            noStyle
                            rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Button>Get captcha</Button>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item
                name='agreement'
                valuePropName='checked'
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement'))
                    }
                ]}
            >
                <Checkbox>
                    I have read the <a href=''>agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button
                    type='primary'
                    htmlType='submit'
                >
                    Register
                </Button>
            </Form.Item>
        </Form>
    )
}
