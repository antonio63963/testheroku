import { Card } from 'antd';

export default function ActonCard() {

  return (
    <Card title="Actions">
    <Card type="inner" title="Action 1" extra={<a href="#">More</a>}>
      Super action #1
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Action 2"
      extra={<a href="#">More</a>}
    >
      Super action #2
    </Card>
  </Card>
  )
}