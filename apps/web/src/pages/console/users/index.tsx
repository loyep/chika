import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function Users() {
  return <div>Admin</div>;
}

Users.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
