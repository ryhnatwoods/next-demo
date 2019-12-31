import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout.js';
import { Button, Select } from 'antd';
const { Option } = Select;
const About = function() {
  return (
    <Layout>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <p>This is the about page</p>

      <div>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
    </Layout>
  )
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

About.getInitialProps = async() => {
  const res1 = await fetch('http://localhost:3000/api/getRecommendedArticals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"category":"ai","order":"heat","offset":0,"limit":30})
  })
  const article = await res1.json()
  const res2 = await fetch('http://localhost:3000/api/getHighscoreGithub', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"category":"trending","period":"day","lang":"css","offset":0,"limit":30})
  })
  const github = await res2.json()
  return { articles: article.data, githubs: github.data }
}
export default About;