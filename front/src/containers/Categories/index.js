import { useDispatch, useSelector } from "react-redux";

import { Card, Col, Row } from 'antd';

export default function CategoryCard() {
  const categories = useSelector(store => store.categories);
  const dispatch = useDispatch();
  return (
    <div className="site-card-wrapper">
    <Row gutter={16}>
      { categories.map(cat => (
      <Col span={8} style={{marginBottom: '20px'}}>
        <Card title={cat} bordered={false}>
          Card content
        </Card>
      </Col>

      )) }
      {/* <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col> */}
    </Row>
  </div>
  )
}