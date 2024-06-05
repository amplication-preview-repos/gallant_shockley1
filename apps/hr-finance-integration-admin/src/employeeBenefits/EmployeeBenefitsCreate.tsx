import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EmployeeBenefitsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BenefitType" source="benefitType" />
        <NumberInput label="Cost" source="cost" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="EmployeeName" source="employeeName" />
      </SimpleForm>
    </Create>
  );
};
