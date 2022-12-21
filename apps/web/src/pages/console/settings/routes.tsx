import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function SettingsRoutes() {
  return <div>Admin</div>;
}

SettingsRoutes.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
