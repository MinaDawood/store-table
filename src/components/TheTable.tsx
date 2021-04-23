import { Row, Col, Table, Space, Switch } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';

import data from '../data.json';

export default function TheTable() {
  const columns = [
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'IMAGES',
      dataIndex: 'image_link',
      key: 'image_link',
      render: (link: string) => <img src={link} alt="product" />,
    },
    {
      title: 'SHORT DESCRIPTION',
      dataIndex: 'short_desc',
      key: 'short_desc',
    },
    {
      title: 'PUBLISHED',
      dataIndex: 'published',
      key: 'published',
      render: (published: boolean) => <Switch checked={published} />,
    },
    {
      title: 'ACTION',
      dataIndex: 'action',
      key: 'action',
      render: (link: string) => (
        <Space size="middle">
          <a href={link}>
            <FormOutlined style={{ fontSize: '1.5em' }} />
          </a>
          <a href={link}>
            <DeleteOutlined style={{ fontSize: '1.5em' }} />
          </a>
        </Space>
      ),
    },
  ];

  return (
    <Row justify={'center'}>
      <Col span={20}>
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          rowClassName="table-row"
          expandable={{
            expandedRowRender: record => (
              <p style={{ margin: 0 }}>{record.full_desc}</p>
            ),
            rowExpandable: record => record.expandable === true,
          }}
        />
        ;
      </Col>
    </Row>
  );
}
