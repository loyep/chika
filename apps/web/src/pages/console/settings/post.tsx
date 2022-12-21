import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function SettingsPost() {
  return <div>Admin</div>;
}

SettingsPost.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
