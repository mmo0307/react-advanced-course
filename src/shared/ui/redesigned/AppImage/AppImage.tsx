import React, {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState
} from 'react';

import { View } from '../View';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;

  fallback?: ReactElement;

  errorFallback?: ReactElement;
}

const AppImage = memo(
  ({
    className,
    src,
    alt = 'image',
    errorFallback,
    fallback,
    ...otherProps
  }: AppImageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [hasError, setHasError] = useState<boolean>(false);

    const isFallback = Boolean(isLoading && fallback);
    const isErrorFallback = Boolean(hasError && errorFallback);

    useLayoutEffect(() => {
      const img = new Image();

      img.src = src ?? '';

      img.onload = () => {
        setIsLoading(false);
      };

      img.onerror = () => {
        setIsLoading(false);

        setHasError(true);
      };
    }, [src]);

    return (
      <>
        <View.Condition if={isFallback}>{fallback}</View.Condition>

        <View.Condition if={isErrorFallback}>{errorFallback}</View.Condition>

        <View.Condition if={Boolean(!isFallback && !isErrorFallback)}>
          <img
            className={className}
            src={src}
            alt={alt}
            {...otherProps}
          />
        </View.Condition>
      </>
    );
  }
);

export { AppImage };
