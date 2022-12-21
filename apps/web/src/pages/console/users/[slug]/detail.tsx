import { ReactElement } from 'react';
import ConsoleLayout from '../../../../layouts/console';

export default function UserDetail() {
  return <div>Admin</div>;
}

UserDetail.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
