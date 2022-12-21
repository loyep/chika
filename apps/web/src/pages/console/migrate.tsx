import { ReactElement } from 'react';
import ConsoleLayout from '../../layouts/console';

export default function Migrate() {
  return <div>Admin</div>;
}

Migrate.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
