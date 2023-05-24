import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Switch } from '../../../components';
import { defaultPermissions, numberFromPermissions, perms, symRepFromCode, targets } from './util';

export interface ChmodTableProps {
  onChange: (code: string, sym: string) => void;
}

function ChmodTable({ onChange }: ChmodTableProps) {
  const { t } = useTranslation();
  const [permissions, setPermissions] = useState(defaultPermissions);

  const handlePermissionChange = useCallback(
    (v: boolean, target: number, perm: number) => {
      if (perm >= permissions.length || target >= permissions[perm].length) return;

      const cpy = [...permissions];
      cpy[perm][target] = v;

      setPermissions([...cpy]);
    },
    [permissions],
  );

  const dataClass = useMemo(
    () =>
      `
        border-2 border-background p-2
        text-center text-wrap max-lg:p-1
        overflow-hidden break-words
        whitespace-normal
      `,
    [],
  );

  const data = useMemo(
    () => (
      <>
        {perms.map((p, pIndex) => (
          <tr>
            <td className={`${dataClass} font-bold`}>{t(`page.tools.chmod.${p}`)}</td>
            {targets.map((t, tIndex) => (
              <td className={dataClass}>
                <Switch
                  on={permissions[tIndex][pIndex]}
                  onChange={(v) => handlePermissionChange(v, pIndex, tIndex)}
                />
              </td>
            ))}
          </tr>
        ))}
      </>
    ),
    [dataClass, handlePermissionChange, permissions, t],
  );

  useEffect(() => {
    const owner: boolean[] = permissions[0];
    const group: boolean[] = permissions[1];
    const pub: boolean[] = permissions[2];

    if (owner.length < 3 || group.length < 3 || pub.length < 3) onChange('000', '---------');

    const code =
      numberFromPermissions(owner[0], owner[1], owner[2]) +
      numberFromPermissions(group[0], group[1], group[2]) +
      numberFromPermissions(pub[0], pub[1], pub[2]);

    const sym =
      symRepFromCode(code.charAt(0)) +
      symRepFromCode(code.charAt(1)) +
      symRepFromCode(code.charAt(2));

    onChange(code, sym);
  }, [onChange, permissions]);

  return (
    <table className='text-xl max-lg:text-md cursor-default table-fixed'>
      <tr>
        <th />
        <th className={dataClass}>{t('page.tools.chmod.owner')}</th>
        <th className={dataClass}>{t('page.tools.chmod.group')}</th>
        <th className={dataClass}>{t('page.tools.chmod.public')}</th>
      </tr>
      {data}
    </table>
  );
}

export default ChmodTable;
