import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function SettingsSeo() {
  return <div>Admin</div>;
}

SettingsSeo.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
