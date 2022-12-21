import { ReactElement } from 'react';
import Stats from '../../components/stats';
import ConsoleLayout from '../../layouts/console';

export default function Dashboard() {
  return (
    <div>
      <Stats />
      Admin
    </div>
  );
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
