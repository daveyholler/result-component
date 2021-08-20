import React from 'react';
import { ResultField, ResultFieldProps } from './result_field';

interface Props {
  fields: ResultFieldProps[];
}

export const ResultFields: React.FC<Props> = ({
  fields
}) => {
  return (
    <>
      {fields.map((field, index) => (
        <ResultField
          iconType={field.iconType}
          fieldName={field.fieldName}
          fieldValue={field.fieldValue}
        />
      ))}
    </>
  )
}