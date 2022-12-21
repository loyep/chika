import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function Attachments() {
  return <div>Admin</div>;
}

Attachments.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
