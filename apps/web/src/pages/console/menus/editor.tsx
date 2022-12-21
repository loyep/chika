import { ReactElement } from 'react';
import ConsoleLayout from '../../../layouts/console';

export default function MenusEditor() {
  return <div>MenusEditor</div>;
}

MenusEditor.getLayout = function getLayout(page: ReactElement) {
  return <ConsoleLayout>{page}</ConsoleLayout>;
};
