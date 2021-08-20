import React from 'react';
import {
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiTextColor,
  IconType
} from '@elastic/eui';
import { EuiIconProps } from '@elastic/eui';

export interface ActionProps {
  iconType?: IconType | string;
  label: string;
  link?: string;
  color?: string;
}

interface SingleAction {
  action: ActionProps;
}

interface Props {
  actions: ActionProps[];
}

const LinkAction: React.FC<SingleAction> = ({ action }) => (
  <EuiButtonEmpty>{action.label}</EuiButtonEmpty>
)

const TextAction: React.FC<SingleAction> = ({ action }) => (
  <EuiFlexGroup gutterSize="xs" alignItems="center">
    {action.iconType && (
      <EuiFlexItem grow={false}>
        <EuiIcon type={action.iconType} color={action.color || 'default'} />
      </EuiFlexItem>
    )}
    <EuiFlexItem grow={false}>
      <strong>
        <EuiTextColor color={action.color || 'default' }>{action.label}</EuiTextColor>
      </strong>
    </EuiFlexItem>
  </EuiFlexGroup>
)

export const ResultActions: React.FC<Props> = ({
  actions
}) => {
  return (
    <EuiFlexGroup alignItems="center" gutterSize="m">
      {actions.map((action: ActionProps) => (
        <EuiFlexItem grow={false}>
          {action.link ? (
            <LinkAction action={action} />
          ) : (
            <TextAction action={action} />
          )}
        </EuiFlexItem>
      ))}
    </EuiFlexGroup>
  )
}