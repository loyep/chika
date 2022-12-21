import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function Pages() {
  return <div>Admin</div>;
}

Pages.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
