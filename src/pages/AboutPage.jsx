import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <h3>This is an about page</h3>
      <p>Version 1.0.0 </p>
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
