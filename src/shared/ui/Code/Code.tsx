import React, { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';

import styles from './Code.module.scss';

interface CodeProps {
  className?: string;

  text: string;
}

const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={styles.copyBtn}
        theme={ButtonThemes.CLEAR}
      >
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});

export { Code };
