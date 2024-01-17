import React, { FC, ReactNode } from 'react';

interface ConditionProps {
  if: boolean;

  children: ReactNode;
}

const Condition: FC<ConditionProps> = ({ if: condition, children }) => {
  if (condition) {
    return <>{children}</>;
  }

  return null;
};

const View = {
  Condition
};

export { View };
