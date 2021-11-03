import styles from './index.less';
import SubBanner from '@/components/subBanner';
import { Form, Row, Input, Col, Button } from 'antd';
import { useIntl } from 'umi';

const { TextArea } = Input;

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const intl = useIntl();

  return (
    <div className={styles.blockBg}>
      <SubBanner title={intl.formatMessage({ id: 'CONTACT' })} />

      <div className={styles.block}>
        <div className={styles.blockContent}>
          <a
            target="_blank"
            href="https://map.baidu.com/poi/%E5%8C%96%E5%B7%A5%E8%B4%B8%E6%98%93%E7%BB%93%E7%AE%97%E4%B8%AD%E5%BF%83%E5%A4%A7%E6%A5%BC/@11587135.725,3567967.62,19z?uid=6956512728d91087bfa82233&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&seckey=e7ccd76a71cca7384bc9d56993ddbed2e19bbff4744b85e39bb3d65be30e7613e76ae0b8689ae7f5bb14207898aef6950e69432a9314fa542a239fa64bfb5b4524ab8085dc1de827b038f5cc4bd6a7a0515a08965dbd447f7a951e63b6b662e48e51e00ed81ec3c11ab910556f494388f9bfbe19755f77dd658b1bdfe2c662d4fa978024f4089d9954fb4a731c13effec86f986409ccb226735288822b201debaf4c6cbf6fe05312090bbdd522de3cc227196828522c5a2fa8de9fccb31b31a866630197b6c5040227be379f3ed52a86ba0df776ee93f2aaa2b7821cab35fd1c&pcevaname=pc4.1&newfrom=zhuzhan_webmap&querytype=detailConInfo&da_src=shareurl"
          >
            <img
              className={styles.mapImage}
              src={require('@/assets/images/contact/map.jpg')}
            ></img>
          </a>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.infoWrap}>
          <div className={styles.comName}>
            {intl.formatMessage({ id: 'COM_NAME' })}
          </div>
          <div className={styles.comLine}></div>
          <div className={styles.contentText}>
            <p>{intl.formatMessage({ id: 'CONTACT_TEL' })}</p>
            <p>{intl.formatMessage({ id: 'CONTACT_TAX' })}</p>
            <p>{intl.formatMessage({ id: 'CONTACT_MAIL' })}</p>
            <p>{intl.formatMessage({ id: 'CONTACT_ADDR' })}</p>
          </div>
        </div>

        <div className={styles.formWrap}>
          <Form
            form={form}
            className="mailForm"
            onFinish={onFinish}
            size="large"
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  name=""
                  label=""
                  rules={[
                    {
                      required: true,
                      message: intl.formatMessage({ id: 'PLACEHOLDER' }),
                    },
                  ]}
                >
                  <Input
                    placeholder={intl.formatMessage({ id: 'FORM_NAME' })}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name=""
                  label=""
                  rules={[
                    {
                      required: true,
                      message: intl.formatMessage({ id: 'PLACEHOLDER' }),
                    },
                  ]}
                >
                  <Input placeholder={intl.formatMessage({ id: 'FORM_TEL' })} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name=""
                  label=""
                  rules={[
                    {
                      required: true,
                      message: intl.formatMessage({ id: 'PLACEHOLDER' }),
                    },
                  ]}
                >
                  <Input
                    placeholder={intl.formatMessage({ id: 'FORM_MAIL' })}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name=""
                  label=""
                  rules={[
                    {
                      required: true,
                      message: intl.formatMessage({ id: 'PLACEHOLDER' }),
                    },
                  ]}
                >
                  <Input
                    placeholder={intl.formatMessage({ id: 'FORM_ADDR' })}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name=""
                  label=""
                  rules={[
                    {
                      required: true,
                      message: intl.formatMessage({ id: 'PLACEHOLDER' }),
                    },
                  ]}
                >
                  <TextArea
                    style={{ resize: 'none' }}
                    autoSize={false}
                    rows={4}
                    placeholder={intl.formatMessage({ id: 'FORM_MEMO' })}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit">
                  {intl.formatMessage({ id: 'FORM_SUBMIT' })}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};
