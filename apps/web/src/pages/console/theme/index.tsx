import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function Themes() {
  return <div>Admin</div>;
}

Themes.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
