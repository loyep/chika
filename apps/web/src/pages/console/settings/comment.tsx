import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function SettingsComment() {
  return <div>Admin</div>;
}

SettingsComment.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
