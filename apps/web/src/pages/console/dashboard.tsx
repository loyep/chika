import { ReactElement } from 'react';
import ConsoleLayout from '../../layouts/console';

export default function Dashboard() {
  return <div>Admin</div>;
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
