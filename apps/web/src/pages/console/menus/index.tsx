import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function Menus() {
  return <div>Admin</div>;
}

Menus.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
