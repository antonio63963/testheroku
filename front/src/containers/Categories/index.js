import { useDispatch, useSelector } from "react-redux";

import { Card, Col, Row } from 'antd';

export default function CategoryCard() {
  const categories = useSelector(cat => {console.log(cat);});
  const dispatch = useDispatch();
  return (
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
  )
}