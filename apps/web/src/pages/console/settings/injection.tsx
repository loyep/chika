import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function SettingsInjection() {
  return <div>Admin</div>;
}

SettingsInjection.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
