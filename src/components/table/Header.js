import React from 'react';

export const Header = ({headerData}) => {
  return (
    <thead>
      <tr>
        {headerData.headers.map((header, i) => <th key={i}>{header}</th>)}
        {headerData.icons
          && <th >
              {headerData.icons.map(icon =>
                <i key={icon.action} data-action={icon.action} className={icon.iconClass}></i> )}
              </th>}
      </tr>

    </thead>
  );
};
