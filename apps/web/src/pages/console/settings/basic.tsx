import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function SettingsBasic() {
  return <div>Admin</div>;
}

SettingsBasic.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
