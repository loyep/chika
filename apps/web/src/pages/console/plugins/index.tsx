import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function Plugins() {
  return <div>Admin</div>;
}

Plugins.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
