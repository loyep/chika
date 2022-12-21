import { ReactElement } from 'react';
import ConsoleLayout from '../../layouts/console';

export default function Umami() {
  return <div>Admin</div>;
}

Umami.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
