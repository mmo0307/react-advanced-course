import { DirectionType } from '../types';

import popupCls from './popup.module.scss';

export const mapDirectionClasses: Record<DirectionType, string> = {
  'top left': popupCls.directionTopLeft,
  'top right': popupCls.directionTopRight,
  'bottom left': popupCls.directionBottomLeft,
  'bottom right': popupCls.directionBottomRight
};
