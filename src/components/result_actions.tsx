import React from 'react';
import { EuiButtonEmpty } from '@elastic/eui';
import { EuiIconProps } from '@elastic/eui';

interface ActionProps { 
  iconType?: EuiIconProps;
  label: string;
  link?: string;
  color?: string;
}

interface Props {
  actions: ActionProps[];
}

export const ResultActions: React.FC<Props> = ({
  actions
}) => {
  return (
    <></>
  )
}